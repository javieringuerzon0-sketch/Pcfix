# Nebula - Crafting Digital Experiences

Landing page moderna con diseño dark mode (negro/blanco) para Nebula, una plataforma de diseño digital.

## Características

- Diseño dark mode con paleta negro/blanco/grises
- Animaciones suaves al hacer scroll
- Efectos glassmorphism
- Totalmente responsive
- TailwindCSS vía CDN
- Fuentes: Manrope (headings) e Inter (body)

## Estructura del Proyecto

```
Mockop compu/
├── index.html              # Estructura HTML principal
├── css/
│   └── styles.css         # Estilos personalizados y variables CSS
├── js/
│   ├── config.js          # ⭐ Configuración editable (textos, imágenes, etc.)
│   └── main.js            # Funcionalidades JavaScript
├── assets/
│   └── images/            # Carpeta para imágenes locales
├── prompt-web-completo.md  # Especificaciones de diseño
├── package.json            # Configuración del proyecto
├── EDITING_GUIDE.md        # 📝 Guía completa de edición
└── README.md              # Este archivo
```

## 📝 Editar Contenido

### ⚡ Edición Rápida

**¿Quieres cambiar textos, imágenes o enlaces?**

👉 Edita el archivo **`js/config.js`** - Aquí está TODO el contenido editable:
- Títulos y descripciones
- Precios y planes
- URLs de imágenes
- Información de contacto
- Enlaces de redes sociales

**¿Quieres cambiar colores o estilos?**

👉 Edita el archivo **`css/styles.css`** - Variables CSS editables:
```css
:root {
  --bg-primary: #000000;        /* Color de fondo */
  --text-primary: #FFFFFF;      /* Color de texto */
  /* ... más variables */
}
```

### 📚 Guía Completa

Para instrucciones detalladas sobre cómo editar cada sección, lee:

👉 **[EDITING_GUIDE.md](EDITING_GUIDE.md)** - Guía completa de edición

---

## Desarrollo

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
npm install
```

### Comandos Disponibles

#### Servidor de Desarrollo
Inicia servidor local con hot reload en http://localhost:5173

```bash
npm run dev
```

#### Build de Producción
Genera archivos optimizados en carpeta `dist/`

```bash
npm run build
```

#### Preview de Producción
Previsualiza el build de producción localmente

```bash
npm run preview
```

## Secciones de la Landing Page

1. **Header/Navbar** - Navegación con logo y enlaces
2. **Hero Section** - Título principal con stats panel
3. **Features** - Bento grid con diferenciadores
4. **About** - Información sobre la plataforma
5. **Testimonials** - Opiniones de clientes
6. **Pricing** - Planes (Starter, Pro, Enterprise)
7. **CTA Button** - Llamado a la acción
8. **Contact** - Formulario de contacto
9. **Footer** - Información y enlaces

## Tecnologías

- HTML5
- CSS3 (TailwindCSS vía CDN)
- JavaScript (Vanilla)
- Vite (servidor de desarrollo)
- Google Fonts (Manrope, Inter)

## Paleta de Colores

- **Fondo Principal:** `#000000` (Negro)
- **Superficies:** `rgba(255,255,255,0.05)` (White/5)
- **Bordes:** `rgba(255,255,255,0.10)` (White/10)
- **Texto Primario:** `#FFFFFF` (Blanco)
- **Texto Secundario:** `rgba(255,255,255,0.70)`

## Licencia

© 2025 Nebula, Inc. Todos los derechos reservados.
