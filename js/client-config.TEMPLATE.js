// ================================================
// PLANTILLA DE CONFIGURACIÓN PARA NUEVO CLIENTE
// ================================================
//
// INSTRUCCIONES DE USO:
// 1. Copia este archivo y renómbralo a "client-config.js"
// 2. Reemplaza todos los valores entre "" con la información de tu cliente
// 3. Elimina los comentarios de ejemplo si lo deseas
// 4. Guarda y haz commit de los cambios
//
// IMPORTANTE: Este es un archivo de plantilla. NO edites este archivo directamente.
// Úsalo como referencia para crear configuraciones de nuevos clientes.
//
// ================================================

const CLIENT_CONFIG = {
  // ================================================
  // INFORMACIÓN DEL NEGOCIO
  // ================================================

  // Nombre completo del negocio (usado en meta tags y textos generales)
  businessName: "Nombre del Negocio",

  // Título principal del Hero (palabra principal, generalmente el nombre de marca)
  heroTitle: "TuMarca",

  // Subtítulo del Hero (complemento del título)
  heroSubtitle: "Pro",

  // Versión o modelo (ejemplo: "X1", "v2.0", "2025")
  heroVersion: "X1",

  // Eslogan o tagline (frase corta descriptiva)
  tagline: "Tu Eslogan Profesional Aquí",

  // Descripción completa del negocio (1-2 oraciones)
  description: "Descripción detallada de los servicios y la propuesta de valor de tu negocio. Explica qué haces y por qué eres diferente.",

  // ================================================
  // CONTACTO
  // ================================================

  // WhatsApp con código de país (sin espacios, sin +)
  // Ejemplo México: "521234567890"
  // Ejemplo USA: "11234567890"
  whatsapp: "521234567890",

  // WhatsApp formato visual (con espacios y símbolos para mostrar)
  // Ejemplo: "+52 123 456 7890" o "+1 (123) 456-7890"
  whatsappDisplay: "+52 123 456 7890",

  // URL completa de Facebook (incluye https://)
  facebook: "https://www.facebook.com/tupagina",

  // Email de contacto
  email: "contacto@tunegocio.com",

  // ================================================
  // UBICACIÓN
  // ================================================

  // Ubicación corta (para badges y lugares pequeños)
  // Ejemplo: "CDMX", "Guadalajara", "Monterrey"
  location: "Tu Ciudad",

  // Ubicación completa (opcional, para textos más detallados)
  // Ejemplo: "Ciudad de México, México"
  locationFull: "Tu Ciudad, Estado/País",

  // ================================================
  // BRANDING (IMÁGENES)
  // ================================================

  // Ruta al logo principal (SVG recomendado)
  // Puedes usar rutas relativas o absolutas
  logo: "assets/images/tu-logo.svg",

  // Ruta al favicon (aparece en la pestaña del navegador)
  favicon: "assets/images/tu-favicon.svg",

  // ================================================
  // SEO (OPTIMIZACIÓN PARA BUSCADORES)
  // ================================================

  // Título que aparece en Google y pestañas del navegador
  // Recomendación: Incluye nombre del negocio + servicio + ubicación (max 60 caracteres)
  metaTitle: "Tu Negocio | Servicios Profesionales en Tu Ciudad",

  // Descripción que aparece en resultados de Google
  // Recomendación: Clara, concisa, con palabras clave (max 160 caracteres)
  metaDescription: "Servicios profesionales de alta calidad en Tu Ciudad. Expertos en [tu servicio]. Atención personalizada y resultados garantizados.",

  // URL completa de tu sitio (termina con /)
  // Ejemplo: "https://mi-negocio.vercel.app/"
  ogUrl: "https://tu-sitio.vercel.app/",

  // Imagen de vista previa para redes sociales (Open Graph)
  // Recomendación: 1200x630px, formato JPG o PNG
  ogImage: "assets/images/og-preview.jpg",

  // ================================================
  // ESTADÍSTICAS DEL HERO
  // ================================================
  // Estas aparecen en el banner inferior del hero
  // Personaliza según tu negocio (puedes usar números, texto corto, o símbolos)

  stats: {
    // Proyectos, trabajos, o servicios completados
    repairs: "500+",

    // Horas de soporte o disponibilidad
    support: "24",

    // Porcentaje de satisfacción del cliente
    satisfaction: "98",

    // Años de experiencia
    experience: "5+",

    // Porcentaje de garantía
    guarantee: "100",

    // Tiempo de respuesta en horas
    response: "48"
  },

  // ================================================
  // FOOTER
  // ================================================

  // Año actual (generalmente el año actual)
  footerYear: "2025",

  // Nombre legal de la empresa (para copyright)
  // Ejemplo: "Mi Empresa S.A. de C.V." o "Tu Negocio, Inc."
  footerCompany: "Tu Negocio, Inc.",

  // Slogan del footer (opcional, puedes dejarlo igual o cambiarlo)
  footerSlogan: "Descripción Breve de tu Servicio"
};

// ================================================
// NO EDITAR DEBAJO DE ESTA LÍNEA
// ================================================
// Exportar configuración para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLIENT_CONFIG;
}
