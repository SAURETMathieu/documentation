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

## Suppression d'une image sur Cloudinary

Pour supprimer une image sur Cloudinary, vous pouvez utiliser la méthode `destroy` de l'API Cloudinary. Voici un exemple de fonction pour supprimer une image :

```js
import cloudinary from '../helpers/cloudinary.connexion.js';

export default async function deleteCloudinaryFile(fileId) {
  try {
    const result = await cloudinary.uploader.destroy(fileId);
    if (result.result !== 'ok') {
      throw new Error('Erreur lors de la suppression du fichier');
    }
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du fichier:', error);
    return false;
  }
}
```

## Télécharger une image sur Cloudinary

Pour télécharger une image sur Cloudinary, vous pouvez utiliser la méthode `upload` de l'API Cloudinary. Voici un exemple de fonction pour télécharger une image :

```js
import cloudinary from '../helpers/cloudinary.connexion.js';

export default async function uploadCloudinaryFile(file) {
  try {
    const result = await cloudinary.uploader.upload(file, options);
    return result.secure_url;
  } catch (error) {
    console.error('Erreur lors du téléchargement du fichier:', error);
    return false;
  }
}
```

Vous pouvez personnaliser cette fonction en ajoutant des options supplémentaires pour le téléchargement de l'image. Consultez la [documentation Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference) pour plus d'informations sur les options disponibles.
