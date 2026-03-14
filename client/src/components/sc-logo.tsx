export function SCLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon */}
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        stroke="var(--sc-accent)"
        strokeWidth="1.5"
        fill="none"
        style={{ filter: "drop-shadow(0 0 4px var(--sc-accent))" }}
      />
      {/* Inner diamond */}
      <polygon
        points="16,8 22,16 16,24 10,16"
        stroke="var(--sc-accent)"
        strokeWidth="1"
        fill="rgba(0,188,212,0.1)"
      />
      {/* Center dot */}
      <circle
        cx="16" cy="16" r="2.5"
        fill="var(--sc-accent)"
        style={{ filter: "drop-shadow(0 0 6px var(--sc-accent))" }}
      />
      {/* Crosshair lines */}
      <line x1="16" y1="12" x2="16" y2="14" stroke="var(--sc-accent)" strokeWidth="1" />
      <line x1="16" y1="18" x2="16" y2="20" stroke="var(--sc-accent)" strokeWidth="1" />
      <line x1="12" y1="16" x2="14" y2="16" stroke="var(--sc-accent)" strokeWidth="1" />
      <line x1="18" y1="16" x2="20" y2="16" stroke="var(--sc-accent)" strokeWidth="1" />
    </svg>
  );
}
