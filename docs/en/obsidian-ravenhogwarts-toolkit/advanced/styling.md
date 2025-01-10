# ReadingProgress

## Control reading progress bar on specific pages
Code snippet from @[Moy](https://github.com/Moyf)

```css
.show-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 1 !important;
    visibility: visible !important;
}

.hide-toc ~ .rht-reading-progress .rht-toc-list {
    opacity: 0 !important;
    visibility: hidden !important;
}
```

### Usage
1. Create a new CSS file, copy the above code into it, and place it in the `.obsidian/snippets` folder of your Obsidian vault

2. Add the `show-toc` or `hide-toc` class in the document's `cssclasses` (recommended) or `cssClass` property to control the visibility of the reading progress bar.
