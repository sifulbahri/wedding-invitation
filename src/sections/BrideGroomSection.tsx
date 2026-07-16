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

import Divider1 from "../assets/ornaments/divider-1.png";
import { couple } from "@/data/couple";

export function BrideGroomSection() {
  return (
    <Section
      id="bride-groom"
      className="
        relative
        overflow-hidden
        bg-[#080808]
        py-20
        lg:py-24
        isolate
    ">


        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 -z-20"
          style={{backgroundImage: "url('/wedding-invitation/ornaments/noise.png')",}}
        />


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
            <Paragraph
                className="
                tracking-[0.45em]
                text-[11px]
                mb-3
                uppercase
                text-white
                font-medium
                text-xs

                "
                >
                THE HAPPY COUPLE
                </Paragraph>

            <div className="mt-2">

            <Heading
            className="
            font-cormorant
            text-3xl
            text-white
            "
            >
            Bride{" "}
            <span className="text-[#D4AF37]">
            &
            </span>{" "}
            Groom
            </Heading>

            </div>


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

          <Heading>In the Name of Allah</Heading>

          <Paragraph className="text-white mx-auto mt-8 max-w-2xl">
            Dengan penuh rasa syukur dan bahagia,
            kami ingin memperkenalkan mempelai yang akan mengikat janji suci.
          </Paragraph>
        </motion.div>

        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card 
                className="   
                bg-transparent
                shadow-none
                text-center
                relative
                overflow-visible
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-white/[0.05]
                hover:border-[#D4AF37]/20
                max-w-[380px]
                mx-auto
                flex
                h-full
                flex-col
                "
            >

                <div className="relative mx-auto w-[340px] w-full">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2">
                        <img
                            src={couple.groom.photo}
                            alt={couple.groom.name}
                            className="h-[470px] w-full object-cover rounded-t-[180px] "
                        />
                    </div>
                </div>

              <Heading
                className="
                mt-8
                font-[var(--font-script)]
                leading-tight
                font-size: 44px;
                line-height: 46px;
                font-weight: 400;
                font-normal
                text-[#D4AF37]
                drop-shadow-[0_0_12px_rgba(212,175,55,.25)]
                ">
                {couple.groom.name}
              </Heading>

                <div className="mt-4 flex items-center justify-center gap-4">

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                <Heart
                size={40}
                fill="currentColor"
                className="text-[#D4AF37]"
                />

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                </div>

              <Paragraph className="text-white text-xs uppercase tracking-[0.35em]">
                Son of Mr. {couple.groom.father} <br /> & Mrs. {couple.groom.mother}
              </Paragraph>

              <a
                href={couple.groom.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                    group
                    mx-auto
                    mt-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/60
                    bg-black/20
                    transition-all
                    hover:scale-110
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-black
                    "
              >
                <Instagram size={30} />
              </a>
            </Card>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card 
                className="   
                bg-transparent
                shadow-none
                text-center
                relative
                overflow-visible
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-white/[0.05]
                hover:border-[#D4AF37]/20
                max-w-[380px]
                mx-auto
                flex
                h-full
                flex-col
                "
            >

                <div className="relative mx-auto w-[340px] w-full">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2">
                        <img
                            src={couple.bride.photo}
                            alt={couple.bride.name}
                            className="h-[470px] w-full object-cover rounded-t-[180px] "
                        />
                    </div>
                </div>

              <Heading
                className="
                mt-8
                font-[var(--font-script)]
                leading-tight
                font-size: 44px;
                line-height: 46px;
                font-weight: 400;
                font-normal
                text-[#D4AF37]
                drop-shadow-[0_0_12px_rgba(212,175,55,.25)]
                ">
                {couple.bride.name}
              </Heading>

                <div className="mt-4 flex items-center justify-center gap-4">

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                <Heart
                size={40}
                fill="currentColor"
                className="text-[#D4AF37]"
                />

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                </div>

              <Paragraph className="text-white text-xs uppercase tracking-[0.35em]">
                Daughter of Mr. {couple.bride.father} <br /> & Mrs. {couple.bride.mother}
              </Paragraph>

              <a
                href={couple.bride.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                    group
                    mx-auto
                    mt-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/60
                    bg-black/20
                    transition-all
                    hover:scale-110
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-black
                    "
              >
                <Instagram size={30} />
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
