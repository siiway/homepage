export interface SocialLink {
  label: string;
  icon: string | { svg: string };
  link: string;
}

const qqChannelSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768.74 768"><path fill="currentColor" fill-rule="evenodd" d="M0,384.37a384.37,384.37 0 1,0 768.74,0a384.37,384.37 0 1,0 -768.74,0z M577,319.29l5.7-36H507.33L518.47,213h-36l-11.14,70.29H328L339.12,213h-36L292,283.29H216.72l-5.7,36h75.26L267,441.19H191.72l-5.71,36h75.27L249,555h36l12.33-77.81H369L432.42,529l31.88,26,12.32-77.81H552l5.71-36H482.33l19.3-121.9ZM446.33,441.19l-5.71,36L438.12,493l-63.47-51.79H303l19.3-121.9H465.63Z"/></svg>';

const feishuSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998"/><path fill="currentColor" d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24"/></g></svg>';

const wechatSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.324.324 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.952-7.062-6.122zM14.235 13.36c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"/></svg>';

const data: Record<string, SocialLink[]> = {
  zh: [
    { label: "QQ 群",       icon: "qq",                   link: "https://wss.moe/qq" },
    { label: "QQ 频道",    icon: { svg: qqChannelSvg },   link: "https://wss.moe/pd" },
    { label: "飞书群组",   icon: { svg: feishuSvg },      link: "https://wss.moe/fs" },
    { label: "微信公众号", icon: { svg: wechatSvg },      link: "https://wss.moe/wx" },
    { label: "Discord",    icon: "discord",               link: "https://wss.moe/dc" },
    { label: "GitHub",     icon: "github",                link: "https://wss.moe/gh" },
    { label: "Telegram 频道", icon: "telegram",           link: "https://wss.moe/tgc" },
  ],
  en: [
    { label: "QQ Group",               icon: "qq",                 link: "https://wss.moe/qq" },
    { label: "QQ Channel",             icon: { svg: qqChannelSvg }, link: "https://wss.moe/pd" },
    { label: "Feishu Group",           icon: { svg: feishuSvg },    link: "https://wss.moe/fs" },
    { label: "WeChat Official Account",icon: { svg: wechatSvg },    link: "https://wss.moe/wx" },
    { label: "Discord",                icon: "discord",             link: "https://wss.moe/dc" },
    { label: "GitHub",                 icon: "github",              link: "https://wss.moe/gh" },
    { label: "Telegram Channel",       icon: "telegram",            link: "https://wss.moe/tgc" },
  ],
};

export default data;
