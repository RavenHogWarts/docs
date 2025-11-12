---
title: 网页剪藏
order: 2
draft: false
---

# 网页剪藏
安装 [Web Clipper](../) 浏览器扩展后，您可以通过多种方式访问它，具体取决于您的浏览器：
1. 浏览器工具栏中的 `Obsidian` 图标。
2. 使用快捷键，通过键盘激活扩展程序。
3. 通过右键点击正在访问的网页，使用上下文菜单中的 `Obsidian Web Clipper`。

要将页面保存到 Obsidian，请点击 `添加到 Obsidian` 按钮。

## 捕获网页
当你打开扩展程序时，Web Clipper 会根据模板中的设置从当前网页提取数据。你可以创建自己的[模板](../guide/templates)，并使用[变量](../advanced-usage/variables)和[过滤器](../advanced-usage/filters)自定义输出内容。

默认情况下，Web Clipper 会智能提取文章主体内容，自动排除页面上的其他元素。但您可以通过以下方式自定义此行为：
- 若存在自定义模板，系统将优先采用您的模板设置。
- 若存在选定区域，系统将采用选定内容。您可通过快捷键 `Ctrl/Cmd+A` 全选功能选取整个页面。
- 若存在[高亮标注](../guide/highlight)，系统将采用高亮部分内容。

## 下载图片
使用 Web Clipper 时，图片不会自动下载。图片仍会链接到其基于网络的URL。这可以节省您的存储库空间，但意味着图片在离线时无法访问，或者如果URL失效也将无法查看。

您可以使用 `下载当前文件的附件` 命令，在Obsidian中为任何文件下载图片。此命令也可以在 Obsidian 中添加快捷键。

## 快捷键
Web Clipper 包含可加速工作流程的键盘快捷键。

如需修改按键映射，请前往 `设置` → `常规`，并根据浏览器类型按指引操作。

::: tip
除了 Safari 之外，所有浏览器都可以更改映射，Safari 不支持编辑热键。

默认的快捷键可能会与浏览器其他功能的快捷键冲突。
:::

| 动作 | MacOS | Windows/Linux |
| - | - | - |
| 开启 Web Clipper | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| 快速剪藏 | `Opt+Shift+O` | `Alt+Shift+O` |
| 切换高亮模式 | `Opt+Shift+H` | `Alt+Shift+H` |
| 切换阅读模式 | `Opt+Shift+R` | `Alt+Shift+R` |

## 界面功能
Web Clipper 界面分为四个部分：
1. `标题`栏可在此处切换模板、开启[高亮显示](../guide/highlight)并访问设置。
2. `属性`面板显示从页面提取的元数据，这些数据将作为属性保存在 Obsidian 中。
3. `笔记内容`将保存至 Obsidian。
4. `页脚`栏可选择知识库与文件夹，并添加至 Obsidian。

### 标题栏功能
- `模板`下拉菜单，用于在 Web Clipper 设置中保存的[模板](../guide/templates)之间切换。
- `更多(...)`按钮，用于显示可在模板中使用的页面变量。
- `高亮`按钮，用于开启高亮功能。
- `齿轮`按钮，用于打开Web Clipper设置。

### 页脚栏功能
- `添加到 Obsidian` 按钮，用于将数据保存至 Obsidian。
- `保管库`下拉菜单，用于切换在 Web Clipper 设置中添加的已保存保管库。
- `文件夹`字段，用于定义保存至哪个文件夹。
- `解释器`，用于在页面上运行[自然语言提示](../advanced-usage/interpreter)。