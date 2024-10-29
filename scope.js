function a() {
    console.log(b) // it will try to find b inside a`s memory space, so it will find b from its lexical environment which is global here and it gets b = 10
}

var b = 10
a()


function x(){
    function y() {
        console.log(c) // it will keep on finding the c in its lexical scope going from scope of y to scope of x to global scope
    }
    y()
}
var c = 10
x()

// Scope is where you can access a specific variable or a function in our code

// 1. what is the scope of the variable b
// 2. is b inside the scope of function c

// Lexical Environment is the local memory along with the lexical environment of its parents

// y has the lexical enivronment of its parent x
// x has the lexical environment of its parent global
// global has the lexical environtment of its parent which points to null

// scope chain all the scope and lexical parent environments

// whole chain of lexical environment is known as scope chain

// lexical environment is created whenever the execution context is created
// lexical environtment is the local memory + lexical environment of the parent
