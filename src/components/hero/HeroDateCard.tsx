import { CalendarDays, Clock, MapPin } from "lucide-react";
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
        delay: 1.4,
        duration: 0.8,
      }}
      className="
        mt-16
        w-full
        max-w-md
        rounded-[32px]
        border
        border-[#C9A34E]/30
        bg-black/30
        p-8
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(201,163,78,.15)]
      "
    >
      {/* Day */}
      <div className="text-center">
        <p className="tracking-[0.35em] text-sm uppercase text-[#C9A34E]">
          Sunday
        </p>

        <h2 className="mt-3 font-serif text-5xl text-white">
          15
        </h2>

        <p className="mt-2 text-lg tracking-[0.3em] uppercase text-gray-300">
          November 2026
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#C9A34E]/30" />

        <div className="h-2 w-2 rotate-45 bg-[#C9A34E]" />

        <div className="h-px flex-1 bg-[#C9A34E]/30" />
      </div>

      {/* Details */}
      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <CalendarDays
            className="text-[#C9A34E]"
            size={20}
          />

          <span className="text-gray-200">
            Sunday, 15 November 2026
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Clock
            className="text-[#C9A34E]"
            size={20}
          />

          <span className="text-gray-200">
            09.00 WIB
          </span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin
            className="text-[#C9A34E]"
            size={20}
          />

          <span className="text-gray-200">
            Bogor, Indonesia
          </span>
        </div>

      </div>
    </motion.div>
  );
}
