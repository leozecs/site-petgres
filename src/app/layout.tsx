import type { Metadata, Viewport } from "next";
import "./globals.css";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://petgres.com.br"),
  title: {
    default: "Petgres | Pet Shop na Vila Mariana",
    template: "%s | Petgres",
  },
  description: siteConfig.description,
  applicationName: "Petgres",
  keywords: [
    "Petgres",
    "Pet Shop Vila Mariana",
    "Banho e Tosa Vila Mariana",
    "Veterinário Vila Mariana",
    "Pet Shop São Paulo",
    "Rua Juá 160",
    "Vila Mariana SP",
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
    title: "Petgres | Pet Shop na Vila Mariana",
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
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: siteConfig.name,
    description: siteConfig.description,
    image: "https://petgres.com.br/assets/petgres-logo-512.png",
    url: "https://petgres.com.br",
    telephone: `+${siteConfig.whatsapp}`,
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "BR",
    },
    areaServed: ["Vila Mariana", "São Paulo", "Rua Juá 160"],
    makesOffer: [
      "Banho e tosa",
      "Produtos pet",
      "Acessórios pet",
      "Cuidados e higiene pet",
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
