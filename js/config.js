// ============================================
// CONFIGURACIÓN EDITABLE DEL SITIO - PCFIX
// ============================================

const CONFIG = {
  // ===== INFORMACIÓN DEL SITIO =====
  site: {
    name: 'PcFix',
    tagline: 'Reparación Profesional de Computadoras',
    description: 'Diseñamos soluciones tecnológicas que combinan profesionalismo con funcionalidad, creando experiencias fluidas que los usuarios aman y los negocios necesitan.',
    year: new Date().getFullYear(),
  },

  // ===== CONTACTO =====
  contact: {
    email: 'contacto@pcfixlapaz.com',
    support: 'soporte@pcfixlapaz.com',
    phone: '612 197 2004',
    whatsapp: '526121972004',
    facebook: 'https://www.facebook.com/pcfixlapaz',
  },

  // ===== HERO SECTION =====
  hero: {
    badge: 'Diseño Galardonado',
    title: {
      line1: 'Creando Soluciones',
      line2: 'Digitales',
      line3: 'Que Importan',
    },
    subtitle: 'Diseñamos interfaces que combinan belleza con funcionalidad, creando experiencias perfectas que los usuarios aman y los negocios necesitan.',
    cta: {
      primary: 'Ver Portafolio',
      secondary: 'Ver Demo',
    },
  },

  // ===== ESTADÍSTICAS =====
  stats: {
    projects: '150+',
    projectsLabel: 'Proyectos Entregados',
    satisfaction: '98%',
    satisfactionLabel: 'Satisfacción del Cliente',
    years: '5+',
    yearsLabel: 'Años',
    support: '24/7',
    supportLabel: 'Soporte',
    quality: '100%',
    qualityLabel: 'Calidad',
  },

  // ===== CLIENTES DESTACADOS =====
  clients: [
    'ORBIT',
    'Retro',
    'NEXUS',
    'AURA',
  ],

  // ===== FEATURES =====
  features: {
    edge: {
      title: 'Diseño con Propósito',
      subtitle: 'Pensamiento Estratégico de Diseño',
      description: 'Cada píxel tiene intención',
    },
    results: {
      title: '3x entrega más rápida, 2x mayor participación',
      methodology: [
        'Descubrimiento e Investigación Estratégica',
        'Proceso de Diseño Colaborativo',
        'Optimización Basada en Datos',
      ],
    },
  },

  // ===== ABOUT =====
  about: {
    title: 'Diseño inteligente, resultados hermosos.',
    description: 'PcFix combina tecnología de vanguardia con principios de diseño reflexivos para ayudarte a crear sitios web impresionantes en minutos. Nuestra plataforma empodera a creadores de todos los niveles para dar vida a su visión.',
    features: [
      {
        title: 'Ultra Rápido',
        description: 'Crea sitios profesionales en minutos, no en días.',
      },
      {
        title: 'Impulsado por IA',
        description: 'La inteligencia maneja el código complejo por ti.',
      },
      {
        title: 'Totalmente Personalizable',
        description: 'Control completo sobre cada elemento de diseño.',
      },
    ],
  },

  // ===== TESTIMONIALS =====
  testimonials: {
    main: {
      quote: 'Ahorramos en alojamiento y aumentamos conversiones solo ejecutando PcFix.',
      author: 'Tom Sullivan',
      role: 'Líder de Agencia',
    },
    secondary: [
      {
        quote: 'Cambiar a PcFix fue un cambio radical. Nuestro tiempo de implementación cayó de horas a segundos, y la experiencia del desarrollador es increíble.',
        author: 'Michael Chen',
        role: 'CTO @ TechFlow',
      },
      {
        quote: 'El escalado automático y SSL sin configuración nos ahorró innumerables horas. Nuestro equipo ahora puede enfocarse en construir funcionalidades.',
        author: 'Emily Roberts',
        role: 'Ingeniera Principal @ DataSync',
      },
      {
        quote: 'Migramos más de 50 proyectos de clientes a PcFix. Las mejoras de rendimiento fueron inmediatas, y nuestros clientes lo notaron.',
        author: 'David Park',
        role: 'Director Creativo @ Studio X',
      },
    ],
  },

  // ===== PRICING =====
  pricing: {
    title: 'Planes de Precios',
    toggle: {
      monthly: 'Mensual',
      annual: 'Anual',
      discount: 'Ahorra 20%',
    },
    plans: {
      starter: {
        name: 'Inicial',
        price: {
          monthly: 0,
          annual: 0,
        },
        cta: 'Comenzar a Construir',
        features: [
          'Hasta 1K llamadas API por mes',
          'Pipelines básicos de ingesta de datos',
          'Acceso a consola web',
          'Soporte comunitario',
          'Monitoreo y alertas básicas',
        ],
      },
      pro: {
        name: 'Profesional',
        price: {
          monthly: 49,
          annual: 470,
        },
        badge: 'Más Popular',
        cta: 'Actualizar a Pro',
        features: [
          'Llamadas API ilimitadas',
          'Modelos de razonamiento avanzado',
          'Análisis e insights de rendimiento',
          'Flujos de trabajo e integraciones personalizadas',
          'Soporte prioritario con SLA',
        ],
      },
      enterprise: {
        name: 'Empresa',
        price: 'Personalizado',
        cta: 'Contactar Ventas',
        features: [
          'Implementación on-premises y nube privada',
          'Controles avanzados de seguridad y cumplimiento',
          'Equipo de soporte dedicado e incorporación',
          'Gestión de equipo y análisis de uso',
          'Entrenamiento y ajuste fino de modelos personalizados',
        ],
      },
    },
    disclaimer: 'Todos los planes incluyen prueba gratis de 14 días. Sin tarifas de configuración.',
  },

  // ===== CONTACT SECTION =====
  contactSection: {
    badge: 'Trabajemos Juntos',
    title: '¿Listo para colaborar?',
    subtitle: 'Ya sea que necesites ayuda con diseño de producto, estrategia o educación, estoy aquí para ayudar a dar vida a tu visión.',
    form: {
      title: 'Enviar un Mensaje',
      cta: 'Enviar Mensaje',
    },
    info: [
      {
        icon: 'email',
        title: 'Email',
        value: 'contacto@pcfixlapaz.com',
      },
      {
        icon: 'calendar',
        title: 'Agendar una Llamada',
        value: 'Reserva una consultoría gratuita',
      },
    ],
  },

  // ===== FOOTER =====
  footer: {
    description: 'Experiencias curadas, calidad verificada y soporte de conserjería desde el primer contacto hasta la entrega.',
    columns: {
      company: {
        title: 'Empresa',
        links: [
          { text: 'Acerca de', url: '#' },
          { text: 'Prensa', url: '#' },
          { text: 'Carreras', url: '#' },
          { text: 'Socios', url: '#' },
        ],
      },
      apps: {
        title: 'Apps',
        links: [
          { text: 'App iOS', url: '#' },
          { text: 'App Android', url: '#' },
          { text: 'App TV', url: '#' },
          { text: 'Realidad Virtual', url: '#' },
        ],
      },
      services: {
        title: 'Servicios',
        links: [
          { text: 'Comprar con PcFix', url: '#' },
          { text: 'Vender con PcFix', url: '#' },
          { text: 'Conserjería', url: '#' },
          { text: 'Buscador de Agentes', url: '#' },
        ],
      },
    },
    legal: [
      { text: 'Política de Privacidad', url: '#' },
      { text: 'Términos de Uso', url: '#' },
      { text: 'Accesibilidad', url: '#' },
      { text: 'Mapa del Sitio', url: '#' },
    ],
  },

  // ===== REDES SOCIALES =====
  social: {
    twitter: '#',
    instagram: '#',
    dribbble: '#',
    linkedin: '#',
    facebook: 'https://www.facebook.com/pcfixlapaz',
    whatsapp: 'https://wa.me/526121972004',
  },

  // ===== IMÁGENES (URLs editables) =====
  images: {
    logo: 'assets/images/logo-pcfix.png',
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    featureMain: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    about: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    testimonialMain: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    contact: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    avatars: {
      testimonial1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      testimonial2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      testimonial3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      testimonial4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  },
};

// Exportar configuración
window.CONFIG = CONFIG;
