let renderer: any = null;

export default {
  async load() {
    // 首次加载时创建 Markdown 渲染器
    if (!renderer) {
      const { createMarkdownRenderer } = await import("vitepress");
      const config = (globalThis as any).VITEPRESS_CONFIG;
      renderer = await createMarkdownRenderer(
        config.srcDir,
        config.markdown,
        config.site.base,
        config.logger
      );
    }

    const response = await fetch(
      "https://raw.githubusercontent.com/siiway/.github/main/CODE_OF_CONDUCT.md"
    );

    let raw: string;

    if (response.ok) {
      raw = await response.text();
    } else {
      raw =
        '无法加载行为准则，请访问 <a href="https://github.com/siiway/.github/blob/main/CODE_OF_CONDUCT.md">GitHub 原文件</a> 查看.\n以及，请 [让我们知道](./contact)!';
    }

    // 使用 VitePress 的 Markdown 渲染器渲染成 HTML
    return renderer.render(raw);
  },
};
