// ================================================
// INYECCIÓN DE CONFIGURACIÓN DEL CLIENTE
// ================================================
// Este script reemplaza los valores en el HTML con los del config

(function () {
  // Esperar a que el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectConfig);
  } else {
    injectConfig();
  }

  function injectConfig() {
    if (typeof CLIENT_CONFIG === 'undefined') {
      console.error('CLIENT_CONFIG no está definido. Asegúrate de cargar client-config.js primero.');
      return;
    }

    const config = CLIENT_CONFIG;

    // ACTUALIZAR TÍTULO DE LA PÁGINA
    document.title = config.metaTitle;

    // ACTUALIZAR META TAGS
    updateMetaTag('name', 'description', config.metaDescription);
    updateMetaTag('property', 'og:title', config.metaTitle);
    updateMetaTag('property', 'og:description', config.metaDescription);
    updateMetaTag('property', 'og:url', config.ogUrl);
    updateMetaTag('property', 'og:image', config.ogImage);

    // ACTUALIZAR FAVICON
    updateFavicon(config.favicon);

    // ACTUALIZAR LOGO
    updateElements('img.logo-header', 'src', config.logo);
    updateElements('img.logo-header', 'alt', `${config.businessName} Logo`);

    // ACTUALIZAR HERO
    updateTextContent('#hero-title-main', config.heroTitle);
    updateTextContent('#hero-title-sub', config.heroSubtitle);
    updateTextContent('#hero-title-version', config.heroVersion);
    updateTextContent('#hero-tagline', config.tagline);
    updateTextContent('#hero-description', config.description);

    // ACTUALIZAR ENLACES DE CONTACTO
    updateWhatsAppLinks(config.whatsapp);
    updateElements('a[href*="facebook.com"]', 'href', config.facebook);

    // ACTUALIZAR UBICACIÓN
    updateTextContent('.location-badge', config.location);

    // ACTUALIZAR ESTADÍSTICAS DEL HERO
    if (config.stats) {
      // Stats principales (visibles siempre)
      updateStatValue(0, config.stats.repairs || '500+');
      updateStatValue(1, config.stats.support || '24');

      // Stats slide 2
      updateStatValue(2, config.stats.satisfaction || '98');
      updateStatValue(3, config.stats.experience || '5+');

      // Stats slide 3
      updateStatValue(4, config.stats.guarantee || '100');
      updateStatValue(5, config.stats.response || '48');
    }

    // ACTUALIZAR FOOTER
    updateTextContent('#footer-year', config.footerYear);
    updateTextContent('#footer-company', config.footerCompany);

    console.log(`✅ Configuración de ${config.businessName} aplicada correctamente`);
  }

  // FUNCIONES HELPER
  function updateMetaTag(attr, value, content) {
    const tag = document.querySelector(`meta[${attr}="${value}"]`);
    if (tag) tag.setAttribute('content', content);
  }

  function updateFavicon(href) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.setAttribute('href', href);
  }

  function updateElements(selector, attr, value) {
    document.querySelectorAll(selector).forEach(el => {
      if (attr === 'text') {
        el.textContent = value;
      } else {
        el.setAttribute(attr, value);
      }
    });
  }

  function updateTextContent(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function updateWhatsAppLinks(phone) {
    const waLinks = document.querySelectorAll('a[href*="wa.me"]');
    waLinks.forEach(link => {
      const currentHref = link.getAttribute('href');
      const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${phone}`);
      link.setAttribute('href', newHref);
    });
  }

  function updateStatValue(index, value) {
    const statSlides = document.querySelectorAll('.stat-slide');
    if (statSlides.length === 0) return;

    // Calcular qué slide contiene esta estadística (2 stats por slide)
    const slideIndex = Math.floor(index / 2);
    const statIndex = index % 2;

    if (slideIndex < statSlides.length) {
      const slide = statSlides[slideIndex];
      const statElements = slide.querySelectorAll('.text-3xl');
      if (statElements[statIndex]) {
        const currentText = statElements[statIndex].innerHTML;
        // Mantener la estructura del span interno si existe
        if (currentText.includes('<span')) {
          const parts = currentText.split('<span');
          statElements[statIndex].innerHTML = value + '<span' + parts[1];
        } else {
          statElements[statIndex].textContent = value;
        }
      }
    }
  }
})();
