// // JS pop-up boxes :

// alert("Hello world")   // Alert box

// var d = prompt("Enter your number")   // prompt box
// console.log(d)

// var isTrue = confirm("Are your sure")  // confirm box
// if (isTrue) {
//     console.log("Blasts")
// } 
// else {
//     console.log("No blast")
// }

// // JS basic-1

// console.log("Jash")

// var a = 5;
// var b = 6;
// var c = "Jash"

// console.log(a + b + 8 + c)

// let a1 = 4;
// let b1 = 7.6;
// let c1 = "Jash";

// console.log(a1 + b1 + c1)

// {
//    var a = 7;
// }

// console.log(a)

// {
//     let a1 = 6;
// }

// console.log(a1)

// // var vs let :-
// // var - global scope
// // let - block scope
// // In modern days JS we generally use let instead of var.



// // Data types :-
// // There are 7 Primitive data types
// // Null   Number   String   Symbol   Undefined   Boolean   BigInt
// // Object is an non-primitive data type.

// let p = 4;
// let q = null;
// let r = "Jash";
// const x = true;
// let y = undefined;

// console.log(p, q, r, x, y)
// console.log(typeof p, typeof   q, typeof r, typeof   x, typeof y)

// //      type of null is object in JavaScript the "stack overflow" reason behind is 
// //      bcz at the beginning it is defined as object and code is realy on it so we can't change it now.



// // Object is JavaScript is consider as key:value pair and it is written in that form.
// // Everthing in JavaScript are consider as object. And Object is king of JavaScript.

// let o = {
//     "name" : "Jash",
//     "age" : 23,
//     "job" : "developer",
//     "Is_handsome" : true
// }

// console.log(o)

// o.salary = 500000;
// console.log(o)



// // conditionals :

// let age = 0;
// if (age>18) {
//     console.log("You can drive");  
// } 
// else {
//     console.log("You cannot drive");  
// }

// if (age>18) {
//     console.log("You can drive");  
// } 
// else if(age == 0){
//     console.log("Are you kidding");
// }
// else {
//     console.log("You cannot drive");  
// }

// // opertors :
// let age1 = 4;
// let grace = 2;
// console.log(age1 ** grace)  // exponential

// console.log(3 === "3")   // compare value and type too
// console.log(3 == "3")    // compare only value

// let j = 3;
// let k = 5;
// console.log(j>k ? (j-k) : (k-j));  // ternay operator - executes the if-else in one line


// let a = null;

// {
//   let a = 10;
// }

// console.log(a)

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.querySelector(".btn");
//   button.addEventListener("click", () => {
//     alert("clicked")
//   })
// })

// let c = ''
// alert(typeof(c))

// let a = 1;
// let b = 2;
// let min = [b,a][+(a < b)]
// console.log(min)

// (a<b)=>true
// Number.parseInt(true)=>0
// [2,1][1]

// let a = [1,2,3,4]
// let value = 3;
// console.log(a.includes(2))
// a.push(5)
// console.log(a)

// // array :- push(), pul(), includes()

// let c = ''  
// console.log(typeof(c))

// let f = function ar(){
//     console.log("jash")
// }
// f()
// console.log(f.name)

// let expression = '8+9'
// try{
//     const result = Function('return ' + expression)();
//     return result.toString()
// }
// catch{

// }
// console.log(result)

// function main(){
//     console.log('1')

//     setTimeout(() => {
//         console.log('2')

//         setTimeout(() => {
//             console.log('5')
//         })
//         new Promise(function (r){
//             console.log('6')
//             r()
//         }).then((d) => {console.log(d)})
//     })
// }    
// console.log('3')

// main()

// let a = "jash"
// console.log(a.slice(0, 2))

// let str = "stringify";
// console.log( str.slice(0, 5) );
// console.log( str.slice(-2, -1) );

// let i = '90' 
// let angle = parseFloat(i)
// console.log(angle)

// if (value === '+/-') {
//     let currentNumber = parseFloat(currentInput);

//     if (!isNaN(currentNumber)) {
//         currentInput = (currentNumber * -1).toString();  // Toggle the sign
//         display.value = currentInput;  // Update the display with result
//     } else {
//         alert('Please enter a valid number first.');
//     }
// }

// let expression = '25346'
// const result = Function('return ' + expression)();
// console.log(result)

// let name = 'john'
// let str = `Hello ${name}`
// console.log(str)

// let str2 = 'Hello ' + name;
// console.log(str2)

// let a = expression.split('5')
// console.log(a)

let input = '5abc'; 
const num = parseInt(input)
if(isNaN(num) || num < 0){
    console.log('error')
}   
else{
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    console.log(fact)
}