'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Item = {
  type: 'image' | 'video';
  src: string;
  thumb?: string;
  w?: number;
  h?: number;
  alt?: string;
  videoPoster?: string;
  youtubeId?: string;
};

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? items[open] : null;

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group"
          >
            {it.type === 'image' ? (
              <Image
                alt={it.alt ?? ''}
                src={it.thumb ?? it.src}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            ) : (
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                🎬
              </div>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === 'image' ? (
              <Image
                alt={current.alt ?? ''}
                src={current.src}
                fill
                className="object-contain"
                priority
              />
            ) : current.youtubeId ? (
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${current.youtubeId}`}
                allowFullScreen
              />
            ) : (
              <video
                controls
                poster={current.videoPoster}
                className="w-full h-full rounded-xl"
              >
                <source src={current.src} />
              </video>
            )}

            {/* O onClick FALTAVA aqui; z-10 garante que fica acima da imagem */}
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute top-2 right-2 btn btn-outline z-10"
              aria-label="Fechar visualização"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
