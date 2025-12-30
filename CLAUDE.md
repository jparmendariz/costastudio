# Costa Studio Web - Instrucciones para Claude Code

Sitio web single-page para Costa Studio, agencia boutique de influencer marketing. Diseño craftmanship artesanal, no software corporativo. Optimizado para conversión hacia "Agendar llamada" y para impresionar evaluadores de Google for Startups.

**Documentación detallada:** Ver `/docs/` para benchmark, copy y assets.

## Skill Obligatorio

**IMPORTANTE:** Antes de escribir cualquier código frontend, leer el skill de diseño:
```
/mnt/skills/public/frontend-design/SKILL.md
```

Este skill contiene las mejores prácticas para crear interfaces distintivas que eviten la estética genérica de AI.

## Comandos de Desarrollo

### Servidor Local
```bash
# Opción 1: Python (recomendado)
python3 -m http.server 8000

# Opción 2: Node.js (si está instalado)
npx serve .

# Ver sitio en: http://localhost:8000
```

### Validación
```bash
# Validar HTML
npx html-validate index.html

# Validar accesibilidad (si hay tests)
npx pa11y http://localhost:8000
```

## Estructura del Proyecto

```
2 Página web/
├── CLAUDE.md           # Este archivo - instrucciones para Claude Code
├── README.md           # Descripción del proyecto
├── PROGRESS.md         # Bitácora de avances
├── index.html          # Página principal (single-page)
├── styles/             # CSS
│   └── main.css
├── scripts/            # JavaScript
│   └── main.js
├── assets/             # Imágenes, fuentes, íconos
│   ├── images/
│   ├── fonts/
│   └── icons/
├── docs/               # Documentación y referencias
│   ├── benchmark.md    # Análisis de sitios de referencia
│   ├── copy.md         # Textos aprobados
│   └── design-system.md
└── tests/              # Tests de accesibilidad y performance
```

## Especificaciones de Diseño

### Identidad Visual
- **Paleta principal:**
  - Arena/Beige `#E8E4DA` (fondos)
  - Azul Costa `#4169E1` (acentos, CTAs)
  - Negro `#0A0A0A` (texto, logo)
  - Blanco `#FFFFFF` (fondos alternos)
  - Azul Claro `#D4E5F7` (fondos suaves)
- **Tipografía principal (display):** Overheat
- **Tipografía secundaria (body):** PP Neue Machina
- **Estética:** Craftmanship, navegación, calidez costera
- **Logo:** En iteración (concepto kayak/canoa con remador)

### Tagline
> "Desde la costa, todo se ve con claridad"

### Voz y Tono
- **Atributos:** Claro, Cálido, Preciso, Culto, Inspirador
- **Ritmo:** Pausado, frases cortas y respirables
- **Estructura:** Causa-revelación ("Cuando navegas sin rumbo... la costa se vuelve tu mejor aliada")
- **Persona:** Segunda persona, el lector es protagonista

### Secciones (en orden)
1. **Hero** - Propuesta de valor + CTA "Agendar llamada"
2. **Filosofía/Manifesto** - El "por qué" de Costa Studio
3. **Metodología** - "La Brújula Costa" (3 pilares)
4. **Caso de estudio** - The Beauty Bar + métricas
5. **Equipo fundador** - Credenciales prominentes
6. **Valores/Diferenciadores** - Por qué Costa
7. **CTA final** - Invitación a agendar llamada
8. **Footer** - Minimalista

### CTAs Estratégicos
- Header sticky: "Agendar llamada" (siempre visible)
- Hero: "Agendar llamada" (captura intención alta)
- Post caso de estudio: "¿Listo para resultados similares?"
- Sección final: "Hablemos sobre tu marca"

### Restricciones de Diseño
**EVITAR (estética SaaS):**
- Gradientes neón
- Tipografías genéricas (Inter, Roboto, Arial)
- Layouts predecibles y densos
- Iconos 3D brillantes
- CTAs agresivos ("Get Started Now!")

**BUSCAR (estética artesanal):**
- Espacio blanco generoso
- Transiciones elegantes
- Fotografía lifestyle cálida
- Texto narrativo en párrafos (no bullet points infinitos)
- CTAs invitacionales ("Cuéntanos sobre tu marca")

## Constraints Críticos

- **Hosting:** GitHub Pages (sitio estático, sin backend)
- **Single-page:** Todo en index.html, sin routing
- **Performance:** Lighthouse > 90 en todas las métricas
- **Responsive:** Mobile-first, breakpoints en 768px y 1024px
- **Accesibilidad:** WCAG 2.1 AA mínimo
- **Sin frameworks CSS:** Vanilla CSS con custom properties
- **JavaScript mínimo:** Solo para interacciones esenciales
- **Compatibilidad GitHub Pages:** No usar Jekyll, solo archivos estáticos HTML/CSS/JS

## Workflows

### Antes de Modificar
1. Verificar que cambios alinean con especificaciones de diseño
2. Mantener consistencia con paleta y tipografía definida
3. Auditar con subagent contra reglas de CLAUDE.md

### Después de Modificar
1. Probar en servidor local
2. Verificar responsive (mobile, tablet, desktop)
3. Documentar cambios en PROGRESS.md

## Instrucciones Personalizadas

### Comunicación
1. **Usa analogías cotidianas** - Conceptos complejos como cosas del día a día
2. **Muestra progreso visualmente** - Capturas o resultados > código
3. **Toma decisiones técnicas** - No preguntar qué librería usar
4. **Explica QUÉ hace el código** - No CÓMO (a menos que pregunte)
5. **Anticipa problemas** - Avisar en lenguaje simple

### No Asumir Conocimiento de
- Comandos de terminal
- Mensajes de error
- Organización de archivos
- Conceptos técnicos (API, servidor, etc.)

## Deploy a GitHub Pages

### Setup Inicial
```bash
# En la carpeta del proyecto
git init
git remote add origin https://github.com/costa-studio/costa-studio.github.io.git
```

### Deploy
```bash
git add .
git commit -m "Update site"
git push origin main
```

### URL Final
- **Repositorio:** costa-studio.github.io (repo público)
- **URL:** https://costa-studio.github.io o https://costastudio.mx (con dominio personalizado)

### Configurar Dominio Personalizado
1. En GitHub: Settings → Pages → Custom domain → costastudio.mx
2. En DNS del dominio: Agregar registro CNAME apuntando a costa-studio.github.io
3. Crear archivo `CNAME` en raíz del repo con: `costastudio.mx`

## Recursos

- **Design System:** `/docs/design-system.md` (colores, tipografía, voz y tono)
- **Benchmark completo:** `/docs/benchmark.md`
- **Contexto estratégico:** `/docs/contexto-agencia.md`
- **Referencia diseño:** `/docs/Referencia diseño/` (PDF de Marea Studio, logo en iteración)
- **Proyecto Drive:** `7 Diseño/2 Página web/`
- **Sitios referencia:** studiodisenos.com, gutsandgracestudio.com, sublimio.com
