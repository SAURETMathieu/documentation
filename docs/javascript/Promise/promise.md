---
id: promises-tutorial
title: Utilisation des Promesses
sidebar_label: Les Promesses
---

## Les Promesses

Les `promesses` sont un concept clé en JavaScript, permettant une gestion `asynchrone` plus propre et plus lisible. Dans ce tutoriel, nous explorerons comment utiliser les `promesses`.

## Introduction aux Promesses

Les promesses sont des `objets JavaScript` qui représentent l'achèvement (ou l'échec) éventuel d'une opération `asynchrone` et son résultat.

## Création d'une Promesse

```js
function examplePromise() {
  return new Promise((resolve, reject) => {
    // Effectuer une opération asynchrone, puis appeler resolve() ou reject()
    const success = true;

    if (success) {
      resolve('Opération réussie !');
    } else {
      reject('Opération échouée...');
    }
  });
}
```
