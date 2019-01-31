"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tool_1 = require("./tool");
const vscode = require("vscode");
class Decorator {
    constructor({ context, vwStyle, remStyle, }) {
        this.VW_REGEX = /(\d+)?(0)?(.)?\d+vw/g;
        this.REM_REGEX = /(\d+)?(0)?(.)?\d+rem/g;
        this.vwStyle = vwStyle;
        this.remStyle = remStyle;
        this.init(context);
    }
    updateDecorations(activeEditor) {
        if (!activeEditor)
            return;
        const text = activeEditor.document.getText();
        const remOptions = [];
        const vwOptions = [];
        let match;
        while (match = this.VW_REGEX.exec(text)) {
            const startPos = activeEditor.document.positionAt(match.index);
            const endPos = activeEditor.document.positionAt(match.index + match[0].length);
            const decoration = {
                range: new vscode.Range(startPos, endPos),
                hoverMessage: tool_1.vwToPx(match[0]),
            };
            vwOptions.push(decoration);
        }
        while (match = this.REM_REGEX.exec(text)) {
            const startPos = activeEditor.document.positionAt(match.index);
            const endPos = activeEditor.document.positionAt(match.index + match[0].length);
            const decoration = {
                range: new vscode.Range(startPos, endPos),
                hoverMessage: tool_1.remToPx(match[0]),
            };
            remOptions.push(decoration);
        }
        activeEditor.setDecorations(this.vwStyle, vwOptions);
        activeEditor.setDecorations(this.remStyle, remOptions);
    }
    init(context) {
        let activeEditor = vscode.window.activeTextEditor;
        if (activeEditor)
            this.updateDecorations(activeEditor);
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            activeEditor = editor;
            if (editor) {
                this.updateDecorations(activeEditor);
            }
        }, null, context.subscriptions);
        vscode.workspace.onDidChangeTextDocument((event) => {
            if (activeEditor && event.document === activeEditor.document) {
                this.updateDecorations(activeEditor);
            }
        }, null, context.subscriptions);
    }
}
exports.default = Decorator;
//# sourceMappingURL=decorator.js.map