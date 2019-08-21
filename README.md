# @rglepe/minimalista

![npm (scoped)](https://img.shields.io/npm/v/@rglepe/minimalista) ![](https://img.shields.io/bundlephobia/min/@rglepe/minimalista.svg)

(https://www.npmjs.com/package/@rglepe/minimalista)

Removes all spaces from a string.

## Install

```
$ npm install @rglepe/minimalista
```

## Usage

```js
const minimalista = require("@rglepe/minimalista");

minimalista("Me sobra espacio!");
//=> "Mesobraespacio!"

minimalista(1337);
//=> Uncaught TypeError: Minimalista necesita un string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
