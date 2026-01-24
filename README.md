# SiiWay Team Homepage

SiiWay 团队官方主页源代码仓库。

本项目基于 [VitePress](https://vitepress.dev/) 构建，旨在展示 SiiWay 团队的开源项目概览、发展历程、成员介绍及社区动态。

- **官方网站**: [https://siiway.org](https://siiway.org)
- **文档语言**: 简体中文

## 目录

- [简介](#简介)
- [环境要求](#环境要求)
- [开发指南](#开发指南)
- [部署说明](#部署说明)
- [目录结构](#目录结构)
- [参与贡献](#参与贡献)
- [版权与许可](#版权与许可)

## 简介

SiiWay 是一个致力于现代化全栈解决方案的开源团队。本仓库维护了团队主页的全部成员介绍与文档内容。站点采用静态站点生成（SSG）架构，具有高性能、轻量化和易于维护的特点。

## 环境要求

在开始开发之前，请确保您的开发环境满足以下要求：

- **Node.js**: v18.0.0 或更高版本 (推荐使用 LTS 版本)
- **包管理器**: npm (v9+), pnpm (推荐), 或 yarn

## 开发指南

### 1. 获取代码

```bash
git clone https://github.com/SiiWay/homepage.git
cd homepage
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

启动本地热重载开发服务器。默认访问地址为 `http://localhost:5179`。

```bash
npm run dev
```

### 4. 构建生产版本

将 Markdown 文档编译为静态 HTML 文件。构建产物将输出至 `.vitepress/dist` 目录。

```bash
npm run build
```

### 5. 预览构建产物

在本地模拟生产环境服务器，用于检查构建后的样式和脚本是否正常。

```bash
npm run preview
```

## 部署说明

本项目配置为静态页面部署。任何支持静态网站托管的服务（如 GitHub Pages, Vercel, Netlify, Cloudflare Pages）均可使用。

通常情况下，推送代码至 `main` 分支将自动触发 CI/CD 流程进行构建和部署。

## 目录结构

```text
.
├── .vitepress/                  # VitePress 核心配置
│   ├── theme/                   # 自定义主题样式与布局
│   │   ├── style.css            # 全局样式与响应式调整
│   │   └── Layout.vue           # 页面布局组件 (可选)
│   └── config.mts               # 站点配置文件 (导航、侧边栏等)
├── public/                      # 静态资源 (图片、Favicon)
├── index.md                     # 首页内容
├── package.json                 # 项目依赖与脚本配置
└── README.md                    # 项目说明文档
```

## 参与贡献

我们欢迎并感谢任何形式的贡献。如果您发现文档错误或有改进建议，请遵循以下流程：

1.  Fork 本仓库。
2.  基于 `main` 分支创建一个新的特性分支 (`git checkout -b feat/your-feature`)。
3.  提交您的更改。
4.  Push 到您的 Fork 仓库。
5.  提交 Pull Request 等待审核。

请注意保持代码风格整洁，并避免提交不必要的构建文件。

## 版权与许可

### Copyright

Copyright © 2023-2025 **SiiWay Team**. All Rights Reserved.

### License

本项目内容与代码采用 **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans)** (署名-相同方式共享 4.0 国际) 协议进行授权。

您可以自由地：
- **共享** — 在任何媒介以任何形式复制、发行本作品。
- **演绎** — 修改、转换或以本作品为基础进行创作。

惟须遵守下列条件：
- **署名** — 您必须提供适当的证书，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。

- **相同方式共享** — 如果您再混合、转换或者基于本作品进行创作，您必须基于与原先许可协议相同的许可协议分发您贡献的作品。
