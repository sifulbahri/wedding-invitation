import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

const images = [
  "/wedding-invitation/images/gallery/IMG001.jpg",
  "/wedding-invitation/images/gallery/IMG002.jpg",
  "/wedding-invitation/images/gallery/IMG002.jpg",
  "/wedding-invitation/images/gallery/IMG002.jpg",
  "/wedding-invitation/images/gallery/IMG002.jpg",
  "/wedding-invitation/images/gallery/IMG002.jpg",
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const close = () => setSelectedIndex(null);

  const previous = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1,
    );
  };

  const next = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  return (
    <Section id="gallery">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Gallery
          </Paragraph>

          <Divider />

          <Heading>Our Moments</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            A collection of beautiful memories
            that brought us to this special day.
          </Paragraph>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            >
              <button
                onClick={close}
                className="absolute right-6 top-6"
                aria-label="Close gallery"
              >
                <X
                  size={32}
                  className="text-white"
                />
              </button>

              <button
                onClick={previous}
                className="absolute left-6"
                aria-label="Previous image"
              >
                <ChevronLeft
                  size={40}
                  className="text-white"
                />
              </button>

              <img
                src={images[selectedIndex]}
                alt=""
                className="max-h-[90vh] max-w-[90vw] rounded-2xl"
              />

              <button
                onClick={next}
                className="absolute right-6"
                aria-label="Next image"
              >
                <ChevronRight
                  size={40}
                  className="text-white"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
