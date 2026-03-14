import { AlertTriangle, Info, Shield, Zap } from "lucide-react";
import { SCCard } from "./sc-card";

const ALERTS = [
  { id: 1, level: "danger",  icon: AlertTriangle, msg: "Zerg incursion detected — sector 7G",     time: "00:12" },
  { id: 2, level: "warning", icon: Zap,           msg: "Power fluctuation in reactor core B",     time: "00:34" },
  { id: 3, level: "info",    icon: Info,          msg: "Protoss warp-in signature — perimeter",   time: "01:02" },
  { id: 4, level: "success", icon: Shield,        msg: "Bunker network fully operational",        time: "01:18" },
  { id: 5, level: "danger",  icon: AlertTriangle, msg: "Nydus tunnel detected — base entrance",   time: "01:55" },
];

const LEVEL_STYLES: Record<string, string> = {
  danger:  "text-[var(--sc-danger)]  border-[var(--sc-danger)]",
  warning: "text-[var(--sc-amber)]   border-[var(--sc-amber)]",
  info:    "text-[var(--sc-accent)]  border-[var(--sc-accent)]",
  success: "text-[var(--sc-success)] border-[var(--sc-success)]",
};

export function AlertPanel() {
  return (
    <SCCard title="THREAT FEED">
      <div className="space-y-2">
        {ALERTS.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.id}
              className={`flex items-start gap-2 p-2 border-l-2 bg-black/10 rounded-sm ${
                LEVEL_STYLES[a.level]
              }`}
            >
              <Icon size={13} className="mt-0.5 shrink-0" />
              <span className="text-xs flex-1 font-rajdhani leading-snug" style={{fontFamily:'Rajdhani,sans-serif'}}>
                {a.msg}
              </span>
              <span className="sc-data text-[10px] shrink-0">{a.time}</span>
            </div>
          );
        })}
      </div>
    </SCCard>
  );
}
