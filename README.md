# SiiWay Team Homepage

SiiWay 团队官方主页源代码仓库。

本项目基于 [VitePress](https://vitepress.dev/) 构建，展示 SiiWay 团队的开源项目概览、成员介绍及开发规范。

- **官方网站**: [siiway.org](https://siiway.org)
- **文档语言**: 简体中文 & English

## 目录

- [环境要求](#环境要求)
- [开发指南](#开发指南)
- [部署说明](#部署说明)
- [目录结构](#目录结构)
- [成员系统](#成员系统)
- [参与贡献](#参与贡献)
- [版权与许可](#版权与许可)

## 环境要求

- **Node.js**: v20.0.0 或更高版本
- **包管理器**: bun

## 开发指南

### 1. 获取代码

```bash
git clone https://github.com/siiway/homepage.git
cd homepage
```

### 2. 安装依赖

```bash
bun i
```

### 3. 启动开发服务器

```bash
bun dev
```

默认监听 `localhost:5179`，支持热重载。

### 4. 构建生产版本

```bash
bun build
```

产物输出至 `.vitepress/dist` 目录。构建启用 `cleanUrls`，所有 URL 不带 `.html` 后缀。

### 5. 预览构建产物

```bash
bun preview
```

默认监听 `localhost:5189`。

## 部署说明

任何支持静态网站托管的服务均可使用（GitHub Pages、Vercel、Netlify、Cloudflare Pages）。

推送代码至 `main` 分支将自动触发 CI/CD 流程进行构建和部署。

## 目录结构

```
.
├── .vitepress/                  # VitePress 核心配置
│   ├── data/                    # 数据文件
│   │   ├── coc-en.data.ts       # 英文版行为准则
│   │   ├── coc-zh.data.ts       # 中文版行为准则
│   │   ├── members-en.data.ts   # 英文版成员卡片生成
│   │   ├── members-zh.data.ts   # 中文版成员卡片生成
│   │   └── members.json         # 成员数据（名称/头像/座右铭）
│   ├── theme/                   # 自定义主题
│   │   ├── index.ts             # 主题入口
│   │   ├── style.css            # 全局样式、字体、成员卡片
│   │   ├── CustomLayout.vue     # 自定义布局
│   │   ├── ThemeLayout.vue      # 主题布局（含切换动画）
│   │   ├── RouteEnhancements.vue # 路由进度条与图片骨架屏
│   │   ├── LangRedirect.vue     # 无语言前缀路径的客户端语言重定向（404 槽）
│   │   ├── EasterEgg.vue        # 标题彩蛋
│   │   └── AprilFools.vue       # 愚人节彩蛋
│   └── config.mts               # 站点配置
├── zh/                          # 中文内容
│   ├── about/                   # 关于（团队介绍/联系/招新/规则）
│   ├── dev/                     # 开发规范（Git/命名/Python/TS/Go/贡献）
│   ├── members/                 # 成员个人页面
│   ├── misc/                    # 杂项（状态码列表）
│   └── index.md                 # 中文首页
├── en/                          # 英文内容
│   ├── about/                   # About (team/contact/recruitment/CoC)
│   ├── dev/                     # Dev guides (all 7 pages)
│   ├── members/                 # Members list
│   ├── misc/                    # Misc
│   └── index.md                 # English home
├── public/                      # 静态资源
│   ├── favicon.svg              # 网站图标
│   └── robots.txt               # 爬虫配置
├── index.md                     # 根首页（自动跳转 /zh/）
├── package.json
├── bun-lock.yaml
├── LICENSE
└── README.md
```

## 成员系统

成员数据存储在 `.vitepress/data/members.json` 中，每个成员包含三个字段：

```json
{
  "key": { "name": "显示名称", "avatar": "/favicon.svg", "motto": "座右铭" }
}
```

- **name** — 显示名称（必填）
- **avatar** — 头像路径，图片放 `public/members/` 目录下
- **motto** — 座右铭（选填，默认"暂无座右铭"）

成员页以 3 列卡片网格展示。卡片设计参考 [vitepress-theme-curve](https://github.com/imsyy/vitepress-theme-curve) 的友链卡片。

### 字体

- 正文：**LXGW WenKai Screen**（霞鹭文楷屏幕版）
- 标题/粗体：**Noto Sans SC**（思源黑体简体）
- 安装方式：bun 依赖（`lxgw-wenkai-screen-web` + `noto-sans-sc`）

## 参与贡献

欢迎任何形式的贡献：

1. Fork 本仓库
2. 基于 `main` 分支创建新分支
3. 提交更改（遵循 [Git 提交规范](https://siiway.org/zh/dev/git)）
4. Push 到 Fork 仓库
5. 提交 Pull Request

请参考 [开发规范](https://siiway.org/zh/dev/) 保持代码风格一致。

## 版权与许可

### Copyright

Copyright © 2024-2026 **SiiWay Team**.

### License

本项目内容与代码采用 **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans)** 协议授权。

您可以自由地：
- **共享** — 在任何媒介以任何形式复制、发行本作品
- **演绎** — 修改、转换或以本作品为基础进行创作

惟须遵守：
- **署名** — 提供适当的署名信息，提供指向本许可协议的链接，标明是否对原始作品作了修改
- **相同方式共享** — 基于本作品进行创作，必须以相同的许可协议分发

### 引用与致谢

- 站点框架：[VitePress](https://vitepress.dev/)
- 成员卡片设计：[vitepress-theme-curve](https://github.com/imsyy/vitepress-theme-curve)
- 字体：[LXGW WenKai Screen](https://github.com/lxgw/LxgwWenKai-Screen) / [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC)
