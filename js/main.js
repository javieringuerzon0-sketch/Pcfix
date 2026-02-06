// ============================================
// NEBULA - JAVASCRIPT PRINCIPAL
// ============================================

// ===== ANIMACIONES DE SCROLL =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

// ===== TOGGLE DE PRECIOS (MENSUAL/ANUAL) =====
let isAnnual = false;

function toggleBilling() {
  isAnnual = !isAnnual;
  const knob = document.getElementById('billingKnob');
  const starterPrice = document.querySelector('.price-starter');
  const proPrice = document.querySelector('.price-pro');
  const periods = document.querySelectorAll('.period');

  if (isAnnual) {
    knob.style.transform = 'translateX(32px)';
    starterPrice.textContent = '$0';
    proPrice.textContent = '$470';
    periods.forEach(p => p.textContent = '/yr');
  } else {
    knob.style.transform = 'translateX(0)';
    starterPrice.textContent = '$0';
    proPrice.textContent = '$49';
    periods.forEach(p => p.textContent = '/mo');
  }
}

// ===== SMOOTH SCROLL PARA ENLACES INTERNOS =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ===== MENÚ MÓVIL =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  // Toggle menu al hacer clic en el botón
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar menú al hacer clic en un enlace
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[placeholder="Tu nombre"]').value;
    const email = contactForm.querySelector('input[placeholder="tu@email.com"]').value;
    const message = contactForm.querySelector('textarea').value;

    const whatsappMessage = `Hola PcFix, mi nombre es ${name} (${email}). Mi consulta es: ${message}`;
    const whatsappUrl = `https://wa.me/526121972004?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
  });
}

// ===== HEADER STICKY CON TRANSPARENCIA =====
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ===== HERO CAROUSEL =====
const slides = document.querySelectorAll('.slide');
const statSlides = document.querySelectorAll('.stat-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;

function updateSlides() {
  // Update image slides
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.remove('slide-hidden');
      slide.classList.add('slide-active');
    } else {
      slide.classList.add('slide-hidden');
      slide.classList.remove('slide-active');
    }
  });

  // Update stat slides
  statSlides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.remove('hidden');
      slide.classList.add('flex');
    } else {
      slide.classList.add('hidden');
      slide.classList.remove('flex');
    }
  });

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('dot-active', 'bg-[#00E5FF]', 'w-6');
      dot.classList.remove('bg-neutral-700', 'w-1');
    } else {
      dot.classList.remove('dot-active', 'bg-[#00E5FF]', 'w-6');
      dot.classList.add('bg-neutral-700', 'w-1');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlides();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlides();
}

// Initialize carousel
if (slides.length > 0) {
  updateSlides();

  // Navigation button listeners
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000);
}

// Make goToSlide available globally for onclick handlers
window.goToSlide = goToSlide;

// ===== RELOJ DIGITAL MAZATLÁN =====
function updateClock() {
  const timeElement = document.getElementById('currentTime');
  const dateElement = document.getElementById('currentDate');

  if (!timeElement || !dateElement) return;

  const now = new Date();

  // Opciones para Mazatlán, México
  const timeOptions = {
    timeZone: 'America/Mazatlan',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const dateOptions = {
    timeZone: 'America/Mazatlan',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  const timeFormatter = new Intl.DateTimeFormat('es-MX', timeOptions);
  const dateFormatter = new Intl.DateTimeFormat('es-MX', dateOptions);

  timeElement.textContent = timeFormatter.format(now);

  // Formatear fecha: "martes • 15 de marzo, 2024" (estilo solicitado)
  const dateParts = dateFormatter.formatToParts(now);
  const weekday = dateParts.find(p => p.type === 'weekday').value;
  const month = dateParts.find(p => p.type === 'month').value;
  const day = dateParts.find(p => p.type === 'day').value;
  const year = dateParts.find(p => p.type === 'year').value;

  dateElement.textContent = `${weekday} • ${day} de ${month}, ${year}`;
}

// ===== TESTIMONIALS SLIDER LOGIC (HOVER TRACKING) =====
function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialsSlider');
  const track = document.getElementById('testimonialsTrack');

  if (!slider || !track) return;

  // En esta versión no clonamos, usamos el ancho real para un mapeo preciso
  const trackWidth = track.scrollWidth;
  const sliderWidth = slider.offsetWidth;
  const maxScroll = trackWidth - sliderWidth;

  const handleMouseMove = (e) => {
    const rect = slider.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Posición X del mouse dentro del contenedor

    // Calculamos el porcentaje de posición (0 a 1)
    let percentage = mouseX / sliderWidth;

    // Limitamos entre 0 y 1 por seguridad
    percentage = Math.max(0, Math.min(1, percentage));

    // Mapeamos el porcentaje al rango de movimiento del track
    // (Invertimos para que al mover a la derecha, el track se mueva a la izquierda)
    const targetTranslate = -(percentage * maxScroll);

    // Aplicamos con suavidad vía CSS
    track.style.transform = `translateX(${targetTranslate}px)`;
  }

  // Añadimos suavidad al movimiento en el CSS (ajustado para ser más despacio)
  track.style.transition = 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)';

  slider.addEventListener('mousemove', handleMouseMove);

  // Soporte para touch (opcional, mapeando el toque)
  slider.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect = slider.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    let percentage = touchX / sliderWidth;
    percentage = Math.max(0, Math.min(1, percentage));
    const targetTranslate = -(percentage * maxScroll);
    track.style.transform = `translateX(${targetTranslate}px)`;
  }, { passive: true });
}

// Inicializar componentes al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
  initTestimonialsSlider();

  // Inicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ===== CONSOLE LOG INFO =====
console.log('%c✨ PcFix Pro - Reparación Profesional de Computadoras', 'color: #00E5FF; font-size: 16px; font-weight: bold; background: #000; padding: 10px;');
console.log('%cDesarrollado con ❤️ usando Vite + TailwindCSS + Lucide', 'color: #888; font-size: 12px;');
console.log('%c✅ Versión: 1.0.1 - Todos los sistemas operativos', 'color: #0f0; font-size: 10px;');
