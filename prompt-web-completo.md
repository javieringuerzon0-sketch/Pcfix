# PROMPT INTEGRADO - DISEÑO WEB COMPLETO

## INSTRUCCIÓN PRINCIPAL

Crear una página web moderna, elegante y profesional con diseño dark mode predominante, manteniendo UNA SOLA PALETA DE COLORES basada en **NEGRO** como color principal. Todas las secciones deben integrarse visualmente con coherencia total.

---

## PALETA DE COLORES UNIFICADA (Negro como base)

### Colores Principales
- **Background Principal:** `#000000` (Negro puro)
- **Background Secundario:** `#0a0a0a` / `#111111` (Negro suave)
- **Background Terciario:** `#1a1a1a` / `#171717` (Neutral-900)

### Colores de Superficie
- **Surface/Card:** `rgba(255,255,255,0.05)` (White/5)
- **Surface Hover:** `rgba(255,255,255,0.08)` (White/8)
- **Border Principal:** `rgba(255,255,255,0.10)` (White/10)
- **Border Secundario:** `rgba(255,255,255,0.15)` (White/15)
- **Border Dashed:** `rgba(255,255,255,0.20)` (White/20)

### Colores de Texto
- **Texto Primario:** `#FFFFFF` (Blanco)
- **Texto Secundario:** `rgba(255,255,255,0.70)` (White/70)
- **Texto Terciario:** `rgba(255,255,255,0.50)` (White/50)
- **Texto Muted:** `rgba(255,255,255,0.40)` (White/40)

### Colores de Acento (Monocromáticos - Escala de Grises)
- **Acento Principal:** `#FFFFFF` (Blanco puro)
- **Acento Secundario:** `#D4D4D4` (Neutral-300)
- **Acento Terciario:** `#A3A3A3` (Neutral-400)

### Gradientes Permitidos (Solo escala de grises/blanco)
- `linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)`
- `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%)`
- `linear-gradient(to right, rgba(255,255,255,0.95), rgba(229,229,229,0.80))`
- `linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.05), transparent)`

---

## TIPOGRAFÍA

### Fuentes Principales
- **Headings/Títulos:** `font-manrope` (Manrope) - pesos: 400, 500, 600, 700
- **Body/Contenido:** `font-sans` (Inter o sistema) - pesos: 400, 500
- **UI/Labels:** `font-geist` (Geist Sans) - pesos: 400, 500

### Escalas de Tamaño
- **Hero H1:** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`
- **H2 Sección:** `text-3xl sm:text-4xl lg:text-5xl`
- **H3 Subtítulo:** `text-xl sm:text-2xl`
- **Body:** `text-sm sm:text-base`
- **Small/Caption:** `text-xs`

### Tracking (Espaciado entre letras)
- **Headings:** `tracking-tight` o `tracking-tighter`
- **Labels/Uppercase:** `tracking-wider` o `tracking-widest`

---

## EFECTOS Y ANIMACIONES

### Animaciones de Entrada (Scroll)
```css
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- Aplicar: `animation: fadeSlideIn 0.8s ease-out 0.Xs both`
- Clase: `animate-on-scroll animate`

### Efectos de Glassmorphism
```css
backdrop-blur-lg      /* blur(16px) */
backdrop-blur-xl      /* blur(24px) */
bg-white/5            /* fondo semitransparente */
border-white/10       /* borde sutil */
```

### Sombras y Glows
- **Card Shadow:** `shadow-[2.8px_2.8px_2.2px_rgba(0,0,0,0.034),6.7px_6.7px_5.3px_rgba(0,0,0,0.048),12.5px_12.5px_10px_rgba(0,0,0,0.06),22.3px_22.3px_17.9px_rgba(0,0,0,0.072),41.8px_41.8px_33.4px_rgba(0,0,0,0.086),100px_100px_80px_rgba(0,0,0,0.12)]`

### Transiciones
- **Botones:** `transition-all duration-300`
- **Cards:** `transition-all duration-300 hover:-translate-y-0.5`
- **Links:** `transition-colors duration-200`

### Efectos Hover
- Botones: `hover:shadow-lg hover:bg-zinc-200`
- Cards: `hover:bg-white/5 hover:-translate-y-0.5`
- Links: `hover:text-white`

---

## ESTRUCTURA DE SECCIONES

### 1. HEADER / NAVBAR

```html
<header class="relative z-50 max-w-7xl mx-auto px-4 md:px-6 py-4">
  <nav class="flex items-center justify-between">
    <!-- Logo -->
    <a href="#" class="flex items-center gap-3">
      <svg class="w-9 h-9 md:w-14 md:h-14" viewBox="0 0 48 48">
        <path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"/>
      </svg>
      <span class="text-lg font-medium tracking-tight text-white">Nebula</span>
    </a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Platform</a>
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Templates</a>
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Docs</a>
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Community</a>
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
      <div class="h-6 w-px bg-white/10"></div>
      <a href="#" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</a>
      <button class="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white/70 hover:text-white hover:-translate-y-[3px] hover:scale-[1.1] transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] rounded-full" 
              style="box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1);background:radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%);">
        <span class="relative z-10">Sign Up</span>
        <span class="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 group-hover:opacity-80 transition-all duration-1000" 
              style="background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);"></span>
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button id="menuBtn" class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
      <svg class="h-5 w-5 text-white"><path d="M4 12h16 M4 18h16 M4 6h16"/></svg>
    </button>
  </nav>
</header>
```

---

### 2. HERO SECTION

```html
<section class="relative bg-black pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
  <!-- Background Image con Mask -->
  <div class="absolute inset-0 bg-cover bg-center" 
       style="background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80');
              mask-image: linear-gradient(180deg, transparent, black 0%, black 70%, transparent);
              -webkit-mask-image: linear-gradient(180deg, transparent, black 0%, black 70%, transparent);">
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      <!-- Left Content -->
      <div class="lg:col-span-7 space-y-4 sm:space-y-6">
        <!-- Badge -->
        <div class="animate-on-scroll animate" style="animation: fadeSlideIn 0.8s ease-out 0.2s both;">
          <div class="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
            <span class="text-[10px] sm:text-xs tracking-wider uppercase text-white/70 flex items-center gap-1.5">
              Award-Winning Design
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
              </svg>
            </span>
          </div>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter text-white leading-[0.9] animate-on-scroll animate" 
            style="animation: fadeSlideIn 0.8s ease-out 0.3s both;
                   mask-image: linear-gradient(150deg, transparent, black 0%, black 40%, transparent);
                   -webkit-mask-image: linear-gradient(150deg, transparent, black 0%, black 40%, transparent);">\n          Crafting Digital<br>
          <span class="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60 pr-1">Experiences</span><br>
          That Matter
        </h1>

        <!-- Description -->
        <p class="text-base sm:text-lg text-white/70 max-w-xl animate-on-scroll animate" 
           style="animation: fadeSlideIn 0.8s ease-out 0.4s both;">
          We design interfaces that combine beauty with functionality, creating seamless experiences that users love and businesses thrive on.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-on-scroll animate" 
             style="animation: fadeSlideIn 0.8s ease-out 0.5s both;">
          <button class="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black text-sm font-medium rounded-full shadow-lg hover:bg-zinc-200 transition-all duration-300">
            <span>View Portfolio</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>

          <button class="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/5 text-sm font-medium rounded-full transition-all duration-300">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Watch Showreel</span>
          </button>
        </div>
      </div>

      <!-- Right Stats Panel -->
      <div class="lg:col-span-5 space-y-4 sm:space-y-6">
        <!-- Stats Card -->
        <div class="animate-on-scroll animate overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 backdrop-blur-lg shadow-2xl" 
             style="animation: fadeSlideIn 0.8s ease-out 0.6s both;">
          <div class="p-6 sm:p-8">
            <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13H9v2h3V7zm0 3H9v6h3v-6zm4 0h-2v6h2v-6zm0-3h-2v2h2V7z"/>
                </svg>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl tracking-tighter font-manrope font-medium text-white">150+</div>
                <div class="text-xs sm:text-sm text-white/70">Projects Delivered</div>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div class="flex items-center justify-between">
                <span class="text-xs sm:text-sm text-white/70">Client Satisfaction</span>
                <span class="text-xs sm:text-sm text-white">98%</span>
              </div>
              <div class="h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-white to-white/70 rounded-full" style="width: 98%;"></div>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent my-3 sm:my-4"></div>

            <!-- Stats Grid -->
            <div class="flex justify-between mb-3 sm:mb-4 gap-2">
              <div class="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
                <div class="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">5+</div>
                <div class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wide">Years</div>
              </div>
              <div class="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div class="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
                <div class="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">24/7</div>
                <div class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wide">Support</div>
              </div>
              <div class="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div class="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
                <div class="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">100%</div>
                <div class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wide">Quality</div>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              <span class="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/70">
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></div>
                ACTIVE
              </span>
              <span class="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/70">
                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
                PREMIUM
              </span>
            </div>
          </div>
        </div>

        <!-- Clients Marquee -->
        <div class="animate-on-scroll animate overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 backdrop-blur-lg" 
             style="animation: fadeSlideIn 0.8s ease-out 0.7s both;">
          <div class="p-6 sm:p-8">
            <h3 class="text-base sm:text-lg text-white mb-3 sm:mb-4">Featured Clients</h3>
            <div class="overflow-hidden relative" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
              <div class="flex gap-4 sm:gap-6 animate-marquee">
                <!-- Logos duplicados para efecto infinito -->
                <div class="flex gap-4 sm:gap-6 shrink-0">
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">ORBIT</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs font-serif italic">Retro</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">NEXUS</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">AURA</div>
                </div>
                <div class="flex gap-4 sm:gap-6 shrink-0">
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">ORBIT</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs font-serif italic">Retro</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">NEXUS</div>
                  <div class="w-[100px] sm:w-[120px] h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center text-white/60 text-xs">AURA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
```

---

### 3. FEATURES / EDGE SECTION (Bento Grid)

```html
<section class="py-16 md:py-24 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Left: Core Differentiator (Large Card with Image) -->
      <div class="animate-on-scroll overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center relative" 
           style="animation: fadeSlideIn 0.5s ease-out 0.1s both;
                  background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80');">
        <div class="flex flex-col h-[440px] sm:h-[520px] p-6 sm:p-8 relative">
          <div class="flex items-center gap-3">
            <div>
              <p class="text-sm text-white/70">Our Edge</p>
              <p class="text-xs sm:text-sm mt-1 text-white/50">Strategic Design Thinking</p>
            </div>
          </div>
          <div class="mt-auto">
            <div class="text-2xl sm:text-4xl text-white tracking-tight mb-4 font-manrope font-semibold">
              Design with <span class="text-white/80 ml-2 font-manrope font-semibold">Purpose</span>
            </div>
            <div class="flex items-center gap-2 text-white/80 mb-6">
              <div class="flex items-center gap-1">
                <div class="h-2 w-2 rounded-full bg-white"></div>
                <div class="h-2 w-2 rounded-full bg-white/70"></div>
                <div class="h-2 w-2 rounded-full bg-white/50"></div>
              </div>
              <p class="text-sm">Every pixel has intention</p>
            </div>
            <div class="flex items-center gap-2 text-xs text-white/70">
              Discover our approach
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 7h10v10M7 17L17 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Middle: Results & Methodology -->
      <div class="animate-on-scroll overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 relative" 
           style="animation: fadeSlideIn 0.5s ease-out 0.2s both;">
        <div class="relative">
          <p class="text-sm text-white/50">Proven Results:</p>
          <h3 class="mt-2 text-2xl sm:text-3xl tracking-tight text-white font-manrope font-semibold">
            <span class="text-white font-manrope font-semibold">3x</span> faster project delivery,
            <span class="text-white/80 font-manrope font-semibold">2x</span> higher engagement
          </h3>

          <p class="mt-8 text-sm text-white/50">Our Methodology:</p>
          <div class="mt-4 space-y-3">
            <div class="flex items-center gap-3 text-sm text-white/80">
              <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
              Strategic Discovery & Research
            </div>
            <div class="flex items-center gap-3 text-sm text-white/80">
              <span class="h-1.5 w-1.5 rounded-full bg-white/80"></span>
              Collaborative Design Process
            </div>
            <div class="flex items-center gap-3 text-sm text-white/80">
              <span class="h-1.5 w-1.5 rounded-full bg-white/60"></span>
              Data-Driven Optimization
            </div>
          </div>

          <!-- Testimonial Card -->
          <div class="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">
            <div class="flex items-center gap-1 text-white/70 mb-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
            </div>
            <p class="text-sm text-white/70 mt-3">"Aura doesn't just create designs—they craft experiences. Their strategic thinking elevated our entire brand presence."</p>
            <div class="mt-4 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" class="h-8 w-8 rounded-full object-cover">
              <div class="text-sm">
                <p class="text-white/80">Michael Torres</p>
                <p class="text-xs text-white/50">CEO, Innovation Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Trust Indicators & Metrics -->
      <div class="grid grid-rows-2 gap-6">
        <!-- Satisfaction Card -->
        <div class="animate-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8" 
             style="animation: fadeSlideIn 0.5s ease-out 0.3s both;">
          <div class="flex items-center sm:block">
            <div class="relative h-28 w-28 sm:mx-auto">
              <div class="absolute inset-0 rounded-full bg-white/20"></div>
              <div class="absolute inset-[10px] rounded-full bg-black/40 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
            </div>
            <div class="ml-5 sm:ml-0 sm:mt-6 text-center">
              <h4 class="text-lg font-light tracking-tight text-white">100% Satisfaction</h4>
              <p class="mt-2 text-sm text-white/50">Guaranteed results or we'll make it right. Your success is our mission.</p>
            </div>
          </div>
        </div>

        <!-- Metrics Card -->
        <div class="animate-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8" 
             style="animation: fadeSlideIn 0.5s ease-out 0.4s both;">
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div class="text-2xl tracking-tight text-white font-manrope font-semibold">150+</div>
              <p class="text-xs mt-1 text-white/50">Projects delivered</p>
            </div>
            <div>
              <div class="text-2xl tracking-tight text-white font-manrope font-semibold">48h</div>
              <p class="text-xs mt-1 text-white/50">Average start time</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Brand Strategy</span>
              <span class="text-white">Expert</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Visual Design</span>
              <span class="text-white/80">Expert</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Digital Marketing</span>
              <span class="text-white/60">Expert</span>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-white/10">
            <div class="flex items-center gap-2 text-xs text-white/70">
              <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Certified Team
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 4. ABOUT / INTELLIGENT DESIGN SECTION

```html
<section class="py-16 md:py-24 relative">
  <!-- Subtle Glow -->
  <div class="pointer-events-none absolute -z-10 inset-0">
    <div class="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>
    <div class="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      <!-- Visual -->
      <div class="animate-on-scroll rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-2" 
           style="animation: fadeSlideIn 0.5s ease-out 0s both;">
        <div class="overflow-hidden rounded-[22px] bg-black/30 ring-1 ring-white/10">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80" 
               alt="Design workspace" 
               class="w-full h-[320px] md:h-[520px] object-cover">
        </div>
      </div>

      <!-- Copy -->
      <div class="animate-on-scroll" style="animation: fadeSlideIn 0.5s ease-out 0.1s both;">
        <div class="inline-flex items-center gap-2 text-sm text-white/70">
          <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
            </svg>
          </span>
          <span>About Nebula</span>
        </div>

        <h2 class="mt-4 text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-manrope font-semibold">
          Intelligent design, beautiful results.
        </h2>

        <p class="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
          Nebula combines cutting-edge technology with thoughtful design principles to help you create stunning websites in minutes. Our platform empowers creators of all skill levels to bring their vision to life.
        </p>

        <div class="mt-8">
          <a href="#" class="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-sm font-medium text-black bg-white rounded-full py-2.5 px-5 shadow-lg">
            Discover Our Story
            <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M7 7h10v10M7 17L17 7"/>
              </svg>
            </span>
          </a>
        </div>

        <!-- Feature Cards -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-on-scroll" style="animation: fadeSlideIn 0.5s ease-out 0.2s both;">
          <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border border-white/10">
            <h3 class="text-base tracking-tight text-white font-semibold leading-none">Lightning Fast</h3>
            <p class="mt-3 text-sm text-white/50">Create professional sites in minutes, not days.</p>
          </div>

          <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border border-white/10">
            <h3 class="text-base tracking-tight text-white font-semibold leading-none">AI-Powered</h3>
            <p class="mt-3 text-sm text-white/50">Intelligence handles the complex code for you.</p>
          </div>

          <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border border-white/10">
            <h3 class="text-base tracking-tight text-white font-semibold leading-none">Fully Customizable</h3>
            <p class="mt-3 text-sm text-white/50">Complete control over every design element.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 5. TESTIMONIALS SECTION

```html
<section class="py-16 md:py-24 relative isolate overflow-hidden">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- Section Header -->
    <div class="animate-on-scroll text-left max-w-3xl mb-16" style="animation: fadeSlideIn 0.8s ease-out 0.1s both;">
      <div class="inline-flex items-center gap-2 text-[13px] font-medium text-white/70 rounded-none mb-6">
        <span class="tabular-nums text-2xl font-light text-white/60">04</span>
        <span class="text-white/30">/</span>
        <span class="uppercase text-[11px] text-white/70 tracking-widest">TESTIMONIAL</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
        Deploy in three simple steps
      </h2>
      <p class="text-base sm:text-lg text-white/50 leading-relaxed">
        From code to production in seconds. Our streamlined workflow makes deployment effortless.
      </p>
    </div>

    <!-- Main Testimonial Grid -->
    <div class="grid lg:grid-cols-2 gap-6 items-stretch">
      <!-- Photo Panel -->
      <div class="animate-on-scroll overflow-hidden min-h-[320px] bg-white/5 rounded-none ring-1 ring-white/10 relative" 
           style="animation: fadeSlideIn 0.8s ease-out 0.2s both;">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" 
             alt="Customer portrait" 
             class="w-full h-full object-cover">
      </div>

      <!-- Quote Panel -->
      <div class="animate-on-scroll flex flex-col sm:p-10 bg-black/40 rounded-none ring-1 ring-white/10 p-8 relative justify-center" 
           style="animation: fadeSlideIn 0.8s ease-out 0.3s both;">
        <div class="mb-4">
          <svg class="w-8 h-8 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25">
            <path d="M3 21c3 0 7-2 7-7V4H3v10"/>
            <path d="M14 21c3 0 7-2 7-7V4h-7v10"/>
          </svg>
        </div>
        <p class="text-white font-manrope tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug">
          "We saved on hosting and boosted conversions just by running Nebula."
        </p>
        <div class="mt-8">
          <div class="text-white text-base font-medium">Tom Sullivan</div>
          <div class="text-white/50 text-sm mt-1">Agency Lead</div>
        </div>
      </div>
    </div>

    <!-- Grid of Small Testimonials -->
    <div class="grid lg:grid-cols-3 gap-6 mt-6 animate-on-scroll relative" style="animation: fadeSlideIn 0.8s ease-out 0.4s both; min-height: 240px;">
      
      <!-- Card 1 -->
      <div class="flex flex-col bg-white/5 rounded-none ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
        <div class="animate-slide-up">
          <p class="text-white/70 text-base leading-relaxed">
            "Switching to Nebula was a game-changer. Our deployment time dropped from hours to seconds, and the developer experience is incredible."
          </p>
          <div class="flex items-center gap-3 mt-6">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                 alt="Avatar" 
                 class="h-8 w-8 rounded-none object-cover ring-1 ring-white/10">
            <div>
              <div class="text-white text-sm font-medium">Michael Chen</div>
              <div class="text-white/50 text-xs">CTO @ TechFlow</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col bg-white/5 rounded-none ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
        <div class="animate-slide-up delay-1000">
          <p class="leading-relaxed text-base text-white/70">
            "The automatic scaling and zero-config SSL saved us countless hours. Our team can now focus on building features."
          </p>
          <div class="flex gap-3 mt-6 items-center">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                 alt="Avatar" 
                 class="h-8 w-8 rounded-none object-cover ring-1 ring-white/10">
            <div>
              <div class="text-white text-sm font-medium">Emily Roberts</div>
              <div class="text-white/50 text-xs">Lead Engineer @ DataSync</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="flex flex-col bg-white/5 rounded-none ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
        <div class="animate-slide-up delay-2000">
          <p class="text-white/70 text-base leading-relaxed">
            "We migrated 50+ client projects to Nebula. The performance improvements were immediate, and our clients noticed."
          </p>
          <div class="flex items-center gap-3 mt-6">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                 alt="Avatar" 
                 class="h-8 w-8 rounded-none object-cover ring-1 ring-white/10">
            <div>
              <div class="text-white text-sm font-medium">David Park</div>
              <div class="text-white/50 text-xs">Creative Director @ Studio X</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(40px); }
  20% { opacity: 1; transform: translateY(0); }
  80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-40px); }
}
.animate-slide-up {
  animation: slideUp 6s ease-in-out infinite;
}
.animate-slide-up.delay-1000 {
  animation-delay: 1s;
}
.animate-slide-up.delay-2000 {
  animation-delay: 2s;
}
</style>
```

---

### 6. PRICING SECTION

```html
<section class="py-16 md:py-24 relative isolate overflow-hidden">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- Header -->
    <div class="text-center">
      <h2 class="text-4xl sm:text-5xl font-medium text-white tracking-tight font-manrope animate-on-scroll" 
          style="animation: fadeSlideIn 1s ease-out 0.1s both;">
        Pricing Plans
      </h2>

      <!-- Toggle -->
      <div class="flex mt-6 gap-4 items-center justify-center animate-on-scroll" 
           style="animation: fadeSlideIn 1s ease-out 0.2s both;">
        <span class="text-sm text-white/70">Monthly</span>
        <button id="billingToggle" class="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition">
          <span id="billingKnob" class="inline-flex h-6 w-6 rounded-full bg-white shadow-lg transition will-change-transform" style="transform: translateX(32px);"></span>
        </button>
        <span class="text-sm text-white/70">Annual
          <span class="ml-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70 ring-1 ring-white/20">Save 20%</span>
        </span>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid gap-6 lg:grid-cols-3 mt-10">
      
      <!-- Starter -->
      <div class="animate-on-scroll border border-white/10 rounded-3xl p-6 backdrop-blur-xl" 
           style="animation: fadeSlideIn 1s ease-out 0.3s both;">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm uppercase tracking-[0.18em] text-white/60">Starter</div>
            <div class="mt-2 flex items-end gap-2">
              <div class="text-4xl font-medium tracking-tight text-white">$0</div>
              <div class="text-sm text-white/50">/yr</div>
            </div>
          </div>
        </div>

        <button class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium tracking-tight text-black hover:bg-zinc-200 transition">
          Start Building
        </button>

        <ul class="mt-6 space-y-3 text-sm text-white/75">
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Up to 1K API calls per month
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Basic data ingestion pipelines
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Web console access
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Community support
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Basic monitoring & alerts
          </li>
        </ul>
      </div>

      <!-- Pro (Featured) -->
      <div class="animate-on-scroll border border-white/10 ring-1 ring-white/20 rounded-3xl p-2 relative backdrop-blur-xl" 
           style="animation: fadeSlideIn 1s ease-out 0.4s both;">
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80" 
                 alt="Premium background" 
                 class="h-48 w-full rounded-t-2xl object-cover opacity-40">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div class="relative p-6">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-sm uppercase tracking-[0.18em] text-white/70">Professional</div>
                <div class="mt-2 flex items-end gap-2">
                  <div class="text-4xl font-medium tracking-tight text-white">$470</div>
                  <div class="text-sm text-white/60">/yr</div>
                </div>
              </div>
              <span class="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white ring-1 ring-white/20">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
                Most Popular
              </span>
            </div>

            <button class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium tracking-tight text-black shadow-lg hover:bg-zinc-200 transition">
              Upgrade to Pro
            </button>

            <ul class="mt-6 space-y-3 text-sm text-white/85">
              <li class="flex items-start gap-2">
                <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                Unlimited API calls
              </li>
              <li class="flex items-start gap-2">
                <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                Advanced reasoning models & orchestration
              </li>
              <li class="flex items-start gap-2">
                <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                Performance analytics & insights
              </li>
              <li class="flex items-start gap-2">
                <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                Custom workflows & integrations
              </li>
              <li class="flex items-start gap-2">
                <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                Priority support with SLA
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Enterprise -->
      <div class="animate-on-scroll border border-white/10 rounded-3xl p-6 backdrop-blur-xl" 
           style="animation: fadeSlideIn 1s ease-out 0.5s both;">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm uppercase tracking-[0.18em] text-white/60">Enterprise</div>
            <div class="mt-2 flex items-end gap-2">
              <div class="text-4xl font-medium tracking-tight text-white">Custom</div>
              <div class="text-sm text-white/50">/yr</div>
            </div>
          </div>
        </div>

        <button class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium tracking-tight text-white/90 hover:bg-white/10 transition">
          Contact Sales
        </button>

        <ul class="mt-6 space-y-3 text-sm text-white/75">
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            On-premises & private cloud deployment
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Advanced security & compliance controls
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Dedicated support team & onboarding
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Team management & usage analytics
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Custom model training & fine-tuning
          </li>
        </ul>
      </div>
    </div>

    <p class="animate-on-scroll text-xs text-white/50 text-center mt-6" 
       style="animation: fadeSlideIn 1s ease-out 0.6s both;">
      All plans include 14-day free trial. No setup fees.
    </p>
  </div>
</section>
```

---

### 7. CTA BUTTON (Get Started)

```html
<section class="py-24 md:py-32 flex items-center justify-center relative">
  <a href="#contact" 
     class="relative inline-flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:ring-white/60 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_40px_80px_rgba(255,255,255,0.18)] text-base font-semibold text-white tracking-tight bg-white/5 ring-white/30 ring-1 rounded-full py-3 px-6"
     style="z-index:2;">
    <span class="relative z-[1]">Get started</span>
    <svg class="w-4 h-4 text-white/70 relative z-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
    <!-- Glow Effect -->
    <span class="pointer-events-none absolute inset-0 rounded-full" 
          style="box-shadow: 0 0 0 1px rgba(255,255,255,0.45), 0 18px 60px rgba(255,255,255,0.25); 
                 background: radial-gradient(140% 160% at 50% -20%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.00) 60%);"></span>
    <span class="pointer-events-none absolute inset-[1px] rounded-full" 
          style="background: radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%),
                           radial-gradient(90% 80% at 50% 120%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%);"></span>
  </a>
</section>
```

---

### 8. CONTACT SECTION

```html
<section id="contact" class="py-16 md:py-24 relative bg-cover bg-center"
         style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80');
                mask-image: linear-gradient(90deg, transparent, black 55%, black 60%, transparent);
                -webkit-mask-image: linear-gradient(90deg, transparent, black 55%, black 60%, transparent);">
  
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25"
         style="background: radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0));"></div>
  </div>

  <div class="max-w-4xl mx-auto px-6 relative">
    <div class="text-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white animate-on-scroll">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6l8 5 8-5"/>
          <rect width="20" height="14" x="2" y="5" rx="2"/>
        </svg>
        Let's Work Together
      </span>
      <h2 class="mt-4 text-4xl sm:text-6xl tracking-tight font-semibold text-white animate-on-scroll" style="animation-delay: 100ms;">
        Ready to <span class="italic font-medium text-white/80">collaborate?</span>
      </h2>
      <p class="mt-4 text-white/50 text-lg max-w-2xl mx-auto animate-on-scroll" style="animation-delay: 200ms;">
        Whether you need help with product design, strategy, or education, I'm here to help bring your vision to life.
      </p>
    </div>

    <div class="mt-12 grid md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur animate-on-scroll" style="animation-delay: 300ms;">
        <h3 class="text-xl font-semibold text-white mb-6">Send a Message</h3>
        <form class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Name</label>
              <input type="text" class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Your name">
            </div>
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input type="email" class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="your@email.com">
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-white/70 mb-2">Project Budget</label>
            <select class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20">
              <option>$5k - $10k</option>
              <option>$10k - $25k</option>
              <option>$25k - $50k</option>
              <option>$50k+</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-white/70 mb-2">Message</label>
            <textarea rows="4" class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-white hover:bg-white/15 transition">
            <span class="font-medium">Send Message</span>
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-on-scroll" style="animation-delay: 400ms;">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-white/10 p-3 shadow-lg">
              <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 6l8 5 8-5"/>
                <rect width="20" height="14" x="2" y="5" rx="2"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Email</h3>
              <p class="text-white/50">hello@nebula.com</p>
            </div>
          </div>
        </div>

        <div class="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-on-scroll" style="animation-delay: 500ms;">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-white/10 p-3 shadow-lg">
              <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 2v4"/>
                <path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <path d="M3 10h18"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Schedule a Call</h3>
              <p class="text-white/50">Book a free consultation</p>
            </div>
          </div>
        </div>

        <div class="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-on-scroll" style="animation-delay: 600ms;">
          <h3 class="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div class="flex items-center gap-4">
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white/50 hover:text-white hover:bg-white/15 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white/50 hover:text-white hover:bg-white/15 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="20" height="20" x="2" y="2" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white/50 hover:text-white hover:bg-white/15 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white/50 hover:text-white hover:bg-white/15 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Glow -->
  <div class="absolute bottom-0 left-0 right-0 pointer-events-none">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8"
         style="background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%);"></div>
    <div class="h-px bg-white/10 w-full"></div>
  </div>
</section>
```

---

### 9. FOOTER

```html
<footer class="max-w-7xl mx-auto px-4 sm:px-6 mt-10 mb-12">
  <div class="relative overflow-hidden shadow-lg bg-black/80 border border-white/10 rounded-[40px] backdrop-blur">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
    </div>

    <div class="relative p-6 sm:p-8">
      <div class="grid lg:grid-cols-4 gap-10">
        <!-- Brand / Intro -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <svg class="w-8 h-8 text-white" viewBox="0 0 48 48">
              <path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"/>
            </svg>
            <span class="text-xl font-medium tracking-tight text-white">NEBULA</span>
          </div>
          <p class="text-sm leading-relaxed text-white/50">
            Curated experiences, verified quality, and concierge support from first contact to delivery. Move with confidence.
          </p>
          <a href="#" class="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-black bg-white hover:bg-white/90 rounded-full px-4 py-2 transition">
            <span>Contact us</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          <div class="text-xs text-white/40">support@nebula.com</div>
        </div>

        <!-- Column: Company -->
        <div>
          <h4 class="text-xs tracking-wider text-white/70 uppercase">Company</h4>
          <ul class="mt-3 space-y-2">
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">About</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Press</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Careers</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Partners</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Investor Relations</a></li>
          </ul>
        </div>

        <!-- Column: Apps -->
        <div>
          <h4 class="text-xs tracking-wider text-white/70 uppercase">Apps</h4>
          <ul class="mt-3 space-y-2">
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">iOS App</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Android App</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">TV App</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Virtual Reality</a></li>
          </ul>
        </div>

        <!-- Column: Services -->
        <div>
          <h4 class="text-xs tracking-wider text-white/70 uppercase">Services</h4>
          <ul class="mt-3 space-y-2">
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Buy with Nebula</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Sell with Nebula</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Concierge</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Agent Finder</a></li>
            <li><a href="#" class="text-sm text-white/50 hover:text-white transition">Neighborhood Guides</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
        <nav class="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-white/40">
          <a href="#" class="hover:text-white/70 transition">Fair Housing Statement</a>
          <span class="text-white/20">|</span>
          <a href="#" class="hover:text-white/70 transition">Privacy Policy</a>
          <span class="text-white/20">|</span>
          <a href="#" class="hover:text-white/70 transition">Terms of Use</a>
          <span class="text-white/20">|</span>
          <a href="#" class="hover:text-white/70 transition">Accessibility</a>
          <span class="text-white/20">|</span>
          <a href="#" class="hover:text-white/70 transition">DMCA</a>
          <span class="text-white/20">|</span>
          <a href="#" class="hover:text-white/70 transition">Sitemap</a>
        </nav>
        <div class="text-[11px] text-white/40">© 2025 Nebula, Inc. All rights reserved.</div>
      </div>
    </div>
  </div>
</footer>
```

---

## ANIMACIONES JAVASCRIPT (Scroll Observer)

```javascript
// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
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

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
```

---

## CLASES UTILITARIAS NECESARIAS

```css
/* Base animations */
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll animation trigger */
.animate-on-scroll {
  opacity: 0;
}
.animate-on-scroll.animate {
  opacity: 1;
}

/* Backdrop blur support */
.backdrop-blur {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');
```

---

## INSTRUCCIONES FINALES

1. **Mantener coherencia visual:** Toda la web debe usar la paleta de negro/blanco/grises definida arriba.

2. **No usar colores de acento adicionales:** Eliminar todos los azules, verdes, ámbar, etc. y reemplazarlos con escala de grises/blanco.

3. **Glassmorphism consistente:** Todas las tarjetas deben usar `bg-white/5`, `border-white/10`, y `backdrop-blur`.

4. **Animaciones suaves:** Todas las secciones deben tener `fadeSlideIn` con delays escalonados.

5. **Responsive:** Todas las secciones deben funcionar en mobile, tablet y desktop.

6. **Imágenes de placeholder:** Usar URLs de Unsplash como en los ejemplos.

7. **Iconos:** Usar Lucide icons (SVG inline) o Heroicons.

---

## ESTRUCTURA DE ARCHIVOS RECOMENDADA

```
/project-root
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── animations.js
└── assets/
    └── images/
```

---

## NOTAS IMPORTANTES

- El diseño es **dark mode first** - fondo negro predominante
- **Un solo color de acento:** Blanco/escala de grises
- **Efectos de luz sutiles:** Glows blancos, no colores
- **Transiciones suaves:** 300ms para hover, 800ms-1000ms para scroll
- **Tipografía clara:** Manrope para headings, Inter para body
