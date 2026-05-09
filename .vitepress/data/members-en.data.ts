import rawMembers from "../members.json";
let renderer: any = null;

export default {
  async load() {
    if (!renderer) {
      const { createMarkdownRenderer } = await import("vitepress");
      const config = (globalThis as any).VITEPRESS_CONFIG;
      renderer = await createMarkdownRenderer(
        config.srcDir,
        config.markdown,
        config.site.base,
        config.logger,
      );
    }

    const members = Object.entries(rawMembers).map(([key, value]) => {
      // members' sub-identities
      if (key === "nt-copy" || value === "NtKrnl64" || key === "l5z12" || value === "l5z12") {
        return `- *[${value}](../../zh/members/${key})*`;
      }
      return `- [${value}](../../zh/members/${key})`;
    });
    const lst = members.join("\n");
    const len = members.length - 1;

    return {
      members: renderer.render(lst),
      count: len,
    };
  },
};
