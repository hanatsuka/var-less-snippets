# var-less-snippets

根据 less 变量文件生成 vscode snippet 文件，帮助统一团队使用 less 变量

## 使用方法

1.拷贝 less 变量文件，命名需要为 var.less

2.命令行执行`node index.js`

3.拷贝生成的`less.code-snippets`到您的项目中的`.vscode`文件夹目录下（_若没有需要新建该目录_），然后在 less 文件中键入`@`符号即可看到生成的变量快捷选项以及注释
