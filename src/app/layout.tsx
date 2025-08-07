// src/app/layout.tsx
import "./globals.css";
import { FavoriteProvider } from "@/context/FavoriteContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}
