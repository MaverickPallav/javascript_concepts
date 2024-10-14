// <------ Example 1 ------>

// A global Execution context is created and pushed inside the call stack

function a() { // a will be allocated memory and this function will be stored
    console.log("a")
} // after a execution is over the execution context of a is popped off the call stack

a() // A new execution context is created to execute the code of a and pushed inside the call stack
console.log("End")
// now global execution context is also popped off the call stack

// <------ Example 1 ------>

// WEB APis
// * set Timeout ().
// * DOM APIS
// * fetchc)
// * local Storage
// * console
// * Location

// these are not part of javascript , they are provided by the browser to the javascript engine

// Global Object is the window in case of Browser
// Browser gives javascript engine the facility to use the web apis through window keyword
// window.SetTimeout
// window.localStorage
// window.console.log

// the window is global object and setTimeout , localStorage, console are all present in the global scope
// we can access without the window keyword

// <------ Example 2 ------>
console.log("Start")

setTimeout(function cb(){ // registers a callback function and starts the Timer
    console.log("Callback")
}, 5000)

console.log("End")

// --------- Print Statements ---------
// Start
// End
// Callback
// --------- Print Statements ---------

// Callback function cannot directly go into the callstack it goes into the call stack throughh callback queue

// After the Timer Expiration the callback function moves inside the callback queue
// The Event Loop Checks whether is there something in the callback queue or not , if present it pushes it in the call stack
// <------ Example 2 ------>

// <------ Example 3 ------>
console.log("Start")

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback")
}) // addEventListener also registers a callback and attaches a click event to it
// the event listener stays in the web api untill the listener is removed or we close the browser
// When the user clicks the button the callback is pushed inside the callback queue and the event loop then pushes it into the callstack

console.log("End")

// Event Loops job is to continuosly monitor the callstack and the callback queue
// If the call stack is empty and theer is something in the callback queue the event loop pushes the callback queue item into the callstack

// if the users click the btn multiple times, so we need a queue for the callbacks to be executed 1 by 1
// <------ Example 3 ------>

// <----- Example 4 ------>
console.log("Start")

setTimeout(function cbT(){
    console.log("CB setTimeout")
}, 5000)

fetch("https://api.netflix.com").then(function cbF() { // after getting data from netflix the callback function is registered inside the microTask queue
    console.log("CB Netflix")
})

console.log("End")

// The microtask queue is similar to callback queue but it has a higher priority in execution
// fetch callback function is queued inside microtask queue

// callstack = [GEC]
// microtask_queue = [cbF]
// callback_queue = [cbT]

// ------- Print Statements --------
// "Start"
// "End"
// CB Netflix - Due to higher priority of microtask_queue
// CB setTimeout
// ------- Print Statements --------
// <----- Example 4 ------>

// All the callback functions which comes from promises will come inside microtask queue
// Mutation Observer (Read More) - check whethers there is some changes in the DOM tree or not , if there it generates some callbacks which goes inside the microtaskqueue
// Rest callbacks goes into callback Queue (Task queue)

// Event loop will only execute callback queue task once all the task inside the microtask queue is executed

// If the microtask inside the queue creates more microtask in itself then the callback queue will never gets a chance to execute - Starvation of Task inside Callback Queue (Read More)

// Extra Questions

// 1. When does the event loop actually start? - 
//Ans: Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️

// 2.  Are only asynchronous web API callbacks are registered in the web API environment? - 
//Ans: YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.

// 3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - 
//Ans: Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

// 4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
//Ans: No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.