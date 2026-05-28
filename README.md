# DJ FRANZ — Sitio Web

## Estructura del proyecto

```
djfranz/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   └── main.js         ← Animaciones e interacciones
├── images/
│   ├── hero/           ← Foto principal del hero
│   ├── gallery/        ← Fotos de la galería (7 slots)
│   ├── events/         ← Fotos opcionales de eventos
│   └── services/       ← Fotos opcionales de servicios
└── README.md
```

---

## Cómo agregar las fotos

### 1. FOTO PRINCIPAL (Hero)

Pon tu mejor foto en `images/hero/` y en `index.html` reemplaza:

```html
<!-- ANTES (placeholder) -->
<div class="hr-placeholder">
  <span class="hr-ph-icon">🎧</span>
  <span class="hr-ph-hint">Agrega tu foto — images/hero/</span>
</div>

<!-- DESPUÉS (foto real) -->
<img src="images/hero/dj-franz-hero.jpg"
     alt="DJ Franz"
     class="hr-hero-img">
```

> **Tamaño recomendado:** mínimo 900×1200px — formato vertical. Fotos con buena iluminación de escenario (azul/rojo) se ven perfectas con la paleta del sitio.

---

### 2. GALERÍA (7 fotos)

En `index.html`, busca `<!-- GALERÍA -->` y reemplaza cada `<div class="gi-bg gbX">` con una imagen:

```html
<!-- ANTES -->
<div class="gi">
  <div class="gi-bg gb1"><span class="gi-icon">🎧</span></div>
  <div class="gi-overlay"><span class="gi-lbl">Club Night</span></div>
  <div class="gi-corner"></div>
</div>

<!-- DESPUÉS -->
<div class="gi">
  <div class="gi-bg">
    <img src="images/gallery/show-01.jpg" alt="DJ Franz Club Night" loading="lazy">
  </div>
  <div class="gi-overlay"><span class="gi-lbl">Club Night</span></div>
  <div class="gi-corner"></div>
</div>
```

> **Tamaño recomendado:** 800×600px mínimo. Agrega `loading="lazy"` para mejor rendimiento.

**Los 7 slots de galería son:**
1. `show-01.jpg` → Club Night (slot grande, ocupa 2 filas)
2. `show-02.jpg` → Bodas
3. `show-03.jpg` → Opening
4. `show-04.jpg` → Estadio
5. `show-05.jpg` → Pool Party
6. `show-06.jpg` → USA Tour
7. `show-07.jpg` → Quinceañera

---

### 3. IMAGEN OG (Preview WhatsApp/Instagram)

Pon una imagen horizontal 1200×630px en `images/hero/og-image.jpg`.
Esta imagen aparece cuando compartes el link por WhatsApp o redes sociales.

---

## Datos que debes actualizar en index.html

Busca y reemplaza estos valores:

| Qué cambiar | Dónde encontrarlo | Valor de ejemplo |
|---|---|---|
| Número WhatsApp | `wa.me/593XXXXXXXXX` | `wa.me/593991234567` |
| Instagram | `@djfranz_oficial` | `@tu_usuario_real` |
| Email | `info@djfranz.com` | `tu@email.com` |
| Links de redes | `href="https://instagram.com"` | URL real de tu perfil |
| Eventos | Sección `#events` | Fechas y lugares reales |

---

## Deploy en Vercel (paso a paso)

### Paso 1 — Subir a GitHub

1. Abre **VS Code** y abre la carpeta `djfranz/`
2. Abre la terminal integrada: `Ctrl+Ñ` (Mac: `Cmd+ñ`)
3. Ejecuta estos comandos uno por uno:

```bash
git init
git add .
git commit -m "DJ Franz website - initial commit"
```

4. Ve a [github.com](https://github.com) → **New repository**
5. Nombre: `djfranz-web` → **Create repository**
6. Copia los comandos que te da GitHub y pégalos en la terminal:

```bash
git remote add origin https://github.com/TU_USUARIO/djfranz-web.git
git branch -M main
git push -u origin main
```

---

### Paso 2 — Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) → **Sign in with GitHub**
2. Click **"Add New Project"**
3. Busca y selecciona el repo `djfranz-web`
4. En **Framework Preset** selecciona **"Other"**
5. Click **"Deploy"**

¡Listo! En 30 segundos tienes la URL pública. Ejemplo: `djfranz-web.vercel.app`

---

### Paso 3 — Actualizar la web (cada vez que hagas cambios)

```bash
git add .
git commit -m "Agregar fotos de galería"
git push
```

Vercel detecta el push y actualiza el sitio automáticamente en ~20 segundos.

---

## Dominio personalizado (opcional)

Si quieres `www.djfranz.com`:
1. En Vercel → tu proyecto → **Settings → Domains**
2. Agrega tu dominio
3. Sigue las instrucciones para configurar los DNS en tu proveedor

---

## Soporte

Si necesitas hacer cambios al diseño, edita:
- **Colores:** `css/style.css` línea 1 (variables `:root`)
- **Textos:** `index.html` directamente
- **Animaciones:** `js/main.js`
- **Eventos:** Sección `#events` en `index.html`
