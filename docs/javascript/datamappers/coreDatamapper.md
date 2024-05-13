---
id: core-datamapper
title: Core Datamapper
sidebar_label: Core Datamapper
description: Core Datamapper
---

## Core Datamapper

Le core datamapper est un module qui permet de mapper les données d'une entité avec une base de données.

Créez un fichier `coreDatamapper.js` dans le dossier `datamappers` et ajoutez le code suivant :

```js
import client from "../helpers/pg.client.js";

export default class CoreDatamapper {
  static readTableName;

  static writeTableName;

  static orderedTableName;

  static async findAll() {
    const result = await client.query(
      `SELECT * FROM "${this.readTableName}" ORDER BY "id"`
    );
    return result.rows;
  }

  static async findByPk(id) {
    const result = await client.query(
      `SELECT * FROM "${this.readTableName}" WHERE "id" = $1`,
      [id]
    );
    return result.rows[0];
  }

  static async insert(data) {
    const result = await client.query(
      `SELECT * FROM create_${this.writeTableName}($1)`,
      [data]
    );
    return result.rows[0];
  }

  static async update(data) {
    const result = await client.query(
      `SELECT * FROM update_${this.writeTableName}($1)`,
      [data]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await client.query(
      `DELETE FROM "${this.writeTableName}" WHERE "id" = $1`,
      [id]
    );
    return !!result.rowCount;
  }
}
```

A noter que ce module est conçu pour fonctionner avec PostgreSQL. Vous pouvez l'adapter pour fonctionner avec d'autres bases de données.

:warning: Les méthodes `create_${this.writeTableName}` et `update_${this.writeTableName}` doivent être créées dans la base de données pour insérer et mettre à jour les données.

Vous pouvez trouver un exemple de client PostgreSQL dans le fichier `pg.client.js` du dossier `helpers`.

Lien vers le fichier [pg.client.js](../pgsql/pgsql-connexion).

Le module `CoreDatamapper` contient les méthodes suivantes :

- `findAll` : Récupère toutes les données de la table.
- `findByPk` : Récupère une ligne de la table par sa clé primaire.
- `insert` : Insère une nouvelle ligne dans la table.
- `update` : Met à jour une ligne de la table.
- `delete` : Supprime une ligne de la table.

Vous pouvez étendre ce module pour ajouter des méthodes spécifiques à une entité.

## Exemple d'utilisation

Voici un exemple d'utilisation du `CoreDatamapper` :

```js
import CoreDatamapper from "./datamappers/coreDatamapper.js";

export default class UserDatamapper extends CoreDatamapper {
  static readTableName = "users";
  static writeTableName = "users";
  static orderedTableName = "users";
}
```

Dans cet exemple, nous avons créé un `UserDatamapper` qui étend le `CoreDatamapper` et définit les noms des tables de lecture, d'écriture et d'ordonnancement.

Vous pouvez maintenant utiliser le `UserDatamapper` pour interagir avec la table `users` de la base de données.
