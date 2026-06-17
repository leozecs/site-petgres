export const siteConfig = {
  name: "Petgres",
  description:
    "Pet shop na Vila Mariana com banho e tosa, produtos, acessórios e cuidado dedicado para pets em São Paulo.",
  address: "Rua Juá, 160 - Vila Mariana, São Paulo/SP",
  streetAddress: "Rua Juá, 160",
  neighborhood: "Vila Mariana",
  city: "São Paulo",
  state: "SP",
  whatsapp: "5511941189254",
  whatsappDisplay: "(11) 94118-9254",
  email: "petgres2@gmail.com",
  instagram: "petgres_",
  instagramUrl: "https://www.instagram.com/petgres_/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Ju%C3%A1%2C%20160%20Vila%20Mariana%20S%C3%A3o%20Paulo%20SP",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Ju%C3%A1%2C%20160%20Vila%20Mariana%20S%C3%A3o%20Paulo%20SP&output=embed",
};

export const conversionConfig = {
  currentChannel: "whatsapp" as "whatsapp" | "petsistem",
  futurePetsistemUrl: "https://petgres.petsistem.com.br",
} as const;

const ctaMessages = {
  schedule: "Olá, Petgres! Vim pelo site e gostaria de agendar banho e tosa.",
  general: "Olá, Petgres! Vim pelo site e gostaria de falar com vocês.",
  products:
    "Olá, Petgres! Gostaria de consultar a disponibilidade de produtos e acessórios.",
  trust:
    "Olá, Petgres! Quero entender como funciona o atendimento antes de agendar.",
  local:
    "Olá, Petgres! Estou na Vila Mariana e gostaria de atendimento na Rua Juá, 160.",
  veterinaryAvailability:
    "Olá, Petgres! Gostaria de confirmar disponibilidade ou orientação sobre atendimento veterinário.",
} as const;

export type CtaKey = keyof typeof ctaMessages;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function ctaHref(key: CtaKey) {
  const shouldUsePetsistem =
    conversionConfig.currentChannel === "petsistem" &&
    (key === "schedule" || key === "trust");

  return shouldUsePetsistem
    ? conversionConfig.futurePetsistemUrl
    : whatsappUrl(ctaMessages[key]);
}
