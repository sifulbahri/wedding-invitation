import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Paragraph } from "@/components/ui/Typography";

import { couple } from "@/data/couple";
import { site } from "@/data/site";

import { HeroBackground } from "/src/components/hero/HeroBackground";
import { HeroFrame } from "/src/components/hero/HeroFrame";
import { HeroMonogram } from "/src/components/hero/HeroMonogram";
import { HeroTitle } from "/src/components/hero/HeroTitle";
import { HeroNames } from "/src/components/hero/HeroNames";
import { HeroDateCard } from "/src/components/hero/HeroDateCard";
import { HeroScroll } from "/src/components/hero/HeroScroll";
import { HeroGlow } from "/src/components/hero/HeroGlow";
import { HeroParticles } from "/src/components/hero/HeroParticles";


export function HeroSection() {
  const scrollToNext = () => {
    const next = document.getElementById("bride-groom");

    if (next) {
      next.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <Container className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <Paragraph className="uppercase tracking-[0.45em] text-secondary">
            Save The Date
          </Paragraph>


          <HeroNames />

          <Paragraph className="mt-2 text-2xl font-semibold text-foreground">
              {new Date(site.weddingDate).toLocaleDateString(
                site.locale,
                {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
          </Paragraph>
        </motion.div>

        <motion.button
          type="button"
          onClick={scrollToNext}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-secondary"
          aria-label="Scroll to next section"
        >
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.button>
      </Container>
    </Section>
  );
}
