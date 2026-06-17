import type { Metadata, Viewport } from "next";
import "./globals.css";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://petgres.com.br"),
  title: {
    default: "Petgres | Petshop na Vila Mariana",
    template: "%s | Petgres",
  },
  description: siteConfig.description,
  applicationName: "Petgres",
  keywords: [
    "Petgres",
    "petshop Vila Mariana",
    "banho e tosa Vila Mariana",
    "petshop São Paulo",
    "acessórios pet",
    "produtos pet",
  ],
  authors: [{ name: "Petgres" }],
  creator: "Petgres",
  publisher: "Petgres",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Petgres | Cuidado, carinho e bem-estar para o seu pet",
    description:
      "Banho e tosa, produtos e acessórios com atendimento dedicado na Vila Mariana, São Paulo.",
    url: "/",
    siteName: "Petgres",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/petgres-hero-pets.png",
        width: 1792,
        height: 1024,
        alt: "Pets felizes em ambiente de banho e cuidado pet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petgres | Petshop na Vila Mariana",
    description: siteConfig.description,
    images: ["/assets/petgres-hero-pets.png"],
  },
  icons: {
    icon: "/assets/petgres-logo-180.png",
    apple: "/assets/petgres-logo-180.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0767c9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
