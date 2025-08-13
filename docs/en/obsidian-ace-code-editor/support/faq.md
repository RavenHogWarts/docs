---
title: FAQ
order: 1
draft: false
---

# Frequently Asked Questions (FAQ)

## Installation and Configuration

### Q: How to install the Ace Code Editor plugin?

**A:** There are three installation methods:

1. **Community Plugin Store** (Recommended):
   - Open Obsidian Settings → Community Plugins
   - Search for "Ace Code Editor"
   - Click install and enable

2. **Manual Installation**:
   - Download from [GitHub Releases](https://github.com/RavenHogWarts/obsidian-ace-code-editor/releases)
   - Extract to `.obsidian/plugins/ace-code-editor/` directory
   - Restart Obsidian and enable the plugin

3. **BRAT Installation**:
   - Install BRAT plugin
   - Add `RavenHogWarts/obsidian-ace-code-editor`

### Q: What to do if the plugin cannot be enabled after installation?

**A:** Please check the following:

1. Ensure Obsidian version compatibility (recommended v1.8.0+)
2. Check if plugin files are complete
3. Look for error messages in the console
4. Try restarting Obsidian
5. Disable other potentially conflicting plugins

## Usage Issues

### Q: Will edited files be automatically saved?

**A:** Yes, the plugin supports auto-save functionality:

- Editor content changes trigger auto-save
- Manual save is also available (Ctrl/Cmd + S)

## Feature-related

### Q: How to use code completion?

**A:** Code completion triggers automatically:

- Suggestions appear automatically while typing
- Use Tab key to accept suggestions
- Use arrow keys to select different suggestions
- Esc key to cancel completion

### Q: How to use search and replace functions?

**A:** 
- **Find**: Ctrl/Cmd + F
- **Replace**: Ctrl/Cmd + H
- **Find Next**: F3
- **Find Previous**: Shift + F3
- **Go to Line**: Ctrl/Cmd + G

## Compatibility Issues

### Q: What to do about conflicts with other plugins?

**A:** Steps to resolve conflicts:

1. Identify conflicting plugins
2. Check for duplicate hotkeys
3. Adjust plugin loading order
4. Contact developers to report compatibility issues

### Q: Can it be used on mobile devices?

**A:** Currently the plugin is mainly optimized for desktop Obsidian, with limited mobile support:

- Basic editing functions are available
- Some hotkeys may not work
- Touch operation experience may be suboptimal

## Troubleshooting

### Q: Editor cannot open files?

**A:** Check the following issues:

1. Whether the file exists and is readable
2. Whether the file encoding is supported
3. Whether you have permission to access the file
4. Check console error messages

### Q: Syntax highlighting is incorrect?

**A:** Possible solutions:

1. Confirm the file extension is correct
2. Check file content format
3. Reload the editor

### Q: Hotkeys not responding?

**A:** Troubleshooting steps:

1. Confirm the editor is in focus
2. Check hotkey configuration
3. See if there are conflicts with other programs
4. Restart Obsidian
5. Reset hotkey settings

### Q: Issues after plugin update?

**A:** Post-update issue handling:

1. Clear plugin cache
2. Reset plugin settings
3. Check update logs for breaking changes
4. If necessary, revert to previous version
5. Report issues to developers

## Get More Help

If the above answers don't solve your problem:

1. **Search Existing Issues**: Search in [GitHub Issues](https://github.com/RavenHogWarts/obsidian-ace-code-editor/issues)
2. **Submit New Issues**: Describe the problem and reproduction steps in detail
3. **Join Discussions**: Discuss in [GitHub Discussions](https://github.com/RavenHogWarts/obsidian-ace-code-editor/discussions)
4. **Read Documentation**: Read the complete usage documentation

---

*If you have other questions or suggestions, feel free to contact us through GitHub!*