import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

export function BrideGroomSection() {
  return (
    <Section
      id="bride-groom"
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
            Bride & Groom
          </Paragraph>

          <Divider />

          <Heading>In the Name of Allah</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            We are pleased to invite you to celebrate
            our wedding and share our happiness on
            this special day.
          </Paragraph>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="text-center">
              <img
                src="/wedding-invitation/images/groom/groom.jpg"
                alt="Siful Bahri"
                className="mx-auto h-72 w-72 rounded-full object-cover border-4 border-[var(--secondary)]"
              />

              <Heading className="mt-8 text-5xl">
                Siful Bahri
              </Heading>

              <Paragraph className="mt-4">
                Son of
              </Paragraph>

              <Paragraph>
                Mr. Father's Name
              </Paragraph>

              <Paragraph>
                & Mrs. Mother's Name
              </Paragraph>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-secondary"
              >
                <Instagram size={20} />
                @sifulbahri
              </a>
            </Card>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="text-center">
              <img
                src="/wedding-invitation/images/bride/bride.png"
                alt="Yulianti Agustina"
                className="mx-auto h-72 w-72 rounded-full object-cover border-4 border-[var(--secondary)]"
              />

              <Heading className="mt-8 text-5xl">
                Yulianti Agustina
              </Heading>

              <Paragraph className="mt-4">
                Daughter of
              </Paragraph>

              <Paragraph>
                Mr. Father's Name
              </Paragraph>

              <Paragraph>
                & Mrs. Mother's Name
              </Paragraph>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-secondary"
              >
                <Instagram size={20} />
                @yulianti
              </a>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          className="mt-16 flex justify-center"
        >
          <Heart
            className="fill-[var(--secondary)] text-[var(--secondary)]"
            size={48}
          />
        </motion.div>
      </Container>
    </Section>
  );
}
