# 🚀 Sistema Multi-Cliente - Landing Page Profesional

Sistema de gestión multi-cliente basado en Git Branches. Una sola plantilla, múltiples clientes, deploys independientes.

---

## 📦 ¿Qué es esto?

Este proyecto te permite gestionar **múltiples sitios web para diferentes clientes** usando una sola plantilla. Cada cliente tiene su propio branch en Git con su configuración personalizada, y cada branch se deploya automáticamente en Vercel.

**Ventajas:**
- ✅ Un solo código base para mantener
- ✅ Cambios de diseño se replican fácilmente a todos los clientes
- ✅ Cada cliente tiene su propio deploy independiente
- ✅ Configuración ultra-simple (1 archivo)
- ✅ Deploy automático en cada push

---

## 🎯 Inicio Rápido

### Crear un Nuevo Cliente (3 Pasos)

#### **Opción A: Script Automático (Windows)**

```bash
# Ejecuta el script y sigue las instrucciones
create-client.bat
```

El script te guiará paso a paso para crear el nuevo cliente automáticamente.

#### **Opción B: Manual (Todos los sistemas)**

```bash
# 1. Asegúrate de estar en main
git checkout main
git pull origin main

# 2. Crea un nuevo branch para el cliente
git checkout -b cliente-nombre

# 3. Copia la plantilla de configuración
# Windows:
copy js\client-config.TEMPLATE.js js\client-config.js

# Mac/Linux:
cp js/client-config.TEMPLATE.js js/client-config.js

# 4. Edita el archivo con los datos del cliente
# Usa tu editor favorito (VS Code, Notepad++, etc.)
notepad js/client-config.js

# 5. Guarda los cambios
git add js/client-config.js
git commit -m "config: Add new client - Nombre del Negocio"
git push -u origin cliente-nombre
```

---

## 🔧 Configuración del Cliente

Todo se configura en **UN SOLO ARCHIVO**: `js/client-config.js`

### Campos Principales

```javascript
const CLIENT_CONFIG = {
  // Información del negocio
  businessName: "Nombre del Negocio",
  heroTitle: "TuMarca",
  heroSubtitle: "Pro",
  description: "Descripción de tus servicios...",

  // Contacto
  whatsapp: "521234567890",
  facebook: "https://www.facebook.com/tupagina",
  email: "contacto@tunegocio.com",

  // SEO
  metaTitle: "Tu título para Google",
  metaDescription: "Tu descripción para Google",

  // Y más...
};
```

**📝 TIP:** Usa el archivo `js/client-config.TEMPLATE.js` como referencia. Tiene TODOS los campos documentados.

---

## 🌐 Configurar Deploy en Vercel

### Opción 1: Auto-Deploy por Branch (Recomendado)

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com)
2. Settings → Git → Production Branch
3. Marca: ✅ **"Automatically deploy branches"**

**Resultado:** Cada branch cliente-X tendrá su propio deploy automático

- `cliente-pcfix` → `https://tu-proyecto-git-cliente-pcfix.vercel.app`
- `cliente-serviexpress` → `https://tu-proyecto-git-cliente-serviexpress.vercel.app`

### Opción 2: Proyectos Separados

1. Importa el mismo repositorio varias veces en Vercel
2. Para cada proyecto:
   - Settings → Git → Production Branch
   - Selecciona el branch específico del cliente

---

## 🔄 Cambiar Entre Clientes

```bash
# Ver todos los clientes disponibles
git branch -a

# Cambiar a un cliente específico
git checkout cliente-nombre

# Volver a la plantilla maestra
git checkout main
```

---

## ✏️ Actualizar Configuración de un Cliente

```bash
# 1. Cambia al branch del cliente
git checkout cliente-nombre

# 2. Edita js/client-config.js
# (Usa tu editor favorito)

# 3. Guarda los cambios
git add js/client-config.js
git commit -m "update: cambio en información de contacto"
git push

# ✅ Vercel detecta el cambio y deploya automáticamente
```

---

## 🎨 Actualizar Diseño para TODOS los Clientes

Cuando mejoras el diseño o funcionalidad en `main`, puedes aplicarlo a todos los clientes:

```bash
# 1. Haz cambios en main (NO edites client-config.js)
git checkout main
# ... edita HTML, CSS, JS ...
git add .
git commit -m "feat: mejora en el slider de imágenes"
git push

# 2. Aplica los cambios a cada cliente
git checkout cliente-pcfix
git merge main
git push

git checkout cliente-serviexpress
git merge main
git push

# Repite para todos los clientes...
```

---

## 📂 Estructura del Proyecto

```
mockop-compu/
├── index.html                      # Plantilla HTML principal
├── js/
│   ├── client-config.js            # ⭐ CONFIGURACIÓN DEL CLIENTE (edítalo)
│   ├── client-config.TEMPLATE.js   # Plantilla de referencia
│   ├── inject-config.js            # Inyector automático (NO tocar)
│   ├── main.js                     # Funcionalidad principal
│   └── config.js                   # Configuración general
├── css/
│   └── styles.css                  # Estilos personalizados
├── assets/                         # Imágenes y recursos
├── create-client.bat               # Script de creación automática (Windows)
├── vercel.json                     # Configuración de Vercel
├── README.md                       # Este archivo
└── MULTI-CLIENT-GUIDE.md           # Guía técnica detallada
```

---

## ✅ Clientes Configurados

### 1. PcFix Pro
- **Branch:** `cliente-pcfix`
- **WhatsApp:** +52 612 197 2004
- **Deploy:** https://pcfix-lapaz.vercel.app

### 2. ServiExpress Electrónik
- **Branch:** `cliente-serviexpress`
- **WhatsApp:** +52 612 348 3327
- **Email:** dr.cell@icloud.com
- **Deploy:** (configurar en Vercel)

---

## 🆘 Troubleshooting

### ❌ No veo los cambios en el deploy

```bash
# Verifica que estás en el branch correcto
git branch

# Verifica que hiciste push
git status

# Si es necesario, fuerza un rebuild en Vercel
# (Settings → Deployments → Redeploy)
```

### ❌ Los cambios no se aplican en el sitio

1. Verifica que editaste `js/client-config.js` (NO el TEMPLATE)
2. Asegúrate de hacer commit y push
3. Revisa la consola del navegador (F12) para errores
4. Limpia la caché del navegador (Ctrl+Shift+R)

### ❌ Cambié algo y se rompió

```bash
# Volver al último commit que funcionaba
git checkout cliente-nombre
git reset --hard origin/cliente-nombre
```

### ❌ El script create-client.bat no funciona

- Asegúrate de ejecutarlo desde la raíz del proyecto
- Verifica que tienes Git instalado: `git --version`
- Ejecuta Git Bash en lugar de CMD si hay problemas

---

## ⚠️ Reglas Importantes

1. ❌ **NUNCA deployar el branch `main`** - Es solo una plantilla
2. ✅ **Siempre editar `js/client-config.js`** - No tocar el HTML directamente
3. ✅ **Un cliente = Un branch** - Mantener separados
4. ✅ **Commits descriptivos** - Facilita el seguimiento
5. ✅ **Probar localmente** antes de push

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

El sitio se abrirá en `http://localhost:5173`

---

## 📚 Recursos Adicionales

- **Guía Completa:** Lee `MULTI-CLIENT-GUIDE.md` para detalles técnicos
- **Plantilla de Config:** Revisa `js/client-config.TEMPLATE.js` para ver todos los campos
- **Documentación de Vercel:** https://vercel.com/docs
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

## 🤝 Soporte

Si tienes dudas:
1. Lee esta guía completa
2. Revisa `MULTI-CLIENT-GUIDE.md`
3. Verifica que estás en el branch correcto: `git branch`
4. Revisa la configuración en `js/client-config.js`

---

## 📄 Licencia

Este proyecto es un sistema interno de gestión multi-cliente.

---

**¡Sistema configurado y listo para escalar!** 🚀

Creado con para facilitar la gestión de múltiples clientes.
