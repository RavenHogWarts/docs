# 自定义样式
所有自定义css文件都放在`<库名>/.obsidian/snippets`文件夹中

## ReadingProgress

### 在特定的页面控制阅读进度
代码片段来源于@[Moy](https://github.com/Moyf)

::: code-group
```css [显示阅读进度]
.show-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 1 !important;
    visibility: visible !important;
}
```

```css [隐藏阅读进度]
.hide-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 0 !important;
    visibility: hidden !important;
}
```
:::

#### 使用方法
在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `show-toc` 或 `hide-toc` 类，即可控制阅读进度条的显示。

### modal框中打开文件，阅读进度位置修复
代码片段来源于@[primary-theme](https://github.com/primary-theme/obsidian)

```css
.workspace-leaf-content:has(.rht-reading-progress) {
  container-type: inline-size;
}
```

### 在特定页面控制标题自动编号

::: code-group
```css [隐藏标题自动编号]
.view-content:has(> .markdown-source-view.hide-heading-number)
  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).hide-heading-number)
  .rht-toc-item-number {
  display: none !important;
}
```

```css [显示标题自动编号]
.view-content:has(> .markdown-source-view.show-heading-number)
  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).show-heading-number)
  .rht-toc-item-number {
  display: inline !important;
}
```
:::

#### 使用方法
在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `hide-heading-number`，即可隐藏标题自动编号显示。