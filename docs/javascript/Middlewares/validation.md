---
id: validation
title: Validation Joi
sidebar_label: Validation Joi
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i joi
```

## Middleware de Validation Joi

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
