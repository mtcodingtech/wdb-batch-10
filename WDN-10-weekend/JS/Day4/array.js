// let fruits = [];
// fruits[0] = "apple";
// fruits[1] = "orange";
// console.log(fruits)

// let fruits = new Array("apple", "orange");
// console.log(fruits)

// *******************************

// let fruits = ["apple", "orange", "mango"];
// console.log(fruits.length)
// console.log(typeof fruits)

// let result = fruits.toString();
// console.log(result, typeof result)


// *****************************
// let fruits = ["apple", "orange", "mango"];
// fruits.push("kiwi");
// fruits.pop();

// fruits.unshift("kiwi", "lemon")
// fruits.shift();
// console.log(fruits)

// ********************************
// let fruits = ["apple", "orange", "mango", "kiwi", "lemon"];
// // fruits.splice(1, 1, "lemon", "pineapple");
// let result = fruits.slice(0, -3)
// console.log(result)


// ********************************

// function greet() {
//     return "hello"
// }
// const greet = () => "hello";

// console.log(greet())

// ********************************

let fruits = ["apple", "orange", "mango", "kiwi", "lemon"];
let result1 = fruits.forEach((fruit) => fruit)
let result2 = fruits.map((fruit) => fruit)

console.log(result1)
console.log(result2)