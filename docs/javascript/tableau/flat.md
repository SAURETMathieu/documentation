---
id: flat
title: flat
sidebar_label: flat
---

## Aplatir un Tableau de Sous-Tableaux d'une Profondeur

```javascript
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = nestedArray.flat(Infinity);
// flatArray : [1, 2, 3, 4, 5]
```
