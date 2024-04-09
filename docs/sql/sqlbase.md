# Commandes SQL de Base

## 1. `CREATE TABLE`

La commande `CREATE TABLE` est utilisée pour créer une nouvelle table dans une base de données.

```sql
CREATE TABLE nom_de_table (
    nom_de_colonne1 type_de_donnée,
    nom_de_colonne2 type_de_donnée,
    ...
);
```

**Exemple :**

```sql
CREATE TABLE "Utilisateurs" (
    "id" INT PRIMARY KEY,
    "nom" VARCHAR(50),
    "age" INT
);
```

## 2. `INSERT INTO`

La commande `INSERT INTO` est utilisée pour insérer de nouvelles lignes de données dans une table existante.

```sql
INSERT INTO "nom_de_table" ("nom_de_colonne1", "nom_de_colonne2", ...)
VALUES ('valeur1', 'valeur2', ...);
```

**Exemple :**

```sql
INSERT INTO "Utilisateurs" ("id", "nom", "age")
VALUES (1, 'Alice', 30);
```

## 3. `SELECT`

La commande `SELECT` est utilisée pour récupérer des données à partir d'une ou plusieurs tables.

```sql
SELECT "colonne1", "colonne2", ...
FROM "nom_de_table"
WHERE condition;
```

**Exemple :**

```sql
SELECT "nom", "age"
FROM "Utilisateurs"
WHERE "age" > 25;
```

## 4. `UPDATE`

La commande `UPDATE` est utilisée pour mettre à jour des données existantes dans une table.

```sql
UPDATE "nom_de_table"
SET "colonne1" = 'nouvelle_valeur1', "colonne2" = 'nouvelle_valeur2', ...
WHERE condition;
```

**Exemple :**

```sql
UPDATE "Utilisateurs"
SET "age" = 31
WHERE "nom" = 'Alice';
```

## 5. `DELETE`

La commande `DELETE` est utilisée pour supprimer des lignes de données d'une table.

```sql
DELETE FROM "nom_de_table"
WHERE condition;
```

**Exemple :**

```sql
DELETE FROM "Utilisateurs"
WHERE "age" < 18;
```
