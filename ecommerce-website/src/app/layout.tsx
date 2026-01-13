import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import { CartsProvider } from "@/context/CartContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartsProvider>
          <div className="flex flex-col min-h-screen">
             <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
                <Header />
             </div>
             <main className="flex-1">
                {children}
             </main>
          </div>
        </CartsProvider>
      </body>
    </html>
  );
}