import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "var(--sc-bg)" }}>
      <Card className="w-full max-w-md mx-4 sc-panel">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8" style={{ color: "var(--sc-danger)" }} />
            <h1 className="text-2xl font-bold" style={{ color: "var(--sc-text)", fontFamily: "Orbitron, sans-serif" }}>
              404 — SECTOR NOT FOUND
            </h1>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--sc-text-muted)", fontFamily: "Rajdhani, sans-serif" }}>
            The requested sector does not exist in this galaxy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
