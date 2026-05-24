import rawMembers from "./members.json";

const subIdentities = new Set(["nt-copy", "l5z12"]);

export default {
  load() {
    const entries = Object.entries(rawMembers);
    const cards = entries
      .map(([key, value]) => {
        const name = typeof value === 'string' ? value : value.name;
        const avatar =
          typeof value === 'string' ? '/favicon.svg' : (value.avatar || '/favicon.svg');
        const motto =
          typeof value === 'string' ? '暂无座右铭' : (value.motto || '暂无座右铭');
        const isSub = subIdentities.has(key);
        return `
          <a class="member-card${isSub ? " sub" : ""}" href="../../zh/members/${key}">
            <div class="member-avatar">
              <img src="${avatar}" alt="${name}" />
            </div>
            <div class="member-info">
              <span class="member-name">${name}</span>
              <span class="member-motto">${motto}</span>
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
