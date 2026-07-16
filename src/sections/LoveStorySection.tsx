import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { story } from "@/data/story";

import Divider1 from "../assets/ornaments/divider-1.png";


export function LoveStorySection() {
  return (
    <Section
      id="love-story"
      className="relative overflow-hidden bg-[var(--surface)]"
    >

      <img
          src="/wedding-invitation/images/LocationBackground.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-80
          "
        />
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

          <Heading>Love Story</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Every journey has a beginning. Ours is filled
            with gratitude, prayers, and countless moments
            that led us to this special day.
          </Paragraph>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--secondary)]/30" />

          {story.map((story, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={story.id}
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
                  isLeft
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
