---
id: get-audio
title: Récupérer des fichiers audio
sidebar_label: Récupérer des fichiers audio
description: Fonction pour récupérer des fichiers audio
---

## Fonction pour récupérer des fichiers audio

```js
import drive from "../helpers/google.connexion.js";

async function getAudioContent(fileId) {
  try {
    const response = await drive.files.get(
      {
        fileId,
        alt: "media",
      },
      { responseType: "stream" }
    );

    const contentType = response.headers["content-type"];
    if (contentType !== "audio/mpeg") {
      console.error("Le contenu récupéré n'est pas un fichier audio MPEG.");
      return false;
    }

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier audio:", error);
    return false;
  }
}

export default getAudioContent;
```

Utilisez cette fonction pour récupérer le contenu d'un fichier audio stocké sur Google Drive. La fonction prend en paramètre l'identifiant du fichier audio à récupérer. Elle renvoie le contenu du fichier audio si la récupération est réussie, sinon elle renvoie `false`.

```js
const fileId = "id_du_fichier_audio";
const audioContent = await getAudioContent(fileId);
if (audioContent) {
  console.log("Contenu du fichier audio:", audioContent);
}
```

Vous pouvez utiliser cette fonction pour récupérer le contenu d'un fichier audio stocké sur Google Drive dans un projet Node.js. Vous pouvez également personnaliser cette fonction pour récupérer des fichiers audio stockés sur d'autres services de stockage en ligne.

Vous trouverez ci-dessous un lien pour configurer la connexion à Google Drive.

[Connexion à Google Drive](../helpers/google-drive)
