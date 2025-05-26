# 自定义样式
所有自定义css文件都放在`<库名>/.obsidian/snippets`文件夹中

## ReadingProgress

### 控制目录宽度，使用非px单位

```css
.rht-toc-content {
  width: 20vw !important;
}
```

### 在特定的页面控制阅读进度
<details>
<summary>已合并进插件中</summary>
代码片段来源于@[Moy](https://github.com/Moyf)

::: code-group
```css [显示阅读进度]
.show-rht-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 1 !important;
    visibility: visible !important;
}
```

```css [隐藏阅读进度]
.hide-rht-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 0 !important;
    visibility: hidden !important;
}
```
:::

#### 使用方法
在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `show-rht-toc` 或 `hide-rht-toc` 类，即可控制阅读进度条的显示。

</details>

### modal框中打开文件，阅读进度位置修复

<details>
<summary>已合并进插件中</summary>

代码片段来源于@[primary-theme](https://github.com/primary-theme/obsidian)

```css
.workspace-leaf-content:has(.rht-reading-progress) {
  container-type: inline-size;
}
```

</details>

### 在特定页面控制标题自动编号

<details>
<summary>已合并进插件中</summary>

::: code-group
```css [隐藏标题自动编号]
.view-content:has(> .markdown-source-view.hide-rht-heading-number)

  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).hide-rht-heading-number)
  .rht-toc-item-number {
  display: none !important;
}
```

```css [显示标题自动编号]
.view-content:has(> .markdown-source-view.show-rht-heading-number)
  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).show-rht-heading-number)
  .rht-toc-item-number {
  display: inline !important;
}
```
:::

#### 使用方法
在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `hide-rht-heading-number` 或 `show-rht-heading-number`，即可隐藏或显示标题自动编号。

</details>
