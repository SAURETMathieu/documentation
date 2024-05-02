---
id: check-connect
title: Check Connexion
sidebar_label: Vérification de la connexion de l'utilisateur
---

```js
function checkConnected() {
  const token = localStorage.getItem('authApiToken');
  if (token) {
    return true;
  }
  return false;
}

export default checkConnected;
```
