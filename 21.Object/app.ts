interface item {
    name: string
    price: number
}

const Book: item = {
    name: "Linux",
    price: 800
}
const Samsung: item = {
    name: "Samsung Galaxy S 24",
    price: 800
}
console.log(`Book name : ${Book.name}, price : ${Book.price}`);
console.log(`Mobile name : ${Samsung.name}, price : ${Samsung.price}`);
