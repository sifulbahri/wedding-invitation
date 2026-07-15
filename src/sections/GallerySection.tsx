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
  "/wedding-invitation/images/gallery/IMG003.jpg",
  "/wedding-invitation/images/gallery/IMG004.jpg",
  "/wedding-invitation/images/gallery/IMG005.jpg",
  "/wedding-invitation/images/gallery/IMG006.jpg",
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
    <Section id="gallery" className="relative overflow-hidden bg-[#090909]">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{backgroundImage: "url('/wedding-invitation/images/GalleryBackground.png')",}}
          />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto max-w-3xl"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Gallery
          </Paragraph>

          <div className="my-8 flex items-center justify-center gap-4">

            <div className="h-px w-20 bg-[#C9A34E]/50"/>

            <div className="h-2 w-2 rotate-45 border border-[#C9A34E]"/>

            <div className="h-px w-20 bg-[#C9A34E]/50"/>

          </div>

          <Heading  className="text-5xl md:text-6xl text-white">Our Moments</Heading>

          <Paragraph className="mx-auto mt-6 max-w-xl text-lg leading-9 text-white/70">
            A collection of beautiful memories
            that brought us to this special day.
          </Paragraph>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(index)}



              className="overflow-hidden
group
relative

rounded-[28px]
border
border-[#C9A34E]/20
bg-black/20
backdrop-blur
absolute
inset-0
rounded-[28px]
ring-1
ring-[#C9A34E]/20
transition
group-hover:ring-[#D4AF37]
group-hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
"
            >

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/50
via-transparent
to-transparent
opacity-0
transition
group-hover:opacity-100
"/>

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="h-[280px] w-full object-cover transition-all duration-700 group-hover:scale-110"
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

<img
src="/wedding-invitation/images/ornaments/leaf-top-left.png"
className="
absolute
left-0
top-0
w-40
opacity-80
pointer-events-none
"
/>

<img
src="/wedding-invitation/images/ornaments/leaf-bottom-right.png"
className="
absolute
bottom-0
right-0
w-40
opacity-80
pointer-events-none
"
/>


<div className="mt-16 flex justify-center">

<button
className="
rounded-xl
border
border-[#C9A34E]
px-8
py-4
uppercase
tracking-[0.2em]
text-[#D4AF37]
transition
hover:bg-[#C9A34E]
hover:text-black
"
>

See More Moments

</button>

</div>

    </Section>
  );
}
