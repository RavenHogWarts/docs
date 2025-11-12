---
title: 变量
order: 6
draft: false
---

# 变量

Web Clipper [模板](guide/templates.md)可以使用变量自动预填充页面数据到模板中。变量可用于笔记名称、笔记位置、属性字段和笔记内容中。变量还可以通过[过滤器](advanced-usage/filters.md)进行修改。

使用 Web Clipper 扩展中的 `...` 图标即可获取当前页面变量，以便在模板中使用。
  

## 预设变量
`预设变量` 会根据页面内容自动生成。这些变量通常适用于大多数网站。

| 变量 | 描述 |
| - | - |
| <code v-pre>{{author}}</code>        | 页面作者 |
| <code v-pre>{{content}}</code>       | 文章内容、[高亮内容](guide/highlight.md)或选区内容，采用 Markdown 格式 |
| <code v-pre>{{contentHtml}}</code>   | 文章内容、[高亮内容](guide/highlight.md)或选区内容，采用 HTML 格式 |
| <code v-pre>{{date}}</code>          | 当前日期，可使用过滤器进行格式化 |
| <code v-pre>{{description}}</code>   | 描述或摘要 |
| <code v-pre>{{domain}}</code>        | 域名 |
| <code v-pre>{{favicon}}</code>       | 网站图标链接 |
| <code v-pre>{{fullHtml}}</code>      | 未处理的完整页面 HTML 内容 |
| <code v-pre>{{highlights}}</code>    | 带文字和时间戳的[高亮内容](guide/highlight.md) |
| <code v-pre>{{image}}</code>         | 社交媒体分享图片链接 |
| <code v-pre>{{published}}</code>     | 发布日期，可使用过滤器进行格式化 |
| <code v-pre>{{selection}}</code>     | 以 Markdown 格式的选区内容 |
| <code v-pre>{{selectionHtml}}</code> | 以 HTML 格式的选区内容 |
| <code v-pre>{{site}}</code>          | 网站名称或发布者 |
| <code v-pre>{{title}}</code>         | 页面标题 |
| <code v-pre>{{time}}</code>          | 当前日期和时间 |
| <code v-pre>{{url}}</code>           | 当前网址 |
| <code v-pre>{{words}}</code>         | 字数统计 |

## 提示词变量
`提示词变量` 的优势在于极其灵活且易于编写，但也存在一些权衡：运行速度较慢，并且根据所选[服务商](advanced-usage/interpreter.md)的不同，可能涉及成本和隐私方面的考量。

与其他变量类型不同，提示变量需要由外部语言模型处理，因此只有在[解释器](advanced-usage/interpreter.md)运行后才会被替换。

如果所需提取的数据格式一致，最好使用其他变量类型而非提示变量进行提取。

另一方面，如果所需提取的数据在不同网站间格式不一致，提示变量会非常实用。例如，您可以创建一个与图书网站无关的通用[模板](guide/templates.md)来保存图书信息。像 <code v-pre>{{"author of the book"}}</code> 这样的提示变量适用于任何图书网站，而选择器变量通常仅适用于单一网站。

### 示例
提示词几乎可以使用任何自然语言查询。根据您使用的模型，提示词能够跨语言查询或翻译数据。

<code v-pre>{{"a three bullet point summary, translated to French"}}</code> 提取关于页面的要点，并将其翻译成法语。

<code v-pre>{{"un resumé de la page en trois points"}}</code> 使用法语提示提取三个要点。

提示可以将页面内容转换为可通过筛选器操作的JSON。例如：
```js
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```

## 元数据变量
`元数据变量` 允许您从页面的[元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)中提取数据，包括用于填充社交分享预览的 [Open Graph](https://ogp.me/) 数据。
- <code v-pre>{{meta:name}}</code> 返回具有指定名称的元名称标签的内容。
  - 例如 <code v-pre>{{meta:name:description}}</code> 对应元标签 `description`。
- <code v-pre>{{meta:property}}</code> 返回具有指定属性的元属性标签的内容。
  - 例如 <code v-pre>{{meta:property:og:title}}</code> 对应元标签 `og:title`。

## 选择器变量
`选择器变量` 允许您使用 [CSS 选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) 从页面元素中提取文本内容。

语法为 <code v-pre>{{selector:cssSelector?attribute}}</code> ，其中 `?attribute` 是可选项。若未指定属性，则返回元素的文本内容。您也可以使用 <code v-pre>{{selectorHtml:cssSelector}}</code> 来获取元素的HTML内容。选择器变量在具有稳定HTML结构的特定网站或网站群上往往能发挥最佳效果。
- <code v-pre>{{selector:h1}}</code> 返回页面上任何 `h1` 元素的文本内容。
- <code v-pre>{{selector:.author}}</code> 返回页面上任何 `.author` 元素的文本内容。
- <code v-pre>{{selector:img.hero?src}}</code> 返回具有 `hero` 类的图像的 `src` 属性。
- <code v-pre>{{selector:a.main-link?href}}</code> 返回具有 `main-link` 类的 a 标签的 `href` 属性。
- <code v-pre>{{selectorHtml:body|markdown}}</code> 返回 `body` 元素的完整 HTML，并使用[过滤器](advanced-usage/filters.md#markdown)转换为 Markdown 格式。
- 如果你需要更精确的选择，支持嵌套CSS选择器和组合器。
- 如果多个元素匹配选择器，将返回一个数组，你可以使用[数组和对象过滤器](advanced-usage/filters.md#数组和对象处理)（如 `join` 或 `map` ）进行处理。

## Schema.org 变量
`Schema.org 变量` 允许您从页面上的 [schema.org](https://schema.org/) JSON-LD中提取数据。Schema.org 数据也可用于自动[触发模板](guide/templates.md)。
- <code v-pre>{{schema:@Type:key}}</code> 返回对应键的值。
- <code v-pre>{{schema:@Type:parent.child}}</code> 返回嵌套属性的值。
- <code v-pre>{{schema:@Type:arrayKey}}</code> 返回数组中的第一个元素。
- <code v-pre>{{schema:@Type:arrayKey[index].property}}</code> 返回数组中指定索引位置的元素。
- <code v-pre>{{schema:@Type:arrayKey[*].property}}</code> 返回数组中所有元素的特定属性。

您也可以使用简写形式，无需指定模式类型：
- <code v-pre>{{schema:author}}</code> 将匹配在任何 Schema 类型中找到的第一个 `author` 属性。
- <code v-pre>{{schema:name}}</code> 将匹配在任何 Schema 类型中找到的第一个 `name` 属性。

当您不知道或不关心具体的模式类型，但知道要查找的属性名称时，这种简写方式特别有用。

嵌套属性和数组访问也同样适用，无论是否指定了 `@Type`：
- <code v-pre>{{schema:author.name}}</code> 将查找第一个 `author` 属性，然后访问其子属性 `name`。
- <code v-pre>{{schema:author[0].name}}</code> 将访问作者数组中第一位作者的 `name`。
- <code v-pre>{{schema:author[*].name}}</code> 将返回所有作者姓名的数组。