import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { weddingEvents } from "@/data/event";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import Divider1 from "../assets/ornaments/divider-1.png";

export function WeddingEventSection() {
  return (
    <Section
      id="wedding-event"
      className="relative overflow-hidden bg-[var(--surface)]"
    >
      {/* Background */}

<img
  src="/wedding-invitation/images/GalleryBackground.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0
    h-full
    w-full
    object-cover
    opacity-60
    select-none
  "
/>

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
            Wedding Event
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
            Join Our Celebration
          </Heading>
<div className="my-5 flex items-center gap-3">

<div className="h-px flex-1 bg-[#C9A34E]/30"/>

<div className="h-2 w-2 rotate-45 border border-[#C9A34E]"/>

<div className="h-px flex-1 bg-[#C9A34E]/30"/>

</div>
          <Paragraph className="mx-auto mt-8 max-w-2xl text-white/75">
            Your presence and prayers would be
            a great honor and happiness for us.
          </Paragraph>
        </motion.div>

        <div className="mt-14 md:mt-16 grid gap-10 lg:grid-cols-2">
          {weddingEvents.map((event, index) => {
            const start = dayjs(event.startsAt);
            const end = dayjs(event.endsAt);

              return (

            <motion.div
              key={event.id}
              initial={{opacity: 0, y: 40,}}
              whileInView={{opacity: 1,y: 0,}}
              viewport={{once: true,}}
              transition={{delay: index * 0.2,}}
              className="group relative overflow-hidden
                rounded-[32px]border border-[#C9A34E]/25
                bg-gradient-to-br
                from-white/10 to-white/5 p-7
                backdrop-blur-xl transition-all
                duration-500
                hover:border-[#C9A34E]/50
                hover:shadow-[0_0_40px_rgba(201,163,78,0.12)]
            ">

            <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#C9A34E]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#C9A34E]/5 blur-2xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
              {/* Left Side */}
              <div className="hidden md:flex w-32 shrink-0 flex-col items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C9A34E]/40 bg-[#C9A34E]/5">
                  <CalendarDays
                    size={42}
                    className="text-[#D4AF37]"
                  />
                </div>

                <div className="mt-4 h-px w-16 bg-[#C9A34E]/30" />

                <div className="mt-3 flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C9A34E]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C9A34E]/70" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C9A34E]/40" />
                </div>
              </div>

  {/* Right Side */}
  <div className="flex-1">
    <Heading className="text-3xl md:text-4xl">
      {event.title}
    </Heading>

    <div className="my-5 flex items-center gap-3">
      <div className="h-px flex-1 bg-[#C9A34E]/30" />
      <div className="h-2 w-2 rotate-45 border border-[#C9A34E]" />
      <div className="h-px flex-1 bg-[#C9A34E]/30" />
    </div>

    <div className="space-y-5">
      {/* Date */}
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A34E]/10">
          <CalendarDays
            size={18}
            className="text-[#D4AF37]"
          />
        </div>

        <Paragraph className="text-white/80">
          {start.format("dddd")}, {start.format("DD MMMM YYYY")}
        </Paragraph>
      </div>

      {/* Time */}
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A34E]/10">
          <Clock3
            size={18}
            className="text-[#D4AF37]"
          />
        </div>

        <Paragraph className="text-white/80">
          {start.format("HH:mm")} - {end.format("HH:mm")} WIB
        </Paragraph>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A34E]/10">
          <MapPin
            size={18}
            className="text-[#D4AF37]"
          />
        </div>

        <div>
          <Paragraph className="text-white/80">
            {event.venue}
          </Paragraph>

          <Paragraph className="text-white/60">
            {event.address}
          </Paragraph>
        </div>
      </div>
    </div>

    <button
      onClick={() =>
        window.open(
          event.mapsUrl,
          "_blank",
          "noopener,noreferrer",
        )
      }
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-3.5 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]"
    >
      <MapPin size={18} />
      View Location
    </button>
  </div>
</div>
            </motion.div>
          )})}
        </div>
      </Container>
    </Section>
  );
}
