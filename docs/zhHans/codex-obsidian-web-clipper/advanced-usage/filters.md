---
title: 过滤器
order: 7
draft: false
---

# 过滤器
过滤器允许您修改 Web Clipper [模板](../guide/templates)中的[变量](../advanced-usage/variables)。使用 <code v-pre>{{variable|filter}}</code> 语法将过滤器应用于变量。
- 过滤器适用于任何类型的[变量](../advanced-usage/variables)，包括 `prompt`、`meta` 、 `selector` 和 `schema ` 变量。
- 过滤器可以链式使用，例如 <code v-pre>{{variable|filter1|filter2}}</code>，按照添加的顺序依次应用。

## 日期处理
转换和修改日期。

### `date`
将日期转换为指定格式，详见[参考](https://day.js.org/docs/en/display/format)。
- <code v-pre>{{date|date:"YYYY-MM-DD"}}</code> 将当前日期转换为 `YYYY-MM-DD` 格式。
- 使用 `date:("outputFormat", "inputFormat")` 指定输入格式，例如  解析并返回 `12/01/2024`。

### `date_modify`
通过添加或减去指定的时间量来修改日期，详见[参考](https://day.js.org/docs/en/manipulate/add)。
- `"2024-12-01"|date_modify:"+1 year"` 返回 `"2025-12-01"`
- `"2024-12-01"|date_modify:"-2 months"` 返回 `"2024-10-01"`

### `duration`
将 `ISO 8601` 持续时间字符串或秒数转换为格式化的时间字符串。使用以下标记：`HH`（补零的小时数）、`H`（小时数）、`mm`（补零的分钟数）、`m`（分钟数）、`ss`（补零的秒数）、`s`（秒数）。
- `"PT1H30M"|duration:"HH:mm:ss"` 返回 `"01:30:00"`。
- `"3665"|duration:"H:mm:ss"` 返回 `"1:01:05"`。
- 在未设定任何参数的情况下，`duration`的显示规则为：超过1小时采用`HH:mm:ss`格式，不足1小时则使用`mm:ss`格式。
- 支持 `ISO 8601` 持续时间格式（如 `PT6702S`、`PT1H30M`）和纯秒数两种输入方式。

## 文本转换与大小写处理
将文本字符串从一种格式转换为另一种格式。

### `camel`
将文本转换为 `驼峰命名格式`。

### `capitalize`
将值的首字母转换为大写，其余部分转换为小写，例如：`"hELLO wORLD"|capitalize` 返回 `"Hello world"`。

### `kebab`
将文本转换为 `短横线命名格式`。

### `lower`
将文本转换为 `小写`。

### `pascal`
将文本转换为 `帕斯卡命名格式`。

### `replace`
替换指定文本的出现：
- 简单替换：`"hello!"|replace:",":""` 会移除所有逗号。
- 多重替换：`"hello world"|replace:("e":"a","o":"0")` 返回结果为 `"hall0 w0rld"`。
- 替换操作按照指定的顺序执行。
- 要移除指定文本，请使用 `“”` 作为替换值。
- 在搜索词中使用特殊字符（如 `: | { } ( ) ' "`）时，需使用反斜杠进行转义，例如使用 `\:` 可搜索字面意义上的冒号。

支持使用 JavaScript 正则表达式语法的正则表达式：
- 将字符串中的所有元音字母替换为星号：`"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld"`。
- 不区分大小写：`"HELLO world"|replace:"/hello/i":"hi" → "hi world"`。
- 多个正则表达式：`"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`。
- 可用的标志符：`g`（全局匹配）、`i`（忽略大小写）、`m`（多行模式）、`s`（点号通配）、`u`（unicode模式）、`y`（粘性匹配）。

### `safe_name`
将文本转换为安全的文件名。
- 默认情况下， `safe_name` 应用最保守的清理规则。
- 操作系统特定的规则可通过 `safe_name:os` 格式应用，其中 `os` 可为 `windows`、`mac` 或 `linux`，以此实现仅针对相应操作系统的规则生效。

### `snake`
将文本转换为 `蛇形命名格式`。

### `title`
将文本转换为“标题格式”，例如，输入`"hello world"|title`将返回`"Hello World"`。

### `trim`
移除字符串两端的空白字符。
- `" hello world "|trim` 返回 `"hello world"`

### `uncamel`
将驼峰命名法或帕斯卡命名法转换为以空格分隔的单词，您随后可以使用如 [`title`](#title) 或 [`capitalize`](#capitalize) 等其他过滤器进行进一步格式化。
- `"camelCase"|uncamel` 返回 `"camel case"`。
- `"PascalCase"|uncamel` 返回 `"pascal case"`。

### `upper`
将值转换为大写，例如 `"hello world"|upper` 返回 `"HELLO WORLD"`。

## 文本格式化处理
对文本应用[基本格式设置语法](https://help.obsidian.md/syntax)和[高级格式设置语法](https://help.obsidian.md/advanced-syntax)。

### `blockquote`
为输入的每一行添加 Markdown 引用前缀（`> `）。

### `callout`
创建一个带有可选参数的[标注](https://help.obsidian.md/callouts)：<code v-pre>{{variable|callout:("type", "title", foldState)}}</code>
- `type` 是标注框类型，默认为 `info`。
- `title` 是标注框标题，默认为空。
- `foldState` 是一个用于设置折叠状态的布尔值（true表示已折叠，false表示未折叠，null表示不可折叠）。

### `footnote`
将数组或对象转换为 Markdown 脚注列表。
- 对于数组：`["first item","second item"]|footnote` 将返回：`[^1]: first item` 等格式内容。
- 对于对象：`{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` 将返回：`[^first-note]: Content 1` 等格式内容。

### `fragment_link`
将字符串和数组转换为[文本片段](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)链接。链接文本默认为 `link`。
- `highlights|fragment_link` 返回 `Highlight content [link](text-fragment-url)`。
- `highlights|fragment_link:"custom title"` 返回 `Highlight content [custom title](text-fragment-url)`。

### `image`
将字符串、数组或对象转换为 Markdown 图像语法。
- 对于字符串：`"image.jpg"|image:"alt text"` 返回 `![alt text](image.jpg)`。
- 对于数组：`["image1.jpg","image2.jpg"]|image:"alt text"` 返回一个包含相同替代文本的 Markdown 图片字符串数组。
- 对于对象：`{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` 返回以对象键作为替代文本的 Markdown 图片字符串。

### `link`
将字符串、数组或对象转换为Markdown链接语法（请勿与 [`wikilink`](#wikilink) 混淆）。
- 对于字符串：`"url"|link:"author"` 返回 `[author](url)`。
- 对于数组：`["url1","url2"]|link:"author"` 返回一个包含相同文本的 Markdown 链接数组。
- 对于对象：`{"url1": "Author 1", "url2": "Author 2"}|link` 返回与对象键匹配的文本的 Markdown 链接。

### `list`
将数组转换为 Markdown 列表。
- `list` 转换为项目符号列表。
- `list:task` 转换为任务列表。
- `list:numbered` 转换为编号列表。
- `list:numbered-task` 转换为带编号的任务清单。

### `table`
将数组或对象数组转换为 [Markdown 表格](https://help.obsidian.md/advanced-syntax#Tables)：
- 对于对象数组，它使用对象键作为表头。
- 对于数组的数组，它会创建一个表格，每个嵌套数组作为一行。
- 对于简单数组，它会创建一个以 `值` 为表头的单列表格。
- 可通过以下方式指定自定义列标题：`table:("Column 1", "Column 2", "Column 3")`。当配合简单数组使用时，该功能会根据指定的列数自动将数据拆分为多行。

### `wikilink`
将字符串、数组或对象转换为 Obsidian [wikilink](https://help.obsidian.md/link-notes) 语法。
- 对于字符串：`"page"|wikilink` 返回 `[[page]]`。
- 对于带有别名的字符串：`"page"|wikilink:"alias"` 返回 `[[page|alias]]`。
- 对于数组：`["page1","page2"]|wikilink` 返回不带别名的维基链接数组。
- 对于带有别名的数组：`["page1","page2"]|wikilink:"alias"` 返回所有链接使用相同别名的维基链接数组。
- 对于对象：`{"page1": "alias1", "page2": "alias2"}|wikilink` 返回以页面名称为键、别名为值的维基链接。

## 数字处理

### `calc`
对数字执行基本算术运算。
- 支持的运算符包括：`+`、`-`、`*`、`/`，以及用于幂运算的 `**`（或 `^`）。
- 示例：`5|calc:"+10"` 返回 `15`。
- 示例：`2|calc:"**3"` 返回 `8（2 的立方）`。
- 如果输入不是数字，则返回原始字符串。

### `length`
返回字符串长度、数组长度或对象中的键的数量。
- 对于字符串：`"hello"|length` 返回其长度 `5`。
- 对于数组：`["a","b","c"]|length` 返回其长度 `3`。
- 对于对象：`{"a":1,"b":2}|length` 返回 `2`。

### `round`
将数字四舍五入到最接近的整数或指定的小数位数。
- 无参数时：`3.7|round` 返回 `4`。
- 指定小数位数：`3.14159|round:2` 返回 `3.14`。

## HTML 处理
处理 HTML 内容并将其转换为 Markdown 格式。请注意，您的输入[变量](../advanced-usage/variables)必须包含 HTML 内容，例如使用 <code v-pre>{{fullHtml}}</code>、<code v-pre>{{contentHtml}}</code> 或 <code v-pre>{{selectorHtml:}}</code> 变量。

### `markdown`
将字符串转换为 [Obsidian 风格 Markdown](https://help.obsidian.md/obsidian-flavored-markdown) 格式的字符串。
- 在与返回 HTML 的变量（如 <code v-pre>{{contentHtml}}</code>、<code v-pre>{{fullHtml}}</code>）以及选择器变量（如 <code v-pre>{{selectorHtml:cssSelector}}</code>）结合使用时尤为实用。

### `remove_attr`
仅从标签中移除指定的 HTML 属性。
- 示例：`"<div class="test" id="example">Content</div>"|remove_attr:"class"` 返回 `<div id="example">Content</div>`。
- 多个属性：<code v-pre>{{fullHtml|remove_attr:("class,style,id")}}</code>

### `remove_html`
从字符串中移除指定的 HTML 元素及其内容。
- 支持标签名、类或ID，例如 <code v-pre>{{fullHtml|remove_html:("img,.class-name,#element-id")}}</code>
- 若仅需移除HTML标签或属性而保留内容，可使用 [`strip_tags`](#strip_tags) 或 [`strip_attr`](#strip_attr) 过滤器。

### `remove_tags`
仅移除指定的 HTML 标签。保留标签内的内容。
- 示例：`"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` 返回 `"<p>Hello world!</p>"`。
- 多个标签：<code v-pre>{{fullHtml|remove_tags:("a,em,strong")}}</code>

### `replace_tags`
替换 HTML 标签，保留标签的内容和属性。
- <code v-pre>{{fullHtml|replace_tags:"strong":"h2"}}</code> 将所有 `<strong>` 标签替换为 `<h2>`

### `strip_attr`
移除字符串中的所有 HTML 属性。
- 使用 `strip_attr:("class, id")` 可保留特定属性
- 示例：`"<div class="test" id="example">Content</div>"|strip_attr:("class")` 返回 `<div id="example">Content</div>`。

### `strip_md`
移除所有 Markdown 格式并返回纯文本字符串，例如将 `**text**` 转换为 `text`。
- 将格式化的文本转换为无格式的纯文本，包括粗体、斜体、高亮、标题、代码、引用块、表格、任务列表和维基链接。
- 完全移除表格、脚注、图像和HTML元素。

### `strip_tags`
从字符串中移除所有 HTML 标签。标签内的内容将被保留。
- 使用 `strip_tags:("p,strong,em")` 来保留特定标签。
- 示例：`"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` 返回 `Hello <b>world</b>!`。

## 数组和对象处理
处理数组和对象类型。

### `first`
返回数组的第一个元素作为字符串。
- `["a","b","c"]|first` 返回 `"a"`。
- 如果输入不是数组，则原样返回输入。

### `join`
将数组元素组合成一个字符串。
- `["a","b","c"]|join` 返回 `"a,b,c"`。
- 可以指定自定义分隔符：`["a","b","c"]|join:" "` 返回 `"a b c"`。使用 `join:"\n" ` 以换行符分隔元素。
- 在 [`split`](#split) 或 [`slice`](#slice) 之后使用可能很有用：`"a,b,c,d"|split:","|slice:1,3|join:" "` 返回 `"b c"`。

### `last`
返回数组的最后一个元素作为字符串。
- `["a","b","c"]|last` 返回 `"c"`
- 如果输入不是数组，则返回未更改的输入。

### `map`
对数组中的每个元素应用转换，语法为 `map:item => item.property` 或 `map:item => item.nested.property` 用于嵌套属性。
- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` 返回 `["obsidian", "amethyst"]`
- 对象字面量和复杂表达式需使用括号：`map:item => ({key: value})`，例如：`[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` 返回 `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`。

字符串字面量受到支持，并会自动包装在一个具有 `str` 属性的对象中。该属性用于存储字符串字面量转换的结果，例如 `["rock", "pop"]|map:item => "genres/${item}"`，返回 `[{str: "genres/rock"}, {str: "genres/pop"}]`。

`map` 与 [`template`](#template) 过滤器结合使用，例如 `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"` 。

### `merge`
向数组中添加新值。
- 对于数组：`["a","b"]|merge:("c","d")` 返回 `["a","b","c","d"]`。
- 单个值：`["a","b"]|merge:"c"` 返回 `["a","b","c"]`。
- 如果输入不是数组，则创建一个新数组：`"a"|merge:("b","c")` 返回 `["a","b","c"]`。
- 值可以加引号：`["a"]|merge:('b,"c,d",e')` 返回 `["a","b","c,d","e"]`。

### `nth`
使用 CSS 样式 nth-child 语法和分组模式保留数组中的第 n 项。所有位置均基于1开始计数（首项位置为1）。
- `array|nth:3` 仅保留第3个元素。
- `array|nth:3n` 保留每第3个元素（第3、6、9项等）。
- `array|nth:n+3` 保留第3个及之后所有元素。

适用于重复结构的分组模式语法：
- `array|nth:1,2,3:5` 保留每组5个项目中的第1、2、3个位置。例如：`[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` 返回 `[1,2,3,6,7,8]`。

### `object`
操作对象数据：
- `object:array` 将对象转换为键值对数组。
- `object:keys` 返回一个包含对象所有键的数组。
- `object:values` 返回一个包含对象所有值的数组。
- 示例：`{"a":1,"b":2}|object:array` 返回 `[["a",1],["b",2]]`

### `slice`
提取字符串或数组的一部分。
- 对于字符串：`"hello"|slice:1,4` 返回 `"ell"`。
- 对于数组：`["a","b","c","d"]|slice:1,3` 返回 `["b","c"]`。
- 如果只提供一个参数，则从该索引开始切片至末尾：`"hello"|slice:2` 返回 `"llo"`。
- 负索引从末尾开始计数：`"hello"|slice:-3` 返回 `"llo"`。
- 第二个参数是排他性的：`"hello"|slice:1,4` 包含索引为1、2和3的字符。
- 使用负的第二个参数会从末尾排除元素：`"hello"|slice:0,-2` 返回 `"hel"`。

### `split`
将字符串分割成子字符串数组。
- `"a,b,c"|split:","` 返回 `["a","b","c"]`。
- `"hello world"|split:" "` 返回 `["hello","world"]`。
- 如果未提供分隔符，则按每个字符进行分割：`"hello"|split` 返回 `["h","e","l","l","o"]`。
- 正则表达式可用作分隔符：`"a1b2c3"|split:[0-9]` 返回 `["a","b","c"]`。

### `template`
使用 `object|template:"Template with ${variable}"` 语法将模板字符串应用于对象或对象数组。
- 访问嵌套属性：`{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` 返回 `"Obsidian"`。
- 对于对象：`{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}" ` 返回 `"obsidian has a hardness of 5"`。
- 对于数组：`[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` 返回一个格式化列表。

通过访问 `str` 属性来处理字符串字面量 `map`：
- 示例：`["rock", "pop"]|map:item => "genres/${item}"|template:"${str}"` 返回 `"genres/rock\ngenres/pop"`。
- 在将 `template` 应用于通过字符串字面量 `map` 创建的映射对象时，系统会自动使用 `str` 属性。

### `unique`
从数组和对象中移除重复值。
- 对于基本类型数组：`[1,2,2,3,3]|unique` 返回 `[1,2,3]`。
- 对于对象数组：`[{"a":1},{"b":2},{"a":1}]|unique` 返回 `[{"a":1},{"b":2}]`。
- 对于对象，它会移除具有重复值的属性，保留最后一次出现的键。
- 对于字符串，它返回未更改的输入。