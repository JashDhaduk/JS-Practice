// JS pop-up boxes :

alert("Hello world")   // Alert box

var d = prompt("Enter your number")   // prompt box
console.log(d)

var isTrue = confirm("Are your sure")  // confirm box
if (isTrue) {
    console.log("Blasts")
} 
else {
    console.log("No blast")
}

// JS basic-1

console.log("Jash")

var a = 5;
var b = 6;
var c = "Jash"

console.log(a + b + 8 + c)

let a1 = 4;
let b1 = 7.6;
let c1 = "Jash";

console.log(a1 + b1 + c1)

{
   var a = 7;
}

console.log(a)

{
    let a1 = 6;
}

console.log(a1)

// var vs let :-
// var - global scope
// let - block scope
// In modern days JS we generally use let instead of var.



// Data types :-
// There are 7 Primitive data types
// Null   Number   String   Symbol   Undefined   Boolean   BigInt
// Object is an non-primitive data type.

let p = 4;
let q = null;
let r = "Jash";
const x = true;
let y = undefined;

console.log(p, q, r, x, y)
console.log(typeof p, typeof   q, typeof r, typeof   x, typeof y)

//      type of null is object in JavaScript the "stack overflow" reason behind is 
//      bcz at the beginning it is defined as object and code is realy on it so we can't change it now.



// Object is JavaScript is consider as key:value pair and it is written in that form.
// Everthing in JavaScript are consider as object. And Object is king of JavaScript.

let o = {
    "name" : "Jash",
    "age" : 23,
    "job" : "developer",
    "Is_handsome" : true
}

console.log(o)

o.salary = 500000;
console.log(o)



// conditionals :

let age = 0;
if (age>18) {
    console.log("You can drive");  
} 
else {
    console.log("You cannot drive");  
}

if (age>18) {
    console.log("You can drive");  
} 
else if(age == 0){
    console.log("Are you kidding");
}
else {
    console.log("You cannot drive");  
}

// opertors :
let age1 = 4;
let grace = 2;
console.log(age1 ** grace)  // exponential

console.log(3 === "3")   // compare value and type too
console.log(3 == "3")    // compare only value

let j = 3;
let k = 5;
console.log(j>k ? (j-k) : (k-j));  // ternay operator - executes the if-else in one line