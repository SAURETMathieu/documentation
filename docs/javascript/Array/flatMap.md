# flatMap

## Aplatir le Résultat d'une Application de Fonction sur Chaque Élément

```javascript
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap(number => [number * 2, number * 3]);
// doubledAndFlattened : [2, 3, 4, 6, 6, 9]
```
