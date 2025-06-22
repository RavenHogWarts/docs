# 键盘

## 键盘风格
Ace Editor 支持多种键盘处理器，每种都模拟了不同编辑器的快捷键风格。

目前支持以下键盘模式：
- `default`：默认的键盘模式，与传统的文本编辑器模式相似。
- `vscode`：VS Code 编辑器的键盘模式，模仿了 VS Code 的快捷键风格。
- `sublime`：Sublime Text 编辑器的键盘模式，模仿了 Sublime Text 的快捷键风格。
- `emacs`：Emacs 编辑器的键盘模式，模仿了 Emacs 的快捷键风格。
- `vim`：Vim 编辑器的键盘模式，模仿了 Vim 的快捷键风格。

## 键盘快捷键

### default
默认模式是 Ace Editor 的原生快捷键，以下是主要的快捷键列表[^1]：

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+D | Command+D | 删除当前行 |
| Alt+Shift+Down | Command+Option+Down | 向下复制行 |
| Alt+Shift+Up | Command+Option+Up | 向上复制行 |
| Alt+Down | Option+Down | 向下移动行 |
| Alt+Up | Option+Up | 向上移动行 |
| Alt+Delete | Ctrl+K | 删除到行尾 |
| Alt+Backspace | Command+Backspace | 删除到行首 |
| Ctrl+Backspace | Option+Backspace | 删除左侧单词 |
| Ctrl+Delete | Option+Delete | 删除右侧单词 |
| Ctrl+O | Ctrl+O | 分割行 |

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+A | Command+A | 全选 |
| Ctrl+Shift+D | Command+Shift+D | 复制选择内容 |
| Ctrl+Shift+L | Command+Shift+L | 扩展到行 |
| Shift+Home | Shift+Home | 选择到行首 |
| Shift+End | Shift+End | 选择到行尾 |

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+Alt+Up | Ctrl+Option+Up | 在上方添加光标 |
| Ctrl+Alt+Down | Ctrl+Option+Down | 在下方添加光标 |
| Ctrl+Alt+Right | Ctrl+Option+Right | 添加下一个匹配项到多选 |
| Ctrl+Alt+Left | Ctrl+Option+Left | 添加上一个匹配项到多选 |

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+F | Command+F | 查找 |
| Ctrl+H | Command+Option+F | 替换 |
| Ctrl+K | Command+G | 查找下一个 |
| Ctrl+Shift+K | Command+Shift+G | 查找上一个 |

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+Z | Command+Z | 撤销 |
| Ctrl+Y | Command+Y | 重做 |
| Ctrl+/ | Command+/ | 切换注释 |
| Ctrl+L | Command+L | 跳转到行 |
| F1 | F1 | 打开命令面板 |

### vscode
VS Code 模式继承了大部分默认模式的快捷键，以下是一些特有的快捷键：

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+Shift+K | Command+Shift+K | 删除行 |
| Ctrl+Enter | Command+Enter | 在下方插入行 |
| Ctrl+Shift+Enter | Command+Shift+Enter | 在上方插入行 |
| Ctrl+] | Command+] | 增加缩进 |
| Ctrl+[ | Command+[ | 减少缩进 |
| Alt+Click | Option+Click | 插入光标 |
| Ctrl+Space | Command+Space | 触发建议 |

### sublime
Sublime Text 模式的主要快捷键包括：

| Windows/Linux | Mac | 功能 |
|--------------|-----|------|
| Ctrl+K, Ctrl+K | Command+K, Command+K | 删除到行尾 |
| Ctrl+K, Ctrl+Backspace | Command+K, Command+Backspace | 删除到行首 |
| Ctrl+Shift+Up | Command+Shift+Up | 向上交换行 |
| Ctrl+Shift+Down | Command+Shift+Down | 向下交换行 |
| Ctrl+M | Command+M | 跳转到匹配的括号 |
| Ctrl+D | Command+D | 选择下一个匹配项 |

### emacs
Emacs 模式使用了传统 Emacs 风格的快捷键：

| 快捷键 | 功能 |
|--------|------|
| Ctrl+F | 向前移动一个字符 |
| Ctrl+B | 向后移动一个字符 |
| Ctrl+P | 向上移动一行 |
| Ctrl+N | 向下移动一行 |
| Ctrl+A | 移动到行首 |
| Ctrl+E | 移动到行尾 |
| Alt+F | 向前移动一个单词 |
| Alt+B | 向后移动一个单词 |

### vim
Vim 模式模拟了 Vim 编辑器的模态编辑特性：

| 模式 | 快捷键 | 功能 |
|------|--------|------|
| 普通模式 | h,j,k,l | 光标移动 |
| 普通模式 | i | 进入插入模式 |
| 普通模式 | v | 进入可视模式 |
| 普通模式 | dd | 删除当前行 |
| 普通模式 | yy | 复制当前行 |
| 普通模式 | p | 粘贴 |
| 普通模式 | u | 撤销 |
| 命令模式 | :w | 保存 |
| 命令模式 | :q | 退出 |

[^1]: [ace 默认快捷键](https://github.com/ajaxorg/ace/wiki/default-keyboard-shortcuts)