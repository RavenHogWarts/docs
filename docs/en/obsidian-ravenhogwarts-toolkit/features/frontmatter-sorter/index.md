# Frontmatter Sorter

::: tip Feature Introduction
1. Sort document frontmatter properties and values according to defined rules
2. Automatically sort frontmatter after modifications
:::

## Automatic Sorting
The logic monitors changes in `metadataCache` and performs sorting when changes are detected

This feature has known conflicts with the `Update time on edit` plugin. See [Solutions](../../support/known-issues.md) for details

## Ignore Rules
### Ignore Folders
Set specific folders whose files (including files in subfolders) will not participate in sorting

### Ignore Files
Set specific files that will not participate in sorting

## Sorting Rules
### Array Sorting
This rule applies to array-type frontmatter property values

::: code-group
```yaml [Before Sorting]
---
tags: [fix, break, feat]
---
```

```yaml [After Sorting]
---
tags: [break, feat, fix]
---
```
:::

### Case Sensitivity
This rule determines whether to treat uppercase and lowercase letters as the same when sorting

### Priority Sort Group
This rule is used to keep certain frontmatter properties always at the top

Properties within the group are sorted alphabetically

Sorting order: Priority group properties > Other properties not in ignore group

::: code-group
```yaml [Before Sorting]
Assume priority sort group is set to topic, uid
---
uid: 241001001122234
tags: [fix, break, feat]
cssclasses: [show-toc]
topic: "[[parent file]]"
---
```

```yaml [After Sorting]
---
topic: "[[parent file]]"
uid: 241001001122234
cssclasses: [show-toc]
tags: [fix, break, feat]
---
```
:::

### Ignore Sort Group
This rule applies to certain properties that should maintain their original order

Properties within the group maintain their relative positions

::: code-group
```yaml [Before Sorting]
Assume priority sort group is set to topic, uid
Ignore sort group is set to cssclasses, created
---
uid: 241001001122234
tags: [fix, break, feat]
cssclasses: [show-toc]
created: 2024-10-01
topic: "[[parent file]]"
---
```

```yaml [After Sorting]
---
topic: "[[parent file]]"
uid: 241001001122234
tags: [fix, break, feat]
cssclasses: [show-toc]
created: 2024-10-01
---
```
:::

## Commands
This tool provides the following commands. Enter `frontmatterSorter` in the command palette to see these options:
1. Sort Current File: Sorts the currently active document. Consider setting a keyboard shortcut (e.g., `Alt + s`)
2. Sort All Files: Sorts all documents not in ignore rules. Use with caution as it modifies many files!

## Settings Options
1. Automatically sort frontmatter after property modifications
2. Set ignored folders
3. Set ignored files
4. Sorting Rule - Whether to alphabetically sort array-type frontmatter property values
5. Sorting Rule - Whether sorting is case-sensitive
6. Sorting Rule - Set priority sort group for frontmatter properties
7. Sorting Rule - Set ignore sort group for frontmatter properties
