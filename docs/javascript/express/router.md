---
id: router
title: Routeur
sidebar_label: Routeur
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i express
```

## Configuration du routeur

Créez un dossier `routers` dans le dossier `app` puis créez le fichier `index.js`

```js
import express from 'express';
import apiRouter from './api/index.router.js';

const router = express.Router();

router.use('/api', apiRouter);

export default router;
```

Une fois le routeur principal créé. Créez un nouveau dossier par exemple `api`
Puis créez un fichier `index`

```js
import express from 'express';
import apiRouter from './site/index.router.js';
import adminRouter from './admin/index.router.js';
import errorHandler from '../../helpers/error.handler.js';
import authenticateToken from '../../middlewares/authenticate.token.js';
import authorizeAdmin from '../../middlewares/authorize.admin.js';

const router = express.Router();

router.use('/admin', authenticateToken, authorizeAdmin, adminRouter);

router.use('/', apiRouter);

router.use(errorHandler);

export default router;
```

### Sous-routeurs

Ensuite vous pouvez créer autant de `sous-dossier` que vous avez besoin pour faire des `sous-routeurs`
Il faudra créer un fichier index à chaque sous-dossier

```js
import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiUserRouter from './user.router.js';
import apiAuthRouter from './auth.router.js';
import apiLabelRouter from './label.router.js';
import apiAlbumRouter from './album.router.js';
import apiEventRouter from './event.router.js';
import apiContactRouter from './contact.router.js';
import apiTrackRouter from './track.router.js';

const apiSiteRouter = express.Router();

apiSiteRouter.use('/users', apiUserRouter);

apiSiteRouter.use('/auth', apiAuthRouter);

apiSiteRouter.use('/labels', apiLabelRouter);

apiSiteRouter.use('/albums', apiAlbumRouter);

apiSiteRouter.use('/events', apiEventRouter);

apiSiteRouter.use('/contact', apiContactRouter);

apiSiteRouter.use('/tracks', apiTrackRouter);

apiSiteRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiSiteRouter;
```

Ainsi vous pourrez créer un fichier pour chaque sous-routeur

```js
import express from 'express';
import userController from '../../../controllers/user.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import userCreateSchema from '../../../schemas/user.create.schema.js';
import userUpdateSchema from '../../../schemas/user.update.schema.js';
import authenticateToken from '../../../middlewares/authenticate.token.js';

const userRouter = express.Router();

userRouter
  .route('/')
  /**
   * POST /api/users
   * @summary Create a new user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 201 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(userController.create.bind(userController)),
  );

userRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/users/{id}
   * @summary Get a user from its id
   * @tags Users
   * @param {number} id.path.required - Id of the user to get
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    authenticateToken,
    controllerWrapper(userController.getByPk.bind(userController)),
  )
  /**
   * PATCH /api/users/{id}
   * @summary Update a user
   * @tags Users
   * @param {number} id.path.required - Id of the user to update
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .patch(
    authenticateToken,
    validationMiddleware('body', userUpdateSchema),
    controllerWrapper(userController.update.bind(userController)),
  )
  /**
   * DELETE /api/users/{id}
   * @summary Delete a user
   * @tags Users
   * @param {number} id.path.required - Id of the user to delete
   * @return {User} 203 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .delete(
    authenticateToken,
    controllerWrapper(userController.delete.bind(userController)),
  );

userRouter.route('/:id(\\d+)/likes')
  .get(
    authenticateToken,
    controllerWrapper(userController.getOneUserWithLikes.bind(userController)),
  );

export default userRouter;
```

## Utilisation du routeur

Intégrez le routeur dans votre application en l'ajoutant à la liste des middlewares utilisés. Par exemple :

```js
import router from './routers/index.router.js';

app.use(router);
```
