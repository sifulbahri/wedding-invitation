import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

const stories = [
  {
    year: "2021",
    title: "First Meeting",
    description:
      "The beginning of a beautiful journey where two paths crossed for the first time.",
  },
  {
    year: "2023",
    title: "Growing Together",
    description:
      "Through countless moments, our friendship grew into love, strengthening our commitment to one another.",
  },
  {
    year: "2025",
    title: "Engagement",
    description:
      "With the blessing of our families, we promised to walk together toward marriage.",
  },
  {
    year: "2026",
    title: "Wedding Day",
    description:
      "By the grace of Allah, we begin a new chapter together as husband and wife.",
  },
];

export function LoveStorySection() {
  return (
    <Section
      id="love-story"
      className="bg-[var(--surface)]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Our Story
          </Paragraph>

          <Divider />

          <Heading>Love Story</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Every journey has a beginning. Ours is filled
            with gratitude, prayers, and countless moments
            that led us to this special day.
          </Paragraph>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--secondary)]/30" />

          {stories.map((story, index) => {
            const left = index % 2 === 0;

            return (
              <motion.div
                key={story.year}
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
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative mb-16 flex ${
                  left
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div className="w-full md:w-[45%] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <Paragraph className="text-secondary font-semibold">
                    {story.year}
                  </Paragraph>

                  <Heading className="mt-4 text-4xl">
                    {story.title}
                  </Heading>

                  <Paragraph className="mt-6">
                    {story.description}
                  </Paragraph>
                </div>

                <div className="absolute left-1/2 top-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[var(--surface)] bg-[var(--secondary)]">
                  <Heart
                    size={18}
                    className="fill-black text-black"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
