/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city: string, country: string){
    return`${city} ${country}`
}
let pair1 = city_country("Karachi", "Pakistan");
let pair2 = city_country("Tokyo", "Japan");
let pair3 = city_country("Moscow", "Russia");

console.log(pair1);
console.log(pair2);
console.log(pair3);
