# ReadingProgress

## 在特定的页面控制阅读进度条
代码片段来源于@[Moy](https://github.com/Moyf)

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

### 使用方法
1. 新建一个css文件，将上述代码复制进去，将其放在obsidian库的`.obsidian/snippets`文件夹中

2. 在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `show-toc` 或 `hide-toc` 类，即可控制阅读进度条的显示。