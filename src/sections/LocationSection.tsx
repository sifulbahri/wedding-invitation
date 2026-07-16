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


import Divider1 from "../assets/ornaments/divider-1.png";


const GOOGLE_MAPS_URL =
  "https://maps.google.com/";

export function LocationSection() {
  return (
    <Section id="location"   className="relative overflow-hidden bg-[var(--surface)]">

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

      <Container  className="relative z-10">
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


          <Heading>
            Wedding Venue
          </Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            We look forward to welcoming you
            to celebrate this memorable day together.
          </Paragraph>
        </motion.div>

<div
    className="
        absolute
        bottom-[22%]
        left-1/2
        -translate-x-1/2
    "
>

    <div className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        bg-[#D4AF37]
        shadow-[0_0_40px_rgba(212,175,55,.45)]
    ">

        <MapPinned
            size={34}
            className="text-black"
        />

    </div>

</div>


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

            Jl. Pondok Bitung. Sukaharja.
            Bogor. Indonesia
          </Paragraph>




        </div>
      </Container>
    </Section>
  );
}
