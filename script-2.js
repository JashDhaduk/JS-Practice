console.log("Jash")

// Loops in JS :
// for   for-in   for-of   while   do-while


// for loop :
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
// exp-1 : initialize (one-time) (optional if we already initialize outside loop)
// exp-2 : condition (optional but, apply break in loop to avoid infinite execution)
// exp-3 : After block of code (every-time) (optional if we define inside loop)

for (let i = 0; i < 100; i++) {
    console.log(i);
}

let j = 0;
for (; j < 10; j++) {
    console.log(j);
}

let k = 0;
for (; k < 10; ) {
    console.log(k);
    k++;
}

// for-in loop
// for (key in object) {
//     // code block to be executed
//   }
// For-in loops is used to through the properties of object.

let x = {
    name : "Jash",
    role : "Dveloper",
    age : "23"
}

for (const key in x) {
    {
        const element = x[key];
        console.log(key, element);
    }
}

for (const key in x) {
    {
        const element = x[key];
        console.log(key);
    }
}

// for-of loop
// for (variable of iterable) {
//     // code block to be executed
//   }
// Used for arrays, strings, Maps

for (const c of "Jash") {
    console.log(c)
}

// while loop
// While loops go through the block of code until the condition is true

let i=0;
while (i<5) {
    console.log(i);
    i++;
}

// do-while loop
// run atleast once before check the condition

let a=10;
do {
    console.log(a)
} 
while (a<6);


// break : Jumps out of loop when meet certain condition
for (let y = 0; y < 10; y++) {
    // const element = [y];
    console.log(y);
    if (y == 3) {
        break;
    }
}

// continue : Jumps out of loop for that iteration only when it find continue; before continue it will execute and after code is skipped
for (let z = 0; z < 10; z++) {
    // const element = [y];
    // console.log(z);
    if (z == 3) {
        continue;
    }
    console.log(z);
}

// function : A block of code or logic we have use many times for different variables
// It has parameters and provide with arguments when it was invoke

function nice(name) {  // function declare & define
    console.log("hey " + name);
}
nice("Jash");  // function call

// with return value
function sum(x, y) {    // function declare & define
    let z = x + y;      // x,y - parameters
    return z;
}

let a1 = sum(4, 5); // function call
a2 = sum(5, 6);     // 4,5 - arguments
a3 = sum(9, 6);
console.log(a1, a2, a3);

// function with different arguments
function add(p, q, r=3) {
    return p + q + r;
}
b1 = add(2);
b2 = add(3,4);
b3 = add(3,4,5);
console.log(b1, b2, b3);

// Arrow function
// It is consider as variable by JS engine or we can define fun inside variable
const fun1 = (d) => {
    console.log("I am an Arrow function", d)
}
fun1(34);
fun1(67);