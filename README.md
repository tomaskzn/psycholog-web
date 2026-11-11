# Psychologist website (SK / EN)

Static one-page site, plain HTML/CSS/JS. No build step, so it can be hosted anywhere.

```
index.html        page structure (all sections)
css/styles.css    design (colors at the top in :root)
js/i18n.js        ALL texts, Slovak + English
js/main.js        menu, animations, FAQ, contact form
assets/           favicon + placeholder portrait
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Replace the placeholder content

Everything marked below is placeholder text (name "Mgr. Ján Novák", phone, e-mail, address, prices, CV).

1. **Texts**: edit `js/i18n.js`. Each key has a Slovak (`sk`) and English (`en`) version.
2. **Name, phone, e-mail, address, prices, years in the timeline**: these are written directly in `index.html` (search for `Ján Novák`, `+421`, `info@`, `Obchodná`, `€`). Also update the name in `meta.title` in `js/i18n.js`.
3. **Photo**: put the photo in `assets/` (e.g. `portrait.jpg`, portrait orientation, ~840×1040 px) and replace `assets/portrait.svg` in `index.html` (2 places).
4. **Map**: on https://www.openstreetmap.org find the address → Share → HTML, copy the `src` URL into the `<iframe>` in the contact section.
5. **Contact form**: create a free form at https://formspree.io, then replace `YOUR_FORM_ID` in the `<form action="…">`. Until then the form shows a "not connected yet" message.
6. **Colors**: change the variables at the top of `css/styles.css`.

## Language

- Switch with SK / EN in the header. The choice is remembered.
- Direct links: `?lang=sk` or `?lang=en`.
- First visit: Slovak/Czech browsers get SK, everyone else EN.

## Deploy (free)

- **Netlify**: drag the whole folder onto https://app.netlify.com/drop
- **GitHub Pages**: push the folder to a repository → Settings → Pages.
- Any regular webhost: upload all files via FTP.
