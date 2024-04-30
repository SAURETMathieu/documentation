---
id: flex-wrap
title: Flex Wrap
sidebar_label: Flex Wrap
---

La propriété `flex-wrap` en CSS est utilisée pour définir si les éléments flexibles doivent être enroulés sur plusieurs lignes ou colonnes dans un conteneur flex.

## Introduction

La propriété `flex-wrap` a trois valeurs possibles :

- `nowrap`: Les éléments flexibles restent sur une seule ligne (la valeur par défaut).
- `wrap`: Les éléments flexibles sont autorisés à être enroulés sur plusieurs lignes ou colonnes selon l'espace disponible.
- `wrap-reverse`: Les éléments flexibles sont enroulés sur plusieurs lignes ou colonnes dans l'ordre inverse.

## Utilisation

### `flex-wrap: nowrap`

```css
.container {
  display: flex;
  flex-wrap: nowrap;
}