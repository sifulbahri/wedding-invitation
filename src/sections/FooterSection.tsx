import { motion } from "framer-motion";
import {
  ChevronUp,
  Heart,
  Instagram,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { site } from "@/data/site";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Section
      id="footer"
      className="bg-black border-t border-white/10"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Thank You
          </Paragraph>

          <Divider />

          <Heading>
            {site.title}
          </Heading>

          <Paragraph className="mt-8">
            Thank you for your prayers,
            love, and blessings.
          </Paragraph>

          <Paragraph className="mt-3">
            We look forward to celebrating
            this special day together.
          </Paragraph>

          <div className="mt-10 flex justify-center">
            <Heart
              size={36}
              className="fill-[var(--secondary)] text-[var(--secondary)]"
            />
          </div>

          <Paragraph className="mt-10 text-secondary">
            {site.weddingDate}
          </Paragraph>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-secondary"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="mailto:example@email.com"
              className="transition hover:text-secondary"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <Button
            className="mt-12"
            onClick={scrollToTop}
          >
            <ChevronUp
              size={18}
              className="mr-2"
            />
            Back To Top
          </Button>

          <Paragraph className="mt-16 text-sm text-muted">
            {site.copyright}.
            All Rights Reserved.
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
