---
id: google-drive
title: Google Drive
sidebar_label: Google Drive
description: Configuration de Google Drive
---

## Installation des dépendances

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i googleapis
```

`googleapis` est une dépendance qui permet de se connecter à Google Drive.

## Configuration de Google Drive

Créez un fichier `.env` à la racine de votre projet et ajoutez les variables d'environnement suivantes :

```bash
DRIVE_ID_CLIENT=id_client
DRIVE_SECRET_CLIENT=secret_client
REFRESH_TOKEN=refresh_token
DRIVE_ID_FOLDER=id_folder
```

Créez un fichier `google.connexion.js` dans le dossier `helpers` et ajoutez le code suivant :

```js
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

const oAuth2Client = new OAuth2Client({
  clientId: process.env.DRIVE_ID_CLIENT,
  clientSecret: process.env.DRIVE_SECRET_CLIENT,
  redirectUri: "https://developers.google.com/oauthplayground",
});

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const drive = google.drive({ version: "v3", auth: oAuth2Client });

export default drive;
```

## Suppression d'un fichier sur Google Drive

Pour supprimer un fichier sur Google Drive, vous pouvez utiliser la méthode `files.delete` de l'API Google Drive. Voici un exemple de fonction pour supprimer un fichier :

```js
import drive from "../helpers/google.connexion.js";

export default async function deleteDriveFile(fileId) {
  try {
    await drive.files.delete({ fileId });
    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erreur lors de la suppression du fichier:", error);
    return false;
  }
}
```
