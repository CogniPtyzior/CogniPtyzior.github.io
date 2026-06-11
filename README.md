# CogniPtyzior.github.io

Personal portfolio website for **Dynamics / Damien Farina**.

The website presents selected public projects around Applied AI, cloud platforms, full-stack applications, local-first software and developer tooling.

Live website:

```txt
https://cogniptyzior.github.io
```

## Contents

```txt
CogniPtyzior.github.io/
├── index.html          # English version
├── fr.html             # French version
├── styles.css          # Shared styling
├── Photo_profil.png    # Profile picture
├── README.md
└── .gitignore
```

## Featured projects

- **Dynamic Grep** — local-first desktop search and reporting tool for Windows and Linux.
- **PropertySupportAI** — production-like GenAI workflow API for property support use cases.
- **SupportFlow AI** — Node.js/React support cockpit with DDD, RabbitMQ workers, MongoDB, Redis, Qdrant, Ollama and Kind/Kubernetes deployment.
- **GrailScanner & GrailScannerVSCode** — local AI-assisted repository analysis, audit and developer tooling.
- **GrailJob** — AI-assisted job search and tracking ecosystem with backend and frontend repositories.

## Local editing

This is a static HTML/CSS website. No build step is required.

Open `index.html` in a browser to preview the English version, or `fr.html` to preview the French version.

## Publishing

GitHub Pages is configured to deploy from the `main` branch and the repository root.

After editing:

```bash
git add .
git commit -m "Update portfolio site"
git push origin main
```

GitHub Pages will rebuild and publish the website automatically.
