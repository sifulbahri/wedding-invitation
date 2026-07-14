import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
      }}
      className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9A34E]">
          Scroll
        </span>

        <ChevronDown
          size={28}
          className="text-[#C9A34E]"
        />
      </motion.div>
    </motion.div>
  );
}
