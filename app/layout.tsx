import {type ReactNode} from "react";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Google ADS",
  description: "Easy Pay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lexend.className}
      >
        {children}
      </body>
    </html>
  );
}
