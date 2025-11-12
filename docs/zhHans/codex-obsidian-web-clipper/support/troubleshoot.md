---
title: 故障排除
order: 8
draft: false
---

# 故障排除

如果您在使用 Web Clipper 时遇到问题，可以通过[官方 Discord 频道](https://discord.com/channels/686053708261228577/1285652864089198672)获取帮助。您也可以在 [GitHub 仓库](https://github.com/obsidianmd/obsidian-clipper)中报告程序错误。

## 常规设置

### 部分内容缺失
默认情况下，Web Clipper 会智能抓取页面内容。但并非所有网站都能成功实现此功能。

Web Clipper 使用 [Defuddle](https://github.com/kepano/defuddle) 来仅抓取页面的主要内容。这会排除页眉、页脚及其他元素，但有时可能过于保守，删除了您希望保留的内容。您可以将错误报告给 Defuddle。

要在网页剪藏中绕过 Defuddle ，请使用以下方法：
- 选择文本，或使用 `Cmd/Ctrl+A ` 来选择所有文本。
- [高亮内容](/codex-obsidian-web-clipper/guide/highlight)以精确选择您想要抓取的部分。
- 为该网站使用[自定义模板](/codex-obsidian-web-clipper/guide/templates)。

### Obsidian 中未显示任何内容
如果在点击 `添加到 Obsidian` 时未看到任何内容：
- 请检查 Obsidian [开发者控制台](https://help.obsidian.md/resources#Capture%20console%20logs)中的错误信息。
- 请确认 Web Clipper 设置中的库名称与 Obsidian 中的库名称完全一致（注意是库名称而非库路径）。
- 检查文件夹名称的格式是否正确。

## Linux

### Obsidian 无法打开
- 确保 [Obsidian URI](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI) 协议[已注册](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI#Register%20Obsidian%20URI)。
- 如果您使用的是 Firefox，可能需要在浏览器设置中[注册协议](https://kb.mozillazine.org/Register_protocol)。

### Obsidian 已启动但仅保存了文件名
可能是 Obsidian 无法访问您的剪贴板。从浏览器向 Obsidian 传输数据需要剪贴板访问权限。您的系统配置会影响应用程序的沙盒隔离程度及剪贴板权限设置。

若您使用 Wayland，请确保 Obsidian 在应用未处于焦点状态时拥有读取剪贴板的权限。例如，在您的 Hyprland 配置中：
```
# hyprland.conf
misc {
  focus_on_activate = true
}
```
- 如果您使用 Flatpak，请考虑尝试官方支持的 [Obsidian](https://obsidian.md/download) 版本。
- 作为备用方案，请尝试在 Web Clipper `设置` → `常规` 中切换到传统模式。这将绕过剪贴板，直接通过 URI 保存内容。请注意，根据您的浏览器和 Linux 发行版，这将限制可剪藏的字符数量。

## iOS 和 iPadOS
要为 Safari 启用 Web Clipper：
1. 前往 Safari 浏览器，点击地址栏最左侧的按钮，该图标形似底部带有横线的矩形。
2. 点击 `管理扩展程序`。
3. 在扩展程序列表中启用 `Obsidian Web Clipper`。
4. 退出菜单。
5. 使用扩展时，请点击地址栏中的`拼图图标`。

允许 Web Clipper 在所有网站上运行：
1. 前往 iOS `设置` → `应用` → `Safari` → `扩展程序`。
2. 在 `权限` 设置中允许其在所有网站上运行。

如需让 Obsidian 始终接收网页剪辑器内容：
1. 请前往 iOS `设置` → `应用` → `Obsidian`。
2. 将 `从其他应用粘贴` 设置为 `允许`。
