import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/wedding-invitation/images/hero/background.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.6)_100%)]" />

      {/* Gold Dust */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-16 left-10 h-2 w-2 rounded-full bg-[#C9A34E]" />
        <div className="absolute top-32 right-24 h-1 w-1 rounded-full bg-[#D4AF37]" />
        <div className="absolute bottom-24 left-20 h-2 w-2 rounded-full bg-[#D4AF37]" />
        <div className="absolute bottom-40 right-12 h-1 w-1 rounded-full bg-[#C9A34E]" />
        <div className="absolute top-1/2 left-1/3 h-1 w-1 rounded-full bg-[#E7C66A]" />
      </motion.div>
    </>
  );
}
