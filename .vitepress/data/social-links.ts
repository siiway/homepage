export interface SocialLink {
  label: string;
  icon: string | { src: string };
  link: string;
}

export type SocialIcon = SocialLink["icon"];

const data: Record<string, SocialLink[]> = {
  zh: [
    { label: "QQ 群",       icon: "qq",                   link: "https://wss.moe/qq" },
    { label: "QQ 频道",    icon: { src: "/svg/qq-channel.svg" }, link: "https://wss.moe/pd" },
    { label: "飞书群组",   icon: { src: "/svg/feishu.svg" },     link: "https://wss.moe/fs" },
    { label: "微信公众号", icon: { src: "/svg/wechat.svg" },     link: "https://wss.moe/wx" },
    { label: "Discord",    icon: "discord",               link: "https://wss.moe/dc" },
    { label: "GitHub",     icon: "github",                link: "https://wss.moe/gh" },
    { label: "Telegram 频道", icon: "telegram",           link: "https://wss.moe/tgc" },
  ],
  en: [
    { label: "QQ Group",               icon: "qq",                 link: "https://wss.moe/qq" },
    { label: "QQ Channel",             icon: { src: "/svg/qq-channel.svg" }, link: "https://wss.moe/pd" },
    { label: "Feishu Group",           icon: { src: "/svg/feishu.svg" },     link: "https://wss.moe/fs" },
    { label: "WeChat Official Account",icon: { src: "/svg/wechat.svg" },     link: "https://wss.moe/wx" },
    { label: "Discord",                icon: "discord",             link: "https://wss.moe/dc" },
    { label: "GitHub",                 icon: "github",              link: "https://wss.moe/gh" },
    { label: "Telegram Channel",       icon: "telegram",            link: "https://wss.moe/tgc" },
  ],
};

export default data;
