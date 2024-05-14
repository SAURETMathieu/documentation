---
id: logger
title: Logger - Journalisation
sidebar_label: Journalisation
---

## Installation des dépendences

Pour commencer, installez les dépendances nécessaires avec la commande suivante :

```bash
  npm i winston
  npm i winston-daily-rotate-file
```

## Configuration de winston

La configuration définit trois transports différents en fonction de l'environnement de l'application :

- transportCombinedFile : pour les journaux combinés en mode production.
- transportErrorFile : pour les journaux d'erreurs en mode production.
- transportCombinedConsole : pour les journaux combinés en mode développement affichés dans la console.

Les configurations incluent des paramètres tels que le niveau de journalisation, le chemin du fichier de journal, le modèle de date pour la rotation des fichiers, la fréquence de rotation, le nombre maximal de fichiers à conserver, et le format du journal.

```js
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// Importation de divers modules du module winston pour la configuration
const {
  combine, timestamp: now, label: category, printf, json, colorize,
} = winston.format;

// Définition du format de la console pour les journaux
const consoleFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

// Configuration du transport des journaux en mode production pour les journaux combinés
const transportCombinedFile = new winston.transports.DailyRotateFile({
  level: 'http',
  filename: './logs/combined.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1h',
  maxFiles: '3d',
  format: combine(
    now(),
    json(),
  ),
});

// Configuration du transport des journaux en mode production pour les erreurs
const transportErrorFile = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/error.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1h',
  maxFiles: '3d',
  format: combine(
    now(),
    json(),
  ),
});

// Configuration du transport des journaux en mode développement pour la console
const transportCombinedConsole = new winston.transports.Console({
  level: 'http',
  format: combine(
    category({ label: 'all' }),
    now(),
    colorize(),
    consoleFormat,
  ),
});

// Exportation des configurations des transports
module.exports = { transportCombinedFile, transportErrorFile, transportCombinedConsole };

```

## Configuration des transports

La configuration du logger repose sur le module `winston` et son extension `winston-daily-rotate-file` pour une rotation quotidienne des fichiers. Les transports utilisés dépendent de l'environnement (production ou non).

```js
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const {
  transportCombinedFile,
  transportErrorFile,
  transportCombinedConsole,
} = require('./transports.logger.js');

const transports = [];
if (process.env.NODE_ENV === 'production') {
  transports.push(transportCombinedFile, transportErrorFile);
} else {
  transports.push(transportCombinedConsole);
}

const logger = winston.createLogger({
  transports,
});

module.exports = logger;
```

## Middleware logger

Le middleware `httpLogger` enregistre des informations de journalisation pour chaque requête HTTP. Il utilise le logger configuré précédemment.

```js
const logger = require('../helpers/index.logger.js');

function httpLogger(request, response, next) {
  response.on('finish', () => {
    const clientIP = request.ip;

    const actualStatus = response.statusCode;

    const logInfo = {
      httpStatus: actualStatus,
      level: 'http',
      message: `${clientIP} ${request.method} ${request.originalUrl}`,
      timestamp: new Date().toISOString(),
    };

    logger.http(logInfo);
  });

  next();
}

module.exports = httpLogger;
```

## Importer le logger dans l'application

Intégrez le middleware `httpLogger` dans votre application en l'ajoutant à la liste des middlewares utilisés. Par exemple :

```js
const httpLogger = require('./app/middlewares/httpLogger.js');

app.use(httpLogger);
```

Ce middleware permettra de générer des journaux pour chaque requête HTTP traitée par votre application dans un repertoire `logs`
