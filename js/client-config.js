// ================================================
// CONFIGURACIÓN DEL CLIENTE
// ================================================
// INSTRUCCIONES: Solo cambia los valores aquí para cada cliente

const CLIENT_CONFIG = {
  // INFORMACIÓN DEL NEGOCIO
  businessName: "ServiExpress Electrónik",
  heroTitle: "Servi",
  heroSubtitle: "Express",
  heroVersion: "PRO",
  tagline: "Servicio Técnico Especializado v2.0",
  description: "Reparación y mantenimiento de dispositivos electrónicos con tecnología de punta. Servicio rápido, garantizado y profesional.",

  // CONTACTO
  whatsapp: "526123483327", // Número con código de país
  whatsappDisplay: "+52 612 348 3327", // Formato para mostrar
  facebook: "https://www.facebook.com/serviexpress.electronik",
  email: "dr.cell@icloud.com",

  // UBICACIÓN
  location: "La Paz, BCS",
  locationFull: "La Paz, Baja California Sur",

  // BRANDING
  logo: "assets/images/serviexpress-logo.svg",
  favicon: "assets/images/serviexpress-logo.svg"

  // SEO
  metaTitle: "ServiExpress Electrónik | Reparación Profesional de Dispositivos Electrónicos",
  metaDescription: "Especialistas en reparación de smartphones, tablets, computadoras y electrónicos en La Paz, BCS. Servicio técnico garantizado 24/7.",
  ogUrl: "https://serviexpress-electronik.vercel.app/",
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
  footerCompany: "ServiExpress Electrónik",
  footerSlogan: "Reparación Profesional de Dispositivos Electrónicos"
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLIENT_CONFIG;
}
