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

import { GalleryHorizontal } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { gallery } from "@/data/gallery";

import Divider1 from "../assets/ornaments/divider-1.png";


export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImage = selectedIndex !== null
    ? gallery[selectedIndex]
    : null;

  const close = () => setSelectedIndex(null);

  const previous = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? gallery.length - 1
        : selectedIndex - 1,
    );
  };

  const next = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === gallery.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  return (
    <Section id="gallery" className="relative overflow-hidden bg-[#090909] py-24 md:py-20">

      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/wedding-invitation/images/GalleryBackground.png')",
        }}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto max-w-3xl mt-6"
        >
          <Paragraph className="uppercase tracking-[0.45em] text-secondary">
            Gallery
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

          <Heading>Our Moments</Heading>

          <Paragraph className="mx-auto mt-5 max-w-md text-lg leading-8 text-white/80">
            A collection of beautiful memories
            <br />
            that brought us to this special day.
          </Paragraph>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(index)}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#C9A34E]/20
                backdrop-blur
                ring-1
                ring-[#C9A34E]/20
                transition-all
                duration-500
                hover:ring-[#D4AF37]
                hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
              ">

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
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-[200px] md:h-[50px] w-40 object-cover transition-all duration-700 group-hover:scale-110"
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
              className="fixed inset-0 z-50 flex items-center justify-center"
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

              {currentImage && (
                <img 
                  src={currentImage.image}
                  alt={currentImage.alt}
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl"
                />
              )}

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
        className="absolute left-0 top-0 w-40 opacity-80 pointer-events-none"
      />

      <img
        src="/wedding-invitation/images/ornaments/leaf-bottom-right.png"
        className="absolute bottom-0 right-0 w-40 opacity-80 pointer-events-none"
      />


    <div className="mt-10 flex justify-center">
      <button
        className="
          max-w-[250px]
          h-12
      whitespace-nowrap
          group
          flex items-center gap-3
          rounded-2xl
          border border-[#C9A34E]/60
          px-9 py-4
          uppercase
          tracking-[0.28em]
          text-xs
          font-medium
          text-[#D4AF37]
          transition-all
          duration-300
          hover:border-[#D4AF37]
          hover:bg-[#C9A34E]/10
          hover:shadow-[0_0_25px_rgba(201,163,78,0.25)]
        "
      >
        <GalleryHorizontal className="transition-transform duration-300 group-hover:scale-110" />
        <span>See More Moments</span>
      </button>
    </div>

    </Section>
  );
}
