# POSTGRESQL

## Liste des bdd

`\l`

## Liste des rôles/droits

`\du`

## Creer une base de donnée

`sudo -i -u postgres psql`

`CREATE ROLE trombi_admin WITH LOGIN PASSWORD 'trombi';`

`CREATE DATABASE trombi OWNER trombi_admin;`

Ne pas oublier de changer le fichier `.env`

***Exemple:***

```js
PGUSER=trombi_admin 
PGHOST=localhost
PGPASSWORD=trombi 
PGDATABASE=trombi 
PGPORT=5432
```

## Se connecter

`psql -h localhost -U trombi_admin -d trombi;`

## Créer une table

```sql
  CREATE TABLE "promo" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(64),
    "github_organization" VARCHAR
  );
```

## Supprimer une table

```sql
  DROP TABLE "name_db";
```

## Modifier une table

```sql
  ALTER TABLE "name_db" ADD COLUMN "date" DATE;
```

## Insérer des données

```sql
  INSERT INTO "name_db"("col1","col2",...)
  VALUES ('val1','val2',...);
```

## Modifier des données

```sql
  UPDATE "name_db" SET "col1" = 'val1' WHERE id = 1;
```

## Supprimer des données

```sql
  DELETE FROM "promo" WHERE id = 1;
```

## Script pour créer un BDD

Dans le repo où se trouve le fichier create_db.sql

```bash
  psql -U trombi_admin -d trombi -f data/create_db.sql
```

## Tout supprimer

En dehors de la db seulement donc `exit` puis `sudo -i -u postgres psql`

```sql
  DROP DATABASE "trombi";
```
