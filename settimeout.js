// A SetTimeout with 5000ms seconds delay may not wait for 5 seconds it takes more time

// The Execution of SetTimeout depends upon the callstack if the callstack is occupied even after 5 sec then the SetTimeout will take more time

// <----- Example 1 ------>
// console.log("start")

// setTimeout(function cb(){
//     console.log("Callback")
// }, 5000)

// console.log("end")
// <----- Example 1 ------>

// Global Execution Context is Put into the CallStack
// start is printed
// cb (callback function) is registered into web api environement
// Timer of 5000 ms is started
// end is printed
// after 5000ms the cb function is put into callback queue waiting to be picked up by call stack (event loop constantly checks this)
// GEC finishes
// As the call stack is empty the callback queue item is pushed into the callstack to be executed
// callback is printed

// <----- Example 2 ------>
console.log("start")

setTimeout(function cb(){
    console.log("Callback")
}, 5000)

console.log("end")

// Blocking the main thread for 10 secs
let startDate = new Date().getTime()
let endDate = startDate
while(endDate < startDate + 10000) {
    endDate = new Date().getTime()
}

console.log("While Expires")
// <----- Example 2 ------>


// <----- Example 3 ------>
console.log("start")

setTimeout(function cb(){
    console.log("Callback")
}, 0)
// To defer some piece of code (Not execute the code immediately), this piece of code is not that important than other piece of code

console.log("end")
// <----- Example 3 ------>

// Start
// End
// Callback
// SetTimeout with 0 delay will just place the cb func inside the callback queue immediately, but execution will still depend upon the callstack