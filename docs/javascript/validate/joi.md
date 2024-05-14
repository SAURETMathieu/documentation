---
id: joi
title: Joi
sidebar_label: Joi
---

## Installation des dépendences

Installez les dépendances nécessaires avec la commande suivante :

`npm i joi`

## Middleware de validation de schema

```js
import ApiError from '../errors/api.error.js';

export default (sourceProperty, schema) => async (request, _, next) => {
  try {
    await schema.validateAsync(request[sourceProperty]);
    next();
  } catch (error) {
    next(new ApiError(error.message, { httpStatus: 400 }));
  }
};
```

Utilisez ce middleware dans un routeur

```js {4}
adminArtistRouter.route('/')
  .get(controllerWrapper(artistController.getAll.bind(artistController)))
  .post(
    validationMiddleware('body', artistCreateSchema),
    controllerWrapper(artistController.create.bind(artistController)),
  );
```

## Schemas

Créez un dossier `schemas` dans le dossier `\app`
Puis créez un fichier par exemple `artist.create.js`

### Schema de création

```js
import Joi from 'joi';

const createArtistSchema = Joi.object({
  firstname: Joi.string().required()
    .error(new Error('Le prénom de l\'artiste est requis et doit être une chaîne de caractères')),
  lastname: Joi.string().required()
    .error(new Error('Le nom de famille de l\'artiste est requis et doit être une chaîne de caractères')),
  nickname: Joi.string().required()
    .error(new Error('Le surnom de l\'artiste est requis et doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .required()
    .error(new Error('L\'année de naissance de l\'artiste est requise et doit être au format YYYY')),
  city: Joi.string().required()
    .error(new Error('La ville de l\'artiste est requis et doit être une chaîne de caractères')),
  country: Joi.string().required()
    .error(new Error('Le pays de l\'artiste est requis et doit être une chaîne de caractères')),
  description: Joi.string().required()
    .error(new Error('La description de l\'artiste est requise et doit être une chaîne de caractères')),
  function: Joi.string().required()
    .error(new Error('La fonction de l\'artiste est requise et doit être une chaîne de caractères')),
  url_image: Joi.string().required()
    .error(new Error('L\'URL de l\'image de l\'artiste est requise et doit être une URI valide')),
});

export default createArtistSchema;
```

### Schema de modification

```js
import Joi from 'joi';

const updateArtistSchema = Joi.object({
  firstname: Joi.string()
    .error(new Error('Le prénom de l\'artiste doit être une chaîne de caractères')),
  lastname: Joi.string()
    .error(new Error('Le nom de famille de l\'artiste doit être une chaîne de caractères')),
  nickname: Joi.string()
    .error(new Error('Le surnom de l\'artiste doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .error(new Error('L\'année de naissance de l\'artiste doit être au format YYYY')),
  city: Joi.string()
    .error(new Error('La ville de l\'artiste doit être une chaîne de caractères')),
  country: Joi.string()
    .error(new Error('Le pays de l\'artiste doit être une chaîne de caractères')),
  description: Joi.string()
    .error(new Error('La description de l\'artiste doit être une chaîne de caractères')),
  function: Joi.string()
    .error(new Error('La fonction de l\'artiste doit être une chaîne de caractères')),
  url_image: Joi.string()
    .error(new Error('L\'URL de l\'image de l\'artiste et doit être une URL valide')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateArtistSchema;
```

### Schema avec tableau

```js
import Joi from 'joi';

const updateArtistsOrderSchema = Joi.object().keys({
  orders: Joi.array().items(
    Joi.object({
      artistId: Joi.number().integer().positive().required()
        .error(new Error('L\'id de l\'artiste doit être un nombre entier positif')),
    }),
  ).min(1).required()
    .error(new Error('L\'ordre doit contenir au moins un élément')),
});

export default updateArtistsOrderSchema;
```
