import * as vscode from 'vscode'
const { baseWidth, fixedDigits } = vscode.workspace.getConfiguration('config')

function pxToVwRem (text: String, vscode: any) {

  const rePx: RegExp = /([-]?[\d.]+)p(x)?/
  const match : any = text.match(rePx)

  if (!match) return

  const pxValue = +(match[1])
  const vwValue = +(match[1] / (baseWidth / 100)).toFixed(fixedDigits)
  const remValue = +(vwValue / 10).toFixed(fixedDigits)

  return {
    px: `${pxValue}px`,
    rem: `${remValue}rem`,
    vw: `${vwValue}vw`,
    pxValue,
    remValue,
    vwValue,
  }
}

function vwToPx (text: String) {

  const vw: number = +text.split('vw')[0]

  return `${Math.round(baseWidth / 100 * vw)} px`
}

function remToPx (text: String) {

  const rem: number = +text.split('rem')[0]

  return `${Math.round(baseWidth / 10 * rem)} px`
}

export {
  pxToVwRem,
  vwToPx,
  remToPx,
}