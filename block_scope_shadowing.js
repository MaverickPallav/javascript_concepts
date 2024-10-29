// Block
{
    // this is a block
    // Compound statement

    // combining mulitple javascript statements into a group

}

// if(true) this gives syntax error as it requires statement after it

// if(true) true this is valid as we have provided a single statement which is true

// but if we want to give multiple statements we have to write it in a block

if(true){
    var a = 10
    console.log(a)
}

// Block Scope
// variables and functions which can be accessed inside a block

{
    var a = 10 // global scoped
    let b = 20 // block scoped
    const c = 30 // block scoped
}

// let and const are stored in a seperate memory space which is reserved for the block
// the memory is released when the work of block is finished

// Shadowing in javascript

var d = 100 // in the global scope
let e = 100 // in the script scope
const f = 100 // in the script scope
{
    var d = 10 // this shadows the global d var, value of 100 is changed to 10
    console.log(d) // 10
    let e = 20
    console.log(e) // 20, let is blocked scope for the value is only modified within the block
    const f = 30
    console.log(f) // 30
}

console.log(d) // 10
console.log(e) // 100
console.log(f) // 100

const c = 100
function x() {
    const c = 30
    console.log(c) // 30
}
x()
console.log(c) // 100

// Illegal Shadowing

let a = 20

{
    var a = 20 // cannot shadow a let variable inside a block using var
}

// Legal Shadowing

var a = 20

{
    let a = 20
}

// Lexical Scope

const a = 20

{
    const a = 100
    {
        const a = 200
        console.log(a) // finds the nearest a first // 200
    }
    console.log(a) // 100
}
console.log(a) // 20


const z = 20

{
    const z = 100
    {
        console.log(z) // finds the nearest a first // 100 // will find in above lexical scope
    }
    console.log(z) // 100
}
console.log(z) // 20