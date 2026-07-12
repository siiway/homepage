# Git Commit Conventions

## Branch Strategy

Adopt the Trunk-Based Development model.

| Branch  | Purpose                | Naming Rule                          | Lifespan              |
| ------- | ---------------------- | ------------------------------------ | --------------------- |
| main    | Only long-lived branch | `main`                               | Permanent             |
| feature | Feature branch         | `feature/[ticket]-short-description` | No more than 2 days   |
| bugfix  | Bug fix                | `bugfix/[ticket]-short-description`  | No more than 1 day    |
| hotfix  | Hot fix                | `hotfix/[ticket]-short-description`  | Within hours          |
| release | Release preparation    | `release/v[version]`                 | Deleted after release |

Rules: Feature branches are created from main, no more than 2 days. Use Feature Flags for large features. Force push on main is forbidden. CI and review must pass before merging.

## Commit Message Format

Follow Conventional Commits:

```
<type>(<scope>): <subject>
[body]
[footer]
```

- type: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- scope: Scope of change (optional)
- subject: Imperative mood, no more than 50 characters, no period, no initial capitalization
- body: Explain what and why, no more than 72 characters per line
- footer: Reference issues (closes/refs), breaking changes prefixed with BREAKING CHANGE

Example:

```
feat(payment): add WeChat Pay callback handling
Integrated WeChat Pay async notification API to support automatic order status updates.
Signature verification ensures callback source legitimacy.
closes #234
```

## Commit Granularity

- One commit does one thing
- Each commit passes CI independently
- New feature + corresponding tests can be in the same commit
- Refactoring + feature changes must be separated
- Format adjustments + logic changes must be separated
- Multiple independent fixes each in their own commit

## Pull Request Conventions

Title format: `<type>(<scope>): <subject>`

Description template includes: changes, reason for changes, testing method, related issues, checklist

Rules: Keep PRs as small as possible (recommended no more than 400 lines). Request review after CI passes. At least 1 approval required. Merge with Squash Merge.

## Versioning and Tags

Semantic versioning: `v<major>.<minor>.<patch>[-prerelease]`

- Breaking change: major+1
- Backward-compatible new feature: minor+1
- Backward-compatible fix: patch+1

Tag format: `v1.2.3`

## Prohibited Actions

- No force push to main
- No committing secrets/credentials/tokens
- No committing IDE configs/temporary files
- No unformatted code
- No meaningless commit messages ("update", "WIP")
- No single commit with multiple unrelated changes
