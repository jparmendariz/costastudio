# CLAUDE.md — Página Web v2

## Why (Propósito de este proyecto)

Crear la nueva página web de Costa Studio desde cero. La v1 cumplió su función inicial pero ahora necesitamos un sitio que represente mejor quiénes somos: una agencia boutique de influencer marketing con mentalidad de consultoría y estética de craftmanship.

La página web es la pieza central de ventas. Cada decisión de diseño y contenido debe responder a una pregunta: **¿esto nos acerca a que un prospecto agende una llamada?**

## What (Qué estamos construyendo)

### Stack

- **HTML/CSS/JavaScript vanilla** — Sin frameworks
- **GitHub Pages** — Hosting estático
- **Dominio:** costastudio.mx
- **Repo:** costa-studio/costa-studio.github.io

### Estructura del proyecto

```
5 Página web-v2/
├── CLAUDE.md
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── assets/
│   ├── fonts/          # PP Neue Machina, Seneca
│   └── images/         # Imágenes del sitio
├── docs/
│   └── plans/          # Planes de trabajo
├── referencia/         # Material de referencia (NO se sube a GitHub)
│   ├── assets/LOGO/    # Logos en todos los formatos
│   ├── assets/FONTS/   # Fuentes originales
│   ├── credenciales/   # Presentación de ventas
│   ├── manual identidad/
│   └── pagina web anterior/
└── .gitignore
```

> **Nota:** Videos e imágenes de contenido se sirven desde CDN: `https://cdn.jsdelivr.net/gh/jparmendariz/costastudio@main/`

### Identidad Visual

**Paleta de colores (del manual de Marea Studio):**

| Nombre | HEX | Uso |
|--------|-----|-----|
| Arena/Beige | #E8E4DA | Fondos principales |
| Azul Costa | #4169E1 | CTAs, acentos, logo |
| Negro | #0A0A0A | Texto, logo |
| Blanco | #FFFFFF | Fondos alternos |
| Azul Claro | #D4E5F7 | Fondos suaves |

**Paleta institucional (propuesta Costa Studio):**

| Nombre | HEX | Uso |
|--------|-----|-----|
| Azul Principal | #4173D1 | Color primario de marca |
| Azul Claro | #C3D8EC | Fondos, elementos secundarios |
| Arena | #EBE6BA | Fondos cálidos |
| Mostaza Oscura | #C7A317 | Color secundario para acentos |
| Verde Musgo | #7E8C54 | Color secundario para acentos |
| Terracota Suave | #BB6F58 | Color secundario para acentos |

> Nota: Hay dos paletas documentadas (Marea Studio y Daniel García). Definir cuál gobierna antes de empezar a codificar.

**Tipografía:**

- **Display/Títulos:** Seneca — Legible, elegante
- **Cuerpo:** PP Neue Machina — Bold, condensada

### Voz y Tono

- **Claro** — Sin ambigüedades
- **Cálido** — Humano e inspirador
- **Preciso** — Cada palabra tiene función
- **Culto** — Sofisticado sin ser pretencioso
- **Ritmo pausado** — Frases cortas, respirables
- **Estructura:** Causa → revelación

> No generar copy de marca sin consultar el manual de identidad de Marea Studio en la carpeta /referencia

### Contenido de Referencia

Todo el material vive dentro de `referencia/`:

- **Manual de identidad:** `referencia/manual identidad/COSTA_ESTUDIO__.pdf`
- **Credenciales (v3):** `referencia/credenciales/260211-Credenciales Costa Studio-v3.pdf`
- **Página web v1:** `referencia/pagina web anterior/index.html`
- **Logo (PNG, SVG, AI, EPS, colores):** `referencia/assets/LOGO/`
- **Fonts:** `referencia/assets/FONTS/` (PP Neue Machina Regular/Ultrabold, Seneca)

## How (Cómo trabajar)

### Comandos de Desarrollo

```bash
# Servidor local
python3 -m http.server 8000
# Ver en: http://localhost:8000

# Deploy
git add .
git commit -m "descripción del cambio"
git push origin main
```

### Principios de diseño

1. **Craftmanship sobre producción** — El sitio debe sentirse hecho a mano, no generado
2. **Espacio blanco generoso** — Dar aire, no saturar
3. **Mobile-first** — Breakpoints en 768px y 1024px
4. **Performance** — Lighthouse > 90 en todas las métricas
5. **Accesibilidad** — WCAG 2.1 AA mínimo

### Estética: buscar vs evitar

| Buscar ✓ | Evitar ✗ |
|-----------|----------|
| Espacio blanco generoso | Gradientes neón |
| Transiciones elegantes | Tipografías genéricas (Inter, Roboto) |
| Fotografía lifestyle cálida | Layouts densos y predecibles |
| Texto narrativo en párrafos | Bullet points infinitos |
| CTAs invitacionales | CTAs agresivos ("Get Started Now!") |
| Texturas orgánicas | Stock photos corporativos |
| Inspiración japonesa/artesanal | Estética SaaS genérica |

### Sitios de referencia

- https://baseagency.mx/
- https://www.visore-x.com/

### Workflow

**Antes de codificar:**

1. Verificar que cambios alinean con este CLAUDE.md
2. Consultar manual de identidad para decisiones de marca
3. Revisar credenciales para copy y posicionamiento

**Después de modificar:**
1. Probar en servidor local
2. Verificar responsive (mobile, tablet, desktop)
3. Commit descriptivo

## Do Not

- No usar tipografías que no sean PP Neue Machina o Seneca sin aprobación
- No generar copy de marca sin referencia al manual de identidad
- No subir la carpeta `referencia/` a GitHub (agregar a .gitignore)
- No usar lenguaje SaaS ("plataforma", "solución", "ecosistema")
- No agregar dependencias pesadas — vanilla HTML/CSS/JS
- No sacrificar performance por animaciones
