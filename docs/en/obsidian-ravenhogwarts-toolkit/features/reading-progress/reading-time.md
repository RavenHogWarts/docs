# Estimated Reading Time

## Usage
Insert a code block using the language `rht-reading-time` to display the estimated reading time

::: code-group
```markdown [Basic Usage]
\``` rht-reading-time

\```
```

```markdown [With Parameters (JavaScript Object Literal Syntax)]
``` rht-reading-time
{
    chineseWordsPerMinute: 300,
    englishWordsPerMinute: 200,
    removeCodeBlocks: true,
    removeWikiLinks: false,
    removeImageLinks: true,
    removeNormalLinks: false,
    template: "Estimated reading time: {{time}}",
    showWordCount: true,
    showIcon: true,
    showRange: false,
    style: {
        color: "var(--text-normal)",
        backgroundColor: "var(--background-secondary)",
        borderRadius: "8px",
        padding: "12px 16px",
        fontSize: "0.95em",
        fontWeight: "normal",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        border: "1px solid var(--background-modifier-border)",
        width: "auto",
        maxWidth: "100%",
        margin: "1em 0",
    },
}
\```
```

```markdown [With Parameters (JSON Syntax)]
\``` rht-reading-time
{
    "chineseWordsPerMinute": 300,
    "englishWordsPerMinute": 200,
    "removeCodeBlocks": true,
    "removeWikiLinks": false,
    "removeImageLinks": true,
    "removeNormalLinks": false,
    "template": "Estimated reading time: {{time}}",
    "showWordCount": true,
    "showIcon": true,
    "showRange": false,
    "style": {
        "color": "var(--text-normal)",
        "backgroundColor": "var(--background-secondary)",
        "borderRadius": "8px",
        "padding": "12px 16px",
        "fontSize": "0.95em",
        "fontWeight": "normal",
        "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.05)",
        "border": "1px solid var(--background-modifier-border)",
        "width": "auto",
        "maxWidth": "100%",
        "margin": "1em 0"
    }
}
\```
```
:::

### ⚠️ Important Notes

- In actual use, you need to delete the two `\` in the above code
- Parameters must be wrapped in `{}`
- Parameters can use either JavaScript object literal syntax or JSON syntax, but must strictly follow JSON format when using JSON syntax

## Parameter Reference
### Basic Configuration
- `chineseWordsPerMinute`: Chinese words read per minute, default is 300
- `englishWordsPerMinute`: English words read per minute, default is 200
- `removeCodeBlocks`: Whether to exclude code blocks from counting, default is `true`
- `removeWikiLinks`: Whether to exclude wiki links from counting, default is `false`
- `removeImageLinks`: Whether to exclude image links from counting, default is `true`
- `removeNormalLinks`: Whether to exclude normal links from counting, default is `false`

### Display Configuration
- `template`: Template string, default is <span v-pre>`Estimated reading time: {{time}}`</span>, where <span v-pre>`{{time}}`</span> is the calculated reading time (formatted as `Less than 1 minute` or `About X minutes` or `About X hours X minutes`)
- `showWordCount`: Whether to display word count statistics, default is `true`, shows total, Chinese, and English word counts
- `showIcon`: Whether to display an icon, default is `true`, shows [clock](https://lucide.dev/icons/clock) icon
- `showRange`: Whether to display reading time range, default is `false`, shows as `About X - Y minutes`

### Style Configuration
- `style`: Styling options
  - `color`: Text color, default is `var(--text-normal)`
  - `backgroundColor`: Background color, default is `var(--background-secondary)`
  - `borderRadius`: Border radius, default is `8px`
  - `padding`: Internal padding, default is `12px 16px`
  - `fontSize`: Font size, default is `0.95em`
  - `fontWeight`: Font weight, default is `normal`
  - `boxShadow`: Box shadow, default is `0 2px 8px rgba(0, 0, 0, 0.05)`
  - `border`: Border style, default is `1px solid var(--background-modifier-border)`
  - `width`: Width, default is `auto`
  - `maxWidth`: Maximum width, default is `100%`
  - `margin`: External margin, default is `1em 0`