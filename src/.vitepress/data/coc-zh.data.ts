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

    let raw: string;
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/siiway/.github/main/CODE_OF_CONDUCT.md",
      );
      if (response.ok) {
        raw = await response.text();
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch {
      raw =
        '无法加载行为准则，请访问 <a href="https://github.com/siiway/.github/blob/main/CODE_OF_CONDUCT.md">GitHub 原文件</a> 查看.\n以及，请 [让我们知道](./contact)!';
    }

    return renderer.render(raw);
  },
};
