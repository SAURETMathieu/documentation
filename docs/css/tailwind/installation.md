---
id: installation
title: Installation de tailwind CSS
sidebar_label: Installation
---

## Installation de tailwind CSS avec Next.js

```bash
  npx create-next-app@latest my-app --typescript --tailwind --eslint

  cd my-app
  
  code .
```

`--typescript` si vous utilisez typescript, assurez-vous d'avoir `typescript` installé globalement ou localement avant d'exécuter la commande.

Sinon, l'option `--typescript` peut générer une erreur.

Vous pouvez l'installer avec:

```bash
  npm install -g typescript
```

ou

```bash
  npm install typescript
```

## Installation de tailwind CSS avec Vite

```bash
  npm create vite@latest my-app

  cd my-app

  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

  npx tailwindcss init -p

  code .
```
