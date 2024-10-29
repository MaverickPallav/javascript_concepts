// * What is async ?
    // async function always return a promise

    async function getData(){
        return new Promise((resolve, reject) => { // here the return value is already a promise so it will not wrap inside a promise
            resolve("Done")
        })
    }

    async function getData1(){
        return "Done" // here this return will be wrapped inside a promise then returned
    }

    const dataPromise = getData() // here the promise is in pending state
    console.log(dataPromise)
    // Promise { <pending> }

    dataPromise.then((res) => {
        console.log(res)
    })  

    const dataPromise1 = getData1() // here the promise is resolved immediately
    console.log(dataPromise1)
    // Promise { 'Done' }

    dataPromise1.then((res) => {
        console.log(res)
    })  

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value")
})

// * What is await ?
    // async and await combo is used to handle promises

    // How do we use to handle promises before async await?
        function getData3(){
            p.then((res) => {
                console.log(res)
            })
        }

        getData3()

    // how do we handle this using async await ?

    async function handlePromise() {
        const val = await p // use await in front of the promise and it resolves the promise
        console.log(val)
    }

    handlePromise()

    // await is a keyword that can be only used inside a async function

// * How async await works behind the scenes?
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 Resolved Value")
    }, 5000)   
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 Resolved Value")
    }, 10000)   
})

// function getData4() {
//     p1.then((res) => console.log(res))
//     console.log("Namaster Javascript")
// }

// getData4()
// // Namaste JavaScript (here it is printed immediately)
// // Promise Resolved Value!!

// async function handlePromise1() {
//     console.log("Hello World")
//     const val1 = await p1
//     console.log("Namaste Javascript")
//     console.log(val1)
// }

// handlePromise1()

// Hello World!!
// (here the program waited for promise to be resolved)
// Namaste JavaScript 
// Promise Resolved Value!!

// async function handlePromise2() {
//     console.log("Hello World")
//     const val1 = await p1
//     console.log("Namaste Javascript")
//     console.log(val1)

//     const val2 = await p1
//     console.log("Namaste Javascript 2")
//     console.log(val2)
// }

// handlePromise2()

// Hello World
// Namaste Javascript
// Promise Resolved Value
// Namaste Javascript 2
// Promise Resolved Value


async function handlePromise2() {
    console.log("Hello World")
    const val1 = await p1
    console.log("Namaste Javascript")
    console.log(val1)

    const val2 = await p2
    console.log("Namaste Javascript 2")
    console.log(val2)
}

handlePromise2()

// Example 1
// call stack
// async p1(takes 5 sec to resolve), p2(takes 10 sec to resolve)

// Empty (call stack)
// handlePromise() (enters call stack)
// "Hello World" printed
// encounters await p1 and handlePromise() leaves callStack, it will not block the main thread, it will wait for p1 to be resolved
// After 5 sec, hanldePromise() will again come into callstack, and start executing code from where it left
// Namaste Javascript, and val1 is printed
// encounter await p2 and handlePromise() leaves callStack, it will not block the main thread, it will wait for p2 to be resolved
// After 5 sec, hanldePromise() will again come into callstack, and start executing code from where it left
// Namaste Javascript, and val2 is printed

// Javascript Engine is not waiting (the main thread is not blocked), suspend the execution and conitnue once the promise is resolved

// Example 2
// call stack
// async p1(takes 10sec to resolve), p2(takes 5 sec to resolve)

// Empty(call stack)
// handlePromise() (enters call stack)
// "Hello World" printed
// encounters await p1 and handlePromise() leaves callStack, it will not block the main thread, it will wait for p1 to be resolved
// after 10 sec, hanldePromise() will again come into callstack, and start executing code from where it left
// Namaste Javascript, and val1 is printed
// encounter await p1 and handlePromise() leaves callStack, it will not block the main thread, p2 here is already resolved so no waiting
// hanldePromise() will again come into callstack, and start executing code from where it left
// Namaste Javascript, and val2 is printed

// Function execution is suspended

// Hello World
// Namaste Javascript
// Promise1 Resolved Value
// Namaste Javascript 2
// Promise2 Resolved Value



// * Examples of using async/await using fetch
const API_URL = "https://api.github.com/users/MaverickPallav"

async function handlePromise3(){
    const data = await fetch(API_URL)
    const jsonValue = await data.json()
    console.log(jsonValue)

    // fetch() => Promise when resolve gives Response (a readable stream) => Response.json() (again a promise when resolve) => result
}

handlePromise3()

// fetch().then((res) => res.json()).then((value) => console.log(value))

// * Error Handling
// try and catch for error handling

const WRONG_API_URL = "htt://api.github.com/users/MaverickPallav"

async function handlePromise4(){
    try{
        const data = await fetch(WRONG_API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue)
    }catch(err) {
        console.log(err.message)
    }
}

handlePromise4()

async function handlePromise5(){
    const data = await fetch(WRONG_API_URL)
    const jsonValue = await data.json()
    console.log(jsonValue)
}

handlePromise5().catch((err) => { // older way of hanlding errors
    console.log(err.message)
})

// * Interviews
// Q. what is async await ?
// Ans: async keyword is used with a function and async functions are a differnt thing
// await are only used in async function to handle promises

// * Async await vs Promise.then/.catch