# ⚡ INICIO RÁPIDO - Sistema Multi-Cliente

Esta guía te permitirá crear un nuevo cliente en **menos de 5 minutos**.

---

## 🎯 Opción 1: Script Automático (Recomendado)

### Para Windows:

```bash
# 1. Ejecuta el script desde la raíz del proyecto
create-client.bat

# 2. Sigue las instrucciones en pantalla:
#    - Ingresa el nombre del cliente (ej: techpro)
#    - El script creará el branch automáticamente
#    - Se abrirá Notepad con la configuración
#    - Edita los campos necesarios
#    - Guarda y cierra
#    - El script hará commit y push automáticamente

# 3. ¡Listo! Tu cliente está creado y en GitHub
```

### Para Mac/Linux:

Por ahora usa la opción manual (abajo), o crea tu propio script bash basándote en `create-client.bat`.

---

## 🔧 Opción 2: Manual (3 Comandos)

```bash
# 1. Crear branch y copiar plantilla
git checkout main && git pull
git checkout -b cliente-NOMBRE
cp js/client-config.TEMPLATE.js js/client-config.js

# 2. Editar configuración
# Abre js/client-config.js en tu editor favorito
# Reemplaza todos los campos con la info del cliente

# 3. Guardar y subir
git add js/client-config.js
git commit -m "config: Add new client NOMBRE"
git push -u origin cliente-NOMBRE
```

---

## 📝 Campos que DEBES editar en client-config.js

### Mínimos obligatorios:
```javascript
businessName: "Nombre Real del Negocio"
heroTitle: "Marca"
description: "Descripción real del servicio..."
whatsapp: "52XXXXXXXXXX"  // Con código de país
email: "contacto@real.com"
metaTitle: "Título SEO optimizado"
metaDescription: "Descripción para Google..."
```

### Recomendados:
```javascript
facebook: "https://facebook.com/pagina-real"
location: "Ciudad Real"
logo: "assets/images/logo-real.svg"  // Sube el logo primero
```

---

## 🌐 Configurar Deploy en Vercel

### Método 1: Auto-Deploy (Más Simple)

1. Ve a tu proyecto en Vercel
2. **Settings** → **Git** → **Production Branch**
3. Activa: ☑️ **"Automatically deploy branches"**

✅ **Resultado:** Cada branch `cliente-X` tendrá su URL automática:
- `cliente-pcfix` → `tu-proyecto-git-cliente-pcfix.vercel.app`

### Método 2: Proyecto Separado

1. En Vercel: **Add New...** → **Project**
2. Importa el **mismo repositorio**
3. En **Configure Project**:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. En **Git Configuration**:
   - **Production Branch:** `cliente-NOMBRE` ← Selecciona el branch del cliente
5. Deploy

✅ **Resultado:** Cada cliente tiene su propio proyecto Vercel con dominio custom

---

## 🔄 Comandos Cotidianos

### Ver todos los clientes
```bash
git branch -a
```

### Cambiar a un cliente
```bash
git checkout cliente-NOMBRE
```

### Actualizar configuración de un cliente
```bash
git checkout cliente-NOMBRE
# Edita js/client-config.js
git add js/client-config.js
git commit -m "update: cambio de WhatsApp"
git push
# Vercel deploya automáticamente
```

### Volver a main
```bash
git checkout main
```

---

## ✅ Checklist de Nuevo Cliente

Usa esto para verificar que todo esté completo:

- [ ] Branch creado: `cliente-NOMBRE`
- [ ] Archivo `js/client-config.js` editado con info real
- [ ] Commit hecho con mensaje descriptivo
- [ ] Push a GitHub completado
- [ ] Vercel configurado para auto-deploy o proyecto separado
- [ ] Prueba local hecha: `npm run dev`
- [ ] URL de producción verificada (sin errores en consola)
- [ ] WhatsApp link probado (abre WhatsApp correctamente)
- [ ] Meta tags verificados (título/descripción correctos)
- [ ] Logo actualizado (si aplica)

---

## 🆘 Problemas Comunes

### "fatal: A branch named 'cliente-X' already exists"
```bash
# El branch ya existe, solo cámbialo:
git checkout cliente-X
```

### "No veo los cambios en el deploy"
```bash
# Verifica que hiciste push:
git status
git push

# Fuerza rebuild en Vercel:
# Dashboard → Deployments → ... → Redeploy
```

### "Los cambios no se aplican en el sitio"
1. Hard refresh: `Ctrl + Shift + R` (Chrome)
2. Verifica la consola del navegador (F12) para errores
3. Verifica que editaste `client-config.js` y NO el TEMPLATE

### "El script create-client.bat no funciona"
- Ejecútalo desde la raíz del proyecto
- Asegúrate de tener Git instalado: `git --version`
- Usa Git Bash si estás en Windows

---

## 📚 Documentación Completa

- **README.md** - Documentación completa del sistema
- **MULTI-CLIENT-GUIDE.md** - Guía técnica detallada
- **js/client-config.TEMPLATE.js** - Plantilla con todos los campos

---

## 💡 Tips Pro

1. **Nombres de branch:** Usa `cliente-nombrecorto` (sin espacios, minúsculas)
2. **Commits:** Sé descriptivo: `update: change contact info` mejor que `cambios`
3. **Testing:** Siempre prueba localmente con `npm run dev` antes de push
4. **Backup:** Nunca borres el branch main, es tu plantilla maestra
5. **Logos:** Guarda logos en `assets/images/` antes de referenciarlos en el config

---

**¿Listo para escalar?** 🚀

Ahora puedes crear nuevos clientes en minutos y gestionar todos desde un solo repositorio.
