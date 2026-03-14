import { useState, useEffect } from "react";
import { SCLogo } from "@/components/sc-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/hooks/use-theme";
import { StatsRow } from "@/components/stats-row";
import { MineralChart } from "@/components/mineral-chart";
import { SupplyGauge } from "@/components/supply-gauge";
import { Minimap } from "@/components/minimap";
import { UnitTable } from "@/components/unit-table";
import { AlertPanel } from "@/components/alert-panel";
import { PerplexityAttribution } from "@/components/PerplexityAttribution";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Map,
  Users,
  BarChart2,
  ShieldAlert,
  Settings,
  Zap,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "COMMAND",  icon: LayoutDashboard, active: true },
  { label: "MINIMAP",  icon: Map },
  { label: "UNITS",    icon: Users },
  { label: "REPORTS", icon: BarChart2 },
  { label: "ALERTS",  icon: ShieldAlert },
  { label: "SYSTEMS", icon: Zap },
  { label: "CONFIG",  icon: Settings },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="sc-data text-xs" style={{ fontFamily: "Share Tech Mono, monospace" }}>
      {time.toLocaleTimeString("en-US", { hour12: false })} | SECTOR-7
    </span>
  );
}

export default function Dashboard() {
  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full" style={{ background: "var(--sc-bg)" }}>
          {/* Sidebar */}
          <Sidebar collapsible="icon">
            <SidebarHeader className="sc-header px-2 py-3">
              <div className="flex items-center gap-2">
                <SCLogo size={24} />
                <span
                  className="text-sm font-bold tracking-wider group-data-[collapsible=icon]:hidden"
                  style={{ color: "var(--sc-accent)", fontFamily: "Orbitron, sans-serif" }}
                >
                  SC-CMD
                </span>
              </div>
            </SidebarHeader>

            <SidebarContent className="mt-2">
              <SidebarMenu>
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        isActive={item.active}
                        tooltip={item.label}
                        style={item.active ? { color: "var(--sc-accent)" } : {}}
                      >
                        <Icon size={16} />
                        <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}>
                          {item.label}
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          {/* Main content */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Header */}
            <header className="sc-header flex items-center justify-between px-4 py-2 gap-3">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="text-[var(--sc-text-muted)] hover:text-[var(--sc-accent)]" />
                <h1
                  className="text-sm font-bold tracking-widest"
                  style={{ color: "var(--sc-accent)", fontFamily: "Orbitron, sans-serif" }}
                >
                  COMMAND DASHBOARD
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Clock />
                <ThemeToggle />
              </div>
            </header>

            {/* Dashboard grid */}
            <main className="flex-1 p-4 overflow-auto">
              <div className="space-y-3 max-w-[1400px] mx-auto">
                {/* Stats row */}
                <StatsRow />

                {/* Row 2: Chart + Minimap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <MineralChart />
                  </div>
                  <Minimap />
                </div>

                {/* Row 3: Supply + Alerts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <SupplyGauge />
                  <AlertPanel />
                </div>

                {/* Row 4: Unit Table */}
                <UnitTable />
              </div>
            </main>
          </div>
        </div>
        <PerplexityAttribution />
      </SidebarProvider>
    </ThemeProvider>
  );
}
