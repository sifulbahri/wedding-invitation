import { GuestProvider } from "@/context/GuestContext";
import { LandingProvider } from "@/context/LandingContext";
import { MusicProvider } from "@/context/MusicContext";

export function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <GuestProvider>
      <MusicProvider>
        <LandingProvider>
          <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {children}
          </main>
        </LandingProvider>
      </MusicProvider>
    </GuestProvider>
  );
}
