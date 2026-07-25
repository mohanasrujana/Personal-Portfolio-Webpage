# Satya Srujana Pilli - Personal Portfolio

This repository is the single source of truth for
[satyasrujanapilli.com](https://satyasrujanapilli.com/). It contains two
portfolio editions backed by shared education and career information.

| Edition | Entry point | Content | Styles |
| --- | --- | --- | --- |
| Professional | `index.html` | `personalportfolio.js` | `personalportfolio.css` |
| Fun | `fun/index.html` | `fun/app.js` | `fun/styles.css` |

## Preview locally

```bash
python3 -m http.server 8080
```

Then open:

- Professional: `http://localhost:8080/`
- Fun: `http://localhost:8080/fun/`

## Content maintenance

- Update professional content in the `PORTFOLIO` object in
  `personalportfolio.js`.
- Update fun-edition content in the `DOSSIER` object in `fun/app.js`.
- Keep education, coursework, dates, and contact information aligned between
  both objects.
- Keep the UMass Amherst Web Ring badge in the professional edition only. Its
  configuration and renderer live in `personalportfolio.js`.
- `personalportfolio.html` is retained as a legacy direct URL; `index.html` is
  the canonical professional entry point.

## Repository structure

```text
.
├── index.html
├── personalportfolio.html
├── personalportfolio.css
├── personalportfolio.js
├── assets/
├── fun/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── CNAME
```

## Deployment

GitHub Pages deploys directly from the `main` branch root. The `CNAME` file
maps the site to [satyasrujanapilli.com](https://satyasrujanapilli.com/).

Do not create nested repository or deployment-copy folders inside this
repository. Preview and deploy from the root.
