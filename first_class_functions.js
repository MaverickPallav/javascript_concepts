// Q. WHat is a anonymous function?
// Ans: A function without a name is anonymous function

// Q. What is First Class Function?

// Q. What is Function Statement vs Function Expression vs Function Declaration ?

// <---- Function Statement ---->
function a(){
    console.log("a called")
}
a()
// the way this function is written is called Function Statement

// <---- Function Expression ---->
var b = function (){
    console.log("b called")
}
b()
// function acts as a value
// the way of extracting function as a value is called Function Expression

// The Difference between Func Statement and Func Expression is in the Hoisting phase
// in hoisting phase a is created a memory and the function is assigned to a, but this b is treated like any
// other variable so it will be assigned undefined initially until the code hits the line 16

// a() this will run fine as the function is hoisted
// b() this will not run as the function is a value and till the line hits 33 b is assigned as undefined, so we will not be able to call b
// function a(){
//     console.log("a called")
// }

// var b = function (){
//     console.log("b called")
// }

// <---- Function Declaration ---->
// Function Statement is also knwo as the Function Declaration

// <---- Anonymous Function ---->
// anonymous function does not have its own identity
// function (){

// }
// this is a invalid syntax as according to ECMA script the function statement should have a name

// Anonymous function are used in a place where function is used as a value
// anonymous function in Function Expression

// <---- Named Function Expression ---->
var b1 = function xyz(){ // giving this function name is known as Named Function Expression
    console.log("b1 called")
}
b1()

// xyx() this gives a reference error not defined
// xyz is not created in outer scope it is created inside a local scope

var b2 = function xyz(){
    console.log(xyz) // we can access xyz inside as it is local but not in global Scope
}

// <---- Difference between Parameters & Arguments ? ---->

var b3 = function (param1, param2){ // param1 and param2 are parameters of the function
    console.log("b3 called")
}
b3(1, 2) // 1 and 2 are arguements

// <---- First Class Functions ---->
var b4 = function (param1){
    console.log("b4 called")
    return function(){

    }
}
function xyz1(){

}
b4(xyz1)

// Ability to use functions as values, can pass function as arguement and can return a function from a function is known as first class function

//Functions are First class Citizens is same as First Class Functions
// Same Let and const rules are applied here also
