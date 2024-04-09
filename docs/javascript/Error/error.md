---
id: error
title: Centralisation des Erreurs
sidebar_label: Centralisation des Erreurs
---

## Création d'une Classe étendant la Classe Error

```js
// Centraliser les erreurs
class ApiError extends Error {
  /**
   * Construit une instance de ApiError.
   * @param {string} message - Le message d'erreur.
   * @param {Object} info - Informations supplémentaires sur l'erreur.
   */
  constructor(message, info) {
    super(message);
    this.name = 'ApiError';

    // Attache des informations supplémentaires à l'objet d'erreur si fournies
    if (info) {
      Object.entries(info).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  }
}

module.exports = ApiError;
```

## Intégration d'un Gestionnaire d'Erreurs

### Ajout de la Route dans le Routeur

Créez le module `errorHandler` qui vous permettra de récupérer les erreurs `(err)` générées dans vos middlewares qui appelleront ce module.

```js
// Importer le module de journalisation (logger) et le module d'envoi d'e-mails (nodemailer)
const logger = require('./index.logger.js');
const { sendEmail } = require('./nodemailer.js');

// Middleware pour gérer les erreurs
module.exports = async (err, request, response, next) => {
  try {
    // Si aucune erreur, passez au middleware suivant
    if (!err) {
      next();
    }

    // Si l'erreur a un statut HTTP de 500 (Internal Server Error)
    if (err.httpStatus === 500) {
      // Enregistrer l'erreur dans les journaux
      logger.error('Error 500', err);
      // Préparer les détails de l'e-mail à envoyer
      const destinataire = process.env.MAIL;
      const sujet = 'Erreur 500 sur le site';
      const contenu = `Le site rencontre des problèmes. 
      Détails de l'erreur :\n\n${err.stack}`;

      // Envoyer un e-mail pour avertir en cas d'erreur 500
      const envoiReussi = await sendEmail(destinataire, sujet, contenu);

      // Afficher une erreur si l'envoi de l'e-mail échoue
      if (!envoiReussi) {
        console.error('Erreur lors de l\'envoi de l\'e-mail.');
      }
    }

    // Retourner une réponse JSON avec le statut HTTP de l'erreur et le message de l'erreur
    return response.status(err.httpStatus).json({ error: err.message });
  } catch (error) {
    logger.error('Error in error handling middleware', error);
    // Retourner une réponse JSON avec le statut HTTP 500 en cas d'échec du traitement de l'erreur
    return response.status(500).json('Erreur lors de la gestion de l\'erreur.');
  }
};
```

### Utilisation de next

Dans un middleware, vous pourrez créer une erreur de cette manière, en retournant `next` avec l'erreur comme paramètre. N'oubliez pas d'importer la classe `ApiError` qui sera nécessaire pour son utilisation ainsi que `next`.

```js {1}
const ApiError = require('../errors/api.error.js');

const err = new ApiError(
        'La rotation n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
```

### Importation du module dans le routeur

Importez le module `errorHandler` avec le bon chemin, puis ajoutez une route pour attraper les erreurs générées dans une route précédente. Placez cette route à la fin de manière à ne pas créer d'erreurs. Prenez soin de mettre ce middleware avant le middleware de la page d'erreur, qui devra être le dernier middleware en cas de `page not found`.

```js {4,10}
const express = require('express');
const webSiteRouter = require('./webSite/index.js');
const mainController = require('../controllers/mainController.js');
const errorHandler = require('../helpers/error.handler.js');

const router = new express.Router();

router.use('/', webSiteRouter);

router.use(errorHandler);

router.use('*', mainController.getErrorPage);

module.exports = router;
```
