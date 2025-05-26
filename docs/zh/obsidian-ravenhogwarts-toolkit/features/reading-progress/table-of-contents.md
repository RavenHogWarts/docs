# 文档内目录

## 使用方法
插入代码块，语言使用`rht-toc`即可显示文档内目录

::: code-group
``` markdown [直接使用]
\``` rht-toc
\```
```

``` markdown [带参数(JavaScript对象字面量语法)]
\``` rht-toc
{
    maxDepth: 3,
    minDepth: 1,
    redirect: true,
    ordered: false,
    title: "Table of Contents",
    style: {
        width: "100%",
        maxHeight: "500px",
        backgroundColor: "var(--background-secondary)",
        borderRadius: "8px",
        padding: "12px 16px",
        border: "1px solid var(--background-modifier-border)",
        fontSize: "0.9em",
    },
    layout: {
        type: "default",
        columnMinWidth: "250px",
        columnGap: "2em",
        columnRule: "1px solid var(--background-modifier-border)",
        breakpoint: "600px",
    },
}
\```
```

``` markdown [带参数(JSON语法)]
\``` rht-toc
{
    "maxDepth": 3,
    "minDepth": 1,
    "redirect": true,
    "ordered": false,
    "title": "Table of Contents",
    "style": {
        "width": "100%",
        "maxHeight": "500px",
        "backgroundColor": "var(--background-secondary)",
        "borderRadius": "8px",
        "padding": "12px 16px",
        "border": "1px solid var(--background-modifier-border)",
        "fontSize": "0.9em",
    },
    "layout": {
        "type": "default",
        "columnMinWidth": "250px",
        "columnGap": "2em",
        "columnRule": "1px solid var(--background-modifier-border)",
        "breakpoint": "600px",
    },
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
- `maxDepth` 目录最大深度，默认值为3
- `minDepth` 目录最小深度，默认值为1
- `redirect` 是否重定向，即点击目录项是否跳转到对应标题，默认值为`true`

### 显示配置
- `ordered` 是否生成标题编号，默认值为`false`
- `title` 标题，默认值为`Table of Contents`

### 样式配置
- `style` 样式
  - `width` 宽度，默认值为`100%`
  - `maxHeight` 最大高度，默认值为`500px`
  - `backgroundColor` 背景颜色，默认值为`var(--background-secondary)`
  - `borderRadius` 边框圆角，默认值为`8px`
  - `padding` 内边距，默认值为`12px 16px`
  - `border` 边框，默认值为`1px solid var(--background-modifier-border)`
  - `fontSize` 字体大小，默认值为`0.9em`

### 布局配置
- `layout` 布局
  - `type` 布局类型，`default`为单栏，`columns`为双栏，默认值为`default`
  - `columnMinWidth` 双栏模式下每栏最小宽度，默认值为`250px`
  - `columnGap` 双栏间距，默认值为`2em`
  - `columnRule` 双栏分隔线样式，默认值为`1px solid var(--background-modifier-border)`
  - `breakpoint` 触发双栏的最小宽度，默认值为`600px`
