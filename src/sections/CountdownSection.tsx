import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { useCountdown } from "@/hooks/useCountdown";
import { site } from "@/data/site";

import { Heart } from "lucide-react";
import { CalendarHeart } from "lucide-react";

function CountdownCard({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.02,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#C9A34E]/30
                bg-gradient-to-br
                from-white/[0.05]
                to-white/[0.02]
                px-6
                py-10
                backdrop-blur-xl
                transition-all
                duration-500
            "
        >
            {/* glow */}
            <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[#C9A34E]/10 blur-3xl"/>

            {/* highlight */}
            <div className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-[#D4AF37]"/>

            <div className="text-6xl font-semibold text-[#D4AF37]">
                {String(value).padStart(2, "0")}
            </div>

            <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#C9A34E]/20"/>

                <div className="h-2 w-2 rotate-45 border border-[#C9A34E]"/>

                <div className="h-px flex-1 bg-[#C9A34E]/20"/>
            </div>

            <Paragraph className="uppercase tracking-[0.35em] text-white/80">
                {label}
            </Paragraph>

            <div className="absolute bottom-3 left-3 opacity-10">
                🌿
            </div>
        </motion.div>
    );
}

export function CountdownSection() {
  const countdown = useCountdown();

  return (
    <Section id="countdown"
        className="relative overflow-hidden bg-[var(--surface)]">
      <img
        src="/wedding-invitation/images/GalleryBackground.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <Container  className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Save The Date
          </Paragraph>

<div className="mt-5 mb-8 flex items-center justify-center gap-4">
    <div className="h-px w-24 bg-[#C9A34E]/40"/>

    <div className="flex h-3 w-3 items-center justify-center rotate-45 border border-[#C9A34E]">
        <div className="h-1 w-1 bg-[#C9A34E]"/>
    </div>

    <div className="h-px w-24 bg-[#C9A34E]/40"/>
</div>

          <Heading className="text-5xl md:text-6xl">Countdown</Heading>

          <Paragraph className="mx-auto mt-6 max-w-md leading-8 text-white/75">
            We look forward to celebrating our special
            day with you.
          </Paragraph>
        </motion.div>

        <div className="mx-auto mt-14 md:mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          <CountdownCard
            value={countdown.days}
            label="Days"
          />

          <CountdownCard
            value={countdown.hours}
            label="Hours"
          />

          <CountdownCard
            value={countdown.minutes}
            label="Minutes"
          />

          <CountdownCard
            value={countdown.seconds}
            label="Seconds"
          />

        </div>
<div className="mt-14 flex justify-center">

    <div className="flex items-center gap-5">

    <div className="h-px w-24 bg-[#C9A34E]/40"/>

    <Heart className="text-[#D4AF37]" size={22}/>

    <div className="h-px w-24 bg-[#C9A34E]/40"/>

    </div>

</div>

<div className="mt-8 flex justify-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A34E]/40 bg-[#C9A34E]/5 backdrop-blur">
        <CalendarHeart
            className="text-[#D4AF37]"
            size={34}
        />
    </div>
</div>


      </Container>
    </Section>
  );
}
