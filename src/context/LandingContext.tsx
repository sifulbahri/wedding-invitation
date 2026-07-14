import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

interface LandingContextValue {
  opened: boolean;
  openInvitation: () => void;
}

const LandingContext = createContext<LandingContextValue | null>(null);

export function LandingProvider({
  children,
}: PropsWithChildren) {
  const [opened, setOpened] = useState(false);

  const value = useMemo(
    () => ({
      opened,
      openInvitation: () => setOpened(true),
    }),
    [opened],
  );

  return (
    <LandingContext.Provider value={value}>
      {children}
    </LandingContext.Provider>
  );
}

export function useLanding() {
  const context = useContext(LandingContext);

  if (!context) {
    throw new Error(
      "useLanding must be used inside LandingProvider",
    );
  }

  return context;
}
