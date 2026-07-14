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
        bg-[#080808]
        py-32
        isolate
    ">

        <div
        className="
        absolute
        top-0
        left-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-[#D4AF37]
        opacity-[0.05]
        blur-[220px]
        pointer-events-none
        "
        />

        <div
        className="
        absolute
        bottom-0
        left-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#7B1836]
        opacity-30
        blur-[200px]
        "
        />

        <div
        className="
        absolute
        right-0
        top-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#D4AF37]
        opacity-10
        blur-[180px]
        "
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {Array.from({ length: 60 }).map((_, i) => (

        <div
        key={i}
        className="
        absolute
        rounded-full
        bg-yellow-300/30
        animate-pulse
        "
        style={{
        width:`${Math.random()*3+1}px`,
        height:`${Math.random()*3+1}px`,
        left:`${Math.random()*100}%`,
        top:`${Math.random()*100}%`,
        animationDuration:`${5+Math.random()*8}s`
        }}
        />

        ))}

        </div>

              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  bg-no-repeat
                  opacity-90
                  -z-20
                "
                style={{
                  backgroundImage:
                    "url('/wedding-invitation/ornaments/noise.png')",
                }}
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
                uppercase
                tracking-[0.6em]
                text-[#D4AF37]
                font-medium
                text-xs
margin-bottom: 18px;
                "
                >
                THE HAPPY COUPLE
                </Paragraph>

            <div className="mt-5">

            <Heading
            className="
            font-cormorant
            text-6xl
            text-white
margin-bottom: 18px;
            "
            >
            Bride{" "}
            <span className="text-[#D4AF37] margin-bottom: 18px;">
            &
            </span>{" "}
            Groom
            </Heading>

            </div>

            <div className="flex justify-center mt-5 margin-bottom: 18px;">

            <div className="h-px w-32 bg-[#D4AF37]/40 margin-bottom: 18px;"/>

            </div>

            <div className="mt-6">

            <Heart
            size={18}
            className="mx-auto text-[#D4AF37]"
            fill="currentColor"
            />

            </div>

          <Divider />

          <Heading>In the Name of Allah</Heading>

          <Paragraph className="font-size: 16px;
line-height: 32px;
color: rgba(255,255,255,.78); mx-auto mt-8 max-w-2xl">
            Dengan penuh rasa syukur dan bahagia,
            kami ingin memperkenalkan mempelai yang akan mengikat janji suci.
          </Paragraph>
        </motion.div>

        <div className="mx-auto
mt-24
grid
max-w-7xl
grid-cols-1
items-start
gap-20
lg:grid-cols-2">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card 
                className="
background: rgba(30, 18, 18, 0.45);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.05);
                bg-transparent
                border-none
                shadow-none
                text-center
                relative
                overflow-visible
                rounded-[36px]
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/[0.06]
                shadow-[0_20px_60px_rgba(0,0,0,.45)]
                transition-all
                duration-500
                hover:bg-white/[0.05]
                hover:border-[#D4AF37]/20
px-8
pt-10
pb-10
                max-w-[380px]
                mx-auto
        flex
        h-full
        flex-col
        rounded-[36px]
                "
            >

                <div className="relative mx-auto w-[340px]">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                        <img
                            src={couple.groom.photo}
                            alt={couple.groom.name}
                            className="h-[470px] w-full rounded-t-[170px] object-cover flex-col intems-center"
                        />
                    </div>
                </div>

              <Heading
styles={{    fontFamily: '"Great Vibes", cursive',
    fontSize: '44px',
    lineHeight: '46px',
    color: '#d4b16d',
    fontWeight: 400,}}
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
                size={20}
                fill="currentColor"
                className="text-[#D4AF37]"
                />

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                </div>

              <Paragraph
                className="
font-size: 13px;
letter-spacing: .08em;
line-height: 28px;
font-weight: 400;
                    mt-6
                    uppercase
                    tracking-[0.35em]
                    text-[11px]
                    text-[#B18A47]

              ">
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
                <Instagram size={20} />
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
background: rgba(30, 18, 18, 0.45);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.05);
                bg-transparent
                border-none
                shadow-none
                text-center
                relative
                overflow-visible
                rounded-[36px]
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/[0.06]
                shadow-[0_20px_60px_rgba(0,0,0,.45)]
                transition-all
                duration-500
                hover:bg-white/[0.05]
                hover:border-[#D4AF37]/20
px-8
pt-10
pb-10
                max-w-[380px]
                mx-auto
        flex
        h-full
        flex-col
        rounded-[36px]
                "
            >

                <div className="relative mx-auto w-[340px]">
                    <div className="overflow-hidden rounded-t-[180px] rounded-b-md border border-yellow-500 bg-[#1B1B1B] p-2 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                        <img
                            src={couple.bride.photo}
                            alt={couple.bride.name}
                            className="h-[470px] w-full rounded-t-[170px] object-cover flex-col intems-center"
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
                size={20}
                fill="currentColor"
                className="text-[#D4AF37]"
                />

                <div className="h-px w-20 bg-[#D4AF37]/30"/>

                </div>

              <Paragraph
                className="
                    mt-6
                    uppercase
                    tracking-[0.35em]
                    text-[11px]
                    text-[#B18A47]

              ">
                Son of Mr. {couple.bride.father} <br /> & Mrs. {couple.bride.mother}
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
