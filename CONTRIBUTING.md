# 贡献指南 | Contributing Guide

感谢您对 RavenHogwarts Docs 项目的关注！我们欢迎任何形式的贡献。

Thank you for your interest in contributing to RavenHogwarts Docs! We welcome all forms of contributions.

## 🌍 语言 | Language

- [中文指南](#中文指南)
- [English Guide](#english-guide)

---

## 中文指南
### 🚀 快速开始

1. **Fork 项目**
```bash
# 克隆您的 fork
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs
```

2. 安装依赖
```bash
npm install
```

3. 本地预览
```bash
npm run docs:dev
```

4. 调试和验证

配置中启用了 `debugPrint: true` ，开发时可以在控制台查看侧边栏生成的调试信息。

```bash
# 构建测试，确保没有链接错误
npm run docs:vercel
npm run docs:preview
```


### ✍️ 文档写作规范

#### Front Matter 配置规范

```yaml
---
title: 页面标题  # 必需：用于侧边栏显示（useTitleFromFrontmatter: true）
order: 1  # 重要：用于同级目录下菜单排序（sortMenusByFrontmatterOrder: true）
draft: false  # 重要：设为true时文档将不显示（excludeFilesByFrontmatterFieldName: 'draft'）
---
```

#### 文件命名和组织规范

1. 文件优先级排序

根据通用配置中的 manualSortFileNameByPriority: ['index.md', 'guide', 'advanced-usage'] ：
- `index.md` - 最高优先级，作为目录首页，通常用于将工具介绍页显示
- `guide/` - 第二优先级，基础使用指南
- `advanced-usage/` - 第三优先级，高级用法
- 其他文件按文件树中顺序或 Front Matter 中的 `order` 值排序，`order` 值越小越靠前

2. 目录结构规范
```plain-text
plugin-name/
├── index.md          # 插件首页（必需）
├── guide/            # 基础指南目录
│   ├── index.md      # 指南首页, 通常用于给侧边栏别名显示
│   ├── installation.md
│   └── basic-usage.md
├── advanced-usage/   # 高级用法目录, 通常用于给侧边栏别名显示
│   ├── index.md
│   ├── configuration.md
│   └── api-reference.md
└── faq.md            # 其他文档
```

3. 排除文件规范

以下文件将被自动排除，无需手动配置：
- `changelog.md` - 更新日志（已在 `excludePattern` 中配置）
- 任何 Front Matter 中设置了 `draft: true` 的文件

#### 标题和链接规范
1. 标题层级
- H1 标题 ：每个文件只能有一个，用作页面主标题
- H2-H6 标题 ：用于内容层级，避免跳级
- 侧边栏会自动使用 Front Matter 中的 `title` ，如果没有则使用 H1 标题

2. 文件夹标题
- 每个文件夹都应该有 `index.md` 文件
- `index.md` 的 Front Matter 中的 `title` 将作为文件夹在侧边栏中的显示名称
- 文件夹链接会自动指向其 `index.md` 文件

3. 内部链接
- 链接使用需要使用特殊的相对路径：`[](/obsidian-yearly-glance/)`
  - 链接将会跳转到 `https://{domain}/{lang}/obsidian-yearly-glance/index.html`
- 链接文本应简洁明了，避免使用复杂的标题
- 链接应保持一致性，避免在文档迁移时变更链接

4. 图片资源
- 图片文件格式尽量使用 `.webp`
- 统一存放在 `docs/public/images/doc/{plugin shortname}` 目录下
- 图片文件名应简洁明了，避免使用复杂的标题
- 图片使用相对路径： `![截图](../../public/images/doc/plugin-name/screenshot.webp)` 
  - (可安装 `vscode-paste-image` 和 `Markdown Link Updater` 插件，实现自动重命名和路径更新)
- 由于 vitepress 的 `public` 目录会自动部署，在 `img` 组件中必须使用特殊的相对路径： `<ThemeImage lightSrc="/images/doc/plugin-name/screenshot.webp" />`

5. 文件引用
- 需要用 `/plugin-name/folder/file` 来引用
- 例如：```请参考： “[事件管理](/obsidian-yearly-glance/guide/event)” 页面```
- 如果使用相对路径引用，请不要带有后缀名，例如 `./event.md` 应写成 `./event`

#### 内容组织规范
1. 菜单折叠规范

根据配置 `collapseDepth: 2` ：
- 深度超过 2 级的菜单组会自动折叠
- 建议将相关内容组织在 2 级以内，避免过深的嵌套

2. 首字母大写

配置了 `capitalizeFirst: true` ，侧边栏菜单名称首字母会自动大写，但建议在编写时就保持规范：
- 文件名使用小写和连字符： `basic-usage.md`
- Front Matter 标题使用正确大小写： `title: Basic Usage`

#### 文档状态管理
1. 草稿文档

开发中的文档可以设置为草稿状态：
```yaml
---
title: 开发中的功能
draft: true  # 此文档不会出现在侧边栏中
---
```

2. 文档排序
```yaml
---
title: 快速开始
order: 1  # 数字越小，排序越靠前
---
```

#### 多语言文档规范
1. 目录结构对应

确保中英文文档结构一致：
```plain-text
docs/
├── zhHans/                # 中文文档
│   ├── index.md           # 首页
│   └── [plugin-name]/     # 插件文档目录
│       ├── index.md       # 插件首页
│       ├── guide/         # 使用指南
│       └── advanced/      # 高级用法
└── en/                    # 英文文档
    └── [same structure]   # 相同结构
```

### 🔄 提交流程
1. 创建分支
```bash
git checkout -b feature/your-feature-name
```

2. 进行更改
- 编辑文档
- 本地测试
- 确保构建成功

3. 提交更改
```bash
git add .
git commit -m "docs: add new plugin documentation"
git push origin feature/your-feature-name
```

4. 创建 Pull Request
- 详细描述更改内容
- 等待代码审查
- 提交 PR 后，会触发 vercel 的 preview 环境，可预览效果

## english-guide
### 🚀 Quick Start

1. **Fork the project**
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs
```

2. Install dependencies
```bash
npm install
```

3. Preview locally
```bash
npm run docs:dev
```

4. Debug and verify

`debugPrint: true` is enabled in the configuration. During development, you can view debug information generated by the sidebar in the console.

```bash
# Build test to ensure no broken links
npm run docs:vercel
npm run docs:preview
```


### ✍️ Document Writing Standards

#### Front Matter Configuration Standards

```yaml
---
title: Page Title  # Required: Used for sidebar display （useTitleFromFrontmatter: true）
order: 1  # Important: Used for menu sorting within the same directory （sortMenusByFrontmatterOrder: true）
draft: false  # Important: If set to true, the document will not be displayed（excludeFilesByFrontmatterFieldName: 'draft'）
---
```

#### File Naming and Organization Standards

1. File Priority Sorting

According to the configuration manualSortFileNameByPriority: ['index.md', 'guide', 'advanced-usage'] ：
- `index.md` - Highest priority, serves as the directory's homepage, usually used to display the tool's introduction page.
- `guide/` - Second priority, basic usage guide.
- `advanced-usage/` - Third priority, advanced usage.
- Other files are sorted by their order in the file tree or by the `order` value in Front Matter; the smaller the `order` value, the higher the position.

2. Directory Structure Standards
```plain-text
plugin-name/
├── index.md          # Plugin homepage (required)
├── guide/            # Basic guide directory
│   ├── index.md      # Guide homepage, usually used for sidebar alias display
│   ├── installation.md
│   └── basic-usage.md
├── advanced-usage/   # Advanced usage directory, usually used for sidebar alias display
│   ├── index.md
│   ├── configuration.md
│   └── api-reference.md
└── faq.md            # Other documents
```

3. File Exclusion Standards

The following files will be automatically excluded, no manual configuration needed:
- `changelog.md` - Changelog (already configured in `excludePattern` )
- Any file with `draft: true` set in its Front Matter.

#### Title and Link Standards
1. Title Levels
- H1 Title: Only one per file, used as the main page title.
- H2-H6 Titles: Used for content hierarchy, avoid skipping levels.
- The sidebar will automatically use the `title` from Front Matter, or the H1 title if `title` is not present.

2. Folder Titles
- Each folder should have an `index.md` file.
- The `title` in the Front Matter of `index.md` will be used as the folder's display name in the sidebar.
- Folder links will automatically point to their `index.md` file.

3. Internal Links
- Use a special relative path: `[](/obsidian-yearly-glance/)`
  - Link will jump to `https://{domain}/{lang}/obsidian-yearly-glance/index.html`
- Link text should be concise and clear, avoid using complex titles.
- Links should be consistent to avoid changes during document migration.

1. Image Resources
- Use `.webp` format for image files whenever possible.
- Store all images in the `docs/public/images/doc/{plugin shortname}` directory.
- Image filenames should be concise and clear.
- Use relative paths for referencing: `![Screenshot](/images/plugin-name/screenshot.webp)`
  - (Recommended) Install `vscode-paste-image` and `Markdown Link Updater` plugins to automatically rename and update image paths.
- Since vitepress's `public` directory will automatically deploy, in the `img` component, use a special relative path: `<ThemeImage lightSrc="/images/doc/plugin-name/screenshot.webp" />`

5. File Reference
- Use `/plugin-name/folder/file` to reference files.
- For example: ```Please refer to: "[Event Management](/obsidian-yearly-glance/guide/event)" page```
- If using relative paths, do not include the file extension, e.g. `./event.md` should be written as `./event`.

#### Content Organization Standards
1. Menu Collapse Standards

According to the configuration `collapseDepth: 2` :
- Menu groups deeper than 2 levels will automatically collapse.
- It is recommended to organize related content within 2 levels to avoid excessive nesting.

2. Capitalize First Letter 

`capitalizeFirst: true` is configured, so the first letter of sidebar menu names will be automatically capitalized. However, it is recommended to maintain this standard while writing:
- Use lowercase and hyphens for filenames: `basic-usage.md`
- Use correct capitalization for Front Matter titles: `title: Basic Usage`

#### Document Status Management
1. Draft Documents

Documents under development can be set to draft status:
```yaml
---
title: Feature in Development
draft: true  # This document will not appear in the sidebar
---
```

2. Document Sorting
```yaml
---
title: Quick Start
order: 1  # Smaller numbers are sorted first
---
```

#### Multilingual Document Standards
1. Corresponding Directory Structure

Ensure consistent structure for Chinese and English documents:
```plain-text
docs/
├── zhHans/                # Chinese documents
│   ├── index.md           # Homepage
│   └── [plugin-name]/     # Plugin document directory
│       ├── index.md       # Plugin homepage
│       ├── guide/         # Usage guide
│       └── advanced/      # Advanced usage
└── en/                    # English documents
    └── [same structure]   # Same structure
```

### 🔄 Submission Process
1. Create a branch
```bash
git checkout -b feature/your-feature-name
```

2. Make changes
- Edit documents
- Test locally
- Ensure successful build

3. Commit changes
```bash
git add .
git commit -m "docs: add new plugin documentation"
git push origin feature/your-feature-name
```

4. Create a Pull Request
- Describe changes in detail
- Wait for code review and approval.
- After submitting the PR, Vercel's preview environment will be triggered for previewing.
