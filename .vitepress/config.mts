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
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["script", { src: "/lang-redirect.js" }],
    // Apply the user's saved font before first paint to avoid a flash of the
    // default font. Mirrors FontSwitcher.vue's STORAGE_KEY / data-font scheme.
    [
      "script",
      {},
      "try{var f=localStorage.getItem('siiway-font');if(f)document.documentElement.dataset.font=f;}catch(e){}",
    ],
  ],

  lastUpdated: true,
  sitemap: {
    hostname: "https://siiway.org",
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
        socialLinks: [
          { icon: "qq", ariaLabel: "QQ 群", link: "https://wss.moe/qq" },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768.74 768"><path fill="currentColor" fill-rule="evenodd" d="M0,384.37a384.37,384.37 0 1,0 768.74,0a384.37,384.37 0 1,0 -768.74,0z M577,319.29l5.7-36H507.33L518.47,213h-36l-11.14,70.29H328L339.12,213h-36L292,283.29H216.72l-5.7,36h75.26L267,441.19H191.72l-5.71,36h75.27L249,555h36l12.33-77.81H369L432.42,529l31.88,26,12.32-77.81H552l5.71-36H482.33l19.3-121.9ZM446.33,441.19l-5.71,36L438.12,493l-63.47-51.79H303l19.3-121.9H465.63Z"/></svg>',
            },
            ariaLabel: "QQ 频道",
            link: "https://wss.moe/pd",
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998"/><path fill="currentColor" d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24"/></g></svg>',
            },
            ariaLabel: "飞书群组",
            link: "https://wss.moe/fs",
          },
          { icon: "wechat", ariaLabel: "Wechat", link: "https://wss.moe/wx" },
          { icon: "discord", ariaLabel: "Discord", link: "https://wss.moe/dc" },
          { icon: "github", ariaLabel: "GitHub", link: "https://wss.moe/gh" },
          {
            icon: "telegram",
            ariaLabel: "Telegram 频道",
            link: "https://wss.moe/tgc",
          },
        ],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/:path",
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
        socialLinks: [
          { icon: "discord", ariaLabel: "Discord", link: "https://wss.moe/dc" },
          { icon: "github", ariaLabel: "GitHub", link: "https://wss.moe/gh" },
          {
            icon: "telegram",
            ariaLabel: "Telegram Channel",
            link: "https://wss.moe/tgc",
          },
        ],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/:path",
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
