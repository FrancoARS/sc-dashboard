export function PerplexityAttribution() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-xs text-white/60">
      <span>Built with</span>
      <a
        href="https://perplexity.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white/90 hover:text-white transition-colors"
      >
        Perplexity AI
      </a>
    </div>
  );
}
