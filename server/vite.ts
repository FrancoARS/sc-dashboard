import { createServer as createViteServer, createLogger } from "vite";
import type { Express } from "express";
import type { Server } from "http";
import path from "path";

const viteLogger = createLogger();

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "spa",
    root: path.resolve(process.cwd(), "client"),
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        if (msg.includes("[TypeScript]") && msg.includes("Cannot find module")) {
          return; // Suppress TS module errors in dev
        }
        viteLogger.error(msg, options);
      },
    },
  });

  app.use(vite.middlewares);
}
