import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Medium.otf",
  variable: "--font-space-grotesk",
});

const helvetica = localFont({
  src: "./fonts/Helvetica-Bold.ttf",
  variable: "--font-helvetica",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.className} ${helvetica.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
