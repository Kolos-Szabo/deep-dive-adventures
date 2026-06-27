import { useState } from "react";
import { Play } from "lucide-react";

export function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const YT_THUMB = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const [active, setActive] = useState(false);
  return (
    <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl shadow-deep bg-black">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Videó lejátszása: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={YT_THUMB}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/95 shadow-glow transition-transform duration-300 group-hover:scale-110">
            <Play className="h-9 w-9 sm:h-11 sm:w-11 text-primary fill-primary translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
