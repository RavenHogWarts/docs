# 预计阅读时间

## 使用方法
插入代码块，语言使用`rht-reading-time`即可显示预计阅读时间

::: code-group
``` markdown [直接使用]
\``` rht-reading-time
\```
```

``` markdown [带参数(JavaScript对象字面量语法)]
\``` rht-reading-time
{
    chineseWordsPerMinute: 300,
    englishWordsPerMinute: 200,
    removeCodeBlocks: true,
    removeWikiLinks: false,
    removeImageLinks: true,
    removeNormalLinks: false,
    template: "预计阅读时间：{{time}}",
    showWordCount: true,
    showIcon: true,
    iconName: "clock",
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

``` markdown [带参数(JSON语法)]
\``` rht-reading-time
{
    "chineseWordsPerMinute": 300,
    "englishWordsPerMinute": 200,
    "removeCodeBlocks": true,
    "removeWikiLinks": false,
    "removeImageLinks": true,
    "removeNormalLinks": false,
    "template": "预计阅读时间：{{time}}",
    "showWordCount": true,
    "showIcon": true,
    "iconName": "clock",
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

### ⚠️注意事项

- 实际使用中需要删除上述代码中两个`\`
- 参数需要使用`{}`包裹
- 参数可以使用JavaScript对象字面量语法，也可以使用json语法，但是需要严格遵守 JSON 格式

## 参数说明
### 基础配置
- `chineseWordsPerMinute` 中文每分钟阅读字数，默认值为300
- `englishWordsPerMinute` 英文每分钟阅读字数，默认值为200
- `removeCodeBlocks` 是否移除代码块统计，默认值为`true`，不统计代码块
- `removeWikiLinks` 是否移除wiki链接统计，默认值为`false`，统计wiki链接
- `removeImageLinks` 是否移除图片链接统计，默认值为`true`，不统计图片链接
- `removeNormalLinks` 是否移除普通链接统计，默认值为`false`，统计普通链接

### 显示配置
- `template` 模板，默认值为<span v-pre>`预计阅读时间：{{time}}`</span>，其中<span v-pre>`{{time}}`</span>为计算出的阅读时间(经过格式化，值为`小于 1 分钟`或`约 X 分钟`或`约 X 小时 X 分钟`)
- `showWordCount` 是否显示字数统计，默认值为`true`，显示总字数、中文字数、英文字数
- `showIcon` 是否显示图标，默认值为`true`
- `iconName` 图标名称，默认值为`clock`，图标为<Clock class="inline-icon"/>。图标名称可从[lucide](https://lucide.dev/icons/)中查找选择，大部分在obsidian中都能使用
- `showRange` 是否显示阅读范围，默认值为`false`，显示效果为`约 X 分钟 - 约 X 分钟`

### 样式配置
- `style` 样式
  - `color` 颜色，默认值为`var(--text-normal)`
  - `backgroundColor` 背景颜色，默认值为`var(--background-secondary)`
  - `borderRadius` 边框圆角，默认值为`8px`
  - `padding` 内边距，默认值为`12px 16px`
  - `fontSize` 字体大小，默认值为`0.95em`
  - `fontWeight` 字体粗细，默认值为`normal`
  - `boxShadow` 阴影，默认值为`0 2px 8px rgba(0, 0, 0, 0.05)`
  - `border` 边框，默认值为`1px solid var(--background-modifier-border)`
  - `width` 宽度，默认值为`auto`
  - `maxWidth` 最大宽度，默认值为`100%`
  - `margin` 外边距，默认值为`1em 0`
