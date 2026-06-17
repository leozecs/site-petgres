export const siteConfig = {
  name: "Petgres",
  description:
    "Petshop na Vila Mariana com banho e tosa, produtos, acessórios e cuidado dedicado para pets em São Paulo.",
  address: "Rua Juá, 160 - Vila Mariana, São Paulo/SP",
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

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
