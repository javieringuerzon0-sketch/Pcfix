# 🚀 Guía Multi-Cliente - Sistema de Branches

Esta plantilla está configurada para gestionar múltiples clientes usando Git Branches. Cada cliente tiene su propio branch con su configuración personalizada.

---

## 📋 **Estructura de Branches**

```
main                        → Plantilla maestra (NUNCA deployar)
├── cliente-pcfix          → PcFix Pro (La Paz, BCS)
├── cliente-serviexpress   → ServiExpress Electrónik (La Paz, BCS)
└── cliente-3              → (Agregar más clientes aquí)
```

---

## ⚡ **COMANDOS ESENCIALES**

### **1. Ver todos los clientes disponibles**
```bash
git branch -a
```

### **2. Cambiar a un cliente**
```bash
# Cambiar a PcFix
git checkout cliente-pcfix

# Cambiar a ServiExpress
git checkout cliente-serviexpress
```

### **3. Crear un NUEVO cliente**
```bash
# Desde main
git checkout main

# Crear nuevo branch
git checkout -b cliente-nombre

# Editar js/client-config.js con la info del nuevo cliente

# Guardar cambios
git add js/client-config.js
git commit -m "config: Nuevo cliente - Nombre del Negocio"
git push -u origin cliente-nombre
```

### **4. Actualizar configuración de un cliente existente**
```bash
# Cambiar al branch del cliente
git checkout cliente-nombre

# Editar js/client-config.js

# Guardar cambios
git add js/client-config.js
git commit -m "update: cambios en configuración"
git push
```

---

## 🎯 **ARCHIVO DE CONFIGURACIÓN**

**Ubicación:** `js/client-config.js`

Este archivo contiene TODA la información personalizable del cliente:

```javascript
const CLIENT_CONFIG = {
  // NEGOCIO
  businessName: "Nombre del Negocio",
  heroTitle: "Título",
  heroSubtitle: "Subtítulo",
  heroVersion: "v1.0",
  tagline: "Eslogan",
  description: "Descripción del negocio",

  // CONTACTO
  whatsapp: "526121234567",  // Con código de país
  facebook: "https://www.facebook.com/pagina",
  email: "contacto@negocio.com",

  // UBICACIÓN
  location: "Ciudad, Estado",

  // BRANDING
  logo: "assets/images/logo.svg",
  favicon: "assets/images/favicon.svg",

  // SEO
  metaTitle: "Título para Google",
  metaDescription: "Descripción para Google",
  ogUrl: "https://sitio.vercel.app/",

  // ESTADÍSTICAS
  stats: {
    repairs: "500+",
    support: "24",
    satisfaction: "98",
    // ...
  }
};
```

---

## 🌐 **CONFIGURAR DEPLOYS EN VERCEL**

### **Opción 1: Deploy automático por branch (Recomendado)**

1. Ve a tu proyecto en Vercel
2. Settings → Git → Configure
3. Activa: **"Automatically deploy branches"**

**Resultado:**
- `cliente-pcfix` → https://pcfix-pro.vercel.app
- `cliente-serviexpress` → https://serviexpress-xxx.vercel.app
- Cada branch tiene su propio deploy automático

### **Opción 2: Proyectos separados en Vercel**

1. Importa el mismo repositorio varias veces en Vercel
2. Para cada proyecto, configura el branch específico:
   - Proyecto 1: Branch `cliente-pcfix`
   - Proyecto 2: Branch `cliente-serviexpress`

---

## 🔄 **ACTUALIZAR TODOS LOS CLIENTES**

Si mejoras el diseño/funcionalidad en `main`, puedes aplicarlo a todos:

```bash
# Hacer cambios en main
git checkout main
# ... editar archivos (NO client-config.js) ...
git add .
git commit -m "feat: mejora en el slider"
git push

# Aplicar a cada cliente
git checkout cliente-pcfix
git merge main
git push

git checkout cliente-serviexpress
git merge main
git push

# Repetir para todos los clientes
```

---

## 📦 **WORKFLOW DIARIO**

### **Cambiar de cliente:**
```bash
git checkout cliente-nombre
```

### **Editar configuración:**
1. Abrir `js/client-config.js`
2. Cambiar los valores necesarios
3. Guardar

### **Probar localmente:**
```bash
npm run dev
```

### **Deployar:**
```bash
git add js/client-config.js
git commit -m "update: cambio de WhatsApp"
git push
```

Vercel detecta el cambio y deploya automáticamente.

---

## ✅ **CLIENTES CONFIGURADOS**

### **1. PcFix Pro**
- **Branch:** `cliente-pcfix`
- **WhatsApp:** +52 612 197 2004
- **Facebook:** facebook.com/pcfixlapaz
- **Deploy:** https://pcfix-pro.vercel.app

### **2. ServiExpress Electrónik**
- **Branch:** `cliente-serviexpress`
- **WhatsApp:** +52 612 348 3327
- **Facebook:** facebook.com/serviexpress.electronik
- **Email:** dr.cell@icloud.com
- **Deploy:** (configurar en Vercel)

---

## ⚠️ **REGLAS IMPORTANTES**

1. ✅ **NUNCA deployar el branch `main`** - Es solo plantilla
2. ✅ **Siempre editar `js/client-config.js`** - No tocar el HTML directamente
3. ✅ **Un cliente = Un branch** - Mantener separados
4. ✅ **Guardar cambios con commits descriptivos**
5. ✅ **Probar localmente antes de push**

---

## 🆘 **PROBLEMAS COMUNES**

### **No veo los cambios en el deploy**
```bash
# Verificar que estás en el branch correcto
git branch

# Verificar que se hizo push
git status

# Forzar rebuild en Vercel (si es necesario)
```

### **Cambié algo y se rompió**
```bash
# Volver al último commit que funcionaba
git checkout cliente-nombre
git reset --hard origin/cliente-nombre
```

### **Perdí mis cambios**
```bash
# Ver historial de cambios
git log

# Recuperar un commit anterior
git checkout <commit-hash> -- js/client-config.js
```

---

## 📞 **SOPORTE**

Si tienes dudas:
1. Lee esta guía completa
2. Verifica que estás en el branch correcto: `git branch`
3. Revisa el archivo `js/client-config.js`

---

**¡Sistema configurado y listo para usar!** 🎉
