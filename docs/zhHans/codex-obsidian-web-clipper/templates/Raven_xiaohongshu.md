---
title: Raven_小红书视频笔记剪藏
author: RavenHogwarts
order: 2
draft: false
---

::: info
作者：RavenHogwarts

主页：https://github.com/RavenHogwarts

适用网站：[小红书 PC](https://www.xiaohongshu.com/) 视频

tips：要求在新标签页打开视频笔记才能正确匹配数据
:::

::: details json 代码
```json
{
  "schemaVersion": "0.1.0",
  "name": "小红书视频",
  "behavior": "overwrite",
  "noteContentFormat": "# {{title|replace:(\" - 小红书\":\"\")}}\n\n<video controls src=\"{{meta:name:og:video}}\" width=\"100%\"></video>\n\n```\n{{meta:name:description}}\n```",
  "properties": [
    {
      "name": "aliases",
      "value": "",
      "type": "multitext"
    },
    {
      "name": "categories",
      "value": "[[剪藏]]",
      "type": "multitext"
    },
    {
      "name": "created_date",
      "value": "{{date|date:\\\"YYYY-MM-DD\\\"}}",
      "type": "date"
    },
    {
      "name": "author",
      "value": "{{author|split:\\\", \\\"|first|replace:(\\\"关注\\\":\\\"\\\")|wikilink}}",
      "type": "multitext"
    },
    {
      "name": "thumbnail",
      "value": "{{meta:name:og:image}}",
      "type": "text"
    },
    {
      "name": "description",
      "value": "{{description}}",
      "type": "text"
    },
    {
      "name": "link",
      "value": "{{url|replace:(\\\"explore\\\":\\\"discovery/item\\\",\\\"?\\\":\\\"?source=webshare&xhsshare=pc_web&\\\",\\\"&xsec_source=\\\":\\\"&xsec_source=pc_share\\\")}}",
      "type": "text"
    },
    {
      "name": "tags",
      "value": "clippings",
      "type": "multitext"
    },
    {
      "name": "cssclasses",
      "value": "",
      "type": "multitext"
    }
  ],
  "triggers": [
    "https://www.xiaohongshu.com/"
  ],
  "noteNameFormat": "{{title|replace:(\" - 小红书\":\"\")}}",
  "path": "_inbox/Web Clipper/{{domain}}/"
}
```
:::

![剪藏效果](../../../public/images/doc/CODEX/obwc-2.webp)
