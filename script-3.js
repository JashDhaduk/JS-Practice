// strings are immutable
// we can make changes in string by making it new string but not change to existing one.

let a = "Jash"

// Indexing
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

// properties
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())

// concate
let b = "Dhaduk";
console.log("Name is " + a + b)
console.log(b.concat(a))
console.log(b.concat("Mayank"))

console.log(`Name is ${a} ${b}`) // template literals
console.log(`He's awesome`)      // Back-tics
console.log(`Sum is ${3+5}`)

// Slice
console.log(b.slice(1,4))
console.log(b.slice(1))

// replace
console.log(b.replace("ha","as"))
// If thier is two occurrence are their then 1st will replaced

// other methods : charAt, indexOf



// Array
// Array used to stored multiple values of same types
// arrays are mutable means it can be changed

let arr = [1, 2, 3, 4];
console.log(arr)
console.log(arr.length)
console.log(arr[0])
// console.log(arr[1])

arr[1] = 20        // Proof of mutablility
console.log(arr[1])
console.log(arr[2])

// methods
console.log(typeof(arr)) // object
console.log(arr.toString()) // converts array into string
console.log(arr.join(" and ")) 

// push & pop
console.log(arr.pop())  // return the length of array before pop
console.log(arr.pop())
console.log(arr.push(50)) // return the length of array after push
console.log(arr.push(500))
console.log(arr.push("Jash"))

// shift & unshift
console.log(arr.shift()) // return the value of shift element
console.log(arr.shift())
console.log(arr.unshift(10)) // return the length of updated array
console.log(arr.unshift("ram"))
console.log(arr)