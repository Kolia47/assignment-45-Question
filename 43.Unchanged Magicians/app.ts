/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
 with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 return the new array and store it in a separate array. Call show_magicians()
 with each array to show that you have one array of the original names and
 one array with the Great added to each magician’s name.*/
 
 function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function show_great(magicians: string[]) {
    for (let magician of magicians) {
        console.log("the great "+magician);
    }
}
console.log("\n"+"Original names");
show_magicians(["S.S.Adams", "David_Copperfield", "Judson_Cole"]) 

console.log("\n"+"copy with The great added");
show_great(["S.S.Adams", "David_Copperfield", "Judson_Cole"])

