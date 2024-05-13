import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "../utils/reactQueryClientProvider";

export const metadata: Metadata = {
  title: "RunninRoulette",
  description:
    "grap a quick running workout. Simpel as that, because the beauty of running is the simplicity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
