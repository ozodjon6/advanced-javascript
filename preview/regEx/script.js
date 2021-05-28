"use strict";

console.log("12-34-56".replace(/-/g, ":"));

const prom = prompt('Ввидите что-то');

const reg = /\d/g;

console.log(prom.match(reg));