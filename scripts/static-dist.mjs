// Flattens the prerendered client output into ./dist for GitHub Pages deployment.
// Vite/TanStack Start writes static files to dist/client and a (build-time only)
// prerender server to dist/server — GitHub Pages needs the static files at dist root.
import { cp, rm, stat, readFile, writeFile, rename } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const staging = path.join(root, ".dist-static");

try {
  if (!(await stat(client)).isDirectory()) throw new Error("not a directory");
} catch {
  console.error(`[static-dist] Missing build output: ${client}`);
  process.exit(1);
}

await rm(staging, { recursive: true, force: true });
await cp(client, staging, { recursive: true });
await rm(dist, { recursive: true, force: true });
await rename(staging, dist);

const indexHtml = path.join(dist, "index.html");
try {
  await stat(indexHtml);
} catch {
  console.error("[static-dist] dist/index.html was not generated");
  process.exit(1);
}

// SPA fallback: GitHub Pages serves 404.html for unknown paths.
const shell = path.join(dist, "_shell.html");
let fallback;
try {
  fallback = await readFile(shell, "utf8");
} catch {
  fallback = await readFile(indexHtml, "utf8");
}
await writeFile(path.join(dist, "404.html"), fallback);

// Keep GitHub Pages from running Jekyll (it would drop files starting with _).
await writeFile(path.join(dist, ".nojekyll"), "");

console.log("[static-dist] dist/ ready");
