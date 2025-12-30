# Costa Studio - Página Web

Sitio web institucional para Costa Studio, agencia boutique de influencer marketing con sede en México.

## Objetivo

Crear un sitio single-page que:
1. Proyecte **craftmanship artesanal**, no software corporativo
2. Convierta visitantes hacia **"Agendar llamada"**
3. Impresione evaluadores de **Google for Startups**

## Stack Técnico

- **HTML5** semántico
- **CSS3** con custom properties (sin frameworks)
- **JavaScript** vanilla (mínimo, solo para interacciones)
- **Fuentes:** Bebas Neue + Space Grotesk (Google Fonts, fallback hasta integrar Overheat + PP Neue Machina)
- **Paleta:** Arena #E8E4DA, Azul Costa #4169E1, Negro #0A0A0A

## Estructura de Secciones

1. **Hero** - Tagline y propuesta de valor ("Desde la costa, todo se ve con claridad")
2. **Filosofía** - Manifesto "Craftmanship sobre volumen"
3. **Metodología** - "La Brújula Costa" (3 pilares: Cartografía, Estrategia, Ejecución Lean)
4. **Valores** - 3 diferenciadores (Craftmanship, Estrategia+Datos, Ejecución Lean)
5. **CTA Final** - Invitación a agendar llamada
6. **Footer** - Contacto y enlaces a redes

## Características Implementadas

- Header sticky con navegación y CTA principal
- Propuesta de valor clara en hero section
- Contenido narrativo basado en metáforas de navegación/costa
- Responsive design mobile-first (768px, 1024px breakpoints)
- Smooth scroll en anclas internas (#agendar)
- Animaciones de fade-in con Intersection Observer
- Meta tags para SEO y Open Graph
- Estructura semántica HTML5 + WCAG 2.1 AA accesibilidad
- Design system con custom CSS properties para fácil mantenimiento

## Desarrollo

```bash
# Levantar servidor local
python3 -m http.server 8000

# Abrir en navegador
open http://localhost:8000

# Validar HTML
npx html-validate index.html

# Validar accesibilidad
npx pa11y http://localhost:8000
```

## Documentación

- `CLAUDE.md` - Instrucciones para Claude Code
- `PROGRESS.md` - Bitácora de avances
- `docs/` - Benchmark, copy y especificaciones

## Equipo

- **Camila Le Clercq** - Marketing & Creatividad
- **Juan Pablo Armendáriz** - Finanzas & Administración
- **Jordán Linares** - Operaciones & Tecnología
