export function Bubbles({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 6 + Math.random() * 18;
        const left = Math.random() * 100;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 8;
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
