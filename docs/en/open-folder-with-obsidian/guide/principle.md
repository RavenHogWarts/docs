---
title: Operating Principle
order: 4
---

# How It Works

## How Obsidian Opens Vaults

Obsidian's vault information is stored in the `%APPDATA%\obsidian\obsidian.json` file, and vaults marked as `"open": true` will be opened.

- `path`: Complete path to the folder
- `ts`: Timestamp (milliseconds), recording vault creation or last access time
- `open`: Boolean value, marking whether it's the currently open vault

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

## Windows Registry Context Menu

By modifying the registry to add "Open with Obsidian" option to folder context menus, there are two entry points:
- **Folder right-click**: Right-click directly on a folder, calls the program and passes the folder path
- **Inside folder right-click**: Right-click on empty space inside a folder, calls the program and passes the current directory path

Registry locations:
- `HKEY_CLASSES_ROOT\Directory\shell\OpenWithObsidian` - Folder right-click
- `HKEY_CLASSES_ROOT\Directory\Background\shell\OpenWithObsidian` - Inside folder right-click

## Installer Working Principle

### 1. Detect Obsidian Path
- Search for Obsidian installation path from registry uninstall information
- Check common installation locations (Program Files, user directory, etc.)
- If automatic detection fails, provide manual selection interface

### 2. Copy Main Program
Copy `open_folder_with_obsidian.exe` to the Obsidian installation directory

### 3. Generate Registry File
Create `.reg` file to configure context menu, including:
- Menu item text and icon
- Execute command and parameter format
- Cleanup script for uninstallation

### 4. Apply Registry Configuration
Execute registry file with administrator privileges to complete context menu addition

## Context Menu Execution Process

### 1. Receive Folder Path

Program starts and receives one parameter: the folder path to open

### 2. Read Obsidian Configuration
Read current vault configuration information from `%APPDATA%\obsidian\obsidian.json`

### 3. Generate Vault Configuration
- Generate unique vault ID for folder path (using first 16 characters of MD5 hash)
- Create new vault configuration entry with path, timestamp, and open flag
- Clear open flags of other vaults to ensure only the new vault is activated

### 4. Update Configuration File
Write modified configuration back to `obsidian.json` file

### 5. Launch Obsidian
Find and start Obsidian application, which will automatically read the configuration and open the vault marked as open