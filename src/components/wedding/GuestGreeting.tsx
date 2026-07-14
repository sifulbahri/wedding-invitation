import { useGuest } from "@/context/GuestContext";

export function GuestGreeting() {
  const { guestName } = useGuest();

  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
        Dear
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        {guestName || "Our Beloved Guest"}
      </h2>
    </div>
  );
}
