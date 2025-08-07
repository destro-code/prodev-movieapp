// src/app/layout.tsx
import "@/app/globals.css";
import { FavoriteProvider } from "@/context/FavoriteContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}
