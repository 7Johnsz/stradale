import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import SmoothScroll from "./components/lenis";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Stradale",
  description: "A Stradale Car Service é uma oficina mecânica premium em São Paulo, especializada em serviços completos de manutenção e performance automotiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans antialiased`}>
      <body>
        {/* <SmoothScroll> */}
          {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
