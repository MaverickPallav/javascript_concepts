var x = 1

a() // we can invoke the functions before intialization as the functions are hoisted
b()

console.log(x) // looks for x inside the local memory (global execution context)

function a() {
    var x = 10
    console.log(x) // looks for x inside the local memory (execution context of a)
}

function b() {
    var x = 100
    console.log(x) // looks for x inside the local memory (execution context of b)
}

// Global execution Context

// Memory (variable environement)           // code
// x = undefined --> 1                          var x = 1 , x = 1 (replaced undefined)
// a = function() (exact function code)
// b = function() (exact function code)

// a execution context (when the code is invoked execution context is created, pushed into the call stack)

// Memory                                   // code
// x = undefined --> 10                         var x = 10

// a execution context is deleted after the function is work is completed

// b execution context (when the code is invoked execution context is created, pushed into the call stack)

// Memory                                   // code
// x = undefined --> 100                        var x = 100

// b execution context is deleted after the function is work is completed

// global execution context is deleted after the code is completed and popped from call stack


// Call Stack

// append (GEC)
// append(a) (as soon as function a is invoked)
// pop(a)
// append(b) (as soon as function b is invoked)
// pop(b)
// pop(GEC)

// Console log

// 10
// 100
// 1