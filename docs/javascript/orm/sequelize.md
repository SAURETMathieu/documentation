---
id: sequelize
title: Sequelize
sidebar_label: Sequelize
description: Configuration de Sequelize
---

## Installation des dépendances

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i sequelize
```

`sequelize` est une dépendance qui permet de se connecter à une base de données.

## Configuration de Sequelize

Créez un fichier `.env` à la racine de votre projet et ajoutez les variables d'environnement suivantes :

```bash
DB_NAME=nom_base_de_donnees
DB_USER=utilisateur
DB_PASSWORD=mot_de_passe
DB_HOST=hôte
DB_DIALECT=dialecte
```

Créez un fichier `sequelize.connexion.js` dans le dossier `helpers` et ajoutez le code suivant :

```js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});
```
