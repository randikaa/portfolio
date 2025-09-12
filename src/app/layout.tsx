import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "./Nav/Page";

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
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        {children}
        <Nav />
      </body>
    </html>
  );
}
