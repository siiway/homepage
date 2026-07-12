# Punctuation Conventions

> This specification applies to written text in documentation, code comments, commit messages, PR descriptions, and issue content. It does not govern punctuation within string literals in code.

---

## 1. Sentence-Ending Punctuation

### 1.1 Periods

Use a period to end complete sentences in documentation and comments.

- Do not add a period after headings, list items that are fragments, or table cell content.
- A single sentence that forms a complete list item ends with a period if it is a full sentence; omit it if the item is a short phrase.

```markdown
<!-- bad - period after heading -->

## Overview.

<!-- good -->

## Overview
```

```markdown
<!-- bad - inconsistent list -->

- Checks input validity.
- Runs the test suite
- Outputs a report.

<!-- good - all fragments, no periods -->

- Check input validity
- Run the test suite
- Output a report

<!-- good - all full sentences, with periods -->

- This step checks input validity.
- This step runs the test suite.
- This step outputs a report.
```

### 1.2 Exclamation and Question Marks

Avoid exclamation marks in technical documentation; they read as unprofessional. Use them only for genuine warnings.

Use question marks only in FAQ sections or explicit questions.

---

## 2. Commas

### 2.1 Serial (Oxford) Comma

Always use the serial comma before the last item in a list of three or more:

```markdown
<!-- bad -->
The function accepts a name, type and value.

<!-- good -->
The function accepts a name, type, and value.
```

### 2.2 Comma Splices

Do not join two independent clauses with only a comma. Use a period, semicolon, or conjunction:

```markdown
<!-- bad -->
The request succeeds, the response contains the user object.

<!-- good -->
The request succeeds. The response contains the user object.

<!-- good -->
The request succeeds, and the response contains the user object.
```

---

## 3. Colons and Semicolons

### 3.1 Colons

Use a colon to introduce a list, explanation, or example. The text before the colon must be a complete clause:

```markdown
<!-- bad -->
The supported formats are:

- JSON
- YAML

The function requires: a name and a type.

<!-- good -->
The following formats are supported:

- JSON
- YAML

The function requires two arguments: a name and a type.
```

### 3.2 Semicolons

Use a semicolon to separate two closely related independent clauses without a conjunction. Prefer a period when in doubt:

```markdown
<!-- acceptable -->
The first pass parses the AST; the second pass performs type checking.

<!-- also good -->
The first pass parses the AST. The second pass performs type checking.
```

Do not use semicolons to separate list items in documentation. Use bullet points instead.

---

## 4. Quotation Marks

### 4.1 Double vs. Single Quotes

Use double quotation marks `"..."` for quoting text, terms, or direct speech in documentation:

```markdown
<!-- good -->
The term "idempotent" means that repeated calls produce the same result.
```

Do not use quotation marks to highlight technical terms; use backticks instead:

```markdown
<!-- bad -->
Set the "timeout" field to 0 to disable the limit.

<!-- good -->
Set the `timeout` field to `0` to disable the limit.
```

### 4.2 Punctuation Placement

Place punctuation inside the closing quotation mark only if it is part of the quoted content. Otherwise, place it outside:

```markdown
<!-- punctuation is NOT part of the quote -->
The error message reads "connection refused".
Click "Save", then close the dialog.

<!-- punctuation IS part of the quote -->
She said, "Please restart the service."
```

---

## 5. Parentheses and Brackets

### 5.1 Parentheses

Use parentheses for supplementary information that could be removed without changing the meaning of the sentence. Keep parenthetical content concise:

```markdown
<!-- good -->
The endpoint returns a 404 status code (resource not found) when the ID is invalid.
```

If the parenthetical forms a complete sentence on its own, place the period inside the closing parenthesis:

```markdown
<!-- good -->
See the configuration reference for details. (A full list of options is available in Appendix A.)
```

### 5.2 Square Brackets

Use square brackets for optional placeholders in command syntax, not for general prose:

```markdown
<!-- good -->
git commit -m "<message>" [--no-verify]
```

---

## 6. Hyphens and Dashes

### 6.1 Hyphens

Use hyphens to form compound modifiers before a noun:

```markdown
<!-- good -->
A read-only field
An open-source library
A well-known issue
```

Do not hyphenate compound modifiers that follow a noun:

```markdown
<!-- good -->
The field is read only.
The library is open source.
```

Hyphenate number-unit compounds used as modifiers:

```markdown
<!-- good -->
A 100-character limit
A 2-second timeout
```

### 6.2 Em Dashes

Use an em dash (—) to set off a strong parenthetical or abrupt change in thought. Do not add spaces around the em dash:

```markdown
<!-- good -->
The function returns null—not undefined—when the value is missing.
```

Do not use two hyphens (`--`) as a substitute for an em dash in documentation.

### 6.3 En Dashes

Use an en dash (–) for ranges of numbers, dates, or other values:

```markdown
<!-- good -->
Lines 10–25
2023–2024
```

---

## 7. Apostrophes

Use apostrophes only for contractions and possessives.

Do not use contractions in formal documentation:

```markdown
<!-- bad (formal docs) -->
Don't call this function directly.

<!-- good -->
Do not call this function directly.
```

For possessives of singular nouns (including those ending in s), add `'s`:

```markdown
<!-- good -->
The module's exports
The process's lifecycle
```

For plural possessives ending in s, add only an apostrophe:

```markdown
<!-- good -->
The components' props
```

Do not use an apostrophe to pluralize acronyms or numbers:

```markdown
<!-- bad -->
URL's, ID's, 1990's

<!-- good -->
URLs, IDs, 1990s
```

---

## 8. Ellipsis

Use an ellipsis (`...`) only to indicate omitted content in a quotation or a trailing continuation. Do not use it to suggest vagueness:

```markdown
<!-- bad -->
You can configure various options...

<!-- good -->
The signature is: fn(name, type, ...args)
```

In code examples, use a comment to indicate omitted lines rather than an ellipsis:

```js
// good
function foo() {
  // ...
}
```

---

## 9. Full-Width and Half-Width Punctuation

### 9.1 Full-Width Punctuation

Use full-width punctuation in Chinese prose:

| Symbol            | Full-width  | Half-width  |
| ----------------- | ----------- | ----------- |
| Period            | 。          | .           |
| Comma             | ，          | ,           |
| Ideographic comma | 、          | ,           |
| Colon             | ：          | :           |
| Semicolon         | ；          | ;           |
| Exclamation mark  | ！          | !           |
| Question mark     | ？          | ?           |
| Quotation marks   | "..." '...' | "..." '...' |
| Parentheses       | （）        | ()          |
| Em dash           | ——          | —           |
| Ellipsis          | ……          | ...         |

### 9.2 Half-Width Punctuation

Use half-width punctuation in the following cases:

- English sentences
- Code, commands, and file paths
- Numbers and units
- Markdown syntax, such as links (`[text](url)`) and code blocks

---

## 10. Technical Writing Conventions

### 10.1 Code in Prose

Always wrap inline code references (function names, variable names, file names, commands, values) in backticks:

```markdown
<!-- bad -->
Call the render function after mounting.
Set debug to true in the config file.

<!-- good -->
Call the `render` function after mounting.
Set `debug` to `true` in the config file.
```

### 10.2 Units and Numbers

Write out numbers one through nine; use digits for 10 and above. Always use digits with units:

```markdown
<!-- good -->
There are three retry attempts.
The timeout is 30 seconds.
The buffer holds 4 KB.
```

Use a space between the number and the unit, except for percentages:

```markdown
<!-- good -->
16 MB, 100 ms, 80%
```

### 10.3 Mixed Chinese and English Text

Add one half-width space between Chinese text and English words or numbers:

```markdown
<!-- bad -->
Use Node.js运行脚本，版本需≥18。

<!-- good -->
Use Node.js 运行脚本，版本需 ≥ 18。
```

Do not add spaces around Chinese punctuation:

```markdown
<!-- bad -->
请求成功 ，响应体包含用户对象 。

<!-- good -->
请求成功，响应体包含用户对象。
```
