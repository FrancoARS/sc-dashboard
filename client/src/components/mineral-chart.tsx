"use client";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SCCard } from "./sc-card";

const DATA = [
  { t: "00:00", minerals: 420, vespene: 180 },
  { t: "00:30", minerals: 610, vespene: 220 },
  { t: "01:00", minerals: 530, vespene: 310 },
  { t: "01:30", minerals: 780, vespene: 260 },
  { t: "02:00", minerals: 920, vespene: 390 },
  { t: "02:30", minerals: 860, vespene: 450 },
  { t: "03:00", minerals: 1100, vespene: 510 },
];

export function MineralChart() {
  return (
    <SCCard title="RESOURCE INCOME">
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={DATA} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gMin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="var(--sc-accent)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="var(--sc-accent)" stopOpacity={0}   />
            </linearGradient>
            <linearGradient id="gVes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="var(--sc-amber)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="var(--sc-amber)" stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--sc-border)" strokeOpacity={0.3} />
          <XAxis dataKey="t" tick={{ fill: "var(--sc-text-muted)", fontSize: 10, fontFamily: "Share Tech Mono" }} />
          <YAxis tick={{ fill: "var(--sc-text-muted)", fontSize: 10, fontFamily: "Share Tech Mono" }} />
          <Tooltip
            contentStyle={{
              background: "var(--sc-surface)",
              border: "1px solid var(--sc-border)",
              borderRadius: 4,
              fontSize: 11,
              fontFamily: "Share Tech Mono",
              color: "var(--sc-text)",
            }}
          />
          <Area type="monotone" dataKey="minerals" stroke="var(--sc-accent)" strokeWidth={2} fill="url(#gMin)" dot={false} />
          <Area type="monotone" dataKey="vespene"  stroke="var(--sc-amber)"  strokeWidth={2} fill="url(#gVes)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-1">
        <span className="sc-data flex items-center gap-1"><span className="sc-dot online" style={{background:"var(--sc-accent)"}} /> Minerals</span>
        <span className="sc-data flex items-center gap-1"><span className="sc-dot warning" /> Vespene</span>
      </div>
    </SCCard>
  );
}
