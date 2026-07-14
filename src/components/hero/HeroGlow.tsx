export function HeroGlow() {
  return (
    <>
      <div
        className="
          absolute
          left-1/2
          top-44
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[#C9A34E]/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-80
          h-60
          w-60
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[100px]
        "
      />
    </>
  );
}
