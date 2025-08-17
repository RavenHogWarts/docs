---
title: 运行原理
order: 4
---

# 如何运行生效的

## obsidian 如何打开库

Obsidian 的 vault 信息存储在 `%APPDATA%\obsidian\obsidian.json` 文件中，标记为 `"open": true` 的库将会被打开

- `path`: 文件夹的完整路径
- `ts`: 时间戳（毫秒），记录 vault 创建或最后访问时间
- `open`: 布尔值，标记是否为当前打开的 vault

```json
{
  "vaults": {
    "1a2b3c4d5e6f7890": {
      "path": "C:\\Users\\Username\\Documents\\MyNotes",
      "ts": 1692000000000,
      "open": true
    },
    "0987654321abcdef": {
      "path": "C:\\Projects\\Documentation",
      "ts": 1691000000000
    }
  }
}
```

## Windows 注册右键菜单

通过修改注册表在文件夹右键菜单中添加"Open with Obsidian"选项，共有两个入口：
- **文件夹右键**：在文件夹上直接右键，调用程序并传递文件夹路径
- **文件夹内右键**：在文件夹内空白处右键，调用程序并传递当前目录路径

注册表位置：
- `HKEY_CLASSES_ROOT\Directory\shell\OpenWithObsidian` - 文件夹右键
- `HKEY_CLASSES_ROOT\Directory\Background\shell\OpenWithObsidian` - 文件夹内右键

## 安装程序工作原理

### 1. 检测 Obsidian 路径
- 从注册表的卸载信息中查找 Obsidian 安装路径
- 检查常见安装位置（Program Files、用户目录等）
- 如果自动检测失败，提供手动选择界面

### 2. 复制主程序
将 `open_folder_with_obsidian.exe` 复制到 Obsidian 安装目录

### 3. 生成注册表文件
创建 `.reg` 文件配置右键菜单，包括：
- 菜单项文本和图标
- 执行命令和参数格式
- 卸载用的清理脚本

### 4. 应用注册表配置
以管理员权限执行注册表文件，完成右键菜单的添加

## 右键菜单运行过程

### 1. 接收文件夹路径

程序启动接收一个参数：要打开的文件夹路径

### 2. 读取 Obsidian 配置
从 `%APPDATA%\obsidian\obsidian.json` 读取当前的 vault 配置信息

### 3. 生成 vault 配置
- 为文件夹路径生成唯一的 vault ID（使用 MD5 哈希值前16位）
- 创建新的 vault 配置项，包含路径、时间戳和 open 标记
- 清除其他 vault 的 open 标记，确保只有新 vault 被激活

### 4. 更新配置文件
将修改后的配置写回 `obsidian.json` 文件

### 5. 启动 Obsidian
查找并启动 Obsidian 应用程序，Obsidian 会自动读取配置并打开标记为 open 的 vault