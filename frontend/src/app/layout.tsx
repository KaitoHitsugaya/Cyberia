import type { Metadata } from "next";
import {Inter, Unbounded, Wix_Madefor_Text} from "next/font/google";
import "@/shared/styles/globals.scss";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});
const unbounded = Unbounded({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-unbounded',
    display: 'swap',
    weight: ['400', '600', '700'],
});

const wixMadeforText = Wix_Madefor_Text({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-wix',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
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