import { SCCard } from "./sc-card";

type Unit = {
  id: string;
  name: string;
  type: string;
  hp: number;
  maxHp: number;
  status: "active" | "idle" | "damaged";
  location: string;
};

const UNITS: Unit[] = [
  { id: "M-01", name: "Marine Alpha",   type: "Infantry",  hp: 45,  maxHp: 45,  status: "active",  location: "Sector 3" },
  { id: "M-02", name: "Marine Bravo",   type: "Infantry",  hp: 32,  maxHp: 45,  status: "damaged", location: "Sector 3" },
  { id: "T-01", name: "Siege Tank I",   type: "Mechanical",hp: 150, maxHp: 150, status: "active",  location: "Sector 5" },
  { id: "W-01", name: "Wraith I",       type: "Air",       hp: 80,  maxHp: 120, status: "damaged", location: "Airspace" },
  { id: "Md-01",name: "Medic Alpha",    type: "Support",   hp: 60,  maxHp: 60,  status: "active",  location: "Sector 3" },
  { id: "G-01", name: "Ghost One",      type: "Special",   hp: 45,  maxHp: 45,  status: "idle",   location: "Base" },
];

const STATUS_STYLE: Record<string, string> = {
  active:  "text-[var(--sc-success)]",
  idle:    "text-[var(--sc-text-muted)]",
  damaged: "text-[var(--sc-danger)]",
};

function HpBar({ hp, maxHp }: { hp: number; maxHp: number }) {
  const pct = (hp / maxHp) * 100;
  const color = pct > 60 ? "var(--sc-success)" : pct > 30 ? "var(--sc-amber)" : "var(--sc-danger)";
  return (
    <div className="sc-supply-track w-16">
      <div className="sc-supply-fill" style={{ width: `${pct}%`, background: color, boxShadow: `0 0 4px ${color}88` }} />
    </div>
  );
}

export function UnitTable() {
  return (
    <SCCard title="ACTIVE UNITS">
      <div className="overflow-x-auto">
        <table className="w-full text-xs" style={{ fontFamily: "Share Tech Mono, monospace" }}>
          <thead>
            <tr className="border-b" style={{ borderColor: "var(--sc-border)" }}>
              {["ID", "NAME", "TYPE", "HP", "STATUS", "LOC"].map((h) => (
                <th key={h} className="text-left py-1 pr-3 text-[10px] tracking-widest" style={{ color: "var(--sc-text-muted)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {UNITS.map((u) => (
              <tr key={u.id} className="border-b border-[var(--sc-border)]/20 hover:bg-white/5 transition-colors">
                <td className="py-1.5 pr-3" style={{ color: "var(--sc-accent)" }}>{u.id}</td>
                <td className="py-1.5 pr-3" style={{ color: "var(--sc-text)" }}>{u.name}</td>
                <td className="py-1.5 pr-3" style={{ color: "var(--sc-text-muted)" }}>{u.type}</td>
                <td className="py-1.5 pr-3"><HpBar hp={u.hp} maxHp={u.maxHp} /></td>
                <td className={`py-1.5 pr-3 uppercase font-bold ${STATUS_STYLE[u.status]}`}>{u.status}</td>
                <td className="py-1.5" style={{ color: "var(--sc-text-muted)" }}>{u.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SCCard>
  );
}
