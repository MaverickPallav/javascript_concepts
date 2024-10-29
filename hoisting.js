getName() // function is hoisted and assigned function code to it
console.log(x) // x is hoisted and assigned undefined to it

var x = 7

function getName(){
    console.log("Namaste Javascript")
}

// Execution Context is Created

// Two Phases
// 1. Memory Phase
    // 1. javascript skims the code and allocates memory to variables and function
    // 2. variables -> undefined
    // 3. function -> whole function code

// 2. Code Phase
    // 1. values are assigned once the code reaches a the variable assignment line
    // 2. new execution context is created and added to callstack when function call line is reached
    // 3. the same process continues for the new execution context
    // 4. once the function work is done, the func execution context is deleted

getName1() // in hoisting phase getName1 is treated as variable and assigned undefined to it, so we cannot call this function
var getName1 = () => { 
    console.log("h")
}

getName3() // in hoisting phase getName3 is treated as variable and assigned undefined to it, so we cannot call this function
var getName3 = function(){

}