import { defineConfig } from "vitepress";

const members = [
  { text: "xhc861", link: "/members/xhc861" },
  { text: "wyf9", link: "/members/wyf9" },
  { text: "Dobastickrn", link: "/members/Dobastickrn" },
  { text: "Shattered", link: "/members/Shattered" },
  { text: "NtKrnl32", link: "/members/nt" },
  { text: "Murasame", link: "/members/Murasame" },
  { text: "Zackzheng1121", link: "/members/zackzheng1121" },
  { text: "XiaoYuan151", link: "/members/XiaoYuan151" },
  { text: "bbdqz", link: "/members/bbdqz" },
  { text: "imbee", link: "/members/imbee" },
  { text: "SenNaiFox", link: "/members/SenNaiFox" },
  { text: "DaleNull", link: "/members/DaleNull" },
  { text: "killjsj", link: "/members/killjsj" },
  { text: "Kandyn", link: "/members/Kandyn" },
  { text: "Kananosa", link: "/members/kananosa" },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay 团队主页",
  description: "SiiWay 团队的官方网站",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "成员", link: "/members" },
      { text: "联系", link: "/about/contact" },
    ],

    sidebar: {
      ["/"]: [
        {
          text: "回到主页",
          link: "/",
        },
        {
          text: "成员",
          link: "/members",
          items: members,
        },
        {
          text: "关于",
          items: [
            { text: "联系", link: "/about/contact" },
            // { text: "关于我们", link: "/about/us" },
            { text: "关于此网站", link: "/about/website" },
            { text: "招新公告", link: "/about/join" },
          ],
        },
        {
          text: "外链",
          items: [
            { text: "QQ 群", link: "https://siiway.org/t/qq" },
            { text: "QQ 频道", link: "https://siiway.org/t/pd" },
            { text: "微信公众号", link: "https://siiway.org/t/wx" },
            { text: "Discord", link: "https://siiway.org/t/dc" },
            { text: "GitHub", link: "https://siiway.org/t/gh" },
            { text: "Telegram 群组", link: "https://siiway.org/t/tg" },
            { text: "Telegram 频道", link: "https://siiway.org/t/tgc" },
          ],
        },
      ],
      ["/en_us/"]: [
        {
          text: "Back to Homepage",
          link: "/en_us/",
        },
        {
          text: "Members (Chinese Only)",
          link: "/en_us/members/",
          items: members,
        },
        {
          text: "About",
          items: [
            { text: "Contact", link: "/en_us/about/contact" },
            { text: "About Website", link: "/en_us/about/website" },
          ],
        },
        {
          text: "Outlinks",
          items: [
            { text: "Discord", link: "https://siiway.org/t/dc" },
            { text: "GitHub", link: "https://siiway.org/t/gh" },
            { text: "Telegram Group", link: "https://siiway.org/t/tg" },
            { text: "Telegram Channel", link: "https://siiway.org/t/tgc" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "qq", ariaLabel: "QQ 群", link: "https://siiway.org/t/qq" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768.74 768"><path fill="currentColor" fill-rule="evenodd" d="M0,384.37a384.37,384.37 0 1,0 768.74,0a384.37,384.37 0 1,0 -768.74,0z M577,319.29l5.7-36H507.33L518.47,213h-36l-11.14,70.29H328L339.12,213h-36L292,283.29H216.72l-5.7,36h75.26L267,441.19H191.72l-5.71,36h75.27L249,555h36l12.33-77.81H369L432.42,529l31.88,26,12.32-77.81H552l5.71-36H482.33l19.3-121.9ZM446.33,441.19l-5.71,36L438.12,493l-63.47-51.79H303l19.3-121.9H465.63Z"/></svg>',
        },
        ariaLabel: "QQ 频道",
        link: "https://siiway.org/t/pd",
      },
      { icon: "wechat", ariaLabel: "Wechat", link: "https://siiway.org/t/wx" },
      {
        icon: "discord",
        ariaLabel: "Discord",
        link: "https://siiway.org/t/dc",
      },
      { icon: "github", ariaLabel: "GitHub", link: "https://siiway.org/t/gh" },
      {
        icon: "telegram",
        ariaLabel: "Telegram 频道",
        link: "https://siiway.org/t/tgc",
      },
    ],

    editLink: {
      pattern: "https://github.com/siiway/homepage/edit/main/:path",
      text: "在 GitHub 上编辑本页",
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://siiway.org",
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      link: "/",
    },
    en_us: {
      label: "English",
      lang: "en",
      link: "/en_us/",

      title: "SiiWay Team Home",
      description: "SiiWay Team's Official Homepage",
      themeConfig: {
        editLink: {
          pattern: "https://github.com/siiway/homepage/edit/main/:path",
          text: "Edit this page on GitHub",
        },
        socialLinks: [
          {
            icon: "discord",
            ariaLabel: "Discord",
            link: "https://siiway.org/t/dc",
          },
          {
            icon: "github",
            ariaLabel: "GitHub",
            link: "https://siiway.org/t/gh",
          },
          {
            icon: "telegram",
            ariaLabel: "Telegram Channel",
            link: "https://siiway.org/t/tgc",
          },
        ],
        nav: [
          { text: "Home", link: "/en_us/" },
          { text: "Members", link: "/en_us/members/" },
          { text: "Contact", link: "/en_us/about/contact" },
        ],
      },
    },
  },
});
