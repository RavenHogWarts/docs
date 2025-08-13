---
title: Keyboard Shortcuts
order: 1
draft: false
---

# Keyboard Shortcuts

## Keyboard Modes

Ace Editor supports multiple keyboard handlers, each simulating the shortcut key style of different editors.

### Supported Keyboard Modes

- **Default**: Default keyboard mode, similar to traditional text editor mode
- **VS Code**: VS Code editor keyboard mode, mimicking VS Code's shortcut key style
- **Sublime**: Sublime Text editor keyboard mode, mimicking Sublime Text's shortcut key style
- **Emacs**: Emacs editor keyboard mode, mimicking Emacs' shortcut key style
- **Vim**: Vim editor keyboard mode, mimicking Vim's shortcut key style

### Switching Keyboard Modes

1. Open plugin settings
2. Find the "Keyboard" option
3. Select your preferred keyboard mode

## Custom Shortcut Features

### Font Zooming
On the code editing page, `Ctrl/Meta` key + mouse wheel can quickly zoom the font

Use `Ctrl` key on Windows/Linux

Use `Meta` key (i.e., `Command` key) on Mac

## Shortcuts

### default
Default mode is Ace Editor's native shortcuts. Here is the main shortcut list[^1]:

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+D | Command+D | Delete current line |
| Alt+Shift+Down | Command+Option+Down | Copy line down |
| Alt+Shift+Up | Command+Option+Up | Copy line up |
| Alt+Down | Option+Down | Move line down |
| Alt+Up | Option+Up | Move line up |
| Alt+Delete | Ctrl+K | Delete to line end |
| Alt+Backspace | Command+Backspace | Delete to line start |
| Ctrl+Backspace | Option+Backspace | Delete word left |
| Ctrl+Delete | Option+Delete | Delete word right |
| Ctrl+O | Ctrl+O | Split line |

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+A | Command+A | Select all |
| Ctrl+Shift+D | Command+Shift+D | Duplicate selection |
| Ctrl+Shift+L | Command+Shift+L | Extend to line |
| Shift+Home | Shift+Home | Select to line start |
| Shift+End | Shift+End | Select to line end |

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+Alt+Up | Ctrl+Option+Up | Add cursor above |
| Ctrl+Alt+Down | Ctrl+Option+Down | Add cursor below |
| Ctrl+Alt+Right | Ctrl+Option+Right | Add next occurrence to multi-selection |
| Ctrl+Alt+Left | Ctrl+Option+Left | Add previous occurrence to multi-selection |

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+F | Command+F | Find |
| Ctrl+H | Command+Option+F | Replace |
| Ctrl+K | Command+G | Find next |
| Ctrl+Shift+K | Command+Shift+G | Find previous |

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+Z | Command+Z | Undo |
| Ctrl+Y | Command+Y | Redo |
| Ctrl+/ | Command+/ | Toggle comment |
| Ctrl+L | Command+L | Go to line |
| F1 | F1 | Open command palette |

### vscode
VS Code mode inherits most default mode shortcuts. Here are some unique shortcuts:

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+Shift+K | Command+Shift+K | Delete line |
| Ctrl+Enter | Command+Enter | Insert line below |
| Ctrl+Shift+Enter | Command+Shift+Enter | Insert line above |
| Ctrl+] | Command+] | Increase indent |
| Ctrl+[ | Command+[ | Decrease indent |
| Alt+Click | Option+Click | Insert cursor |
| Ctrl+Space | Command+Space | Trigger suggestion |

### sublime
Sublime Text mode main shortcuts include:

| Windows/Linux | Mac | Function |
|--------------|-----|----------|
| Ctrl+K, Ctrl+K | Command+K, Command+K | Delete to line end |
| Ctrl+K, Ctrl+Backspace | Command+K, Command+Backspace | Delete to line start |
| Ctrl+Shift+Up | Command+Shift+Up | Swap line up |
| Ctrl+Shift+Down | Command+Shift+Down | Swap line down |
| Ctrl+M | Command+M | Jump to matching bracket |
| Ctrl+D | Command+D | Select next occurrence |

### emacs
Emacs mode uses traditional Emacs-style shortcuts:

| Shortcut | Function |
|----------|----------|
| Ctrl+F | Move forward one character |
| Ctrl+B | Move backward one character |
| Ctrl+P | Move up one line |
| Ctrl+N | Move down one line |
| Ctrl+A | Move to line start |
| Ctrl+E | Move to line end |
| Alt+F | Move forward one word |
| Alt+B | Move backward one word |

### vim
Vim mode simulates Vim editor's modal editing features:

| Mode | Shortcut | Function |
|------|----------|----------|
| Normal mode | h,j,k,l | Cursor movement |
| Normal mode | i | Enter insert mode |
| Normal mode | v | Enter visual mode |
| Normal mode | dd | Delete current line |
| Normal mode | yy | Copy current line |
| Normal mode | p | Paste |
| Normal mode | u | Undo |
| Command mode | :w | Save |
| Command mode | :q | Quit |

[^1]: [ace default shortcuts](https://github.com/ajaxorg/ace/wiki/default-keyboard-shortcuts)