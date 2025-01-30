// let q = obj()
// console.log(typeof(p))

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 3
//     if (a == 2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// p.then((message) => {
//     console.log("then " + message)
// })
// p.catch((message) => {
//     console.log("catch" + message)
// })

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 4
//     // return result * 2;
//   }).catch(function(error) {
//     console.log(error)
//   })

// let a = [1, 2, 7, 4, 5]

// function max(arr){
//     let x = 0;
//     for(let i=0; i<arr.length; i++){
        
//         if(arr[i] > x){
//             x = arr[i]
//         }
          
//     }
//     return x 
// }

// console.log(max(a))

// let s = 'jash'
// for(let i=0; i<s.length; i++){
//     for(let j=(s.length-1); j<s.length; j--){
//         if(i != j){
            
//         }
//     }
// }

let s = 'madam'

function isPalindrome(str) { 

  return str === str.split(”).reverse().join(”); 

}
isPalindrome(s)