import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A To-Do List Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
