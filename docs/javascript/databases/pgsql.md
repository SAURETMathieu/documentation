---
id: pgsql
title: Connexion à une base de données PostgreSQL
sidebar_label: PostgreSQL
description: Connexion à une base de données PostgreSQL
---

## Installation des dépendances

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
npm i pg
```

`pg` est une dépendance qui permet de se connecter à une base de données PostgreSQL.

## Connexion à une base de données PostgreSQL

```js
import pg from "pg";

// The Pool allows opening multiple connections that can be used in parallel.
const client = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // host: process.env.PGHOST,
  // user: process.env.PGUSER,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default client;
```

Le code ci-dessus permet de se connecter à une base de données PostgreSQL en utilisant les variables d'environnement suivantes :

- `DATABASE_URL` : URL de la base de données PostgreSQL
- `PGHOST` : Hôte de la base de données PostgreSQL
- `PGUSER` : Nom d'utilisateur de la base de données PostgreSQL
- `PGDATABASE` : Nom de la base de données PostgreSQL
- `PGPASSWORD` : Mot de passe de la base de données PostgreSQL

Il est possible de se connecter à une base de données PostgreSQL en utilisant une URL de connexion ou en spécifiant l'hôte, l'utilisateur, la base de données et le mot de passe.
