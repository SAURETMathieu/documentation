---
id: cloudinary
title: Cloudinary
sidebar_label: Cloudinary
description: Configuration de Cloudinary
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i cloudinary
```

`cloudinary` est une dépendance qui permet de se connecter à Cloudinary.

## Configuration de Cloudinary

Créez un fichier `.env` à la racine de votre projet et ajoutez les variables d'environnement suivantes :

```bash
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
CLOUD_NAME=cloud_name
API_KEY=api_key
API_SECRET=api_secret
```

Créez un fichier `cloudinary.connexion.js` dans le dossier `helpers` et ajoutez le code suivant :

```js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
```
