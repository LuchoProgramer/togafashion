import type { Metadata } from "next";
import { Newsreader, Noto_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Toga Fashion | Sastrería & Café',
  description: 'Confección a medida y dry clean experto en Quito.',
  icons: {
    icon: '/logo-mark.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${newsreader.variable} ${notoSans.variable} dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-body text-slate-800 dark:text-slate-200 antialiased selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
