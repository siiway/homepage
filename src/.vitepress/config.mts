import { defineConfig } from "vitepress";
import rawMembers from "./data/members.json";

const currentYear = new Date().getFullYear();

const members = Object.entries(rawMembers).map(([key, value]) => {
  const name = typeof value === "string" ? value : value.name;
  return {
    text: name,
    link: `/zh/members/${key}`,
  };
});

const zhSearchTranslations = {
  button: {
    buttonText: "搜索",
    buttonAriaLabel: "搜索",
  },
  modal: {
    displayDetails: "显示详细列表",
    resetButtonTitle: "重置搜索",
    backButtonTitle: "关闭搜索",
    noResultsText: "没有结果",
    footer: {
      selectText: "选择",
      selectKeyAriaLabel: "输入",
      navigateText: "导航",
      navigateUpKeyAriaLabel: "上箭头",
      navigateDownKeyAriaLabel: "下箭头",
      closeText: "关闭",
      closeKeyAriaLabel: "Esc",
    },
  },
};

export default defineConfig({
  // title and desc here will be used when the page isn't properly loaded (e.g. lang redirecting)
  title: "SiiWay Team",
  description: "SiiWay Team's Homepage and Official Site",

  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  lastUpdated: true,
  sitemap: {
    hostname: "https://siiway.org",
  },

  vite: {
    ssr: {
      noExternal: ["naive-ui", "vueuc"],
    },
  },

  themeConfig: {
    // 左侧侧边栏上方的图标
    logo: "/favicon.svg",
    // 搜索功能 https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: zhSearchTranslations,
          },
        },
      },
    },
  },

  locales: {
    // === 中文版 (zh) ===
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",

      title: "SiiWay Team",
      description: "SiiWay Team 主页以及官方网站",

      themeConfig: {
        nav: [
          { text: "主页", link: "/zh/" },
          { text: "成员", link: "/zh/members/" },
          { text: "联系", link: "/zh/about/contact" },
          { text: "开发", link: "/zh/dev/", activeMatch: "^/zh/dev" },
        ],
        sidebar: [
          {
            text: "成员列表",
            link: "/zh/members/",
            collapsible: true,
            collapsed: true,
            items: members,
          },
          {
            text: "关于",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "举报", link: "/zh/about/report" },
              { text: "关于我们", link: "/zh/about/us" },
              { text: "联系我们", link: "/zh/about/contact" },
              { text: "招新公告", link: "/zh/about/join" },
              { text: "QQ 群规则", link: "/zh/about/rules-qq" },
              { text: "关于此网站", link: "/zh/about/website" },
              { text: "SiiWay 行为准则", link: "/zh/about/code-of-conduct" },
            ],
          },
          {
            text: "开发",
            link: "/zh/dev/",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "命名规范", link: "/zh/dev/naming" },
              { text: "标点符号使用规范", link: "/zh/dev/punctuation" },
              { text: "Markdown 格式规范", link: "/zh/dev/markdown" },
              { text: "贡献指南", link: "/zh/dev/contributing" },
              { text: "Go 代码规范", link: "/zh/dev/go-style" },
              { text: "Git 提交规范", link: "/zh/dev/git" },
              { text: "Python 代码规范", link: "/zh/dev/python-style" },
              { text: "TypeScript 代码规范", link: "/zh/dev/ts-style" },
            ],
          },
          {
            text: "外链",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "QQ 群", link: "https://wss.moe/qq" },
              { text: "QQ 频道", link: "https://wss.moe/pd" },
              { text: "飞书群组", link: "https://wss.moe/fs" },
              { text: "微信公众号", link: "https://wss.moe/wx" },
              { text: "Discord", link: "https://wss.moe/dc" },
              { text: "GitHub", link: "https://wss.moe/gh" },
              { text: "Telegram 群组", link: "https://wss.moe/tg" },
              { text: "Telegram 频道", link: "https://wss.moe/tgc" },
            ],
          },
        ],
        socialLinks: [],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/src/:path",
          text: "在 GitHub 上编辑本页",
        },
        lastUpdated: {
          text: "本页最后更新于",
        },
        footer: {
          message:
            '内容采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank" rel="noopener">CC BY-SA 4.0</a> 协议授权',
          copyright: `Copyright © 2024-${currentYear} <a href="https://github.com/siiway" target="_blank" rel="noopener">SiiWay 团队</a>`,
        },
        // 将"On this page"改为中文
        outline: {
          label: "本页目录",
        },
        // 汉化了 "Previous page" 与 "Next page"。
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        returnToTopLabel: "返回顶部",
        darkModeSwitchLabel: "外观",
        sidebarMenuLabel: "菜单",
      },
    },

    // === 英文版 (en) ===
    en: {
      label: "English",
      lang: "en",
      link: "/en/",

      title: "SiiWay Team",
      description: "SiiWay Team's Homepage and Official Site",

      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Members", link: "/en/members/" },
          { text: "Contact", link: "/en/about/contact" },
          { text: "Dev", link: "/en/dev/", activeMatch: "^/en/dev" },
        ],
        sidebar: [
          {
            text: "Members (CN Only)",
            link: "/en/members/",
            collapsible: true,
            collapsed: true,
            items: members,
          },
          {
            text: "About",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "About Us", link: "/en/about/us" },
              { text: "Contact", link: "/en/about/contact" },
              { text: "About Website", link: "/en/about/website" },
              { text: "Code of Conduct", link: "/en/about/code-of-conduct" },
              { text: "Report", link: "/en/about/report" },
              { text: "Join", link: "/en/about/join" },
            ],
          },
          {
            text: "Dev",
            link: "/en/dev/",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "Git Commit Convention", link: "/en/dev/git" },
              { text: "Naming Convention", link: "/en/dev/naming" },
              { text: "Punctuation Conventions", link: "/en/dev/punctuation" },
              { text: "Markdown Style Guide", link: "/en/dev/markdown" },
              { text: "Python Style Guide", link: "/en/dev/python-style" },
              { text: "TypeScript Style Guide", link: "/en/dev/ts-style" },
              { text: "Go Style Guide", link: "/en/dev/go-style" },
              { text: "Contributing", link: "/en/dev/contributing" },
            ],
          },
          {
            text: "Outlinks",
            collapsible: true,
            collapsed: false,
            items: [
              { text: "Discord", link: "https://wss.moe/dc" },
              { text: "GitHub", link: "https://wss.moe/gh" },
              { text: "Telegram Group", link: "https://wss.moe/tg" },
              { text: "Telegram Channel", link: "https://wss.moe/tgc" },
            ],
          },
        ],
        socialLinks: [],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/src/:path",
          text: "Edit this page on GitHub",
        },
        lastUpdated: {
          text: "Updated at",
        },
        footer: {
          message:
            'Released under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>',
          copyright: `Copyright © 2024-${currentYear} <a href="https://github.com/siiway" target="_blank" rel="noopener">SiiWay Team</a>`,
        },
      },
    },
  },
  metaChunk: true,
});
