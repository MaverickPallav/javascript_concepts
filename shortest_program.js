// empty file is the shortest javascript program

// only a global execution context is created and memory space is also created
// in browser, window object is created

// js engine also creates a this keyword (global object in case of browser is window, so this refers to window in case of browser)

// At the global level this === window (for browsers)

// this is created for the functional execution context and the global execution context

// Global Space = any code we write inside the javascript which is not inside a function

var a = 10
function b(){
    var x = 10
}

console.log(window.a)
console.log(a) // we dont put anything in front of a it means we are referring to global space

console.log(this.a)