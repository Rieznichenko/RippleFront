import type { Metadata } from "next";
import { Inter, Lato, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
  variable: "--font-lato",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "XRP Kuwait",
  description: "All the way From a 52° degree country To the XRP Ledger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-outfit antialiased",
          outfit.variable,
          lato.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
