import { useEffect, useRef } from "react";
import { SCCard } from "./sc-card";

type Blip = {
  x: number; y: number;
  color: string;
  size: number;
  label?: string;
};

const BLIPS: Blip[] = [
  { x: 0.5,  y: 0.5,  color: "#00bcd4", size: 6, label: "CMD" },
  { x: 0.25, y: 0.3,  color: "#2980b9", size: 4 },
  { x: 0.7,  y: 0.25, color: "#e74c3c", size: 4 },
  { x: 0.15, y: 0.7,  color: "#2980b9", size: 3 },
  { x: 0.8,  y: 0.65, color: "#e74c3c", size: 3 },
  { x: 0.6,  y: 0.8,  color: "#2980b9", size: 3 },
  { x: 0.35, y: 0.55, color: "#2ecc71", size: 3 },
];

export function Minimap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef  = useRef(0);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R  = Math.min(W, H) / 2 - 4;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#0a0e1a";
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Grid rings
      [0.33, 0.66, 1].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,188,212,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Grid lines
      ctx.strokeStyle = "rgba(0,188,212,0.1)";
      ctx.lineWidth = 1;
      [0, 1, 2, 3].forEach((i) => {
        const angle = (i * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
        ctx.stroke();
      });

      // Sweep
      const angle = angleRef.current;
      const grad = ctx.createConicalGradient
        ? ctx.createConicalGradient(cx, cy, angle)
        : null;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, angle - 0.8, angle);
      ctx.closePath();
      ctx.fillStyle = "rgba(0,188,212,0.12)";
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
      ctx.strokeStyle = "rgba(0,188,212,0.9)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Blips
      BLIPS.forEach((b) => {
        const bx = cx + (b.x - 0.5) * R * 1.8;
        const by = cy + (b.y - 0.5) * R * 1.8;
        ctx.beginPath();
        ctx.arc(bx, by, b.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Border
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,188,212,0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      angleRef.current = (angleRef.current + 0.01) % (Math.PI * 2);
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <SCCard title="TACTICAL MINIMAP">
      <div className="flex flex-col items-center gap-2">
        <canvas ref={canvasRef} width={180} height={180} className="rounded-full" />
        <div className="flex gap-3">
          <span className="sc-data flex items-center gap-1"><span className="sc-dot online" /> Ally</span>
          <span className="sc-data flex items-center gap-1"><span className="sc-dot danger" /> Enemy</span>
          <span className="sc-data flex items-center gap-1"><span className="sc-dot" style={{background:"#2ecc71"}} /> Resource</span>
        </div>
      </div>
    </SCCard>
  );
}
