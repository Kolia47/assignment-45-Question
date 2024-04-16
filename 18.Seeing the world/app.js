"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let places = ['Bahria town ', 'Dhoraji ', 'Clifton ', 'Azizabad ', 'Empress market '];
console.log('original :' + places);
console.log('copy :' + [...places].sort());
console.log('original :' + places);
console.log('copy :' + [...places].sort().reverse());
console.log('original :' + places.sort().reverse().reverse());
console.log('original :' + places.sort());
