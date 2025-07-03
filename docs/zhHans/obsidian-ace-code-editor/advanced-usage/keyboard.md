---
title: 键盘快捷键
order: 1
draft: false
---

# 键盘快捷键

## 键盘模式

Ace Editor 支持多种键盘处理器，每种都模拟了不同编辑器的快捷键风格。

### 支持的键盘模式

- **Default**：默认的键盘模式，与传统的文本编辑器模式相似
- **VS Code**：VS Code 编辑器的键盘模式，模仿了 VS Code 的快捷键风格
- **Sublime**：Sublime Text 编辑器的键盘模式，模仿了 Sublime Text 的快捷键风格
- **Emacs**：Emacs 编辑器的键盘模式，模仿了 Emacs 的快捷键风格
- **Vim**：Vim 编辑器的键盘模式，模仿了 Vim 的快捷键风格

### 切换键盘模式

1. 打开插件设置
2. 找到 "键盘模式" 选项
3. 选择你偏好的键盘模式
4. 重新打开编辑器以应用更改

## 通用快捷键

### 文件操作

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Ctrl/Cmd + N` | 新建文件 | 创建新的代码文件 |
| `Ctrl/Cmd + O` | 打开文件 | 打开现有文件 |
| `Ctrl/Cmd + S` | 保存文件 | 保存当前文件 |
| `Ctrl/Cmd + Shift + S` | 另存为 | 将文件保存到新位置 |
| `Ctrl/Cmd + W` | 关闭标签 | 关闭当前编辑器标签 |

### 编辑操作

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Ctrl/Cmd + Z` | 撤销 | 撤销上一步操作 |
| `Ctrl/Cmd + Y` | 重做 | 重做已撤销的操作 |
| `Ctrl/Cmd + X` | 剪切 | 剪切选中文本 |
| `Ctrl/Cmd + C` | 复制 | 复制选中文本 |
| `Ctrl/Cmd + V` | 粘贴 | 粘贴剪贴板内容 |
| `Ctrl/Cmd + A` | 全选 | 选择所有文本 |

### 查找和替换

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Ctrl/Cmd + F` | 查找 | 打开查找对话框 |
| `Ctrl/Cmd + H` | 替换 | 打开查找替换对话框 |
| `F3` | 查找下一个 | 查找下一个匹配项 |
| `Shift + F3` | 查找上一个 | 查找上一个匹配项 |
| `Ctrl/Cmd + G` | 跳转到行 | 跳转到指定行号 |

### 代码编辑

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Tab` | 缩进 | 增加选中行的缩进 |
| `Shift + Tab` | 取消缩进 | 减少选中行的缩进 |
| `Ctrl/Cmd + /` | 切换注释 | 注释/取消注释当前行 |
| `Ctrl/Cmd + Shift + /` | 块注释 | 添加/移除块注释 |
| `Ctrl/Cmd + D` | 选择单词 | 选择当前单词 |
| `Ctrl/Cmd + L` | 选择行 | 选择当前行 |

### 代码导航

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Ctrl/Cmd + ←/→` | 按单词移动 | 按单词移动光标 |
| `Home/End` | 行首/行尾 | 移动到行首或行尾 |
| `Ctrl/Cmd + Home/End` | 文档首/尾 | 移动到文档开头或结尾 |
| `Page Up/Down` | 翻页 | 向上或向下翻页 |
| `Ctrl/Cmd + ↑/↓` | 滚动 | 滚动视图而不移动光标 |

## 特定模式快捷键

### Vim 模式

#### 普通模式

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `i` | 插入模式 | 在光标前插入 |
| `a` | 追加模式 | 在光标后插入 |
| `o` | 新行插入 | 在下方新建行并插入 |
| `O` | 上方新行 | 在上方新建行并插入 |
| `dd` | 删除行 | 删除当前行 |
| `yy` | 复制行 | 复制当前行 |
| `p` | 粘贴 | 在光标后粘贴 |
| `u` | 撤销 | 撤销操作 |
| `Ctrl + r` | 重做 | 重做操作 |

#### 可视模式

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `v` | 字符选择 | 进入字符可视模式 |
| `V` | 行选择 | 进入行可视模式 |
| `Ctrl + v` | 块选择 | 进入块可视模式 |

### Emacs 模式

| 快捷键 | 功能 | 描述 |
|--------|------|------|
| `Ctrl + f` | 前进字符 | 向前移动一个字符 |
| `Ctrl + b` | 后退字符 | 向后移动一个字符 |
| `Ctrl + n` | 下一行 | 移动到下一行 |
| `Ctrl + p` | 上一行 | 移动到上一行 |
| `Ctrl + a` | 行首 | 移动到行首 |
| `Ctrl + e` | 行尾 | 移动到行尾 |
| `Ctrl + k` | 删除到行尾 | 删除从光标到行尾的内容 |
| `Ctrl + d` | 删除字符 | 删除光标处的字符 |

## 自定义快捷键

### 配置自定义快捷键

1. 打开 Obsidian 设置
2. 进入 "快捷键" 页面
3. 搜索 "Ace Code Editor"
4. 为相关命令设置自定义快捷键

### 常用自定义快捷键建议

```
打开 CSS 片段管理器: Ctrl/Cmd + Shift + C
格式化代码: Shift + Alt + F
切换编辑器主题: Ctrl/Cmd + Shift + T
运行代码: F5
```

## 快捷键冲突解决

### 常见冲突

1. **与 Obsidian 核心快捷键冲突**
   - 检查 Obsidian 设置中的快捷键配置
   - 修改冲突的快捷键

2. **与其他插件冲突**
   - 禁用冲突的插件快捷键
   - 重新分配快捷键

3. **与系统快捷键冲突**
   - 修改系统快捷键设置
   - 使用替代快捷键组合

### 故障排除

**快捷键不响应**
```
1. 确认编辑器处于焦点状态
2. 检查快捷键是否被其他程序占用
3. 重启 Obsidian
4. 重置快捷键配置
```

**快捷键延迟**
```
1. 检查系统性能
2. 关闭不必要的后台程序
3. 减少同时打开的编辑器标签
```

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