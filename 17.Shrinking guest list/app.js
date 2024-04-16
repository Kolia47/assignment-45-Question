"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = [`Aziz`, `Umar`, `Usman`, `Usama`];
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
// }
let not_Coming = `Usama`;
let new_guest = `Ali`;
guest_list[3] = new_guest;
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
// }
console.log(`Mr. ${not_Coming} will not coming on 2nd Eid.`);
guest_list.unshift(`Abas`, `Rizwan`, `Abid`);
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid. some new guest are coming too. \n *Thank You*\n`);
// }
console.log('\n unfortunately we did not arrange a big table so only 2 person are alowed');
while (guest_list.length > 2) {
    let removedguest = guest_list.pop();
    console.log(`Sorry, dear . ${removedguest} you are not invited because we cannot arrange big table.\n *SORRY*\n`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ` + guest_list[i] + `,\n you are still invited for Dinner on 2nd Eid. \n *Thank You*\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);
