"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["Aziz", "Ali", "Abbas", "Abid", "Alam"];
users.push("admin");
if (users.length === 0) {
    console.log(`We need to find some users!`);
}
else {
    users = [];
    console.log("All user have been removed " + users.length);
}
