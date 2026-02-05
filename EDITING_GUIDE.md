# 📝 Guía de Edición - Nebula

Esta guía te ayudará a editar cualquier parte del sitio web de forma fácil y organizada.

## 🎯 Estructura del Proyecto

```
Mockop compu/
├── index.html              # Estructura HTML principal
├── css/
│   └── styles.css         # Estilos personalizados y variables
├── js/
│   ├── config.js          # ⭐ AQUÍ EDITAS TEXTOS E IMÁGENES
│   └── main.js            # Funcionalidades JavaScript
├── assets/
│   └── images/            # Coloca tus imágenes locales aquí
└── EDITING_GUIDE.md       # Esta guía
```

---

## 🚀 Inicio Rápido - ¿Qué Quieres Editar?

### 📝 Textos, Enlaces e Imágenes
👉 **Archivo:** `js/config.js`

Este archivo contiene **TODO el contenido editable** del sitio:
- Títulos y subtítulos
- Descripciones
- Nombres de planes de precios
- URLs de imágenes
- Enlaces de redes sociales
- Información de contacto

### 🎨 Colores y Estilos
👉 **Archivo:** `css/styles.css`

Variables CSS editables (línea 100+):
```css
:root {
  --bg-primary: #000000;        /* Color de fondo principal */
  --text-primary: #FFFFFF;      /* Color de texto principal */
  --border-primary: rgba(255, 255, 255, 0.10);
  /* ... más variables */
}
```

### 🏗️ Estructura HTML
👉 **Archivo:** `index.html`

Edita la estructura solo si necesitas:
- Agregar nuevas secciones
- Cambiar el orden de las secciones
- Modificar la estructura de componentes

---

## 📋 Guía Detallada de Edición

### 1. EDITAR TEXTOS E IMÁGENES

**Archivo:** `js/config.js`

#### Hero Section (Portada)
```javascript
hero: {
  badge: 'Award-Winning Design',           // Etiqueta superior
  title: {
    line1: 'Crafting Digital',            // Línea 1 del título
    line2: 'Experiences',                 // Línea 2 del título
    line3: 'That Matter',                 // Línea 3 del título
  },
  subtitle: 'We design interfaces...',    // Descripción
  cta: {
    primary: 'View Portfolio',            // Botón principal
    secondary: 'Watch Showreel',          // Botón secundario
  },
}
```

#### Estadísticas
```javascript
stats: {
  projects: '150+',                       // Número de proyectos
  satisfaction: '98%',                    // Porcentaje de satisfacción
  years: '5+',                            // Años de experiencia
  support: '24/7',                        // Soporte
  quality: '100%',                        // Calidad
}
```

#### Precios
```javascript
pricing: {
  plans: {
    starter: {
      name: 'Starter',
      price: {
        monthly: 0,                       // Precio mensual
        annual: 0,                        // Precio anual
      },
      features: [                         // Lista de características
        'Feature 1',
        'Feature 2',
      ],
    },
    // ... pro y enterprise
  }
}
```

#### Imágenes
```javascript
images: {
  hero: 'https://images.unsplash.com/...',           // Imagen del hero
  about: 'https://images.unsplash.com/...',          // Imagen de About
  // Puedes usar URLs de internet o rutas locales:
  // hero: 'assets/images/mi-imagen.jpg',
}
```

---

### 2. EDITAR COLORES Y ESTILOS

**Archivo:** `css/styles.css`

#### Cambiar Colores
```css
:root {
  /* FONDOS - Cambia estos valores */
  --bg-primary: #000000;          /* Negro - Fondo principal */
  --bg-secondary: #0a0a0a;        /* Negro suave */

  /* TEXTO - Cambia estos valores */
  --text-primary: #FFFFFF;        /* Blanco - Texto principal */
  --text-secondary: rgba(255, 255, 255, 0.70);  /* 70% opacidad */

  /* BORDES */
  --border-primary: rgba(255, 255, 255, 0.10);
}
```

#### Cambiar Espaciado
```css
:root {
  --spacing-xs: 0.5rem;    /* Espaciado extra pequeño */
  --spacing-sm: 1rem;      /* Espaciado pequeño */
  --spacing-md: 1.5rem;    /* Espaciado mediano */
  --spacing-lg: 2rem;      /* Espaciado grande */
  --spacing-xl: 3rem;      /* Espaciado extra grande */
}
```

#### Cambiar Bordes Redondeados
```css
:root {
  --radius-sm: 0.5rem;     /* Bordes pequeños */
  --radius-md: 1rem;       /* Bordes medianos */
  --radius-lg: 1.5rem;     /* Bordes grandes */
  --radius-xl: 2rem;       /* Bordes extra grandes */
}
```

---

### 3. CAMBIAR IMÁGENES

#### Opción A: Usar URLs de Internet
```javascript
// En js/config.js
images: {
  hero: 'https://images.unsplash.com/photo-XXXXX',
}
```

#### Opción B: Usar Imágenes Locales
1. Coloca tu imagen en `assets/images/`
2. Referencia la ruta en `config.js`:
```javascript
images: {
  hero: 'assets/images/mi-hero.jpg',
}
```

---

### 4. EDITAR SECCIONES ESPECÍFICAS

#### 🏠 Hero Section
- **Textos:** `js/config.js` → `hero`
- **Imagen de fondo:** `js/config.js` → `images.hero`
- **Estilos:** `index.html` línea 119+

#### ⚡ Features Section
- **Textos:** `js/config.js` → `features`
- **Imagen principal:** `js/config.js` → `images.featureMain`
- **Estilos:** `index.html` línea 253+

#### 💬 Testimonials
- **Textos:** `js/config.js` → `testimonials`
- **Imágenes de avatares:** `js/config.js` → `images.avatars`
- **Estilos:** `index.html` línea 453+

#### 💰 Pricing
- **Planes y precios:** `js/config.js` → `pricing`
- **Toggle mensual/anual:** `js/main.js` → `toggleBilling()`
- **Estilos:** `index.html` línea 543+

#### 📧 Contact
- **Textos:** `js/config.js` → `contactSection`
- **Email:** `js/config.js` → `contact.email`
- **Formulario:** `js/main.js` → `contactForm`
- **Estilos:** `index.html` línea 701+

---

### 5. AGREGAR NUEVA SECCIÓN

1. **Crea el HTML en `index.html`:**
```html
<section class="py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-semibold text-white">Nueva Sección</h2>
    <!-- Tu contenido aquí -->
  </div>
</section>
```

2. **Agrega el contenido en `js/config.js`:**
```javascript
nuevaSeccion: {
  title: 'Mi Nueva Sección',
  description: 'Descripción de la sección',
}
```

3. **Agrega estilos personalizados en `css/styles.css` (si es necesario)**

---

### 6. CAMBIAR FUENTES

**Archivo:** `css/styles.css` (línea 6)

```css
/* Cambiar fuentes */
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap');

* {
  font-family: 'TuFuente', sans-serif;
}
```

---

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

---

## 💡 Tips y Mejores Prácticas

1. **Edita primero `js/config.js`** - Aquí está todo el contenido
2. **Guarda cambios frecuentemente** - Vite recarga automáticamente
3. **Usa variables CSS** - En lugar de colores hardcodeados
4. **Mantén copias de seguridad** - Antes de cambios grandes
5. **Prueba en móvil** - Abre en navegador móvil o usa DevTools

---

## 📱 Diseño Responsive

El sitio está optimizado para:
- 📱 Mobile: < 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: > 1024px

Los breakpoints de TailwindCSS:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

---

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Los cambios no se reflejan
1. Guarda el archivo
2. Refresca el navegador (Ctrl/Cmd + R)
3. Si persiste, reinicia el servidor

### Error en el build
```bash
# Verifica que todos los archivos existan
npm run build
```

---

## 📞 Ayuda Adicional

Si necesitas ayuda con:
- Agregar funcionalidades JavaScript
- Cambios complejos de diseño
- Optimización de rendimiento
- Integración con backend

¡Solo pregunta!

---

**¡Listo para editar! 🎨**

Recuerda: `js/config.js` es tu mejor amigo para cambios rápidos.
