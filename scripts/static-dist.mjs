// Copies the prerendered static output into ./dist for GitHub Pages deployment.
import { cp, rm, stat, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, ".output", "public");
const dist = path.join(root, "dist");

try {
  const s = await stat(source);
  if (!s.isDirectory()) throw new Error("not a directory");
} catch {
  console.error(`[static-dist] Missing build output: ${source}`);
  process.exit(1);
}

await rm(dist, { recursive: true, force: true });
await cp(source, dist, { recursive: true });

// SPA fallback for deep links on GitHub Pages (404.html is served for unknown paths).
try {
  await access(path.join(dist, "index.html"));
  const shell = await readFile(path.join(dist, "index.html"), "utf8");
  await writeFile(path.join(dist, "404.html"), shell);
} catch {
  console.error("[static-dist] dist/index.html was not generated");
  process.exit(1);
}

// Prevent GitHub Pages from running Jekyll over the assets (files starting with _).
await writeFile(path.join(dist, ".nojekyll"), "");

console.log("[static-dist] dist/ ready");
