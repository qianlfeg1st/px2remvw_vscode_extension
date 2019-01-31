"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const tool_1 = require("./tool");
class Provider {
    constructor() { }
    provideCompletionItems(document, position) {
        const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
        const res = tool_1.pxToVwRem(lineText, vscode);
        if (!res)
            return;
        const item = new vscode.CompletionItem(`${res.pxValue}px => ${res.rem}`, vscode.CompletionItemKind.Snippet);
        const item2 = new vscode.CompletionItem(`${res.pxValue}px => ${res.vw}`, vscode.CompletionItemKind.Snippet);
        item.insertText = res.rem;
        item2.insertText = res.vw;
        return [item, item2];
    }
}
exports.default = Provider;
//# sourceMappingURL=provider.js.map