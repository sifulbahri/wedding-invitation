import { motion } from "framer-motion";

export function HeroMonogram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="flex flex-col items-center"
    >
      {/* Laurel */}
      <div className="flex items-center gap-6">
        <div className="h-px w-14 bg-[#C9A34E]/60" />

        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C9A34E]/80 bg-black/40 backdrop-blur-sm shadow-[0_0_40px_rgba(201,163,78,.25)]">
          <div className="flex items-center gap-3 text-[#E7C66A]">
            <span className="font-serif text-4xl">S</span>

            <div className="h-10 w-px bg-[#C9A34E]/60" />

            <span className="font-serif text-4xl">Y</span>
          </div>
        </div>

        <div className="h-px w-14 bg-[#C9A34E]/60" />
      </div>

      {/* Small Ornament */}
      <div className="mt-5 flex items-center gap-3">
        <div className="h-px w-10 bg-[#C9A34E]/50" />

        <div className="h-2 w-2 rotate-45 border border-[#C9A34E]" />

        <div className="h-px w-10 bg-[#C9A34E]/50" />
      </div>
    </motion.div>
  );
}
