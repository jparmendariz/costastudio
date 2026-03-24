# Cambio de Tipografía y Hero Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Cambiar títulos de Seneca a PP Neue Machina y remover el hero "Donde las ideas tocan tierra"

**Architecture:** Modificar CSS para usar PP Neue Machina en títulos (actualmente usa Seneca via `--font-display`). En HTML, eliminar título y subtítulo del hero manteniendo badge y CTAs.

**Tech Stack:** CSS vanilla, HTML

---

## Task 1: Cambiar tipografía de títulos en CSS

**Files:**
- Modify: `styles/main.css:121-127` (selector h1-h6)
- Modify: `styles/main.css:54` (variable --font-display)

**Step 1: Cambiar variable --font-display**

Actualmente en línea 54:
```css
--font-display: 'Seneca', Georgia, serif;
```

Cambiar a:
```css
--font-display: 'PP Neue Machina', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Step 2: Agregar font-weight 800 a títulos**

En el selector h1-h6 (línea 121-127), cambiar:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

A:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

**Step 3: Verificar en navegador**

Run: `python3 -m http.server 8000`
Expected: Títulos ahora en PP Neue Machina Ultrabold

**Step 4: Commit**

```bash
git add styles/main.css
git commit -m "style: change headings from Seneca to PP Neue Machina Ultrabold"
```

---

## Task 2: Remover título del hero

**Files:**
- Modify: `index.html:105-112` (eliminar h1 y subtítulo)

**Step 1: Eliminar el h1 del hero**

Eliminar líneas 105-108:
```html
<h1 id="hero-title" class="hero__title" data-animate="split-text">
  <span class="hero__title-line" data-i18n="hero.title1">Donde las ideas</span>
  <span class="hero__title-line hero__title-accent" data-i18n="hero.title2">tocan tierra</span>
</h1>
```

**Step 2: Eliminar el subtítulo del hero**

Eliminar líneas 110-112:
```html
<p class="hero__subtitle" data-animate="fade-up" data-delay="0.4" data-i18n="hero.subtitle">
  En un mar de contenido es fácil perder el rumbo; pero desde la COSTA, todo se ve con claridad.
</p>
```

**Step 3: Verificar en navegador**

Run: Refrescar localhost:8000
Expected: Hero muestra solo badge y botones

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: remove hero title and subtitle, keep badge and CTAs"
```

---

## Task 3: Actualizar aria-labelledby del hero

**Files:**
- Modify: `index.html:84` (actualizar aria-labelledby)

**Step 1: Cambiar aria-labelledby**

Línea 84, cambiar:
```html
<section class="hero" aria-labelledby="hero-title">
```

A:
```html
<section class="hero" aria-label="Costa Studio - Influencer Marketing">
```

**Step 2: Commit**

```bash
git add index.html
git commit -m "fix: update hero accessibility label after title removal"
```

---

## Resumen de cambios

| Archivo | Cambio |
|---------|--------|
| `styles/main.css` | Cambiar `--font-display` de Seneca a PP Neue Machina |
| `styles/main.css` | Cambiar font-weight de h1-h6 de 400 a 800 |
| `index.html` | Eliminar `<h1>` con "Donde las ideas tocan tierra" |
| `index.html` | Eliminar `<p class="hero__subtitle">` |
| `index.html` | Actualizar aria-label del hero |
