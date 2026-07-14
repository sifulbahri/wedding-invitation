import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroScrollProps {
  onClick: () => void;
}

export function HeroScroll({ onClick }: HeroScrollProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="
        absolute
        bottom-10
        left-1/2
        z-30
        -translate-x-1/2

        flex
        flex-col
        items-center

        cursor-pointer

        text-[#C9A34E]
      "
    >
      <span className="mb-2 text-xs uppercase tracking-[0.35em]">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={30} />
      </motion.div>
    </motion.button>
  );
}
