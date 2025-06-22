// let h2Element = document.getElementsByTagName("h2");
// let h2Element = document.querySelectorAll(".para");

// h2Element[0].innerHTML = "Hello";
// h2Element[0].style.color = "red";
// h2Element[0].style.backgroundColor = "pink";

// console.log(h2Element)

// ***********************************

let h2Element = document.createElement("h2");
let textNode = document.createTextNode("hello world")
h2Element.appendChild(textNode)

let bodyElement = document.body;
bodyElement.appendChild(h2Element)

console.log(h2Element)
console.log(textNode)
