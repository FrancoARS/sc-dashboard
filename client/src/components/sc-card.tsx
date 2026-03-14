interface SCCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SCCard({ title, children, className = "" }: SCCardProps) {
  return (
    <div className={`sc-panel sc-scanlines p-3 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sc-accent)] shadow-[0_0_4px_var(--sc-accent)]" />
          <h3 className="text-[10px] font-orbitron tracking-widest text-[var(--sc-accent)] uppercase" style={{fontFamily:'Orbitron,sans-serif'}}>
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
}
