---
title: 解释器
order: 4
draft: false
---

# 解释器
解析器是网页剪藏工具的一项功能，让您能够使用自然语言与网页进行交互。该功能可帮助您捕获并修改想要保存至 Obsidian 的数据。例如：
- 提取特定的文本片段。
- 总结或解释信息。
- 将文本从一种格式转换为另一种格式。
- 将文本翻译成不同的语言。

解析器利用语言模型处理网页上的信息，并通过可添加到网页剪辑模板中的变量返回结果。

<video controls="" preload="metadata" src="https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/video/web-clipper-interpreter-demo.mp4#t=0.001" style="" draggable="true"></video>

## 提示词示例
提示词采用[变量](./variables.md)语法 <code v-pre>{{"your prompt"}}</code>。您可以将此语法与任何自然语言查询结合使用，例如：
- <code v-pre>{{"a summary of the page"}}</code> 提取页面摘要。
- <code v-pre>{{"a three bullet point summary, translated to French"}}</code> 提取关于页面的要点，并将其翻译成法语。
- <code v-pre>{{"un resumé de la page en trois points"}}</code> 使用法语提示提取三个要点。

提示的响应结果可以通过[过滤器](./filters.md)进一步处理。过滤器在从模型接收到提示响应后进行加工。例如：<code v-pre>{{"a summary of the page"|blockquote}}</code> 会将响应转换为块引用。

## 开始使用
解释器几乎可与任何语言模型提供商配合使用，包括在您设备上私有运行的选项。要设置解释器：
1. 前往 Web Clipper 设置中的解释器部分。
2. 开启启用解释器功能。
3. 配置您的提供商和模型，请参阅下文[模型](#模型)部分。
4. 将[提示词变量](./variables.md#提示词变量)添加到您的[模板](./templates.md)中。
5. 如果您的模板包含提示变量，在剪辑页面时解释器部分将会显示。点击解释按钮来处理提示变量。

## 工作原理
当启用解释器功能且您的模板包含[提示词变量](./variables.md#提示词变量)时，扩展窗口的 `添加到 Obsidian` 按钮上方会显示新的解释器功能区。该区域允许您选择模型并为当前页面运行解释器。

当你点击解释按钮时，解释器会将页面上下文与你模板中的所有提示词一并发送至所选模型。根据你选择的模型服务商，这可能是外部调用或设备本地运算。模型会基于页面上下文评估你的提示词并返回响应结果，随后解释器将用响应数据替换提示变量。

整个过程可能只需几毫秒，也可能超过30秒，具体取决于您使用的模型以及处理的数据量。

## 上下文
术语 `上下文` 指的是解释器用于处理提示的页面数据。上下文越小，解释器运行速度越快。

默认情况下，解释器使用整个页面的HTML作为其上下文，但这可能导致提示处理速度变慢且成本超出必要范围。

您可以在解释器高级设置中覆盖默认上下文，并为每个[模板](./templates.md)单独定义上下文。

要定义更具针对性的上下文，请使用[选择器变量](./variables.md#选择器变量)（或其他变量类型）来解析页面的某个部分。例如，您可以在模板的解释器上下文中使用以下选择器变量：
```js
{{selectorHtml:#main}}
```

这仅会在网页存在 `#main` 元素时运行解释器。[HTML 处理过滤器](./filters.md)(如 `remove_html`、`strip_tags`和 `strip_attr` )有助于进一步缩减上下文长度并提升处理速度。


## 模型
::: warning 隐私
使用外部提供商即表示您同意其条款和隐私政策。解释器请求直接发送给您选择的提供商。Obsidian 不会收集或存储任何关于您请求的数据。
:::

### 服务提供商
解释器包含多个服务提供商。要使用这些服务提供商，您需要获取API密钥，可通过登录您的提供商账户获得。您还需要决定使用哪些模型。

| 服务提供商 | API Key | 模型 |
| - | - | - |
| Anthropic     | [API](https://console.anthropic.com/settings/keys) | [可用模型](https://docs.anthropic.com/en/docs/about-claude/models) |
| Azure OpenAI  | [API](https://oai.azure.com/portal/)               | [可用模型](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek      | [API](https://platform.deepseek.com/api_keys)      | [可用模型](https://api-docs.deepseek.com/quick_start/pricing) |
| Google Gemini | [API](https://aistudio.google.com/apikey)          | [可用模型](https://ai.google.dev/gemini-api/docs/models/gemini) |
| Hugging Face  | [API](https://huggingface.co/settings/tokens)      | [可用模型](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta          | [API](https://llama.developer.meta.com/)           | [可用模型](https://llama.developer.meta.com/docs/models) |
| Ollama        | N/A                                                | [可用模型](https://ollama.com/search) |
| OpenAI        | [API](https://platform.openai.com/api-keys)        | [可用模型](https://platform.openai.com/docs/models) |
| OpenRouter    | [API](https://openrouter.ai/settings/keys)         | [可用模型](https://openrouter.ai/models) |
| Perplexity    | [API](https://www.perplexity.ai/settings/api)      | [可用模型](https://docs.perplexity.ai/guides/model-cards) |
| xAI Grok      | [API](https://console.x.ai/team/default/api-keys)  | [可用模型](https://docs.x.ai/docs/models) |

### 选择模型
通常我们建议在网页剪藏中使用小型模型，因为它们速度更快，且在此任务中表现相当准确。较小模型的示例包括 Anthropic 的 `Claude Haiku`、`Google Gemini Flash`、参数为 3B 或 8B 的 `Llama`，或 OpenAI 的 `Mini 系列`模型。

### 自定义供应商与模型
要添加自定义提供商和模型，请前往 Web Clipper `设置` → `解释器`：
- `添加提供商`以配置预设和自定义提供商。
- `添加模型`以配置预设和自定义模型。

添加自定义提供商时，我们建议您使用其聊天补全端点作为 `基础 URL`，该地址通常以 `/chat/completions` 结尾。

## 本地模型
解释器可以使用本地模型，这些模型提供更高的隐私性和离线兼容性。有多种运行本地模型的选项，其中最容易配置的是 `Ollama`。

### Ollama
[Ollama](https://ollama.com/) 允许您在设备上本地私密运行语言模型。

下载并安装 Ollama 后，请在解释器设置中通过 `添加提供商` 功能添加 Ollama。Ollama 无需API密钥。随后从[模型列表](https://ollama.com/search)中选择所需模型，如想使用 [Llama 3.2](https://ollama.com/library/llama3.2)，请点击 `添加模型`，然后完善信息：
- 提供商：`Ollama`
- 模型名称：`Llama 3.2`，此值可自定义
- 模型ID：`llama3.2`，必须与 Ollama 中的模型 ID 完全匹配

#### 启动 Ollama 服务器
若要让浏览器扩展与 Ollama 交互，必须在运行服务器时[明确授予权限](https://github.com/ollama/ollama/issues/2308)，否则将会出现 `403` 错误。

关闭 Ollama 应用程序，并在终端中运行以下命令。如果您不使用Chrome或Firefox浏览器，请将协议更改为您浏览器扩展的协议。
```bash
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

然后以常规方式使用 Ollama 运行您的模型，例如：
```bash
ollama run llama3.2
```

#### 上下文长度
Ollama 的上下文窗口默认设置为2048个词元。这是消息和响应的最大词元数量。在截取长网页内容时，很容易超出此限制。Ollama 会静默失败并返回无关结果。一些解决方案：
- 增加Ollama的 `num_ctx` 参数。请注意，更长的上下文需要更多内存。
- 在模板中使用 [`上下文`](#上下文) 字段提供页面上更具针对性的部分，或使用[过滤器](./filters.md)（例如 <code v-pre>{{content|slice:0,1000}}</code> ）来裁剪上下文。