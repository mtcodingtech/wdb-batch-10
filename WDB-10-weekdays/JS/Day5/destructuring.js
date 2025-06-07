// let a, b, rest;

// [a, b, ...rest] = [10, 20, 30, 40, 50, 60];
// console.log(a)
// console.log(b)
// console.log(rest[1])

// ****************************

//  Array Destructuring
const fruits = ["apple", "orange", "mango", "kiwi"];
const [item1, item2, ...item3] = fruits;
console.log(item3);

//  Object Destructuring
const user = { username: "Alice", age: 25 };
const {username, age} = user;
console.log(username, age)

