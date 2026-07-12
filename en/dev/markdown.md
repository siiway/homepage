# Markdown Style Guide

> This guide applies to every Markdown file (`.md`) in the repository, including site documentation, the README, and issue and PR descriptions. The team uses [Prettier](https://prettier.io/) for formatting and [markdownlint](https://github.com/DavidAnson/markdownlint) for rule checking; their configurations are aligned (see Section 12) so that formatting first and linting second never conflict.

## 1. General Principles

- Use ATX-style headings (`#`), never Setext (underline) headings.
- Indent with spaces; never use tabs.
- Do not leave trailing whitespace, and end every file with a single newline.
- Separate block-level elements (headings, paragraphs, lists, code blocks, tables) with one blank line.
- Do not use more than one consecutive blank line.

## 2. Headings

### 2.1 Levels

Each document has exactly one top-level heading (`#`) as its title. Increase heading levels one at a time; do not skip levels:

```markdown
<!-- bad - jumps from H2 to H4 -->

## Overview

#### Details

<!-- good -->

## Overview

### Details
```

### 2.2 Formatting

Put one space between `#` and the heading text, surround headings with a blank line, and do not end them with punctuation:

```markdown
<!-- bad - missing space, trailing punctuation -->

##Overview:

<!-- good -->

## Overview
```

## 3. Paragraphs and Line Breaks

Separate paragraphs with a single blank line. Avoid trailing-space hard breaks; start a new paragraph or use a list instead:

```markdown
<!-- bad - trailing-space break (invisible, easily lost) -->
First line␠␠
Second line

<!-- good -->
First line

Second line
```

## 4. Lists

### 4.1 Unordered Lists

Use the hyphen `-` as the bullet marker; do not mix `*` or `+`:

```markdown
<!-- bad -->
* First item
+ Second item

<!-- good -->
- First item
- Second item
```

### 4.2 Ordered Lists

Prefer incrementing numbers `1.`, `2.`, `3.`. Numbering is normalized automatically by Prettier, so you do not need to maintain it by hand:

```markdown
<!-- good -->

1. First step
2. Second step
3. Third step
```

### 4.3 Nesting and Indentation

Nested-list indentation is handled by Prettier (two spaces under an unordered parent, three under an ordered parent), so markdownlint no longer enforces indent width (`MD007` is disabled). Leave one blank line between a list and surrounding prose:

```markdown
<!-- good -->

- First item
  - Sub-item A
  - Sub-item B
- Second item
```

## 5. Emphasis

Use `**` for bold and `_` for italics (matching Prettier's output). Do not use emphasis in place of a heading:

```markdown
<!-- bad - bold used as a heading -->
**Configuration**

<!-- bad - asterisk italics, underscore bold -->
This is *italic* and __bold__.

<!-- good -->
This is _italic_ and **bold**.
```

## 6. Code

### 6.1 Inline Code

Wrap function names, variable names, file names, commands, and values in backticks:

```markdown
<!-- good -->
Run `bun dev` to start the dev server, and set `debug` to `true`.
```

### 6.2 Fenced Code Blocks

Use backtick fences (```), not tildes (`~~~`). Always specify a language; use `text` when none applies:

````markdown
<!-- bad - no language -->

```
bun install
```

<!-- good -->

```bash
bun install
```
````

## 7. Links and Images

- Use inline links `[text](url)`. Omit the `.md` extension for internal links (the site enables `cleanUrls`).
- Always provide meaningful alt text for images.

```markdown
<!-- bad - internal link with .md, image without alt -->
See the [naming guide](./naming.md).
![](/logo.svg)

<!-- good -->
See the [naming guide](./naming).
![SiiWay logo](/logo.svg)
```

## 8. Tables

Use pipe tables with a header separator row, and pad cell content with one space on each side:

```markdown
<!-- good -->

| Branch  | Purpose        |
| ------- | -------------- |
| main    | Long-lived     |
| feature | Feature branch |
```

Columns do not need to be aligned to equal character widths; markdownlint does not enforce column width, only structural completeness.

## 9. Blockquotes and Thematic Breaks

- Use `>` for blockquotes, separated from prose by a blank line.
- Use three hyphens `---` for thematic breaks, surrounded by blank lines.

```markdown
<!-- good -->

> Note: this step requires administrator privileges.

---
```

## 10. Inline HTML and GitHub Extensions

- Inline HTML and Vue components are allowed where necessary (a VitePress feature); markdownlint permits them (`MD033` is disabled).
- Use HTML comments (`<!-- -->`) for explanatory comments in Markdown examples so they do not render as page content.
- Prefer GitHub Alerts over VitePress custom containers or hand-written HTML for callouts:

```markdown
<!-- good -->
> [!NOTE]
> Prefer bun as the package manager.

> [!WARNING]
> Force-pushing the main branch is forbidden.
```

- Place frontmatter at the very top of the file, wrapped in a pair of `---`:

```markdown
---
title: Page Title
---

# Page Title
```

## 11. Relationship to the Punctuation Guide

Markdown syntax (links, code, list markers, and so on) always uses half-width characters. Punctuation within prose follows the [Punctuation Conventions](./punctuation).

## 12. Toolchain: Prettier and markdownlint

The team uses two tools with clearly separated, non-conflicting responsibilities:

- **Prettier** handles _formatting_: list markers, italic/bold characters, indentation, table alignment, blank lines, and trailing newlines. Configured in `.prettierrc`.
- **markdownlint** handles _rule checking_: heading levels, fenced-code languages, duplicate headings, and other semantic rules. Configured in `.markdownlint.jsonc`.

Related configuration files:

- [`.markdownlint.jsonc`](../../.markdownlint.jsonc): Markdown rule configuration.
- [`.prettierrc`](../../.prettierrc): Prettier formatting configuration.

### 12.1 Avoiding Conflicts

Because Prettier rewrites some formatting, every markdownlint rule that could conflict with it is aligned to Prettier's default output or disabled:

| Rule  | Setting             | Description                                       |
| ----- | ------------------- | ------------------------------------------------- |
| MD003 | `atx`               | ATX-style headings (matches Prettier)             |
| MD004 | `dash`              | `-` for unordered lists (matches Prettier)        |
| MD007 | `false`             | Indentation left to Prettier (avoids ol conflict) |
| MD013 | `false`             | No line-length limit (Prettier `proseWrap`)       |
| MD024 | `siblings_only`     | Forbid duplicate sibling headings                 |
| MD026 | full-width included | No trailing punctuation in headings               |
| MD029 | `one_or_ordered`    | Allow all `1.` or incrementing (avoids conflict)  |
| MD033 | `false`             | Allow inline HTML / Vue components                |
| MD035 | `---`               | `---` for thematic breaks (matches Prettier)      |
| MD041 | `false`             | Allow frontmatter / components first              |
| MD046 | `fenced`            | Fenced code blocks (matches Prettier)             |
| MD048 | `backtick`          | Backtick fences (matches Prettier)                |
| MD049 | `underscore`        | `_` for italics (aligned with Prettier)           |
| MD050 | `asterisk`          | `**` for bold (matches Prettier)                  |

Both `.markdownlintignore` and `.prettierignore` exclude `node_modules`, build output, and similar directories.

### 12.2 Formatting and Checking Locally

Format first, then lint:

```bash
# 1. Format with Prettier (auto-fixes layout)
bun run format

# 2. Check with markdownlint (verifies semantic rules)
bun run lint:md
```

Install the Prettier and markdownlint editor plugins (such as `esbenp.prettier-vscode` and `DavidAnson.vscode-markdownlint` for VS Code); they read `.prettierrc` and `.markdownlint.jsonc` respectively.
