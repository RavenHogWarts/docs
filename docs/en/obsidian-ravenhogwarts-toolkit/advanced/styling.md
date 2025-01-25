# Styling
All custom CSS files should be placed in the `<vault-name>/.obsidian/snippets` folder

## ReadingProgress

### Control reading progress bar on specific pages
Code snippet from @[Moy](https://github.com/Moyf)

::: code-group
```css [Show reading progress]
.show-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 1 !important;
    visibility: visible !important;
}
```

```css [Hide reading progress]
.hide-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 0 !important;
    visibility: hidden !important;
}
```
:::

#### Usage
Add the `show-toc` or `hide-toc` class in the document's `cssclasses` (recommended) or `cssClass` property to control the visibility of the reading progress bar.

### Fix Reading Progress Position in Modal Windows
Code snippet from @[primary-theme](https://github.com/primary-theme/obsidian)

```css
.workspace-leaf-content:has(.rht-reading-progress) {
  container-type: inline-size;
}
```

### Hide heading number in specific pages

::: code-group
```css [Hide heading number]
.view-content:has(> .markdown-source-view.hide-heading-number)
  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).hide-heading-number)
  .rht-toc-item-number {
  display: none !important;
}
```

```css [Show heading number]
.view-content:has(> .markdown-source-view.show-heading-number)
  .rht-toc-item-number,
.view-content:has(> div:not([style*="display: none"]).show-heading-number)
  .rht-toc-item-number {
  display: inline !important;
}
```
:::

#### Usage
Add the `hide-heading-number` class in the document's `cssclasses` (recommended) or `cssClass` property to hide the heading number.
