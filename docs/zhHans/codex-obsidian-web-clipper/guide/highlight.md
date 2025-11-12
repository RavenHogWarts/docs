---
title: 高亮标注
order: 3
draft: false
---

# 高亮标注
[Web Clipper](/codex-obsidian-web-clipper/) 允许您在网页上高亮显示文本，并选择想要保存到 Obsidian 中的元素。您的高亮内容会被保存，以便在返回页面时重新查看。

当您打开扩展程序时，可以[捕获](/codex-obsidian-web-clipper/guide/capture)高亮内容并保存到 Obsidian。

## 启用高亮工具
根据您使用的浏览器，可以通过以下几种方式启用高亮功能：
- 扩展面板中的高亮标记图标。
- 快捷键，可通过键盘激活扩展。
- 右键菜单，通过右键点击您正在访问的网页。

开启高亮功能后，您可以选择想要高亮的文本、图片和元素。

## 高亮标记设置
您可以通过进入 Web Clipper `设置` 来更改高亮显示行为。在此处，您还可以将高亮内容导出至 `.json` 文件。

通过 <code v-pre>{{content}}</code> [变量](/codex-obsidian-web-clipper/advanced-usage/variables.md#预设变量)将高亮内容插入到已剪辑笔记中有三个选项：
- 高亮页面内容：使用[语法](https://help.obsidian.md/obsidian-flavored-markdown)直接将高亮内容添加到文本中。
- 替换页面内容：返回高亮内容列表，不包含任何页面内容。
- 不执行任何操作：返回不含高亮内容的原始内容。

您可以直接使用 <code v-pre>{{highlights}}</code> 变量将高亮添加到模板中，例如：
```js
{{highlights|map: item => item.text|join:"\n\n"}}
```