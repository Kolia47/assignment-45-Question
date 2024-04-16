let guest_list : string [] = [`Aziz`,`Umar`,`Usman`,`Usama`];
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
// }
let not_Coming : string = `Usama`;
let new_guest : string = `Ali`;
guest_list[3] = new_guest
// for (let i=0; i<guest_list.length; i++) {
//     console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid.\n *Thank You*\n`);
// }
console.log(`Mr. ${not_Coming} will not coming on 2nd Eid.`);
guest_list.unshift(`Abas`,`Rizwan`,`Abid`)
for (let i=0; i<guest_list.length; i++) {
    console.log(`Dear `+ guest_list[i] + `,\n we invite you for Dinner on 2nd Eid. some new guest are coming too. \n *Thank You*\n`);
}