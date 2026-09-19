export function Bubbles({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 6 + ((i * 11 + count * 3) % 18);
        const left = (i * 37 + count * 7) % 100;
        const duration = 8 + ((i * 7 + count) % 10);
        const delay = (i * 13 + count * 2) % 8;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm animate-bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
