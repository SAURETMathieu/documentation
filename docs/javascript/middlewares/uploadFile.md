---
id: upload-file
title: Télécharger des fichiers
sidebar_label: Télécharger des fichiers
description: Middleware pour télécharger des fichiers
---

## Installation des dépendances

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i multer music-metadata googleapis cloudinary
```

`multer` est une dépendance qui permet de gérer les fichiers téléchargés.

`music-metadata` est une dépendance qui permet de récupérer les métadonnées d'un fichier audio.

`googleapis` est une dépendance qui permet de se connecter à Google Drive.

`cloudinary` est une dépendance qui permet de se connecter à Cloudinary.

## Middleware pour télécharger des fichiers

Ce middleware permet de télécharger des fichiers sur Google Drive et Cloudinary.

Si le fichier est un fichier audio, il est téléchargé sur Google Drive. Si le fichier est une image, il est téléchargé sur Cloudinary.

Si vous n'avez pas configuré Google Drive ou Cloudinary, vous pouvez modifier ce middleware pour télécharger les fichiers sur un autre service.

Vous trouverez ci-dessous un lien pour configurer les connexions à Google Drive et Cloudinary.

[Connexion à Google Drive](../helpers/google-drive)

[Connexion à Cloudinary](../helpers/cloudinary)

```js
import multer from "multer";
import path from "path";
import fs from "fs";
import * as metadata from "music-metadata";
import drive from "../helpers/google.connexion.js";
import cloudinary from "../helpers/cloudinary.connexion.js";

const storage = multer.diskStorage({
  destination(request, file, cb) {
    cb(null, "./uploads");
  },
  filename(request, file, cb) {
    cb(
      null,
      `${request.body.name}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
  resource_type: "image",
  format: "webp",
  secure: true,
};

const uploadFile = (request, response, next) => {
  if (
    request.url.includes("/api/admin/albums") ||
    request.url.includes("/api/admin/tracks") ||
    request.url.includes("/api/admin/artists")
  ) {
    options.transformation = {
      width: 200,
      height: 200,
      crop: "fill",
    };
  } else {
    delete options.transformation;
  }

  upload.any()(request, response, async (err) => {
    if (err) {
      return response
        .status(400)
        .json("Erreur lors de la récupération du fichier.");
    }

    if (!request.files || request.files.length === 0) {
      delete request.body.url_image;
      delete request.body.url_sound;
      return next();
    }

    if (!request.body.url_image) {
      delete request.body.url_image;
    }

    if (!request.body.url_sound) {
      delete request.body.url_sound;
    }

    try {
      const { files } = request;
      const driveFolderId = process.env.DRIVE_ID_FOLDER;

      const uploadPromises = files.map(async (file) => {
        const filePath = file.path;
        const fileStream = fs.createReadStream(filePath);

        if (file.mimetype.startsWith("audio/")) {
          const driveResponse = await drive.files.create({
            requestBody: {
              name: file.filename,
              parents: [driveFolderId],
            },
            media: {
              mimeType: file.mimetype,
              body: fileStream,
            },
          });

          if (driveResponse.status === 200) {
            const fileUrl = `https://drive.google.com/thumbnail?id=${driveResponse.data.id}`;
            const metadatas = await metadata.parseFile(filePath);
            request.body.duration = Math.ceil(metadatas.format.duration);
            request.body.url_sound = fileUrl;
            request.sound = { id: driveResponse.data.id };
          }
        }

        if (file.mimetype.startsWith("image/")) {
          const result = await cloudinary.uploader.upload(filePath, options);
          if (!result.secure_url) {
            throw new Error("Erreur lors de l'upload de l'image");
          }
          request.body.url_image = result.secure_url;
        }

        fs.unlinkSync(filePath);
        if (request.body.data && typeof request.body.data === "string") {
          request.body = JSON.parse(request.body.data);
        }
      });

      await Promise.all(uploadPromises);
      return next();
    } catch (error) {
      return response
        .status(500)
        .json("Erreur lors de la récupération du fichier");
    }
  });
};

export default uploadFile;
```
