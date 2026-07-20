import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { quran } from "@/data/quran";

import Divider1 from "../assets/ornaments/divider-1.png";


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
          className="mx-auto max-w-3xl text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Quran Verse
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
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Heading>

          <p className="font-arabic mt-12 text-2xl leading-loose md:text-4xl">
            {quran.arabic}
          </p>

          <Paragraph className="mt-8 text-base leading-tight tracking-tight">
            {quran.translation}
          </Paragraph>

          <Paragraph className="mt-6 text-secondary font-semibold">
            {quran.surah}
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
