import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const membersFile = join(root, "src/.vitepress/data/members.json");
const outDir = join(root, "src/public/members");

const EXT_BY_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

const members = JSON.parse(await readFile(membersFile, "utf8"));

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

let ok = 0;
let failed = 0;

await Promise.all(
  Object.entries(members).map(async ([key, value]) => {
    const source = typeof value === "string" ? null : value.avatar;
    if (!source || !/^https?:\/\//.test(source)) return;

    const url = source.includes("?") ? `${source}&s=200` : `${source}?s=200`;
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "siiway-homepage-avatar-fetcher" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const type = (res.headers.get("content-type") || "")
        .split(";")[0]
        .trim()
        .toLowerCase();
      const ext = EXT_BY_TYPE[type] || "png";
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile(join(outDir, `${key}.${ext}`), buffer);
      ok += 1;
    } catch (error) {
      failed += 1;
      console.warn(`[avatar] ${key} 拉取失败: ${error.message}`);
    }
  }),
);

console.log(
  `[avatar] 完成：成功 ${ok}，失败 ${failed}（失败项将回退到 /favicon.svg）`,
);
