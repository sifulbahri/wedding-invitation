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
import Divider1 from "../assets/ornaments/divider-1.png";

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
          <Paragraph className="mx-auto uppercase tracking-[0.4em] text-secondary">
            Thank You
          </Paragraph>

<img
    src={Divider1}
    alt=""
    aria-hidden="true"
    className="
        mx-auto
        py-4
        w-48
        md:w-72
        lg:w-96
        object-contain
    "
/>

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

          <Button
            className="fixed bottom-6 right-6 flex h-12 w-auto items-center justify-center rounded-full"
            onClick={scrollToTop}
          >
            <ChevronUp
              size={18}
              className=""
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
