// ================================================
// CONFIGURACIÓN DEL CLIENTE
// ================================================
// INSTRUCCIONES: Solo cambia los valores aquí para cada cliente

const CLIENT_CONFIG = {
  // INFORMACIÓN DEL NEGOCIO
  businessName: "PcFix Pro",
  heroTitle: "PcFix",
  heroSubtitle: "Pro",
  heroVersion: "X1",
  tagline: "Servicio Profesional v2.0",
  description: "El nuevo estándar en reparación y mantenimiento de computadoras. Soluciones tecnológicas con precisión profesional.",

  // CONTACTO
  whatsapp: "526121972004", // Número con código de país
  whatsappDisplay: "+52 612 197 2004", // Formato para mostrar
  facebook: "https://www.facebook.com/pcfixlapaz",
  email: "contacto@pcfix.com",

  // UBICACIÓN
  location: "La Paz, BCS",
  locationFull: "La Paz, Baja California Sur",

  // BRANDING
  logo: "assets/images/pcfix-clean-pro.svg",
  favicon: "assets/images/pcfix-clean-pro.svg",

  // SEO
  metaTitle: "PcFix Pro | Reparación y Mantenimiento de Computadoras en La Paz, BCS",
  metaDescription: "Especialistas en reparación de PC, laptops y consolas en La Paz, BCS. Diagnóstico avanzado, mantenimiento preventivo y servicio profesional 24/7.",
  ogUrl: "https://pcfix-lapaz.vercel.app/",
  ogImage: "assets/images/og-preview.jpg",

  // ESTADÍSTICAS (Hero)
  stats: {
    repairs: "500+",
    support: "24",
    satisfaction: "98",
    experience: "5+",
    guarantee: "100",
    response: "48"
  },

  // FOOTER
  footerYear: "2025",
  footerCompany: "PcFix, Inc.",
  footerSlogan: "Reparación Profesional de Computadoras"
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLIENT_CONFIG;
}
