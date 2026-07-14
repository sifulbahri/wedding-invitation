import { motion } from "framer-motion";

export function HeroDateCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.8,
      }}
      className="relative mx-auto mt-20 w-full max-w-xl"
    >
      {/* Left Ornament */}
      <img
        src="/wedding-invitation/ornaments/left.svg"
        className="absolute -left-10 top-1/2 -translate-y-1/2 h-44"
      />

      {/* Right Ornament */}
      <img
        src="/wedding-invitation/ornaments/right.svg"
        className="absolute -right-10 top-1/2 -translate-y-1/2 h-44"
      />

      {/* Card */}
      <div
        className="
        rounded-[34px]
        border
        border-[#C9A34E]/70
        bg-black/40
        px-10
        py-12
        text-center
      "
      >
        {/* Day */}
        <p
          className="
            text-sm
            uppercase
            tracking-[0.7em]
            text-[#C9A34E]
            md:text-base
          "
        >
          Sunday
        </p>

        {/* Divider */}
        <img
            src="/wedding-invitation/ornaments/divider.svg"
            className="mx-auto my-6 w-52"
        />

        {/* Date */}
        <h2
          className="
            font-serif
            text-5xl
            font-light
            tracking-wide
            text-white

            md:text-4xl
          "
        >
          15 November 2026
        </h2>

        {/* Bottom Ornament */}
        <img
            src="/wedding-invitation/ornaments/flower.svg"
            className="mx-auto mt-8 h-10"
        />

      </div>
    </motion.div>
  );
}
