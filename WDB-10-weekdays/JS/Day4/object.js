// let user = {
//     name: "John",
//     age: 20
// }
// console.log(user.name, user.age)

// *****************************

// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;
// console.log(myObj);

// *****************************

class myFruit {
    constructor(name, price) {
        this.fruit = name;
        this.price = price;
    }
}

// function myFruit(name, price) {
//     this.fruit = name;
//     this.price = price;
// }

let result = new myFruit("apple", 20);
console.log(result.fruit, result.price)
