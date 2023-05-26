![https://img.shields.io/badge/vscode-1.30.0-brightgreen.svg](https://img.shields.io/badge/vscode-1.30.0-brightgreen.svg) ![https://img.shields.io/badge/typescript-passing-blue.svg](https://img.shields.io/badge/typescript-passing-blue.svg)

## px2remvw

把px转成rem 或vw，并且能显示rem、vw对应的px值

![演示图](screenshots/1.gif)

![演示图](screenshots/2.gif)

## 安装

1. 通过命令行安装

    ```shell
    ext install px2remvw
    ```

2. 直接在 vscode 编辑上插件上查找安装 `px2remvw`

3. [下载 vsix](https://marketplace.visualstudio.com/items?itemName=qianlifeng.px2remvw)

    > 打开vscode，拓展，点击三个小点，“从VSIX安装”，即可。成功后重启软件。


## 配置

默认设计稿宽度为：750

- `config.fixedDigits` 保留几位小数
- `config.baseWidth`   设计稿宽度, 默认750px
- `config.cursor`      指针样式
- `config.vwColor`     vw的字体颜色
- `config.remColor`    rem的字体颜色
- `config.remUnit`     1rem转px大小, 默认16px
