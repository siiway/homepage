import fs from "node:fs/promises";
import path from "node:path";

async function getAllFiles(
  dir: string,
  ignoreDirs: string[] = ["node_modules", ".git", "dist"],
): Promise<string[]> {
  const files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoreDirs.includes(entry.name)) {
        files.push(...(await getAllFiles(fullPath, ignoreDirs)));
      }
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const en = fullPath.replace("zh/", "en/");
      try {
        if ((await fs.stat(en)).isFile()) {
          // console.log(`- already exists: ${fullPath}`)
        } else throw "";
      } catch {
        files.push(fullPath);
        // console.log(`- added: ${fullPath}`)
      }
    }
  }

  return files;
}

export default {
  async paths() {
    const zhlist = await getAllFiles("zh/");
    const routes = zhlist.map((zh) => {
      const en = zh.replace("zh/", "en/");
      const page = en.replace("en/", "").replace(".md", "");
      return {
        params: {
          page: page,
        },
        content: `# Path - ${page} - Auto Redirect

This page doesn't exist in English but available in Chinese, so we are redirecting you to it's Chinese version.

Click [here](/${zh}) if your browser didn't automatically redirect.`,
      };
    });
    return routes;
  },
};
