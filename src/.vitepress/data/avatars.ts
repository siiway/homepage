import { readdirSync } from "node:fs";
import { join } from "node:path";

const AVATAR_DIR = join(process.cwd(), "src/public/members");

export function loadAvatarPaths(): Record<string, string> {
  const map: Record<string, string> = {};
  try {
    for (const file of readdirSync(AVATAR_DIR)) {
      const match = file.match(/^(.+)\.(png|jpe?g|webp|gif|svg)$/i);
      if (match) map[match[1]] = `/members/${file}`;
    }
  } catch {
    // 目录不存在（未运行头像拉取脚本）时回退到默认图标
  }
  return map;
}
