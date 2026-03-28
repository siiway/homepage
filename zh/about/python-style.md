# Python 代码规范

本文档用于统一 Python 项目的代码风格、工具链和提交流程，降低协作成本并提升可维护性。

## 目标

- 可读性优先，遵循 PEP 8 与 PEP 257。
- 自动化优先，尽量通过工具而不是人工争论风格问题。
- 本地与 CI 使用同一套检查标准。

## 推荐工具链

- Python: `3.13+`
- 包管理: `uv`
- 代码检查与格式化: `ruff`
- 类型检查: `ty`
- 测试: `pytest`
- 提交前钩子: `pre-commit`

## 目录与命名建议

- 包名、模块名使用小写加下划线，例如 `user_service.py`。
- 类名使用大驼峰，例如 `UserService`。
- 函数、变量使用小写加下划线，例如 `get_user_profile`。
- 常量使用全大写加下划线，例如 `MAX_RETRY_COUNT`。

## 格式化与静态检查

统一使用 `ruff`，避免 `black` + `isort` + `flake8` 的多工具分裂。

### 常用命令

```bash
ruff format
ruff check
ruff check --fix
```

- `ruff format` 负责代码格式化。
- `ruff check` 负责风格与常见问题检查。
- `--fix` 可自动修复部分问题。

## 类型检查（ty）

推荐通过 `uv tool install ty` 安装和使用：

```bash
uv tool install ty
ty check
```

若已在项目中安装 `ty`，也可使用：

```bash
ty check
```

## pyproject.toml 示例

以下配置可作为默认模板：

```toml
[project]
name = "example-python-project"
version = "0.1.0"
requires-python = ">=3.13"

[tool.ruff]
line-length = 100
target-version = "py313"
exclude = [
  ".git",
  ".venv",
  "dist",
  "build",
]

[tool.ruff.lint]
select = [
  "E", # pycodestyle (Errors)
  "F", # Pyflakes
  "I", # isort (Import sorting)
  "B", # flake8-bugbear
  "UP", # pyupgrade
  "N", # pep8-naming
]
ignore = [
  "E741", # Ambiguous variable name: l / O / I
  "E501", # Line too long (100 > 79 characters)
]

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
line-ending = "lf"

[tool.ty.environment]
python-version = "3.13"

[tool.ty.src]
include = ["src", "tests"]
exclude = ["build", "dist"]

[tool.ty.rules]
all = "error"

[tool.ty.terminal]
output-format = "full"
error-on-warning = false

[tool.pytest.ini_options]
minversion = "7.0"
addopts = "-q"
testpaths = ["tests"]
```

## 类型标注规范

- 新增业务代码默认要求完整函数签名标注。
- 公共接口必须提供类型标注。
- 对于复杂结构优先使用 `TypedDict`、`Protocol`、`dataclass`，避免大量 `dict[str, Any]`。

示例：

```python
from dataclasses import dataclass


@dataclass(slots=True)
class User:
    id: int
    name: str


def find_user_name(users: list[User], user_id: int) -> str | None:
    for user in users:
        if user.id == user_id:
            return user.name
    return None
```

## 测试规范

- 测试框架使用 `pytest`。
- 测试文件命名：`test_*.py`。
- 一个测试只验证一个主要行为。
- 回归修复必须补充测试。

常用命令：

```bash
pytest
pytest -q
pytest -k "keyword"
```

## 提交前检查流程

建议在本地执行以下顺序：

```bash
ruff format
ruff check
ty check
pytest
```

若项目启用 `pre-commit`，可配置：

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.11.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format
  - repo: local
    hooks:
      - id: ty-check
        name: ty check
        entry: ty check
        language: system
        pass_filenames: false
```

## CI 建议

在 CI 中至少包含以下步骤：

1. 安装依赖
2. `ruff check`
3. `ty check`
4. `pytest`

## 例外与扩展

- 若历史项目改造成本较高，可先启用 `ruff`，再逐步引入 `ty`。
- `pytest` 为可选项，小项目或测试成本较高的项目可忽略。
- 对性能敏感模块可以在评审中放宽部分规则，但必须说明原因。
