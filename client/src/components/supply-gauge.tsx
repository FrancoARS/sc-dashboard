import { SCCard } from "./sc-card";

const SQUADS = [
  { name: "Marines",   count: 24, max: 40, color: "var(--sc-accent)" },
  { name: "Medics",    count: 8,  max: 16, color: "var(--sc-success)" },
  { name: "Siege Tanks", count: 6, max: 10, color: "var(--sc-amber)" },
  { name: "Wraiths",   count: 4,  max: 8,  color: "#9b59b6" },
];

function Bar({ count, max, color }: { count: number; max: number; color: string }) {
  const pct = Math.round((count / max) * 100);
  return (
    <div className="sc-supply-track">
      <div
        className="sc-supply-fill"
        style={{
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: `0 0 6px ${color}66`,
        }}
      />
    </div>
  );
}

export function SupplyGauge() {
  return (
    <SCCard title="SUPPLY GAUGE">
      <div className="space-y-3">
        {SQUADS.map((sq) => (
          <div key={sq.name}>
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-xs"
                style={{ color: sq.color, fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
              >
                {sq.name}
              </span>
              <span className="sc-data">
                {sq.count}/{sq.max}
              </span>
            </div>
            <Bar count={sq.count} max={sq.max} color={sq.color} />
          </div>
        ))}
      </div>
    </SCCard>
  );
}
