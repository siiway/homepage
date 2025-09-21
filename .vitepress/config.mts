import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay Team Home",
  description: "SiiWay Team's Official Site",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Members", link: "/members" },
      { text: "About", link: "/about/contact" },
    ],

    sidebar: [
      {
        text: "Members / 成员",
        items: [
          { text: "xhc861", link: "/members/xhc861" },
          { text: "wyf9", link: "/members/wyf9" },
          { text: "蜜蜂QWQ", link: "/members/imbee" },
          { text: "Dobastickrn", link: "/members/Dobastickrn" },
          { text: "Shattered", link: "/members/Shattered" },
          { text: "NtKrnl32", link: "/members/nt" },
          { text: "Murasame", link: "/members/Murasame" },
          { text: "Zackzheng1121", link: "/members/zackzheng1121" },
          { text: "XiaoYuan151", link: "/members/XiaoYuan151" },
          { text: "bbdqz", link: "/members/bbdqz" },
        ],
      },
      {
        text: "About / 关于",
        items: [
          { text: "Contact / 联系", link: "/about/contact" },
          { text: "About us / 关于我们", link: "/about/us" },
          { text: "About website / 关于此网站", link: "/about/website" },
          { text: "Join us / 招新公告", link: "/about/join" },
        ],
      },
      {
        text: "Outlinks / 外链",
        items: [
          { text: "QQ Group / 群组", link: "https://siiway.top/t/qq" },
          { text: "QQ Channel / 频道", link: "https://siiway.top/t/pd" },
          { text: "Wechat / 微信公众号", link: "https://siiway.top/t/wx" },
          { text: "Discord", link: "https://siiway.top/t/dc" },
          { text: "GitHub", link: "https://siiway.top/t/gh" },
          { text: "Telegram 群组 / Group", link: "https://siiway.top/t/tg" },
          { text: "Telegram 频道 / Channel", link: "https://siiway.top/t/tgc" },
        ],
      },
    ],

    socialLinks: [
      { icon: "qq", ariaLabel: "QQ", link: "https://siiway.top/t/qq" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768.74 768"><path fill="currentColor" fill-rule="evenodd" d="M0,384.37a384.37,384.37 0 1,0 768.74,0a384.37,384.37 0 1,0 -768.74,0z M577,319.29l5.7-36H507.33L518.47,213h-36l-11.14,70.29H328L339.12,213h-36L292,283.29H216.72l-5.7,36h75.26L267,441.19H191.72l-5.71,36h75.27L249,555h36l12.33-77.81H369L432.42,529l31.88,26,12.32-77.81H552l5.71-36H482.33l19.3-121.9ZM446.33,441.19l-5.71,36L438.12,493l-63.47-51.79H303l19.3-121.9H465.63Z"/></svg>',
        },
        ariaLabel: "QQ Channel",
        link: "https://siiway.top/t/pd",
      },
      { icon: "wechat", ariaLabel: "Wechat", link: "https://siiway.top/t/wx" },
      {
        icon: "discord",
        ariaLabel: "Discord",
        link: "https://siiway.top/t/dc",
      },
      { icon: "github", ariaLabel: "GitHub", link: "https://siiway.top/t/gh" },
      {
        icon: "telegram",
        ariaLabel: "Telegram Channel",
        link: "https://siiway.top/t/tgc",
      },
    ],

    editLink: {
      pattern: "https://github.com/siiway/homepage/edit/main/:path",
      text: "Edit on GitHub",
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://siiway.top",
  },
});
