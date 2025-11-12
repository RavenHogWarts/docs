---
title: 模板
order: 5
draft: false
---

# 模板
[Web Clipper](./index.md) 允许您创建模板，自动从网页中捕获并整理元数据。示例模板可在 [clipper-templates 代码库](https://github.com/kepano/clipper-templates)中获取。

## 创建或编辑模板
要创建模板，请进入 Web Clipper `设置`，在侧边栏中点击 `新建模板` 按钮。您也可以通过右上角 `更多操作` 菜单中的选项复制现有模板。

要编辑模板，请从侧边栏选择相应模板。所有修改将自动保存。

模板利用[变量](./variables.md)和[过滤器](./filters.md)，让您可以自定义内容的保存方式。

## 导入和导出模板
导入模板的方法：
1. 打开扩展程序并点击设置齿轮图标。
2. 转到列表中的任意模板。
3. 点击右上角的 `导入` 按钮，或将 `.json` 模板文件拖放到模板区域的任意位置。

如需导出模板，请点击右上角的 `导出` 按钮。系统将自动下载模板 `.json` 文件。您也可以通过 `更多` 菜单将模板数据复制到剪贴板。

## 模板设置

### 行为
定义 Web Clipper 内容将如何添加到 Obsidian：
- 创建新笔记
- 添加到现有笔记的顶部或底部
- 添加到每日笔记，在顶部或底部（需要[日记插件](https://help.obsidian.md/plugins/daily-notes)处于活动状态）

### 自动触发模板
模板触发器允许您根据当前页面 URL 或 [schema.org](https://schema.org/) 数据自动选择模板。您可以为每个模板定义多条规则，用换行符分隔。

模板列表中的首个匹配项将决定使用哪个模板。您可以在网页剪辑器设置中上下拖动模板来更改模板匹配顺序。

#### 简单URL匹配
简单匹配会在当前页面URL以给定模式开头时触发模板。例如：
- `https://obsidian.md` 将匹配任何以此文本开头的网址。

### 正则表达式匹配
您可以使用正则表达式，基于更复杂的URL模式来触发模板。请将您的正则表达式模式包含在正斜杠（`/`）内。请注意，在正则表达式模式中，特殊字符（如句点`.`和正斜杠`/`）需使用反斜杠（`\`）进行转义。例如：
- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` 将匹配任何 IMDB 参考页面。

### Schema.org 匹配
您可以根据页面上的 [schema.org](https://schema.org/) 数据触发相应模板。使用时只需以 `schema:` 为前缀，后接需要匹配的schema键名，还可选择性地指定预期值。例如：
- `schema:@Recipe` 将匹配模式类型为 `"Recipe"` 的页面。
- `schema:@Recipe.name` 将匹配存在 `@Recipe.name` 模式的页面。
- `schema:@Recipe.name=Cookie` 将匹配 `@Recipe.name` 模式为 `"Cookie"` 的页面。

Schema.org值也可用于[预填充模板](./variables.md#schemaorg-变量)中的数据。

## 解释器上下文
启用[解释器](./interpreter.md)后，您可以使用[提示词变量](./variables.md#提示词变量)通过自然语言提取页面内容。每个模板都可以定义解释器可访问的上下文。