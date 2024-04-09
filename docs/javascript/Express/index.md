---
id: express
title: Express server
sidebar_label: Express server
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i express pg dotenv
```

## Création de l'index à la racine du projet

```js
import { createServer } from 'node:http';
import './app/helpers/env.load.js';
import app from './app/index.app.js';

const server = createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server launched at http://localhost:${PORT}`);
});
```

## Exemple de fichier index à la racine du dossier app

```js
import express from 'express';
import router from './routers/index.router.js';
import errorMiddleware from './middlewares/error.middleware.js';
import createDoc from './helpers/api.doc.js';
import httpLogger from './middlewares/httpLogger.js';
import corsMiddleware from './middlewares/cors.js';
import uploadMiddleware from './middlewares/uploadFile.js';

const app = express();

app.use(corsMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(uploadMiddleware);

createDoc(app);

app.use(httpLogger);

app.use(router);

app.use(errorMiddleware);

export default app;
```

## Exemple de fichier de configuration .env

Créez un fichier `.env` et `.env.example` ainsi qu'un fichier `.gitignore`
