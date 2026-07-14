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

interface EventCard {
  title: string;
  day: string;
  date: string;
  time: string;
  venue: string;
  address: string;
}

const events: EventCard[] = [
  {
    title: "Akad Nikah",
    day: "Sunday",
    date: "15 November 2026",
    time: "08:00 WIB",
    venue: "Wedding Venue",
    address: "Bogor. Indonesia",
  },
  {
    title: "Wedding Reception",
    day: "Sunday",
    date: "15 November 2026",
    time: "13:00 WIB",
    venue: "Wedding Venue",
    address: "Bogor. Indonesia",
  },
];

export function WeddingEventSection() {
  return (
    <Section
      id="wedding-event"
      className="bg-[var(--surface)]"
    >
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

          <Divider />

          <Heading>
            Join Our Celebration
          </Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Your presence and prayers would be
            a great honor and happiness for us.
          </Paragraph>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
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
                delay: index * 0.2,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
            >
              <Heading className="text-4xl">
                {event.title}
              </Heading>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    className="text-secondary"
                    size={22}
                  />

                  <div>
                    <Paragraph>{event.day}</Paragraph>

                    <Paragraph>
                      {event.date}
                    </Paragraph>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock3
                    className="text-secondary"
                    size={22}
                  />

                  <Paragraph>
                    {event.time}
                  </Paragraph>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-secondary"
                    size={22}
                  />

                  <div>
                    <Paragraph>
                      {event.venue}
                    </Paragraph>

                    <Paragraph>
                      {event.address}
                    </Paragraph>
                  </div>
                </div>
              </div>

              <button
                className="mt-10 rounded-full bg-[var(--secondary)] px-8 py-3 font-medium text-black transition hover:opacity-90"
              >
                View Location
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
