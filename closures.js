//closure is a function bind to its lexical environment
//function along with its lexical scope bundled together forms a closure

// <------- Example 1 ------->
function x() {
    var a = 7

    function y(){
        console.log(a)
    }
    y()
    // y tries to find a inside the local scope of the function
    // then if does not find it goes to the lexical parent

    // function y is bound to the variables of x
}
x()
// <------- Example 1 ------->

// <------- Example 2 ------->
function x1 () {
    var a = 7
    function y(){
        console.log(a)
    }
    return y
}

var a = 8

var y1 = x1()
console.log(y1)
y1()
console.log(a)

//functions when returned from another function still maintains there lexical scope
// closure along with its lexical scope is returned
// <------- Example 2 ------->

// <------- Example 3 ------->
function x2 () {
    var a = 7
    function y(){
        console.log(a)
    }
    a = 100
    return y
}

var y2 = x2()
y2()

// when the function is returned it is returned with the reference of the variables from its lexical scope
// a refrences now points to 100
// <------- Example 3 ------->

// <------- Example 4 ------->
function z(){
    var b = 900
    function x() {
        var a = 7
        function y(){
            console.log(a, b)
        }
        y()
    }
    x()
}
z()

// y forms a closure with x lexical scope (a = 7) and y forms a closure with z lexical scope(b = 900)
// so the variables which are being maintained with a closure are not garbage collected even if the parent function is out of execution context
// <------- Example 4 ------->

//  Uses of Closures:
// - Module Design Pattere
// - Currying
// - Functions like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators

//Important Interview Questions

// <------- Example 5 ------->
function x3() {
    var i = 1
    setTimeout(function (){
        console.log(`${i} Namaste Javascript`)
    }, 3000) // function forms a closure and remembers the reference to i
    console.log("Namaste Javascript")
}
x3()

// here the event loop concepts comes so first the Namaste Javascript will print
// and the expired callback event runs which is SetTimeout console log
// <------- Example 5 ------->

// <------- Example 6 ------->
function x4() {
    for(var i = 0; i <= 5; i++){
        setTimeout(function() {
            console.log(`${i} Namaste Javascript 2`)
        }, i * 1000) // 6 copy of function remembers the reference to same i
    }
    
    console.log("Namaste Javascript 2")
}
x4()

// javascript will keep storing the setTimeout function for latest run till then the loop 
// would have finished running and the latest values of i = 6 now , so the memory location of i = 6
// thats why all the console.log will print(6)
// <------- Example 6 ------->

// <------- Example 7 ------->
function x5() {
    for(let i = 0; i <= 5; i++){
        setTimeout(function() {
            console.log(`${i} Namaste Javascript 3`)
        }, i * 1000) // each copy of i will form a closure with function
    }
    
    console.log("Namaste Javascript 3")
}
x5()
// let has a block scope, so each iteration has a new copy of i, so each time
// setTimeout is run it has a new copy of i
// <------- Example 7 ------->

// <------- Example 8 ------->
function x6() {
    for(var i = 0; i <= 5; i++){
        function close(d){
            setTimeout(function() {
                console.log(`${d} Namaste Javascript 4`)
            }, d * 1000)
        }
        close(i) // every time we call this function with i it creates a new copy of i
    }
    
    console.log("Namaste Javascript 4")
}
x6()
// <------- Example 8 ------->

// Interview Questions
// Q1 what is closures?
// ans: A function along with reference to its outer environment together forms closure
// In other words closure is a combination of a function with its lexcial scope bundled together
// each function has access to its outer lexical environment , variables and function present in the environment of its parent
// if the function is executed in some other scope not in its original scope will remember the outer lexical enviroment things

// <------- Example 9 ------->
function outer(){
    var a = 10

    function inner(){
        console.log(a)
    }

    return inner // inner form a closure with its lexical scope (remembers the reference to variable a)
}

var func = outer()
func()
// <------- Example 9 ------->

// <------- Example 10 ------->
function outer1(){
    function inner1(){
        console.log(a)
    }
    var a = 10
    return inner1 // inner1 still forms a closure irrespective of variable a declaration
}

var func1 = outer1()
func1()
// <------- Example 10 ------->

// <------- Example 11 ------->
function outer2(){
    function inner2(){
        console.log(a)
    }
    let a = 10
    return inner2 // inner1 still forms a closure if the let a is used 
}

var func2 = outer2()
func2()
// <------- Example 11 ------->

// <------- Example 12 ------->
function outer3(b){
    function inner3(){
        console.log(a, b)
    }
    let a = 10
    return inner3// inner1 forms the closure with its outer environment and b is a part of its outer environment
}

var func3 = outer3("hello world")
func3()
// <------- Example 12 ------->

// <------- Example 13 ------->
function outer5() {
    var c = 20
    function outer4(b){
        function inner4(){
            console.log(a, b, c)
        }
        var a = 10 // if this was commented the console log a would have been defaulted to global variable a
        return inner4 // if inner4 is present inside the a function so it will again form closure with its lexical scope, so the console log will have access to a, b, c
    }
    return outer4
}
var a = 50 // still a = 10 will be printed as the variables reference was copied due to closure and will remember the a inside the function only not the global one
var funcs4 = outer5()
var funcs5 = funcs4("hello world")
funcs5()
// <------- Example 13 ------->

// <------- Example 14 ------->
function outers5() {
    var c = 20
    function outers4(b){
        function inners4(){
            console.log(a, b, c)
        }
        // var a = 10 // the console log been defaulted to global variable a
        return inners4 // if inner4 is present inside the a function so it will again form closure with its lexical scope, so the console log will have access to a, b, c
    }
    return outers4
}
var a = 50
var funcss4 = outers5()
var funcss5 = funcss4("hello world")
funcss5()
// <------- Example 14 ------->

// <------- Example 15 ------->
function outerss5() {
    var c = 20
    function outerss4(b){
        function innerss4(){
            console.log(a, b, c) // no a is defined so the no reference is found its lexical scope even in global so we will have reference error
        }
        // var a = 10 // the console log been defaulted to global variable a
        return innerss4 // if inner4 is present inside the a function so it will again form closure with its lexical scope, so the console log will have access to a, b, c
    }
    return outerss4
}
// var a = 50
var funcsss4 = outerss5()
var funcsss5 = funcsss4("hello world")
funcsss5()
// <------- Example 15 ------->

// Advantages
// 1. used in module pattern
// 2. used in function currying
// 3. Higher order functions like memoize, once
// 4. Data hiding and encapsulation (Having a variable where no other function can change that variable)
// Advantages

// <------- Example 16 ------->
// var counter = 0

// function incrementCounter() {
//     counter++
// }
//major issue with this is any part of the code can change this counter variable
// <------- Example 16 ------->

// <------- Example 17 ------->
// function counters(){
//     var counter = 0 // Now the variable is hidden so no code from outside can change this
//     function incrementCounter1(){
//         counter ++
//     }
//     return incrementCounter1
// }
// console.log(counter) // counter is not defined as it hidden inside the function
// <------- Example 17 ------->


// <------- Example 18 ------->
// function counters(){
//     var counter = 0 // Now the variable is hidden so no code from outside can change this
//     function incrementCounter1(){
//         counter ++
//         console.log(counter)
//     }
//     return incrementCounter1
// }

// var funcccs = counters()
// funcccs()
// <------- Example 18 ------->

// <------- Example 19 ------->
// function counters(){
//     var counter = 0 // Now the variable is hidden so no code from outside can change this
//     function incrementCounter1(){
//         counter ++
//         console.log(counter)
//     }
//     return incrementCounter1
// }

// var funcccs = counters()
// funcccs()
// funcccs()

// var funcccsss = counters() // this will make a fresh counter and create a new counter variable with value 0
// funcccsss()
// <------- Example 19 ------->

// <------- Example 20 ------->
// Better Way to Implement a Counter Functionality
function Counter(){
    var count = 0
    this.incrementCounter = function() {
        count ++
        console.log(count)
    }

    this.decrementCounter = function(){
        count --
        console.log(count)
    }
}

var counter1 = new Counter() //as its a constructor function we will use new here
counter1.incrementCounter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()

// Disadvantages of Closures
// 1. Every time a closure is formed it consumes a lot of memory as the closure variables are not garbage collected till the program expires
// 2. If not handled closures properly it may result in memory leak

// Q2. What is a garbage Collector and What does it Do?
// Ans: It frees up the memory which is no longer required by the code, in Low Level Languages like C C++ its up to us to allocate and deallocate memory
// In high level programming language like javascript all the memory allocation deallocation is handled by the language
// So whenever ther a unused variable which is no longer required Garbage collector frees up the memory

// Q3. How are closures and Garbage Collector Related to Each Other?

// <------- Example 21 ------->
function a() {
    var x = 100000000000000 // this x will not be garbage collected as it is the closure formed by b
    
    return function b(){
        console.log(x)
    }
}

var funcccccccs = a() // Even if a`s work is done here x will not be garbage collected as it is the closure formed by b
funcccccccs()
// <------- Example 21 ------->

// New Chrome V8 engine has a better capabilities of Garbage Collection

// <------- Example 22 ------->
function a(){
    var x = 0, z = 10 // here the x will not be GC but z will be GC (GC: Garbage Collected) as the Garbage Collector knows that even it z and x are in a closure with b but z is not being used
    return function b(){
        console.log(x)
    }
}

var funcccccccss = a()
funcccccccss() 
// <------- Example 22 ------->
