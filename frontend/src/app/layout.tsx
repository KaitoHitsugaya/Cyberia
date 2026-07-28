import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Киберия | Корпоративный сайт",
  description: "Официальный сайт компании Киберия. Информация о команде, проектах и контактах.",
};

export default function RootLayout({
     children,
   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru" className={inter.variable}>
      <body>
      {children}
      </body>
      </html>
  );
}