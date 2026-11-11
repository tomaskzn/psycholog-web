# Mgr. Táňa Garajová, PhD. – website (SK / EN)

Static one-page site, plain HTML/CSS/JS. No build step.
Live: https://tomaskzn.github.io/psycholog-web/

```
index.html        page structure (sections: Ponúkam, O mne, Priebeh konzultácií, Kontakt)
css/styles.css    design (colors at the top in :root – forest green + mustard)
js/i18n.js        ALL texts, Slovak + English
js/main.js        menu, animations
assets/           favicon + placeholder portrait and nature images
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Still to do

1. **Photos**: put a portrait (portrait orientation, ~840×1040 px) and a wide nature photo (~2000×1200 px) into `assets/`.
   - Portrait: replace `assets/portrait.svg` in `index.html` (2 places).
   - Nature photo: replace `assets/nature.svg` in `css/styles.css` (`.nature-img`).
2. **Online consultations**: the tool (Zoom / Jitsi) is not decided yet, so the site only says "online".
3. **Domain**: once www.tanagarajova.com is bought, it can be connected to GitHub Pages (Settings → Pages → Custom domain).

## Editing texts

- All texts are in `js/i18n.js`, Slovak (`sk`) and English (`en`) side by side.
- The name, e-mail, phone and addresses are written directly in `index.html`.

## Language

- Switch with SK / EN in the header. The choice is remembered.
- Direct links: `?lang=sk` or `?lang=en`.

## Publishing

Pushing to the `main` branch on GitHub updates the live site in about a minute.
