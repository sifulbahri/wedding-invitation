import { RootLayout } from "@/layouts/RootLayout";
import { AppRouter } from "@/router";

export default function App() {
  return (
    <RootLayout>
      <AppRouter />
    </RootLayout>
  );
}
