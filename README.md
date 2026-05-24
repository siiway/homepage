# SiiWay Team Homepage

SiiWay 团队官方主页源代码仓库。

本项目基于 [VitePress](https://vitepress.dev/) 构建，包含团队介绍、成员展示、开发规范及社区联系方式。

- **官方网站**: [siiway.org](https://siiway.org)
- **文档语言**: 简体中文 & English (部分)

## 目录

- [环境要求](#环境要求)
- [开发指南](#开发指南)
- [部署说明](#部署说明)
- [目录结构](#目录结构)
- [参与贡献](#参与贡献)
- [版权与许可](#版权与许可)

## 环境要求

- **Node.js**: v18.0.0 或更高版本
- **包管理器**: bun（也可使用 pnpm 或 npm）

## 开发指南

### 1. 获取代码

```bash
git clone https://github.com/siiway/homepage.git
cd homepage
```

### 2. 安装依赖

```bash
bun install
```

### 3. 启动开发服务器

启动本地热重载开发服务器，默认监听地址为 `localhost:5179`。

```bash
bun run dev
```

### 4. 构建生产版本

将 Markdown 文档编译为静态 HTML 文件，构建产物输出至 `.vitepress/dist` 目录。

```bash
bun run build
```

### 5. 预览构建产物

在本地模拟生产环境服务器，默认监听 `localhost:5189`。

```bash
bun run preview
```

## 部署说明

本项目部署为静态站点。支持任何静态网站托管服务（如 GitHub Pages、Vercel、Netlify、Cloudflare Pages）。

推送代码至 `main` 分支将自动触发 CI/CD 流程进行构建和部署。

## 目录结构

```ini
.
├── .vitepress/                  # VitePress 核心配置
│   ├── data/                    # 数据文件
│   │   ├── coc-en.data.ts       # 英文版行为准则数据
│   │   ├── coc-zh.data.ts       # 中文版行为准则数据
│   │   ├── members-en.data.ts   # 英文版成员数据
│   │   ├── members-zh.data.ts   # 中文版成员数据
│   │   └── members.json         # 成员列表数据
│   ├── theme/                   # 自定义主题样式与布局
│   │   ├── CustomLayout.vue     # 自定义布局入口
│   │   ├── ThemeLayout.vue      # 主题布局（含明暗切换动画）
│   │   ├── RouteEnhancements.vue# 路由进度条增强
│   │   ├── index.ts             # 主题入口文件
│   │   └── style.css            # 全局样式与响应式调整
│   └── config.mts               # 站点配置文件（导航、侧边栏等）
├── en/                          # 英文内容目录
│   ├── about/                   # 关于我们（英文）
│   │   ├── code-of-conduct.md
│   │   ├── contact.md
│   │   ├── report.md
│   │   └── website.md
│   ├── members/                 # 成员介绍（英文）
│   ├── misc/                    # 其他内容（英文）
│   │   └── stopcode.md
│   └── index.md                 # 英文首页（自定义布局）
├── zh/                          # 中文内容目录
│   ├── about/                   # 关于我们（中文）
│   │   ├── code-of-conduct.md
│   │   ├── contact.md
│   │   ├── join.md
│   │   ├── report.md
│   │   ├── rules-qq.md
│   │   ├── us.md
│   │   ├── website.md
│   │   ├── wechat.md
│   │   └── siiway-wechat.png
│   ├── dev/                     # 开发规范（中文）
│   │   ├── contributing.md
│   │   ├── go-style.md
│   │   ├── index.md
│   │   ├── python-style.md
│   │   └── ts-style.md
│   ├── members/                 # 成员介绍（中文）
│   ├── misc/                    # 其他内容（中文）
│   │   └── stopcode.md
│   └── index.md                 # 中文首页（自定义布局）
├── public/                      # 静态资源
│   ├── go/                      # 跳转页面
│   │   └── mail.html
│   ├── favicon.svg              # 网站图标
│   ├── siiwayhub.svg            # SiiWay Hub 图标
│   ├── _redirects               # 重定向配置
│   ├── BingSiteAuth.xml         # Bing 站点验证
│   ├── lang-redirect.js         # 语言重定向脚本
│   └── robots.txt               # 爬虫配置
├── .obsidian/                   # Obsidian 工作区配置
├── index.md                     # 根首页（自动重定向至 /zh/）
├── package.json                 # 项目依赖与脚本配置
├── bun.lock                     # 依赖锁定文件
├── tsconfig.json                # TypeScript 配置
├── LICENSE                      # 许可证文件（CC BY-SA 4.0）
└── README.md                    # 项目说明文档
```

## 参与贡献

我们欢迎并感谢任何形式的贡献。如果您发现文档错误或有改进建议，请遵循以下流程：

1. Fork 本仓库。
2. 基于 `main` 分支创建一个新的分支（`git checkout -b your-branch-name`）。
3. 提交您的更改。
4. Push 到您的 Fork 仓库。
5. 提交 Pull Request 等待审核。

请注意保持代码风格整洁，并避免提交不必要的构建文件。

## 版权与许可

### Copyright

Copyright © 2024-present **SiiWay Team**.

### License

本项目内容与代码采用 **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans)**（署名-相同方式共享 4.0 国际）协议进行授权。

您可以自由地：
- **共享** — 在任何媒介以任何形式复制、发行本作品。
- **演绎** — 修改、转换或以本作品为基础进行创作。

惟须遵守下列条件：
- **署名** — 您必须提供适当的署名信息，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。
- **相同方式共享** — 如果您再混合、转换或者基于本作品进行创作，您必须基于与原先许可协议相同的许可协议分发您贡献的作品。
