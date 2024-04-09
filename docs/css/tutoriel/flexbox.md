---
id: flexbox
title: Flexbox
sidebar_label: Flexbox
---

# Flexbox

Flexbox, ou Flexible Box Layout, est un modèle de disposition pour concevoir des mises en page complexes et dynamiques avec des boîtes de modèle élastiques.

## Introduction

Le modèle Flexbox fournit un moyen efficace de distribuer l'espace entre les éléments d'un conteneur et d'aligner ces éléments de manière souple. Il est particulièrement utile pour créer des mises en page réactives et adaptables.

## Propriétés Flexbox principales

### `display: flex`

La propriété `display: flex` est utilisée pour transformer un conteneur en un conteneur flexible, activant ainsi le modèle Flexbox.

```css
.container {
  display: flex;
}
```

### `flex-direction`

La propriété flex-direction définit la direction principale des axes du conteneur.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### `justify-content`

La propriété justify-content contrôle le placement des éléments le long de l'axe principal du conteneur.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

#### Exemple pratique

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
```
