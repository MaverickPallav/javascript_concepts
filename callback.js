// <----- What is a Callback Function in JavaScript ----->
// The function which you pass into another function is known as the callback function
// Callback function gives ous access to the asynchronus world in a synchronus single threaded language

const { application } = require("express")

setTimeout(function () {
    console.log("Timer")
}, 5000) // the callback function is stored and a timer of 5000 ms is set to execute later
// The code does not wait here for 5000ms

function x(callback){
    console.log("x")
    callback()
}

x(function y(){ //y is the callback function
    console.log("y")
})

// <----- JavaScript is a synchronous and single-threaded language ----->
// <----- Blocking the main thread ----->
// Do big task which takes more time in async so that it does not block the main thread
// <----- Power of Callbacks? ----->

// <----- Deep about Event listeners ----->
// document.getElementById("clickMe").addEventListener("click", function (){
//     console.log("Button Clicked")
// })

// <----- Closures Demo with Event Listeners ----->
// let count = 0
// document.getElementById("clickMe").addEventListener("click", function (){
//     console.log("Button Clicked" count++)
// })
// Using a Global Variable for count is not a good Idea

function attackEventListeners() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function (){
        console.log("Button Clicked", ++count)
    })
} // the callback function forms a closure with count variable
attackEventListeners()

// <----- Scope Demo with Event listeners ----->

// <----- Garbage Collection & removeEventListeners ----->
// Event Listners are heavy, they take memory, they cannot be freed up as the they can be used anytime like Click Me Button
// If we remove the Event Listner all the variables which are held by it will be garbage collected

// Callbacks are important while writing async code in javascript 

// Callback of Hell(Example)
// const cart = ["shoes", "pants", "kurta"]

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         })
//     })
// })

// if the apis are dependent on each other we end up falling into callback hell, pyramid of Doom (because of shape of pyramid)
// Code starts to grow horizontally not vertically

// Inversion of Control(Example)

// Lose the control over code when using callbacks
// We are giving control of proceedToPayment Api to CreateOrder Api, we are blindly trusting it, so there could be a lot of bugs in CreateOrder Api
// We dont the function we gave control to will ever execute our callback or not
