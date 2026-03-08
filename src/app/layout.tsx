import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encuesta — Academia Panamá Este",
  description: "Encuesta de sondeo para el programa de estimulación temprana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <HtmlLangUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
