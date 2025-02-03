# Code Editor

::: tip Feature Introduction
1. Support for directly editing code files in Obsidian
2. Support for code highlighting and code folding
3. Support for common VSCode editor keyboard shortcuts
:::

## Opening in Code Editor
In Obsidian's file tree, right-click a file to choose to open it in the code editor (works for all file types)

## Creating Code Files
In Obsidian's file tree, right-click a folder to create a code file in the current folder

The code file creation window includes options for file type selection, file name input, file creation path preview, and whether to open in a new tab after creation

### File Types
Mainly divided into `Custom Files` and `Other Common Code File Extensions`

- For custom files, the file name input must include the file extension, such as `test.js`

## Editor Shortcuts
This tool supports common VSCode editor shortcuts, such as:

- `ctrl+/`: Comment/Uncomment
- `ctrl+f`: Find
- `ctrl+h`: Replace
- `ctrl+z`: Undo
- `ctrl+y`: Redo
- `ctrl+c`: Copy
- `ctrl+v`: Paste
- `ctrl+x`: Cut
- `ctrl+a`: Select All
- `ctrl+[`: Indent line left
- `ctrl+]`: Indent line right
- `ctrl+shift+[`: Fold code
- `ctrl+shift+]`: Unfold code

## Commands
This tool provides the following commands. Enter `codeEditor` in the command palette to see these options:
1. Create Code File: If there is an active document, the file will be created in the same directory as the current document; otherwise, it will be created in the current Obsidian vault root directory

## Settings Options
1. Registered file extensions: Files with registered extensions will open directly in Obsidian when clicked
2. Set editor theme: Four themes available (vs, vs-dark, hc-light, hc-dark)
3. Show line numbers in editor
4. Show minimap in editor
5. Set font size in editor
6. Set font family in editor
7. Set number of characters for tab key
8. Set line height in editor
9. Set letter spacing in editor
