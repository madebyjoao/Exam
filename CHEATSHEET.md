# Reveal.js React — Full Cheatsheet

## Components

### `<Deck>` — the presentation root
```jsx
<Deck
  config={{
    hash: true,           // URL updates as you navigate
    controls: true,       // arrow buttons in corner
    progress: true,       // progress bar at bottom
    transition: 'slide',  // none | fade | slide | convex | concave | zoom
    transitionSpeed: 'default', // default | fast | slow
    backgroundTransition: 'fade',
    loop: false,
    autoSlide: 0,         // ms between auto-advances (0 = off)
    width: 1280,
    height: 720,
    center: true,         // vertically center slide content
    overview: true,       // ESC key shows all slides overview
    keyboard: true,
  }}
  plugins={[RevealHighlight]}
  onReady={(deck) => console.log(deck)}
  onSlideChange={(e) => console.log(e.indexh, e.indexv)}
>
```

---

### `<Slide>` — a single slide
```jsx
<Slide
  background="#111827"           // solid color
  backgroundImage="url(img.jpg)" // image background
  backgroundColor="black"
  backgroundVideo="video.mp4"
  backgroundOpacity={0.3}        // dim a bg image/video
  backgroundSize="cover"         // CSS background-size
  transition="zoom"              // override per-slide
  autoAnimate                    // animate between matching elements
  notes="Speaker notes here"
  visibility="hidden"            // skip slide in navigation
>
  <h2>Slide content</h2>
</Slide>
```

---

### `<Fragment>` — reveal content step by step (same slide)
```jsx
// Each Fragment appears on the next click, in order
<Fragment as="p">First point</Fragment>
<Fragment as="p" animation="fade-up">Second point</Fragment>
<Fragment as="p" animation="fade-down" index={1}>Goes first</Fragment>

// Wrap any element
<Fragment asChild>
  <img src="chart.png" className="w-64" />
</Fragment>
```

**Animation values:**
| Value | Effect |
|-------|--------|
| `fade` (default) | fade in |
| `fade-out` | fade out |
| `fade-up` | slide up while fading in |
| `fade-down` | slide down |
| `fade-left` | slide left |
| `fade-right` | slide right |
| `fade-in-then-out` | fade in, then out on next click |
| `fade-in-then-semi-out` | fade in, then dim |
| `grow` | scale up |
| `shrink` | scale down |
| `strike` | strikethrough |
| `highlight-red` | red highlight |
| `highlight-green` | green highlight |
| `highlight-blue` | blue highlight |
| `semi-fade-out` | partial fade |

---

### `<Stack>` — vertical slide group
```jsx
// Navigate down with ↓, not →
<Stack>
  <Slide>Vertical 1</Slide>
  <Slide>Vertical 2</Slide>
  <Slide>Vertical 3</Slide>
</Stack>
```

---

### `<Code>` — syntax-highlighted code block
Requires `RevealHighlight` plugin.

```jsx
import RevealHighlight from 'reveal.js/plugin/highlight';
import 'reveal.js/plugin/highlight/monokai.css';

<Deck plugins={[RevealHighlight]}>
  <Slide>
    <Code language="javascript" lineNumbers>
      {`const greet = (name) => {
  return \`Hello, \${name}!\`;
};`}
    </Code>

    {/* Highlight specific lines, step by step */}
    <Code language="javascript" lineNumbers="1|2-3|4">
      {`function example() {
  const a = 1;
  const b = 2;
  return a + b;
}`}
    </Code>
  </Slide>
</Deck>
```

---

### `<Markdown>` — write slides in Markdown
```jsx
<Markdown
  separator="^\n---\n$"
  verticalSeparator="^\n--\n$"
  options={{ smartypants: true, animateLists: true }}
>
  {`
## Slide 1
- Item <!-- .element: class="fragment" -->
- Item 2 <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#111827" -->
## Slide 2 with dark background

--

## Vertical slide under Slide 2
  `}
</Markdown>
```

---

## Tailwind inside slides

Tailwind classes work normally on any element inside a `<Slide>`:

```jsx
<Slide>
  <h1 className="text-5xl font-bold text-blue-400">Title</h1>
  <p className="mt-4 text-xl text-gray-300">Subtitle</p>

  <div className="grid grid-cols-2 gap-8 mt-8">
    <div className="bg-white/10 rounded-xl p-6">Left</div>
    <div className="bg-white/10 rounded-xl p-6">Right</div>
  </div>
</Slide>
```

> **Note:** Reveal's theme CSS and Tailwind can conflict on base elements like `h1`, `p`, `ul`.
> Use explicit Tailwind classes (e.g. `text-4xl`) to override the theme styles.

---

## Auto-animate between slides

Add `autoAnimate` to two consecutive slides. Elements with the same `id` will animate between positions automatically:

```jsx
<Slide autoAnimate>
  <h2 id="title">My Project</h2>
</Slide>

<Slide autoAnimate>
  <h2 id="title" className="text-sm text-gray-400">My Project</h2>
  <h1 className="text-5xl font-bold">The Details</h1>
</Slide>
```

---

## Speaker notes

```jsx
<Slide notes="Mention the Q4 results here. Don't forget the live demo.">
  <h2>Results</h2>
</Slide>

// Or inline with the <aside> tag
<Slide>
  <h2>Results</h2>
  <aside className="notes">
    Mention the Q4 results here. Press S to open speaker view.
  </aside>
</Slide>
```
Press `S` to open the speaker view (timer + notes).

---

## Plugins

```jsx
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealZoom from 'reveal.js/plugin/zoom';
import RevealMath from 'reveal.js/plugin/math';

<Deck plugins={[RevealHighlight, RevealNotes, RevealZoom, RevealMath]}>
```

| Plugin | What it does |
|--------|-------------|
| `highlight` | Syntax highlighting for `<Code>` |
| `notes` | Speaker notes panel (press S) |
| `zoom` | Alt+click to zoom into any element |
| `math` | LaTeX math rendering |
| `search` | Ctrl+Shift+F to search slide text |

---

## Control Reveal programmatically

```jsx
import { useReveal } from '@revealjs/react';

function Controls() {
  const deck = useReveal();
  return (
    <div className="flex gap-4">
      <button onClick={() => deck?.prev()}>← Prev</button>
      <button onClick={() => deck?.next()}>Next →</button>
      <button onClick={() => deck?.slide(0, 0)}>Go to first</button>
    </div>
  );
}
```

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `↑` / `↓` | Vertical slides |
| `F` | Fullscreen |
| `S` | Speaker view |
| `ESC` | Slide overview |
| `B` | Blackout screen |
| `Alt+click` | Zoom (needs zoom plugin) |

---

## Slide layout tips with Tailwind

```jsx
// Two-column layout
<Slide>
  <div className="grid grid-cols-2 gap-8 h-full items-center">
    <div>
      <h2>Left column</h2>
      <p>Text content</p>
    </div>
    <div>
      <img src="screenshot.png" className="rounded-lg shadow-xl" />
    </div>
  </div>
</Slide>

// Centered hero
<Slide background="#0f172a">
  <div className="flex flex-col items-center justify-center gap-6">
    <h1 className="text-6xl font-black text-white">Big Title</h1>
    <p className="text-2xl text-slate-400">Supporting text</p>
    <span className="px-4 py-2 bg-blue-500 rounded-full text-white text-sm">
      Tag
    </span>
  </div>
</Slide>
```
