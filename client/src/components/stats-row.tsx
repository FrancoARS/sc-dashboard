import { Gem, Flame, Users, Clock } from "lucide-react";
import { SCCard } from "./sc-card";

const STATS = [
  {
    label: "MINERALS",
    value: "1,840",
    delta: "+120/min",
    icon: Gem,
    color: "var(--sc-accent)",
    glow: "var(--sc-accent-glow)",
  },
  {
    label: "VESPENE",
    value: "620",
    delta: "+45/min",
    icon: Flame,
    color: "var(--sc-amber)",
    glow: "var(--sc-amber-glow)",
  },
  {
    label: "SUPPLY",
    value: "124/200",
    delta: "62% used",
    icon: Users,
    color: "var(--sc-success)",
    glow: "rgba(46,204,113,0.35)",
  },
  {
    label: "GAME TIME",
    value: "18:42",
    delta: "mid-game",
    icon: Clock,
    color: "var(--sc-text-muted)",
    glow: "rgba(74,111,165,0.3)",
  },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {STATS.map((s) => {
        const Icon = s.icon;
        return (
          <SCCard key={s.label} className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Icon size={13} style={{ color: s.color, filter: `drop-shadow(0 0 4px ${s.glow})` }} />
              <span className="sc-data text-[10px] tracking-widest" style={{fontFamily:'Share Tech Mono,monospace'}}>{s.label}</span>
            </div>
            <div
              className="text-xl font-bold leading-none"
              style={{ color: s.color, textShadow: `0 0 8px ${s.glow}`, fontFamily: "Orbitron, sans-serif" }}
            >
              {s.value}
            </div>
            <div className="text-[10px]" style={{ color: "var(--sc-text-muted)", fontFamily: "Share Tech Mono, monospace" }}>
              {s.delta}
            </div>
          </SCCard>
        );
      })}
    </div>
  );
}
