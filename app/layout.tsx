import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Marc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body>{children}</body>
    </html>
  );
}
