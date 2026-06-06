# Gokul Seenivasan — Portfolio

A single-file, dark/techy developer portfolio with a 3D animated hero (Three.js), inlined SVG tech icons, and motion throughout. No build step.

## Deploy to GitHub Pages (≈5 min)

1. Create a repo named exactly **`gokul1101.github.io`**.
2. Upload **`index.html`**, **`.nojekyll`**, and your **`resume.pdf`** to the repo root.
3. Settings → Pages → Source = **Deploy from a branch**, Branch = **main / root** → Save.
4. Live at **https://gokul1101.github.io** in ~1 minute.

`.nojekyll` tells GitHub to serve files as-is (safe with the icon set and assets).

## Add your resume
The "Download CV" / "Resume" buttons link to `resume.pdf`. Export your CV to PDF, name it `resume.pdf`, drop it in the repo root. Done — no Google Drive needed.

## What's inside
- 3D animated hero (icosahedron + starfield, mouse-reactive)
- Terminal profile card that types itself out
- Experience timeline with draw-in animation
- Skills shown as icon chips by category (all visible, brand logos tinted to theme)
- Featured + side projects, contact with icon buttons
- Motion: scroll progress bar, scroll-spy nav, hero parallax, text-scramble headings, count-up stats, staggered reveals, 3D card tilt, magnetic buttons, cursor glow — all respect "reduce motion".

## Edit cheatsheet (everything is in index.html)
| Change | Search for |
|---|---|
| Hero headline | `Backend & AI` |
| Rotating terminal lines | `const words=[` |
| Stats (4+, 12, 5+) | `data-count` |
| About bio | `<section id="about">` |
| Experience | `<section id="experience">` |
| Skills / icons | `<section id="stack">` |
| Projects | `<section id="projects">` |
| Links | `<div class="socials">` |
| Accent colors | `--cyan` / `--violet` in `:root` |

## Optional: a working contact form
GitHub Pages is static, so a form needs a free form-backend. Easiest: **Web3Forms** or **Formspree** — sign up, get an endpoint, and the form posts to it (they email you). Share the endpoint/key and the form can be added, styled to match.
