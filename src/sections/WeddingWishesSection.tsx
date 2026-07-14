import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

interface Wish {
  id: number;
  name: string;
  message: string;
}

const wishes: Wish[] = [
  {
    id: 1,
    name: "Ahmad",
    message:
      "Congratulations! May Allah bless your marriage with love, mercy, and happiness.",
  },
  {
    id: 2,
    name: "Sarah",
    message:
      "Wishing both of you a lifetime filled with joy, health, and endless blessings.",
  },
  {
    id: 3,
    name: "Rizky",
    message:
      "Happy wedding! May your new journey together always be under Allah's guidance.",
  },
];

export function WeddingWishesSection() {
  return (
    <Section
      id="wishes"
      className="bg-background"
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
            Wedding Wishes
          </Paragraph>

          <Divider />

          <Heading>Messages & Prayers</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Every prayer and kind word means a great
            deal to us. Thank you for being part of our
            special day.
          </Paragraph>
        </motion.div>

        {wishes.length === 0 ? (
          <div className="mt-20 text-center">
            <Paragraph>
              No wishes have been shared yet.
            </Paragraph>
          </div>
        ) : (
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {wishes.map((wish, index) => (
              <motion.article
                key={wish.id}
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
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <Heart
                    size={18}
                    className="fill-[var(--secondary)] text-[var(--secondary)]"
                  />

                  <h3 className="text-lg font-semibold">
                    {wish.name}
                  </h3>
                </div>

                <Paragraph className="mt-6">
                  "{wish.message}"
                </Paragraph>
              </motion.article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
