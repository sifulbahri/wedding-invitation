import { env } from "@/config/env";

const audio = new Audio(env.music);

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";

interface MusicContextValue {
  isPlaying: boolean;
  isMuted: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
  setMuted: (value: boolean) => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({
  children,
}: PropsWithChildren) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/wedding-invitation/audio/background.mp3");

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    await audioRef.current.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(async () => {
    if (isPlaying) {
      pause();
    } else {
      await play();
    }
  }, [isPlaying, play, pause]);

  const value = useMemo(
    () => ({
      isPlaying,
      isMuted,
      play,
      pause,
      toggle,
      setMuted: setIsMuted,
    }),
    [isPlaying, isMuted, play, pause, toggle],
  );

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }

  return context;
}
