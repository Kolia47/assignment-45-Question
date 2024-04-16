/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
function dream_cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_cars1 = dream_cars("Ford", "F-150_Raptor", "color:black", "year:2022", "transmission:auto");
console.log(my_cars1);
var my_cars2 = dream_cars("Toyota", "Prius", "year:2024", "color:white");
console.log(my_cars2);
