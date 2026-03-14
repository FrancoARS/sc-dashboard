import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  // API routes can be added here
  // Example: app.get('/api/stats', (req, res) => { ... })

  const httpServer = createServer(app);
  return httpServer;
}
