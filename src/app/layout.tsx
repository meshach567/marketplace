import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Facebook-style marketplace app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <div className="flex w-full max-w-screen-2xl mx-auto">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10 overflow-auto min-h-[calc(100vh-56px)]">{children}</main>
        </div>
      </body>
    </html>
  );
}
