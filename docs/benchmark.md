# Benchmark: Animaciones de Carga e Intro para Sitios Premium

> Investigacion realizada para Costa Studio - Pagina Web v2
> Fecha: Marzo 2026

---

## 1. Analisis de Sitios de Referencia

### 1.1 baseagency.mx (Referencia Costa Studio)

**Enfoque:** Carga directa sin preloader explicito.

| Elemento | Detalle |
|----------|---------|
| Preloader | No tiene. El contenido aparece de inmediato |
| Animacion principal | Marquee de logos de clientes con CSS keyframes (35s, linear, infinito) |
| Scroll suave | JavaScript vanilla con 400ms de delay para cierre de menu |
| Tecnologia | CSS puro + JS vanilla |

**Lo que funciona:**
- La simplicidad es intencional: el contenido es lo primero
- Las animaciones de marquee en los logos dan ritmo visual sin ser intrusivas
- No sacrifica velocidad de carga por efectos

**Lo que podriamos mejorar:**
- Una revelacion sutil del contenido (fade-in por secciones) elevaria la percepcion de calidad sin perder velocidad

---

### 1.2 visore-x.com (Referencia Costa Studio)

**Enfoque:** Revelacion progresiva del contenido.

| Elemento | Detalle |
|----------|---------|
| Estado inicial | Contenido oculto (`opacity: 0; visibility: hidden`) |
| Marquee | Tambien oculto inicialmente, se revela despues de la carga |
| Transiciones | Clases `.duration-200` y `.duration-300` |
| Tecnologia | Alpine.js + CSS transitions |

**Lo que funciona:**
- El contenido principal empieza invisible y se revela una vez que todo esta listo
- Evita el "flash" de contenido sin estilo (FOUC)
- Transiciones suaves y controladas

**Lo que podriamos adaptar:**
- El concepto de "ocultar todo, revelar con gracia" es el patron base que Costa Studio deberia seguir
- Duraciones de 200-300ms son rapidas y elegantes, no hacen esperar al usuario

---

## 2. Patrones de Animacion Premium (Investigacion de Awwwards, Codrops, FWA)

### 2.1 Contador Numerico Minimalista

**Que es:** Un numero que sube de 0 a 100% sobre fondo limpio, luego desaparece revelando el sitio.

**Ejemplo destacado:** Portfolio de Joffrey Spitzer (Awwwards/Codrops 2026)
- Contador con `gsap.to()` usando `ease: 'steps(14)'` (avance "escalonado", no lineal)
- El fondo del preloader es el primer frame del video hero
- Al completar, usa `clip-path` con efecto `inset` para disolver el overlay
- El fondo se transforma en el video real usando GSAP Flip plugin

**Duracion tipica:** 2-4 segundos

**Por que se siente premium:**
- La tipografia del numero es protagonista (generalmente display, grande, centrada)
- El avance escalonado se siente mas "real" que uno suave
- La transicion de preloader a contenido es cinematica, no un simple corte

**Dificultad tecnica:** Media. Puede hacerse con CSS puro o GSAP.

**Ideal para Costa Studio:** SI -- alinea con la estetica minimalista y craftmanship

---

### 2.2 Revelacion por Cortina (Curtain Reveal)

**Que es:** Paneles verticales u horizontales que se separan como cortinas revelando el contenido.

**Variantes:**
- **Cortina horizontal:** Dos paneles que se abren del centro hacia los lados
- **Cortina vertical:** Panel(es) que suben o bajan
- **Cortina escalonada (staggered):** Multiples franjas que se retiran con un delay entre ellas

**Duracion tipica:** 1-2 segundos

**Por que se siente premium:**
- Referencia al cine y al teatro (levantar el telon)
- El ritmo escalonado genera anticipacion
- Controla exactamente que se ve primero

**Implementacion:** CSS `clip-path` animado o paneles con `transform: translateY()`

**Ideal para Costa Studio:** SI -- el efecto "telon" conecta con la estetica cinematica de la marca

---

### 2.3 Logo Reveal / Marca como Preloader

**Que es:** El logo o nombre de la marca se anima como elemento central del preloader.

**Variantes:**
- **Lettermark con trazo:** Las letras del logo se "dibujan" con stroke-dasharray animado
- **Orbes/particulas que convergen:** Elementos abstractos se unen para formar el logo
- **Logo que respira:** El logo pulsa suavemente mientras carga, luego desaparece

**Ejemplo:** JORIS (Awwwards) -- orbes blancos que se expanden, agrupan y desaparecen en un punto focal que revela el logo

**Duracion tipica:** 2-3 segundos

**Por que se siente premium:**
- Refuerza identidad de marca desde el primer instante
- "Quiet confidence" -- dejar que la marca hable por si misma
- Genera reconocimiento inmediato

**Ideal para Costa Studio:** POSIBLE -- pero solo si se ejecuta con extrema sutileza. El riesgo es parecer pretencioso.

---

### 2.4 Text Split / Stagger Reveal

**Que es:** El texto del hero se revela letra por letra o palabra por palabra con un efecto escalonado.

**Mecanismo tecnico:**
1. Cada palabra/letra se envuelve en un `<span>` con `overflow: hidden`
2. Internamente, otro `<span>` empieza desplazado hacia abajo (`translateY(100%)`)
3. Se anima a su posicion original con un `delay` incremental entre elementos

**Duracion tipica:** 0.8-1.5 segundos para toda la secuencia

**Por que se siente premium:**
- Ritmo pausado que obliga a leer
- Sensacion de revelacion, como si el contenido "emergiera"
- Cada palabra tiene peso visual propio

**Implementacion:** CSS con `@keyframes` + JS vanilla para dividir el texto, o GSAP SplitText

**Ideal para Costa Studio:** MUY RECOMENDADO -- alinea perfecto con "ritmo pausado, frases cortas, respirables"

---

### 2.5 Clip-Path Reveal (Iris / Wipe / Inset)

**Que es:** Todo el contenido de la pagina se revela mediante una animacion de `clip-path` que expande desde un punto o borde.

**Variantes:**
- **Circle expand:** Circulo que crece desde el centro hasta cubrir toda la pantalla
- **Inset shrink:** Rectangulo que se contrae revelando el contenido
- **Polygon wipe:** Formas geometricas que barren la pantalla

**Duracion tipica:** 0.6-1.2 segundos

**Por que se siente premium:**
- Limpio, geometrico, preciso
- No requiere elementos extra en el DOM (solo modifica visibilidad)
- Se ve nitido en cualquier resolucion (es vectorial)
- Referencia al cine (transiciones de iris en peliculas clasicas)

**Implementacion:** CSS puro con `clip-path` y `transition` o `@keyframes`

**Ideal para Costa Studio:** SI -- elegante, ligero, cinematico

---

### 2.6 Fade + Slide Escalonado por Secciones

**Que es:** Cada seccion del hero (titulo, subtitulo, CTA, imagen) aparece con un leve fade-up escalonado.

**Secuencia tipica:**
1. Fondo/imagen hero aparece primero (fade o scale sutil)
2. Titulo principal se revela (slide-up + fade, 0.3s delay)
3. Subtitulo aparece (slide-up + fade, 0.5s delay)
4. CTA aparece (slide-up + fade, 0.7s delay)
5. Navegacion aparece (fade, 0.8s delay)

**Duracion total:** 1-1.5 segundos

**Por que se siente premium:**
- Jerarquia visual animada: guia el ojo del usuario exactamente donde quieres
- Simple pero efectivo -- no necesita ser complejo para sentirse bien
- Se siente "curado", no aleatorio

**Implementacion:** CSS con `animation-delay` en cada elemento o JS vanilla con `setTimeout`

**Ideal para Costa Studio:** MUY RECOMENDADO -- el patron mas versatil y seguro. Funciona siempre.

---

## 3. Tecnologias y Herramientas

### Opcion A: CSS Puro + JS Vanilla (RECOMENDADO para Costa Studio)

**Ventajas:**
- Sin dependencias externas (alineado con el stack del proyecto)
- Rendimiento optimo
- Menor peso de pagina
- Control total

**Puede lograr:**
- Fade + slide escalonado por secciones
- Clip-path reveals (circle, inset, polygon)
- Text split con stagger (requiere JS para dividir el texto)
- Cortina simple con transform
- Contador numerico basico

**Limitaciones:**
- Secuencias complejas requieren mas codigo manual
- Sin Flip plugin (transformaciones espaciales avanzadas)

### Opcion B: GSAP (GreenSock Animation Platform)

**Ventajas:**
- Timeline para secuencias complejas
- SplitText plugin para dividir texto automaticamente
- Flip plugin para transiciones espaciales
- ScrollTrigger para animaciones al scroll
- Easing avanzado (`expo.out`, `power4.inOut`)
- 100KB gzipped (core)

**Ideal si:** Se quiere una animacion de intro mas elaborada con multiples fases coordinadas

**Sitios premiados que lo usan:** La mayoria de sitios ganadores de Awwwards

### Comparativa para Costa Studio

| Criterio | CSS + JS Vanilla | GSAP |
|----------|-----------------|------|
| Alineacion con stack | Perfecto | Requiere dependencia |
| Performance | Excelente | Muy bueno |
| Complejidad de intro | Simple-Media | Simple-Alta |
| Curva de aprendizaje | Baja | Media |
| Peso adicional | 0 KB | ~100 KB |
| Flexibilidad futura | Limitada | Alta |

---

## 4. Recomendacion para Costa Studio

### Propuesta: "Revelacion Cinematica en 3 Actos"

Basado en la identidad de Costa Studio (artesanal, cinematica, calida, pausada), la propuesta combina los patrones mas efectivos:

#### Acto 1: El Telon (0-0.3s)
- Pantalla con fondo en color Arena (#E8E4DA) o Negro (#0A0A0A)
- Logo de Costa Studio centrado, ya visible (sin animacion de entrada)
- Opcional: linea de progreso minimalista en Azul Costa (#4169E1)

#### Acto 2: La Revelacion (0.3s-1.2s)
- El overlay se retira con `clip-path: inset()` que se contrae desde los bordes
- O cortina que sube revelando el hero con video/imagen
- Transicion suave con `ease: cubic-bezier(0.76, 0, 0.24, 1)` (equivalente a expo.out)

#### Acto 3: El Contenido Emerge (1.2s-2.0s)
- Titulo hero se revela con text-split stagger (palabra por palabra)
- Subtitulo aparece con fade-up (0.3s delay despues del titulo)
- CTA aparece con fade-up (0.3s delay despues del subtitulo)
- Navegacion hace fade-in desde arriba

**Duracion total:** ~2 segundos
**Tecnologia:** CSS + JS vanilla (sin dependencias)

### Principios clave:
1. **Menos es mas** -- Cada milisegundo de animacion debe ganar su lugar
2. **Nunca bloquear** -- Si la pagina carga en <1s, el preloader no debe forzar espera
3. **Solo primera visita** -- Usar `sessionStorage` para no repetir la intro en navegacion interna
4. **Respetar performance** -- Animar solo `transform` y `opacity` (propiedades GPU-accelerated)
5. **Mobile-first** -- La animacion debe sentirse igual de bien en movil

---

## 5. Referencia Tecnica: Implementacion Basica

### Text Split con JS Vanilla
```javascript
// Divide texto en palabras envueltas en spans
function splitText(element) {
  const words = element.textContent.split(' ');
  element.innerHTML = words.map(word =>
    `<span class="word-wrap"><span class="word">${word}</span></span>`
  ).join(' ');
}
```

### Clip-Path Reveal con CSS
```css
.page-reveal {
  position: fixed;
  inset: 0;
  background: #E8E4DA;
  clip-path: inset(0 0 0 0);
  transition: clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1);
  z-index: 9999;
}

.page-reveal.revealed {
  clip-path: inset(0 0 100% 0); /* Se contrae hacia arriba */
}
```

### Stagger Fade-Up con CSS
```css
.word-wrap {
  overflow: hidden;
  display: inline-block;
}

.word {
  display: inline-block;
  transform: translateY(100%);
  animation: fadeUp 0.6s ease forwards;
}

@keyframes fadeUp {
  to { transform: translateY(0); }
}

/* Delays escalonados via JS o nth-child */
.word:nth-child(1) { animation-delay: 0.1s; }
.word:nth-child(2) { animation-delay: 0.15s; }
.word:nth-child(3) { animation-delay: 0.2s; }
/* ... */
```

### Contador Numerico con CSS (@property)
```css
@property --num {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}

.counter {
  --num: 0;
  animation: count 2s ease-out forwards;
  counter-reset: num var(--num);
}

.counter::after {
  content: counter(num) '%';
}

@keyframes count {
  to { --num: 100; }
}
```

---

## 6. Fuentes y Referencias

### Colecciones de Inspiracion
- [Awwwards - Loading Animations Collection](https://www.awwwards.com/awwwards/collections/loading-page/)
- [Awwwards - Best Animation Websites](https://www.awwwards.com/websites/animation/)
- [Awwwards - Best GSAP Websites](https://www.awwwards.com/websites/gsap/)
- [Awwwards - Luxury Websites](https://www.awwwards.com/websites/luxury/)

### Tutoriales y Articulos Tecnicos
- [Codrops - Joffrey Spitzer Portfolio: Minimalist GSAP Build](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/)
- [CSS-Tricks - Animating with Clip-Path](https://css-tricks.com/animating-with-clip-path/)
- [CSS-Tricks - Animating Number Counters](https://css-tricks.com/animating-number-counters/)
- [Codrops - Making Stagger Reveal Animations for Text](https://tympanus.net/codrops/2020/06/17/making-stagger-reveal-animations-for-text/)
- [Codrops - Building Async Page Transitions in Vanilla JS](https://tympanus.net/codrops/2026/02/26/building-async-page-transitions-in-vanilla-javascript/)
- [Webflow Blog - How to Use Loading Animations](https://webflow.com/blog/loading-animation)
- [DEV Community - Smooth Landing Page Reveal with CSS + Vanilla JS](https://dev.to/_saranshbarua/creating-a-simple-yet-smooth-reveal-animation-with-the-swiss-knife-css-animations-vanillajs-on-codepen-4mc1)
- [Formburg - Preloader Animation with GSAP](https://www.formburg.com/en/blog/preloader-animation-gsap-in-webflow)

### Ejemplos y Demos
- [SVGator - 55 Preloader Examples](https://www.svgator.com/blog/best-preloader-examples/)
- [SVGator - 31 Website Animation Examples](https://www.svgator.com/blog/website-animation-examples-and-effects/)
- [SliderRevolution - 50 CSS Page Transitions](https://www.sliderrevolution.com/resources/css-page-transitions/)
- [DesignRush - 9 Best Animated Websites 2026](https://www.designrush.com/best-designs/websites/trends/best-animated-websites)
- [Speckyboy - 10 Curtain Effect Examples](https://speckyboy.com/curtain-effect-web-design/)
- [FreeFrontend - 296 GSAP Examples](https://freefrontend.com/gsap-js/)

### Herramientas
- [GSAP (GreenSock)](https://gsap.com/) - Libreria de animacion profesional
- [loading.io](https://loading.io/) - Generador de iconos de carga SVG/GIF
