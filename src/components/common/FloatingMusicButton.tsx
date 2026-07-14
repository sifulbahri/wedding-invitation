import { Music2, Pause } from "lucide-react";

import { useMusic } from "@/context/MusicContext";

export function FloatingMusicButton() {
  const { isPlaying, toggle } = useMusic();

  return (
    <button
      onClick={() => void toggle()}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--secondary)] text-black shadow-lg transition hover:scale-105"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Pause size={22} /> : <Music2 size={22} />}
    </button>
  );
}
