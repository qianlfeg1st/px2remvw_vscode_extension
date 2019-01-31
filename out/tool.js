"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const { baseWidth, fixedDigits } = vscode.workspace.getConfiguration('config');
function pxToVwRem(text, vscode) {
    const rePx = /([-]?[\d.]+)p(x)?/;
    const match = text.match(rePx);
    if (!match)
        return;
    const pxValue = +(match[1]);
    const vwValue = +(match[1] / (baseWidth / 100)).toFixed(fixedDigits);
    const remValue = +(vwValue / 10).toFixed(fixedDigits);
    return {
        px: `${pxValue}px`,
        rem: `${remValue}rem`,
        vw: `${vwValue}vw`,
        pxValue,
        remValue,
        vwValue,
    };
}
exports.pxToVwRem = pxToVwRem;
function vwToPx(text) {
    const vw = +text.split('vw')[0];
    return `${Math.round(baseWidth / 100 * vw)} px`;
}
exports.vwToPx = vwToPx;
function remToPx(text) {
    const rem = +text.split('rem')[0];
    return `${Math.round(baseWidth / 10 * rem)} px`;
}
exports.remToPx = remToPx;
//# sourceMappingURL=tool.js.map