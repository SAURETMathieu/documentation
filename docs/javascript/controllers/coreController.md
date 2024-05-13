---
id: core-controller
title: Core Controller
sidebar_label: Core Controller
description: Core Controller
---

## Core Controller

Le core controller est un module qui permet de gérer les requêtes HTTP d'une entité.

Créez un fichier `coreController.js` dans le dossier `controllers` et ajoutez le code suivant :

```js
export default class Controller {
  static datamapper;

  static async getAll(_, res) {
    const rows = await this.datamapper.findAll();
    res.status(200).json(rows);
  }

  static async getByPk({ params }, res, next) {
    const { id } = params;
    const row = await this.datamapper.findByPk(id);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async create({ body }, res) {
    const row = await this.datamapper.insert(body);
    res.status(201).json(row);
  }

  static async update({ params, body }, res, next) {
    const { id } = params;
    const dbData = await this.datamapper.findByPk(id);

    if (!dbData) {
      return next();
    }

    const data = { ...dbData, ...body };

    const row = await this.datamapper.update(data);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async delete({ params }, res, next) {
    const { id } = params;
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }
}
```

Dans cet exemple, nous avons créé un `Controller` qui définit les méthodes pour gérer les requêtes HTTP d'une entité.

Vous pouvez maintenant utiliser le `Controller` pour gérer les requêtes HTTP d'une entité.

## Exemple d'utilisation

Voici un exemple d'utilisation du `CoreController` :

```js
import UserDatamapper from "../datamappers/user.datamapper.js";
import Controller from "./controllers/coreController.js";

export default class UserController extends Controller {
  static datamapper = UserDatamapper;
}
```

Dans cet exemple, nous avons créé un `UserController` qui étend le `Controller` et définit le datamapper de l'entité `Exemple`.

Vous pouvez maintenant utiliser le `UserController` pour gérer les requêtes HTTP de l'entité `Exemple`.

## Méthodes disponibles

Le module `CoreController` contient les méthodes suivantes :

- `getAll` : Récupère toutes les données de l'entité.
- `getByPk` : Récupère une ligne de l'entité par sa clé primaire.
- `create` : Insère une nouvelle ligne dans l'entité.
- `update` : Met à jour une ligne de l'entité.
- `delete` : Supprime une ligne de l'entité.
