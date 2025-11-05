---
title: Vault Selector
order: 5
---

# Launch Obsidian with Vault Selector Every Time

`obsidian-pure-launcher.vbs` is a Windows startup script that allows you to display the vault selection interface every time you open Obsidian, instead of directly opening the last used vault.

## Usage Steps

### 1. Download Script File

Download the `obsidian-pure-launcher.vbs` file from the [Releases page](https://github.com/RavenHogWarts/obsidian-folder-opener/releases/tag/pure-launcher).

### 2. Configure Script

Open the `obsidian-pure-launcher.vbs` file with a text editor and modify the `OBSIDIAN_PATH` variable at the top to set it to your Obsidian installation path.

```vbs
' Example: Change to your actual Obsidian installation path
OBSIDIAN_PATH = "C:\Users\username\AppData\Local\Obsidian\Obsidian.exe"
```

### 3. Copy Script to Installation Directory

Copy the modified `obsidian-pure-launcher.vbs` file to your Obsidian installation directory.

### 4. Modify Start Menu Shortcut

1. Open the `C:\ProgramData\Microsoft\Windows\Start Menu\Programs` directory
2. Find the `Obsidian` shortcut file
3. Right-click the shortcut and select "Properties"
4. In the "Target" field, change the original target path from:
   ```
   InstallPath\obsidian.exe
   ```
   to:
   ```
   InstallPath\obsidian-pure-launcher.vbs
   ```

### 5. Complete Setup

After setup is complete, when you launch Obsidian through the Start menu, it will automatically open the vault selection interface, allowing you to choose which vault to open.

## How It Works

This script replaces the default startup method to ensure that Obsidian displays the vault selection dialog every time it starts, rather than directly opening the last used vault. This is very useful for users who need to frequently switch between different vaults.

## Notes

- Ensure the path in the script is set correctly
- If Obsidian is installed in a different location, adjust the path accordingly
- This feature only affects Obsidian launched through the modified shortcut

## Reference Project

This feature is inspired by the [TracingOrigins/obsidian-pure-launcher-win](https://github.com/TracingOrigins/obsidian-pure-launcher-win) project.