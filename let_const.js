// let and const declarations are hoisted

// let and const declarations lie in the temporal dead zone

console.log(b) // hoisted and will be assigned undefined
// console.log(a) // hoisted but stored in a different memory space (script) and cannot access it from this memory space before declaring value

// in script scope (a = undefined)
// in global scope (b = undefined)

let a = 10 // In script scope (a = 10)
console.log(a) //
var b = 100 // In global scope (b = 100)

// b is attached to the window(global) object

// a is not attached to the window(global) object

// temporal dead zone
// Time between the let variable is hoisted and till it is declared value

console.log(d) // this is hoisted, assigned memory in a seperate space and it was also assigned undefined but it is unitialized so this phase is known as temporal dead zone 

let d = 10 // temporal dead zone ends here // anything before this was the temporal dead zone for d

console.log(x) // will give reference error as x is being not found in the current zone


let e = 10

// this is fine
let m
m = 10

// let e = 100 no redeclaration allowed, duplicate declaration not allowed
// var e = 100 same error

var k = 100
var k = 200

const b = 1000
// const b = 100 no redeclaration allowed, duplicate declaration not allowed
console.log(b)

// this is not allowed in const
// const n // const is meant to be initialized here only
// n = 10

// TypeError 
// error when assingning value again to a const variable (const type)
const y = 1000
y = 100

// Syntax Error
// if const keyword it expects intialization of the variable

// Example 1
// const q

// Example2 
// duplicate declaration
// let r = 100
// let r = 1000

// Reference Error
// Occurs when javascript tries to find the variable in the memory space but cannot find it

// Example 1
console.log(ad) // cannot find ad

// Exampe 2
console.log(ab) // ab is in temporal dead zone
let ab = 10

// to avoid temporal dead zone
// Keep the decalaration and initialization on the top level
// Shrinking the temporal deadzone window to 0