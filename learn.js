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

 console.log(a.c.age)                           // Here refrence is copied object is same
 let clone = Object.assign({}, a)

 a.c.age = 50
 console.log(clone.c.age)
 console.log(a.c === clone.c)

let cl = structuredClone(a);                    // Here brand new object is created
console.log(a.c === cl.c)
a.c.age = 40
console.log(cl.c.age)
