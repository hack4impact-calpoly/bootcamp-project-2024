import blogs from "@/app/blogData.ts";
import Navbar from "@/components/navbar";
import BlogPreview from "@/components/blogPreview";
import Footer from "@/components/footer";
import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emily's Personal Website",
  description: "A personal website for Emily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Navbar />
        <main style={{ flex: '1', margin: 0, padding: 0 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}