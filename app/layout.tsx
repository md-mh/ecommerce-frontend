import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/redux/ReduxProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
