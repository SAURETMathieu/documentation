---
id: init
title: Initialisation du projet
sidebar_label: Init projet
---

## Initialisation du projet

Pour commencer, créez un nouveau dossier et initialisez le projet avec la commande suivante :

`npm init -y`

## Installation des dépendences

Installez les dépendances nécessaires avec la commande suivante :

`npm install express pg body-parser cors dotenv ...`

## Création du fichier .env et .env.example

Créez les fichiers `.env` et `.env.example`

```js
PORT=4000
DEV_FRONT_URL=http://localhost:5173
PROD_FRONT_URL=https://your-website.com
DATABASE_URL=postgres://@localhost/database_name
API_DOCUMENTATION_ROUTE=/api-docs
NODE_ENV=dev
PGDATABASE=database_name
PGUSER=
PGHOST=
JWT_SECRET=gdfkgdjflgdfg564d6f4ge4g8e9dg4dcfg

MAILER_GLOBALHOST=smtp.gmail.com
MAILER_PORT=465
MAILER_GLOBALCONTACTMAIL=globalcontactmail without @plop.com
MAILER_GLOBALPASS=your_app_password
MAILER_CONTACTMAIL=XXXXX@gmail.com

CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
CLOUD_NAME=aaaaaa
API_KEY=8888888
API_SECRET=ghydgfhkgfhdf

DRIVE_ID=dhdfhgfhfbnegergedvbvdsfg
REFRESH_TOKEN=dfgdfgdfgdfhdfhdfhdfh
DRIVE_ID_CLIENT=dfgdfgdfgdfgdfgergergerg
DRIVE_SECRET_CLIENT=dfgdfgregergsgsdgdsfg
```

## Création du fichier .gitignore

```bash
# OS X
**/.DS_Store*
**/Icon?
**/._*

# Windows
**/Thumbs.db
**/ehthumbs.db
**/Desktop.ini

# Linux
**/.directory
**/*~

# npm
node_modules
package-lock.json
*.gz

#log
**/*.logs
**/*.logs.*
logs
*.log

#vscode
.vs_code/

#config
.env
sqitch.conf

#test
coverage/

```

## Création du fichier env.load.js

```js
import dotenv from 'dotenv';

dotenv.config();
```

## Créer le fichier index à la racine du projet

Pour créer le fichier index [Cliquez ici](../express) pour accèder à la page correspondante.
