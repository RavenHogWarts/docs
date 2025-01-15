# 自定义样式
所有自定义css文件都放在`<库名>/.obsidian/snippets`文件夹中

## ReadingProgress

### 在特定的页面控制阅读进度条
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

#### 使用方法
在obsidian的文档属性`cssclasses`(推荐使用)或`cssClass`中添加 `show-toc` 或 `hide-toc` 类，即可控制阅读进度条的显示。

### modal框中打开文件，阅读进度位置修复
代码片段来源于@[primary-theme](https://github.com/primary-theme/obsidian)

```css
.workspace-leaf-content:has(.rht-reading-progress) {
  container-type: inline-size;
}
```
