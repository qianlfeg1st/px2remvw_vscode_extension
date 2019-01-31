"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const provider_1 = require("./provider");
const decorator_1 = require("./decorator");
const LANS = ['html', 'vue', 'css', 'less', 'scss', 'sass', 'stylus'];
function activate(context) {
    // console.log('插件已挂载')
    const { cursor, vwColor, remColor } = vscode.workspace.getConfiguration('config');
    const vwStyle = vscode.window.createTextEditorDecorationType({
        cursor,
        color: vwColor
    });
    const remStyle = vscode.window.createTextEditorDecorationType({
        cursor,
        color: remColor
    });
    for (let lan of LANS) {
        const providerDisposable = vscode.languages.registerCompletionItemProvider(lan, new provider_1.default());
        context.subscriptions.push(providerDisposable);
    }
    new decorator_1.default({
        context,
        vwStyle,
        remStyle,
    });
}
exports.activate = activate;
function deactivate() {
    // console.log('插件已卸载')
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map