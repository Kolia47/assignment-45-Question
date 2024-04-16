// Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string [] = ["banana","grapes","chico"];
if ( favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if ( favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if ( favorite_fruits.includes("chico")) {
    console.log("You really like chicos!");
}
if ( favorite_fruits.includes("apple")) {
    console.log("You really like apples!");    
}else {
    console.log("apples is not in your fruits list!");
}
if ( favorite_fruits.includes("mango")) {
    console.log("You really like mangos!");
}else {
    console.log("mangos is not in your fruits list!");
}

// the below code fragment can be found in:https://github.com/Kolia47
