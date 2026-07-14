import { FloatingMusicButton } from "@/components/common/FloatingMusicButton";
import { LandingScreen } from "@/components/wedding/LandingScreen";
import { useLanding } from "@/context/LandingContext";

import { HeroSection } from "@/sections/HeroSection";
import { BrideGroomSection } from "@/sections/BrideGroomSection";
import { QuranSection } from "@/sections/QuranSection";
import { LoveStorySection } from "@/sections/LoveStorySection";
import { CountdownSection } from "@/sections/CountdownSection";
import { WeddingEventSection } from "@/sections/WeddingEventSection";
import { LocationSection } from "@/sections/LocationSection";
import { GallerySection } from "@/sections/GallerySection";
import { WeddingGiftSection } from "@/sections/WeddingGiftSection";
import { WeddingWishesSection } from "@/sections/WeddingWishesSection";
import { FooterSection } from "@/sections/FooterSection";


export default function HomePage() {
  const { opened } = useLanding();

  if (!opened) {
    return <LandingScreen />;
  }

  return (
    <>
      <FloatingMusicButton />

      <HeroSection />

      <BrideGroomSection />

      <QuranSection />

      <LoveStorySection />

      <CountdownSection />

      <WeddingEventSection />

      <LocationSection />

      <GallerySection />

      <WeddingGiftSection />

      <WeddingWishesSection />

      <FooterSection />
    </>
  );
}
