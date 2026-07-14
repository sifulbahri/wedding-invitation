import { motion } from "framer-motion";

export function HeroTitle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: .3,
        duration: .8,
      }}
      className="mt-10 text-center"
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.7em]
          text-[#C9A34E]
          md:text-base
        "
      >
        SAVE THE DATE
      </p>

      <div className="mt-6 flex items-center justify-center gap-5">
        <div className="h-px w-20 bg-[#C9A34E]/50" />

        <div className="h-2 w-2 rotate-45 bg-[#C9A34E]" />

        <div className="h-px w-20 bg-[#C9A34E]/50" />
      </div>
    </motion.div>
  );
}
