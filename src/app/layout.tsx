import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "@/themes/globals.css";
import "@/themes/style.scss";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Greenomina",
  description: "Understand that planting trees will reduce carbon emissions",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-only-green.png",
        href: "/logo-only-green.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-only.png",
        href: "/logo-only.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
