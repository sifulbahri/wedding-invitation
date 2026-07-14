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


import { couple } from "@/data/couple";

export function BrideGroomSection() {
  return (
    <Section
      id="bride-groom"
        className="
        relative
        overflow-hidden
        bg-[#0B0B0B]
        bg-[radial-gradient(circle_at_top,#34131e_0%,#111111_45%,#070707_100%)]
        "
    >

        <div className="absolute inset-0 opacity-10 bg-[url('/wedding-invitation/ornaments/noise.png')]" />

        <div className="absolute left-0 top-0 h-80 w-80 bg-yellow-500 blur-[180px] opacity-10"/>

        <div className="absolute right-0 bottom-0 h-80 w-80 bg-[#7b1836] blur-[180px] opacity-20"/>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
            <Paragraph className="uppercase tracking-[0.6em] text-yellow-500">
            THE HAPPY COUPLE
            </Paragraph>

            <Heading className="mt-6 text-6xl font-serif text-white">
            Bride <span className="text-yellow-500">&</span> Groom
            </Heading>

          <Divider />

          <Heading>In the Name of Allah</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Dengan penuh rasa syukur dan bahagia,
            kami ingin memperkenalkan mempelai yang akan mengikat janji suci.
          </Paragraph>
        </motion.div>

        <div className="mt-28 grid gap-20 lg:grid-cols-2">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card 
                className="
                bg-transparent
                border-none
                shadow-none
                text-center
                "
            >

                <div className="relative mx-auto w-[320px]">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                        <img
                            src={couple.groom.photo}
                            alt={couple.groom.name}
                            className="h-[420px] w-full rounded-t-[170px] object-cover"
                        />
                    </div>
                </div>

              <Heading className="
                mt-8
                font-[var(--font-script)]
                text-6xl
                text-yellow-400
                ">
                {couple.groom.name}
              </Heading>

              <Paragraph className="mt-4">
                Son of
              </Paragraph>

              <Paragraph>
                Mr. {couple.groom.father}
              </Paragraph>

              <Paragraph>
                & Mrs. {couple.groom.mother}
              </Paragraph>

              <a
                href={couple.groom.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                    mx-auto
                    mt-8
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500
                    hover:bg-yellow-500
                    hover:text-black
                    transition
                    "
              >
                <Instagram size={20} />
              </a>
            </Card>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
            className="
                bg-transparent
                border-none
                shadow-none
                text-center
                ">
                <div className="relative mx-auto w-[320px]">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                        <img
                            src={couple.bride.photo}
                            alt={couple.bride.name}
                            className="h-[420px] w-full rounded-t-[170px] object-cover"
                        />
                    </div>
                </div>

              <Heading className="
                    mt-8
                    font-[var(--font-script)]
                    text-6xl
                    text-yellow-400
                    ">
                {couple.bride.name}
              </Heading>

              <Paragraph className="mt-4">
                Daughter of
              </Paragraph>

              <Paragraph>
                Mr. {couple.bride.father}
              </Paragraph>

              <Paragraph>
                & Mrs. {couple.bride.mother}
              </Paragraph>

              <a
                href={couple.bride.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                    mx-auto
                    mt-8
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500
                    hover:bg-yellow-500
                    hover:text-black
                    transition
                    "
              >
                <Instagram size={20} />
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
