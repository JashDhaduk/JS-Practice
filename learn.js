// let obj = {
//     name : "Jash",
//     age : 20,
//     "is admin" : true           // multiword name
// }
// console.log(obj.name)
// console.log(obj["is admin"])    // square bracket
// console.log(obj.age) 

// delete obj.age;                 // delete the property
// console.log(obj.age)  

// let key = "like birds"
// obj[key]
// console.log("name" in obj)      // "in" optr

// for (const key in obj) {        // forin loop
//     console.log(key)
// }

// let user = {
//     name : "john",
//     surname : "smith"
// }
// console.log(user.name)

// user.name = "pete"
// console.log(user.name)

// delete user.name
// console.log(user.name)


// function isEmpty(obj){

//     return Object.keys(obj).length === 0

//     for (let key in obj) {
//         return false;
//     }       
//     return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule) );

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule) );


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
//     for (const key in salaries) {   
//         sum += salaries[key];
//     }
//   console.log(sum)

//   let menu = {
//     name : "john",
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// let clone = {};

// for (const key in menu) {
//    clone[key] = menu[key]
// }
// clone.name = "pete"  

// console.log(menu.name)
// console.log(clone.name)

let a = { name : "jash", c : {age : 30}}
let b = {age : 20}
// let c = {permission : true}

// Object.assign( a, b, c)
// console.log(a.name)
// console.log(a.age)
// console.log(a.permission)    

// let clone = Object.assign({}, a)
// console.log(clone.name)
// console.log(clone.age)
// console.log(clone.permission)

//  console.log(a.c.age)                           // Here refrence is copied object is same
//  let clone = Object.assign({}, a)

//  a.c.age = 50
//  console.log(clone.c.age)
//  console.log(a.c === clone.c)

// let cl = structuredClone(a);                    // Here brand new object is created
// console.log(a.c === cl.c)
// a.c.age = 40
// console.log(cl.c.age)



// let obj = {
//     name : "John",
//     age : 20,
//     sayHi : function(){
//         console.log("Hi");
//     },
//     sayhi(){
//         console.log("Hello");
//     }
// }
// obj.sayhi()
// let obj2={};

// obj2.name = "pete"
// console.log(obj.name)

// obj2.age = 40;
// console.log(obj.age)

// Object.assign(obj2, obj)
// obj2.age = 30
// console.log(obj2.age)
// console.log(obj.age)  

// let obj3 = structuredClone(obj)
// obj3.age = 50
// console.log(obj3.age)
// console.log(obj.age)  

// let user = {
//     name : "jash",
//     sayhi(){
//         console.log(user.name)
//     }
// }

// let admin = user;
// // delete user.sayhi()

// admin.sayhi();

// class User{
//     constructor(name){
//         this.name = name;
//     }
// }

// let usr = {
//     constructor(name){
//         this.name = name;
//     }
// }

let mape = new Map();
mape.set('string', 30) 
.set('boolean', true)

let ma = new Map([
    ['string', 30],
    ['boolean', true]
])

console.log(mape)
console.log(ma)

let set = new Set();
set.add('john')
set.add('pete')
console.log(set)

let date = new Date()
console.log(date)

let student = {
    name : "Jash",
    age : 22,
    isAdmin : false
}
console.log(typeof(student))

let json = JSON.stringify(student);
console.log(typeof(json))
console.log(json)


let obj = {
    name : "jash",
    age : 21,
    dept : "MEAN"
}

let obj2 = obj;
Object.defineProperty(obj, 'dept', {
    writable : false,
    configurable : false
})

obj2.name = "pete";
obj2.age = 22;
obj2.dept = "react"
console.log(obj2.name)
console.log(obj2.dept)

delete obj2.dept
console.log(obj2.dept)

Object.seal(obj2)
obj2.isAdmin = true;
console.log(obj2.isAdmin)
console.log(Object.isSealed(obj2))

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // _ is a function declared in the loaded script
  });
