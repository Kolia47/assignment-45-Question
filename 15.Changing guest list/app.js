"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = [`Aziz`, `Umar`, `Usman`, `Usama`];
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
// }
let not_Coming = `Usama`;
let new_guest = `Ali`;
guest_list[3] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ` + guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
}
console.log(`Mr. ${not_Coming} will not coming on 2nd Eid.`);
