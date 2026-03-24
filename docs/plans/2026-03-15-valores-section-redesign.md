# Rediseño Sección Valores — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformar la sección de valores del formato actual (grid de 3 tarjetas con íconos y video de fondo) al mismo formato visual de la sección "Quiénes somos" (texto a la izquierda, imagen de playa a la derecha, fondo blanco, imagen pegada a bordes).

**Architecture:** Reemplazar el HTML de la sección valores con un layout de dos columnas idéntico al de `.nosotros`. Reemplazar los estilos CSS de `.valores` con estilos que reutilicen el mismo patrón visual. Eliminar estilos huérfanos (`.valor`, `.valor__icon`, etc.).

**Tech Stack:** HTML/CSS vanilla

**Imagen a usar:** `assets/IMAGES/260315-Beach with surfers.jpg`

---

### Task 1: Reemplazar HTML de la sección Valores

**Files:**
- Modify: `index.html:234-305`

**Step 1: Reemplazar todo el bloque de la sección valores**

Reemplazar desde `<!-- VALORES - Parallax con Video -->` hasta el cierre `</section>` (líneas 231-305) con:

```html
    <!-- ==================================================================
         VALORES - Creatividad, Datos y Cultura
         ================================================================== -->
    <section class="valores section" id="valores" aria-labelledby="valores-title">
      <div class="valores__layout">
        <div class="valores__text-col">
          <h2 id="valores-title" class="valores__title" data-animate="fade-up" data-delay="0.1">
            Nuestros Valores
          </h2>
          <div class="valores__text" data-animate="fade-up" data-delay="0.2">
            <div class="valores__valor">
              <h3 class="valores__subtitle">Creatividad y maestría</h3>
              <p>
                Cada campaña merece el mismo rigor que cualquier inversión estratégica. Combinamos visión creativa con ejecución cuidada para elevar el resultado de cada proyecto.
              </p>
            </div>

            <div class="valores__valor">
              <h3 class="valores__subtitle">Datos y Estrategia</h3>
              <p>
                Integramos análisis, criterio estratégico y visión de negocio.
                Aplicamos rigor de consultoría y tecnología propia para elevar el estándar del influencer marketing.
              </p>
            </div>

            <div class="valores__valor">
              <h3 class="valores__subtitle">Cultura Amplificada</h3>
              <p>
                Leemos la cultura con sensibilidad.
                Identificamos oportunidades reales de conversación y transformamos tendencias en crecimiento de marca.
              </p>
            </div>
          </div>
        </div>
        <div class="valores__image" data-animate="fade-up" data-delay="0.3">
          <img src="assets/IMAGES/260315-Beach with surfers.jpg" alt="Playa con surfistas — la cultura y creatividad de Costa Studio" loading="lazy">
        </div>
      </div>
    </section>
```

**Step 2: Verificar en servidor local**

Run: `python3 -m http.server 8000`
Abrir `http://localhost:8000` y verificar que la sección aparece con la estructura correcta (puede verse sin estilo todavía, eso es esperado).

**Step 3: Commit**

```bash
git add index.html
git commit -m "refactor: replace valores section HTML with two-column layout"
```

---

### Task 2: Reemplazar CSS de la sección Valores

**Files:**
- Modify: `styles/main.css:678-735`

**Step 1: Reemplazar todo el bloque CSS de VALORES**

Reemplazar desde el comentario `/* VALORES */` hasta justo antes de `/* PORTAFOLIO */` (líneas 678-735) con los nuevos estilos que replican el patrón de `.nosotros`:

```css
/* ----------------------------------------------------------------------------
   VALORES
   ---------------------------------------------------------------------------- */
.valores {
  background: var(--blanco);
  overflow: hidden;
  padding: 0;
}

.valores__layout {
  display: grid;
  grid-template-columns: 1fr;
}

.valores__text-col {
  padding: var(--space-xl) var(--space-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.valores__title {
  max-width: 20ch;
  margin-bottom: var(--space-lg);
}

.valores__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.valores__valor {
  /* Cada bloque de valor individual */
}

.valores__subtitle {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 1.125rem;
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}

.valores__text p {
  color: var(--negro);
  opacity: 0.85;
}

.valores__image {
  min-height: 400px;
}

.valores__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 768px) {
  .valores__layout {
    grid-template-columns: 1fr 1fr;
    min-height: 80vh;
  }

  .valores__text-col {
    padding: var(--space-xl) var(--space-xl) var(--space-xl) clamp(2rem, 5vw, 6rem);
  }

  .valores__image {
    min-height: unset;
  }
}
```

**Step 2: Verificar en servidor local**

Run: `python3 -m http.server 8000`
Abrir `http://localhost:8000` y verificar:
- Fondo blanco
- Texto a la izquierda con los 3 valores
- Imagen de playa a la derecha pegada a los bordes
- En móvil: texto arriba, imagen abajo
- Se ve visualmente igual al patrón de "Quiénes somos"

**Step 3: Verificar responsive**

Probar en las 3 resoluciones:
- Móvil (< 768px): una columna, texto arriba, imagen abajo
- Tablet/Desktop (≥ 768px): dos columnas lado a lado

**Step 4: Commit**

```bash
git add styles/main.css
git commit -m "style: update valores CSS to match nosotros two-column layout"
```

---

### Task 3: Limpieza — Eliminar estilos huérfanos

**Files:**
- Modify: `styles/main.css`

**Step 1: Verificar y eliminar clases huérfanas**

Buscar y eliminar estos estilos que ya no se usan (venían del layout anterior de tarjetas):
- `.valores__video-container`
- `.valores__overlay`
- `.valores__grid`
- `.valor` (la clase individual de tarjeta)
- `.valor__icon`
- `.valor__titulo`
- `.valor__descripcion`

Estos estilos ya fueron reemplazados en el Task 2, pero verificar que no queden residuos.

**Step 2: Commit**

```bash
git add styles/main.css
git commit -m "chore: remove orphaned valores card styles"
```

---

## Notas importantes

- **No tocar** la sección de "Quiénes somos" — solo se usa como referencia visual
- **No tocar** `scripts/main.js` — las animaciones `data-animate` ya funcionan
- La imagen `260315-Beach with surfers.jpg` ya existe en `assets/IMAGES/`
- El `data-i18n` de los valores anteriores se puede omitir por ahora (el sistema de i18n se puede actualizar después si es necesario)
