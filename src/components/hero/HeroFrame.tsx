export function HeroFrame() {
  return (
    <>
      {/* Main Border */}
      <div className="pointer-events-none absolute inset-5 rounded-[36px] border border-[#C9A34E]/80" />

      {/* Top Left */}
      <div className="absolute left-5 top-5 h-10 w-10">
        <div className="absolute left-0 top-0 h-px w-8 bg-[#C9A34E]" />
        <div className="absolute left-0 top-0 h-8 w-px bg-[#C9A34E]" />
        <div className="absolute left-5 top-0 h-5 w-5 rounded-tl-full border-l border-t border-[#C9A34E]" />
      </div>

      {/* Top Right */}
      <div className="absolute right-5 top-5 h-10 w-10">
        <div className="absolute right-0 top-0 h-px w-8 bg-[#C9A34E]" />
        <div className="absolute right-0 top-0 h-8 w-px bg-[#C9A34E]" />
        <div className="absolute right-5 top-0 h-5 w-5 rounded-tr-full border-r border-t border-[#C9A34E]" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-5 left-5 h-10 w-10">
        <div className="absolute bottom-0 left-0 h-px w-8 bg-[#C9A34E]" />
        <div className="absolute bottom-0 left-0 h-8 w-px bg-[#C9A34E]" />
        <div className="absolute bottom-5 left-0 h-5 w-5 rounded-bl-full border-b border-l border-[#C9A34E]" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-5 right-5 h-10 w-10">
        <div className="absolute bottom-0 right-0 h-px w-8 bg-[#C9A34E]" />
        <div className="absolute bottom-0 right-0 h-8 w-px bg-[#C9A34E]" />
        <div className="absolute bottom-5 right-0 h-5 w-5 rounded-br-full border-b border-r border-[#C9A34E]" />
      </div>
    </>
  );
}
