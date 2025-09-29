"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />   {/* ✅ Navbar always visible */}
        <main>{children}</main>
      </body>
    </html>
  );
}

