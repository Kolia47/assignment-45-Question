/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/

function make_sandwich(items: string[]) {
    console.log("making a sandwich with the following items");
    for (let item of items) {console.log(item);};
    console.log("enjoy you sandwich Dear\n");
}

make_sandwich(["mushrooms", "onions", "tomatoes"]);
make_sandwich(["chicken", "mayonnaise", "cheese","agg", "ketchup"]);
make_sandwich(["agg", "ketchup","cucumber"]);
