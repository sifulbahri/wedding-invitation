import { motion } from "framer-motion";

export function HeroNames() {
  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Groom */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="
          font-serif
          text-6xl
          font-light
          tracking-wide
          text-white
          md:text-8xl
        "
      >
        Siful
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scale: .7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: .8,
          duration: .6,
        }}
        className="my-8 flex items-center gap-6"
      >
        <div className="h-px w-20 bg-[#C9A34E]/50" />

        <span className="font-serif text-5xl text-[#C9A34E] md:text-6xl">
          &
        </span>

        <div className="h-px w-20 bg-[#C9A34E]/50" />
      </motion.div>

      {/* Bride */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="
          font-serif
          text-6xl
          font-light
          tracking-wide
          text-white
          md:text-8xl
        "
      >
        Yulianti
      </motion.h1>

      {/* Bottom Ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
        }}
        className="mt-10 flex items-center gap-5"
      >
        <div className="h-px w-24 bg-[#C9A34E]/50" />

        <div className="h-2 w-2 rotate-45 bg-[#C9A34E]" />

        <div className="h-px w-24 bg-[#C9A34E]/50" />
      </motion.div>
    </div>
  );
}
