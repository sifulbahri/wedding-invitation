import { motion } from "framer-motion";
import { MapPinned, Navigation } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/";

export function LocationSection() {
  return (
    <Section id="location">
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
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Location
          </Paragraph>

          <Divider />

          <Heading>
            Wedding Venue
          </Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            We look forward to welcoming you
            to celebrate this memorable day together.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 overflow-hidden rounded-3xl border border-white/10"
        >
          <iframe
            title="Wedding Location"
            src="https://www.google.com/maps?q=-6.2,106.8&z=15&output=embed"
            className="h-[500px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPinned
              size={22}
              className="text-secondary"
            />

            <Paragraph className="text-lg">
              Wedding Venue
            </Paragraph>
          </div>

          <Paragraph className="mt-4">
            Complete Wedding Address,
            City, Province, Indonesia
          </Paragraph>

          <Button
            className="mt-10"
            onClick={() =>
              window.open(
                GOOGLE_MAPS_URL,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <Navigation
              size={18}
              className="mr-2"
            />

            Open Google Maps
          </Button>
        </div>
      </Container>
    </Section>
  );
}
