// 成员卡片 HTML 生成器
// 卡片样式参考 https://github.com/imsyy/vitepress-theme-curve 的友链卡片
import rawMembers from "./members.json";

const subIdentities = new Set(["nt-copy", "l5z12"]);

export default {
  load() {
    const entries = Object.entries(rawMembers);
    const cards = entries
      .map(([key, value]) => {
        const isSub = subIdentities.has(key);
        return `
          <a class="member-card${isSub ? " sub" : ""}" href="./${key}">
            <div class="member-avatar">
              <img src="/favicon.svg" alt="${value}" />
            </div>
            <div class="member-info">
              <span class="member-name">${value}</span>
              <span class="member-motto">暂无座右铭</span>
            </div>
          </a>`;
      })
      .join("");

    const count = entries.filter(([key]) => !subIdentities.has(key)).length;

    return {
      members: cards,
      count,
    };
  },
};
