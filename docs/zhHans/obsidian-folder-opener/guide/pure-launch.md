---
title: 启动库选择
order: 5
---

# 每次启动都打开 obsidian 库选择

`obsidian-pure-launcher.vbs` 是一个适用于 Windows 的启动脚本，可以让你在每次打开 Obsidian 时都显示库选择界面，而不是直接打开上次使用的库。

## 使用步骤

### 1. 下载脚本文件

从 [Releases 页面](https://github.com/RavenHogWarts/obsidian-folder-opener/releases/tag/pure-launcher) 下载 `obsidian-pure-launcher.vbs` 文件。


### 2. 修改脚本配置

使用文本编辑器打开 `obsidian-pure-launcher.vbs` 文件，修改顶部的变量 `OBSIDIAN_PATH`，将其设置为你的 Obsidian 安装路径。

```vbs
' 示例：修改为你的 Obsidian 实际安装路径
OBSIDIAN_PATH = "C:\Users\用户名\AppData\Local\Obsidian\Obsidian.exe"
```

### 3. 复制脚本到安装目录

将修改好的 `obsidian-pure-launcher.vbs` 文件复制到 Obsidian 的安装路径下。

### 4. 修改开始菜单快捷方式

1. 打开 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs` 目录
2. 找到 `Obsidian` 快捷方式文件
3. 右键点击快捷方式，选择"属性"
4. 在"目标"字段中，将原有的目标路径：
   ```
   安装路径\obsidian.exe
   ```
   修改为：
   ```
   安装路径\obsidian-pure-launcher.vbs
   ```

### 5. 完成设置

设置完成后，当你通过开始菜单启动 Obsidian 时，将会自动打开库选择界面，让你可以选择要打开的库。

## 工作原理

这个脚本通过替换默认的启动方式，确保 Obsidian 每次启动时都显示库选择对话框，而不是直接打开最后使用的库。这对于需要频繁切换不同库的用户来说非常有用。

## 注意事项

- 确保脚本中的路径设置正确
- 如果 Obsidian 安装在不同位置，需要相应调整路径
- 此功能仅影响通过修改后的快捷方式启动的 Obsidian

## 参考项目

该功能参考了 [TracingOrigins/obsidian-pure-launcher-win](https://github.com/TracingOrigins/obsidian-pure-launcher-win) 项目。

