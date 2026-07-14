import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { useCountdown } from "@/hooks/useCountdown";

function CountdownCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div className="text-5xl font-bold text-[var(--secondary)]">
        {String(value).padStart(2, "0")}
      </div>

      <Paragraph className="mt-3 uppercase tracking-[0.2em]">
        {label}
      </Paragraph>
    </div>
  );
}

export function CountdownSection() {
  const countdown = useCountdown();

  return (
    <Section id="countdown">
      <Container>
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

          <Divider />

          <Heading>Countdown</Heading>

          <Paragraph className="mx-auto mt-8 max-w-xl">
            We look forward to celebrating our special
            day with you.
          </Paragraph>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
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
      </Container>
    </Section>
  );
}
