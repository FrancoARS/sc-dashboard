import { build } from "esbuild";
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const rootDir = process.cwd();

console.log("Building client...");
execSync("npx vite build", { stdio: "inherit", cwd: rootDir });

console.log("Building server...");
await build({
  entryPoints: ["server/index.ts"],
  bundle: true,
  platform: "node",
  target: "node18",
  outdir: "dist/server",
  format: "esm",
  packages: "external",
  banner: {
    js: `
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`,
  },
});

console.log("Build complete!");
