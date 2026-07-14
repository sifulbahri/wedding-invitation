import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Heading, Paragraph } from "@/components/ui/Typography";

import { GuestGreeting } from "./GuestGreeting";

import { useLanding } from "@/context/LandingContext";

import { useMusic } from "@/context/MusicContext";

export function LandingScreen() {
  const { openInvitation } = useLanding();
  const { play } = useMusic();

  const handleOpen = async () => {
    await play();
    openInvitation();
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/wedding-invitation/images/hero/background.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center"
        >
          <GuestGreeting />

          <Paragraph className="mt-12 uppercase tracking-[0.4em] text-secondary">
            The Wedding Of
          </Paragraph>

          <Divider />

          <Heading>Siful</Heading>

          <Paragraph className="my-4 text-secondary text-3xl">
            &
          </Paragraph>

          <Heading>Yulianti</Heading>

          <Paragraph className="mt-8">
            Sunday, 15 November 2026
          </Paragraph>

          <Button
            className="mt-10"
            onClick={() => void handleOpen()}
          >
            Open Invitation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
