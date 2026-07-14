import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

interface GuestContextValue {
  guestName: string;
  setGuestName: (name: string) => void;
}

const GuestContext = createContext<GuestContextValue | null>(null);

export function GuestProvider({
  children,
}: PropsWithChildren) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const guest = params.get("to");

    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
  }, []);

  const value = useMemo(
    () => ({
      guestName,
      setGuestName,
    }),
    [guestName],
  );

  return (
    <GuestContext.Provider value={value}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  const context = useContext(GuestContext);

  if (!context) {
    throw new Error(
      "useGuest must be used inside GuestProvider",
    );
  }

  return context;
}
