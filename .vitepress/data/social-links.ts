export interface SocialLink {
  label: string;
  icon: string | { svg: string };
  link: string;
}

const data: Record<string, SocialLink[]> = {
  zh: [
    {
      label: "QQ 群",
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474v.768c0 .392.317.714.71.714.197 0 .37-.085.494-.218.324.21.723.332 1.149.332.426 0 .825-.122 1.149-.332.124.133.297.218.494.218.393 0 .71-.322.71-.714v-.768c0-.89-.427-2.09-.842-3.202.68.845 1.128 1.4 1.298 1.623.6.79 1.538 1.254 2.438 1.254h.005c.9 0 1.837-.463 2.438-1.254.17-.224.617-.778 1.298-1.623-.415 1.113-.842 2.312-.842 3.202v.768c0 .392.317.714.71.714.197 0 .37-.085.494-.218.324.21.723.332 1.149.332.426 0 .825-.122 1.149-.332.124.133.297.218.494.218.393 0 .71-.322.71-.714v-.768c0-2.514-2.163-6.954-2.163-6.954V9.325C18.293 3.364 14.268 2 12.003 2z"/></svg>',
      },
      link: "https://wss.moe/qq",
    },
    {
      label: "QQ 频道",
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768.74 768"><path fill="currentColor" fill-rule="evenodd" d="M0,384.37a384.37,384.37 0 1,0 768.74,0a384.37,384.37 0 1,0 -768.74,0z M577,319.29l5.7-36H507.33L518.47,213h-36l-11.14,70.29H328L339.12,213h-36L292,283.29H216.72l-5.7,36h75.26L267,441.19H191.72l-5.71,36h75.27L249,555h36l12.33-77.81H369L432.42,529l31.88,26,12.32-77.81H552l5.71-36H482.33l19.3-121.9ZM446.33,441.19l-5.71,36L438.12,493l-63.47-51.79H303l19.3-121.9H465.63Z"/></svg>',
      },
      link: "https://wss.moe/pd",
    },
    {
      label: "飞书群组",
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998"/><path fill="currentColor" d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24"/></g></svg>',
      },
      link: "https://wss.moe/fs",
    },
    { label: "微信公众号", icon: "wechat",   link: "https://wss.moe/wx" },
    { label: "Discord",     icon: "discord",  link: "https://wss.moe/dc" },
    { label: "GitHub",      icon: "github",   link: "https://wss.moe/gh" },
    { label: "Telegram 频道", icon: "telegram", link: "https://wss.moe/tgc" },
  ],
  en: [
    { label: "Discord",          icon: "discord",  link: "https://wss.moe/dc" },
    { label: "GitHub",           icon: "github",   link: "https://wss.moe/gh" },
    { label: "Telegram Channel", icon: "telegram", link: "https://wss.moe/tgc" },
  ],
};

export default data;
