import { Inter, Noto_Sans_Thai, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-thai",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${notoThai.variable} ${sourceSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}