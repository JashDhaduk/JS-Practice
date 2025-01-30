// var x = 1;
// a();
// b();
// console.log(x);

// function a (){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

// let a = 10;
// console.log(a);

// a = "Jash";
// console.log(a);


// function a1() {                              // scope chain
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();
// console.log(b);


// let a = 10;                                  // let & const
// console.log(a);
// var b = 100;

// let a = 3;                                   // block, scope and shadowing
// if(a>2) console.log(a)

// var a = 100;
// {    
//     var a = 10;              
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);


// a();
// b();

// function statement and function declaration
// function a(){
//     console.log("Jash");
// }
// a();

// function expression
// var b = function (){
//     console.log("Jash");    
// }
// b();

// diff b/w state and exp is hoisting

// Anonymous function
// function (){

// }
// It is used when functions are used as values

// Named function expression
// var c = function x(){
//     console.log(x);
// }
// c();

// first class function : the ability of function to be used as values and can be passed as argument to another fun and can be return as fun 
// passing another function inside a function as an argument and also we can return a function back at function call is possible in JS

// var d = function (param1){
//     return function x(){

//     }
// }
// console.log(d());



// callback function : so in first class function when a function is passed to another function then that function is call back fun
// due to call back we can able to do async thing

// setTimeout(function (){
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){         // Here y() is call back function
//     console.log("y");
// })

// blocking the main thread
// everything in JS is executed in main thread.


// document.getElementById("clickMe")
// .addEventListener("click", function x(){
//     console.log("button click");
// });


// Higher order function : A function which takes the function as an argument or return the function is HOF
// function x() {
//     console.log("Jash");
// }

// function y(x){
//     x();
// }
// y();

// const radius = [1, 2, 3, 4];                                    // first-class function, higher order function, call-back function, anonymous function

// const area = function(radius){
//     const result = [];
//     for (let i = 0; i < radius.length; i++) {
//         result.push(Math.PI * radius[i]);
//     }
//     return result;
// }
// console.log(area(radius));

// map() - Tranform an array as per particular logic
// filter() - filter value or find value from array as per provided logic
// reduce() - takes all element and come up with single value 
// const arr = [10, 20, 30, 40];

// function double(x) {
//     return x.toString(16);
// }
// const output = arr.map(double);
// console.log(output);     

// function logic(max, curr) {
//     if(curr > max){
//         max = curr;
//     }
//     return max
// }
// const output = arr.reduce(logic, 0)
// console.log(output)

// const users = [
//     {firstname : "J", age : 38},
//     {firstname : "A", age : 18},
//     {firstname : "S", age : 58},
//     {firstname : "H", age : 8}
// ]

// const output = users.filter(function (x){           // chaining of multiple function
//    return x.age < 20;
// }) .map(function (x){
//     return x.firstname
// })

// console.log(output)

// Event loop : It continuosly monitor the call stack and once it is empty it pushes task from call-back queue
// call back queue : It is queue of where task are waiting for execution in particular order
// web API : Protocols allows applications to communicate with each other over web
// Microtask queue : call-back function in case of promises with higher priority over call-back queue

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
//   };
  
//   let json = JSON.stringify(student);
  
//   alert(typeof json); // we've got a string!
  
//   alert(json);

// try {
//     lalala; // error, variable is not defined!
//   } catch (err) {
//     alert(err.name); // ReferenceError
//     alert(err.message); // lalala is not defined
//     alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
//     // Can also show an error as a whole
//     // The error is converted to string as "name: message"
//     alert(err); // ReferenceError: lalala is not defined
//   }

// let p = document.querySelectorAll('p')
// alert(p.innerHTML)


// function cook(callback){
//     console.log("cooking")
//     setTimeout(() => {
//         callback();
//         console.log("ready")
//         // callback();
//     }, 2000)
// }

// cook(() => {
//     console.log("Eat")
// })
// console.log("else")


// const cook = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("food")
//     }, 3000);
// })
// cook.then((message) => {
//     console.log(message);
//     console.log("eat")
// })

// function fetch(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data");
//             resolve("success")
//         });
//     })
// }

// fetch()
// .then((message) => {
//     console.log(message)
//     console.log("next")
// })
// .catch((error) => {
//     console.log("error", error)
// })

function reverseNum(num){

    let revNum=0;

    while(num){

        let lastDigit=num%10;
        num=Math.floor(num/10);
        revNum=(revNum*10)+lastDigit

    }

    return revNum;

}
console.log(reverseNum(123));
