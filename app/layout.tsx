import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southern Cross AI",
  description: "Created by Matthew Altenburg and Dale Rogers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
