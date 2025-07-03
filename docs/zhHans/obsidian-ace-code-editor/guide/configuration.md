---
title: 配置指南
order: 1
draft: true
---

# 配置指南

本指南将帮助您配置和自定义 Ace Code Editor 插件，以获得最佳的编辑体验。

## 🎨 编辑器主题

### 内置主题

Ace Code Editor 提供了 20+ 种精美的编辑器主题：

**明亮主题**
- `textmate` - 经典的 TextMate 主题
- `github` - GitHub 风格主题
- `tomorrow` - Tomorrow 主题
- `xcode` - Xcode 风格主题
- `kuroir` - 简洁的白色主题
- `katzenmilch` - 温和的米色主题
- `eclipse` - Eclipse IDE 主题

**深色主题**
- `monokai` - 流行的 Monokai 主题
- `github_dark` - GitHub 深色主题
- `tomorrow_night` - Tomorrow Night 主题
- `dracula` - Dracula 主题
- `one_dark` - Atom One Dark 主题
- `solarized_dark` - Solarized 深色主题
- `vibrant_ink` - 鲜艳的深色主题

### 主题配置

1. **自动适配模式**（推荐）
   ```
   设置 → Ace Code Editor → 主题 → 跟随 Obsidian 主题
   ```
   - 自动根据 Obsidian 的明暗模式切换编辑器主题
   - 明亮模式默认使用 `github` 主题
   - 深色模式默认使用 `monokai` 主题

2. **手动选择主题**
   ```
   设置 → Ace Code Editor → 主题 → 选择固定主题
   ```
   - 可以为明亮和深色模式分别选择不同主题
   - 不受 Obsidian 主题切换影响

## 🔤 字体设置

### 字体配置选项

**字体族**
- **系统默认**：使用 Obsidian 的编辑器字体
- **等宽字体**：`'Fira Code', 'JetBrains Mono', 'Consolas', monospace`
- **自定义字体**：输入您喜欢的字体名称

**字体大小**
- 范围：10px - 24px
- 推荐：14px - 16px
- 可以使用 `Ctrl/Cmd + +/-` 临时调整

**字体特性**
- **连字支持**：启用编程连字（如 `=>`, `!=`, `>=`）
- **字体粗细**：normal, bold, lighter
- **行高**：1.2 - 2.0 倍行距

### 推荐字体

**编程专用字体**
```
Fira Code        # 优秀的连字支持
JetBrains Mono   # JetBrains 出品
Cascadia Code    # 微软开发
Source Code Pro  # Adobe 开源
Inconsolata      # 经典等宽字体
```

**中文友好字体**
```
'Fira Code', 'Microsoft YaHei', monospace
'JetBrains Mono', 'PingFang SC', monospace
'Consolas', 'SimHei', monospace
```

## ⌨️ 键盘模式

### 支持的键盘模式

1. **Default**（默认）
   - 标准的编辑器快捷键
   - 适合大多数用户

2. **VS Code**
   - Visual Studio Code 风格快捷键
   - 适合 VS Code 用户

3. **Sublime**
   - Sublime Text 风格快捷键
   - 多光标编辑优化

4. **Vim**
   - Vim 编辑器模式
   - 支持 Normal、Insert、Visual 模式
   - 适合 Vim 用户

5. **Emacs**
   - Emacs 编辑器快捷键
   - 支持 Emacs 风格的组合键

### 切换键盘模式

```
设置 → Ace Code Editor → 键盘模式 → 选择模式
```

或在编辑器中使用命令：
```
Ctrl/Cmd + Shift + P → "切换键盘模式"
```

## 📝 编辑器行为

### 基本设置

**显示选项**
- ✅ **显示行号**：在左侧显示行号
- ✅ **显示标尺**：在第 80/120 列显示参考线
- ✅ **高亮当前行**：高亮光标所在行
- ✅ **显示不可见字符**：显示空格、制表符等
- ✅ **代码折叠**：启用代码块折叠功能

**编辑行为**
- ✅ **自动换行**：长行自动换行显示
- ✅ **智能缩进**：根据语言自动缩进
- ✅ **括号匹配**：高亮匹配的括号
- ✅ **自动补全**：启用代码补全功能
- ✅ **实时语法检查**：显示语法错误

### 缩进设置

**制表符设置**
```
制表符大小：2/4/8 空格
使用空格：✅ 推荐
使用制表符：❌ 不推荐
```

**语言特定缩进**
```
JavaScript/TypeScript: 2 空格
Python: 4 空格
HTML/CSS: 2 空格
Java/C++: 4 空格
```

## 🔍 搜索和替换

### 搜索选项

**基本搜索**
- `Ctrl/Cmd + F`：打开搜索框
- `F3` / `Shift + F3`：查找下一个/上一个
- `Escape`：关闭搜索框

**高级搜索**
- ✅ **区分大小写**：精确匹配大小写
- ✅ **全词匹配**：只匹配完整单词
- ✅ **正则表达式**：使用正则表达式搜索
- ✅ **循环搜索**：到达文件末尾后从头开始

### 替换功能

**基本替换**
```
Ctrl/Cmd + H     # 打开替换框
Ctrl/Cmd + Alt + F  # 替换当前匹配
Ctrl/Cmd + Alt + A  # 替换全部
```

**批量替换示例**
```javascript
// 将所有 var 替换为 let
搜索：\bvar\b
替换：let
选项：✅ 正则表达式

// 交换函数参数顺序
搜索：function (\w+)\((\w+), (\w+)\)
替换：function $1($3, $2)
选项：✅ 正则表达式
```

## 🎯 文件关联

### 默认关联

插件会自动关联以下文件类型：
```
.js, .ts, .jsx, .tsx    # JavaScript/TypeScript
.py, .pyw               # Python
.java, .class           # Java
.c, .cpp, .h, .hpp      # C/C++
.html, .css, .scss      # Web 文件
.json, .yaml, .xml      # 数据文件
.sh, .bat, .ps1         # 脚本文件
```

### 自定义关联

1. **添加新的文件扩展名**
   ```
   设置 → Ace Code Editor → 文件关联 → 添加扩展名
   ```

2. **设置默认编辑器**
   ```
   设置 → Ace Code Editor → 文件关联 → 设为默认编辑器
   ```

3. **语言模式映射**
   ```
   .vue → html
   .jsx → javascript
   .tsx → typescript
   .scss → css
   ```

## ⚡ 性能优化

### 大文件处理

**文件大小限制**
```
小文件 (< 1MB)：全功能模式
中等文件 (1-5MB)：限制部分功能
大文件 (> 5MB)：只读模式或拒绝打开
```

**优化设置**
```
✅ 启用虚拟滚动
✅ 延迟语法高亮
❌ 禁用实时语法检查
❌ 禁用自动补全
```

### 内存管理

**缓存设置**
```
最大缓存文件数：10
缓存过期时间：30 分钟
自动清理未使用缓存：✅
```

**性能监控**
```
开发者工具 → Console → 查看性能日志
设置 → Ace Code Editor → 调试 → 启用性能监控
```

## 🔧 高级配置

### 自定义快捷键

1. **打开快捷键设置**
   ```
   设置 → 快捷键 → 搜索 "Ace Code Editor"
   ```

2. **常用快捷键自定义**
   ```
   打开编辑器：Ctrl + E
   CSS 片段管理器：Ctrl + Shift + C
   切换主题：Ctrl + Alt + T
   格式化代码：Ctrl + Shift + F
   ```

### 插件集成

**与其他插件协作**
```
Templater：在模板中使用代码编辑器
Dataview：编辑 Dataview 查询
Advanced Tables：编辑表格中的代码
Git：版本控制代码文件
```

**API 接口**
```javascript
// 获取编辑器实例
const editor = app.plugins.plugins['ace-code-editor'].getEditor();

// 设置编辑器内容
editor.setValue('console.log("Hello World!");');

// 获取编辑器内容
const content = editor.getValue();
```

## 🐛 故障排除

### 常见问题

**编辑器无法打开**
1. 检查插件是否已启用
2. 重启 Obsidian
3. 检查文件权限
4. 查看控制台错误信息

**语法高亮异常**
1. 确认文件扩展名正确
2. 检查语言模式设置
3. 尝试手动设置语言模式
4. 重新加载编辑器

**性能问题**
1. 检查文件大小
2. 禁用不必要的功能
3. 清理编辑器缓存
4. 更新到最新版本

### 重置配置

**重置所有设置**
```
设置 → Ace Code Editor → 高级 → 重置为默认设置
```

**手动重置**
```
关闭 Obsidian
删除 .obsidian/plugins/ace-code-editor/data.json
重启 Obsidian
```

## 📚 相关资源

- [Ace Editor 官方文档](https://ace.c9.io/)
- [键盘快捷键参考]()
- [CSS 片段管理]()
- [常见问题解答]()