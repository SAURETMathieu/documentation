---
id: cors
title: Cors
sidebar_label: Cors
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i cors
```

## Configuration de cors

```js

import cors from 'cors';

// Middleware CORS
const corsOptions = {
  origin: [process.env.PROD_FRONT_URL, process.env.DEV_FRONT_URL],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Disposition'],
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;

```

## Importer le logger dans l'application

Intégrez le middleware `cors` dans votre application en l'ajoutant à la liste des middlewares utilisés. Par exemple :

```js
import corsMiddleware from './middlewares/cors.js';

app.use(corsMiddleware);
```
