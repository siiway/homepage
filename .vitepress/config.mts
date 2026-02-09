import { defineConfig } from "vitepress";

const members = [
  { text: "xhc861", link: "/zh_cn/members/xhc861" },
  { text: "wyf9", link: "/zh_cn/members/wyf9" },
  { text: "Dobastickrn", link: "/zh_cn/members/Dobastickrn" },
  { text: "Shattered", link: "/zh_cn/members/Shattered" },
  { text: "NtKrnl32", link: "/zh_cn/members/nt" },
  { text: "Murasame", link: "/zh_cn/members/Murasame" },
  { text: "Zackzheng1121", link: "/zh_cn/members/zackzheng1121" },
  { text: "XiaoYuan151", link: "/zh_cn/members/XiaoYuan151" },
  { text: "bbdqz", link: "/zh_cn/members/bbdqz" },
  { text: "imbee", link: "/zh_cn/members/imbee" },
  { text: "SenNaiFox", link: "/zh_cn/members/SenNaiFox" },
  { text: "DaleNull", link: "/zh_cn/members/DaleNull" },
  { text: "killjsj", link: "/zh_cn/members/killjsj" },
  { text: "Kandyn", link: "/zh_cn/members/Kandyn" },
  { text: "Kananosa", link: "/zh_cn/members/kananosa" },
  { text: "XieXiLin", link: "/zh_cn/members/XieXiLin" },
  { text: "NtKrnl64", link: "/zh_cn/members/nt-copy" },
  { text: "advan10", link: "/zh_cn/members/advan10" },
  { text: "XFJ", link: "/members/XFJ" },
  { text: "chun-awa", link: "/members/chun-awa" }
];

export default defineConfig({
  title: "SiiWay 团队主页",
  description: "SiiWay 团队的官方网站",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  lastUpdated: true,
  sitemap: {
    hostname: "https://siiway.org",
  },

  locales: {
    // === 中文版 (zh_cn) ===
    zh_cn: {
      label: "简体中文",
      lang: "zh",
      link: "/zh_cn/",

      themeConfig: {
        nav: [
          { text: "主页", link: "/zh_cn/" },
          { text: "成员", link: "/zh_cn/members/" },
          { text: "联系", link: "/zh_cn/about/contact" },
        ],
        sidebar: [
          {
            text: "成员",
            link: "/zh_cn/members/",
            items: members,
          },
          {
            text: "关于",
            items: [
              { text: "联系", link: "/zh_cn/about/contact" },
              { text: "关于此网站", link: "/zh_cn/about/website" },
              { text: "招新公告", link: "/zh_cn/about/join" },
              { text: "规则 (QQ 群)", link: "/zh_cn/about/rules-qq" },
              { text: "SiiWay 行为准则", link: "/zh_cn/about/code-of-conduct" },
              { text: "举报", link: "/zh_cn/about/report" }
            ],
          },
          {
            text: "外链",
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
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998"/><path fill="currentColor" d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24"/></g></svg>'
            },
            ariaLabel: "飞书群组",
            link: "https://wss.moe/fs",
          },
          { icon: "wechat", ariaLabel: "Wechat", link: "https://wss.moe/wx" },
          { icon: "discord", ariaLabel: "Discord", link: "https://wss.moe/dc" },
          { icon: "github", ariaLabel: "GitHub", link: "https://wss.moe/gh" },
          { icon: "telegram", ariaLabel: "Telegram 频道", link: "https://wss.moe/tgc" },
        ],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/zh_cn/:path",
          text: "在 GitHub 上编辑本页",
        },
      }
    },

    // === 英文版 (en_us) ===
    en_us: {
      label: "English",
      lang: "en",
      link: "/en_us/",

      title: "SiiWay Team Home",
      description: "SiiWay Team's Official Homepage",

      themeConfig: {
        nav: [
          { text: "Home", link: "/en_us/" },
          { text: "Members", link: "/en_us/members/" },
          { text: "Contact", link: "/en_us/about/contact" },
        ],
        sidebar: [
          {
            text: "Members (CN Only)",
            link: "/en_us/members/",
            items: members,
          },
          {
            text: "About",
            items: [
              { text: "Contact", link: "/en_us/about/contact" },
              { text: "About Website", link: "/en_us/about/website" },
              // { text: "Join us (Chinese only)", link: "/zh_cn/about/join" }, 
              // { text: "Rules (QQ, Chinese only)", link: "/zh_cn/about/rules-qq" },
              { text: "Code of Conduct", link: "/en_us/about/code-of-conduct" },
              { text: "Report", link: "/en_us/about/report" },
            ],
          },
          {
            text: "Outlinks",
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
          { icon: "telegram", ariaLabel: "Telegram Channel", link: "https://wss.moe/tgc" },
        ],
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/en_us/:path",
          text: "Edit this page on GitHub",
        },
      },
    },
  },
});
