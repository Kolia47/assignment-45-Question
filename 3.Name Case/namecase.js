"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lower case
let personName = "Abdul";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// Title case
console.log("Titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
console.log(personName.replace(/\bw/g, c => c.toLowerCase()));
