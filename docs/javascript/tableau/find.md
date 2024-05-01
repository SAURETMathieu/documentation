# find

## Retourner le Premier Élément du Tableau qui Satisfait un Test

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(number => number % 2 === 0);
// evenNumber : 2
```

## `find()` avec une Fonction de Test Personnalisée : Retourner un Élément du Tableau qui Satisfait un Test Personnalisé

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(number => {
    const isEven = number % 2 === 0;
    return isEven && number > 2;
});
// evenNumber : 4
```
