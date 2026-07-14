import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

export function QuranSection() {
  return (
    <Section
      id="quran"
      className="bg-background"
    >
      <Container>
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
          className="mx-auto max-w-4xl text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Quran Verse
          </Paragraph>

          <Divider />

          <Heading>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Heading>

          <p className="font-arabic mt-12 text-4xl leading-loose md:text-5xl">
            لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا
          </p>

          <Paragraph className="mt-12 text-lg leading-9">
            "Janganlah engkau bersedih,
            sesungguhnya Allah bersama kita."
          </Paragraph>

          <Paragraph className="mt-6 text-secondary font-semibold">
            QS. At-Taubah : 40
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
