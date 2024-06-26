import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlogSS",
  description: "Generated by create next app",  
  icons: {
    apple: ['/favicon.ico'],
    icon: ['/favicon.ico'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
        <link rel="icon" href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-2xl px-4 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
