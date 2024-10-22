const cart = ["pants", "shoes"]

// Callback Way
createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})
// the whole control is in the hand of CreateOrder Api to first execute and generate orderId and then use that orderId in the callback function to execute the proceedToPayment api 


// Promise way
const promise = createOrder(cart)

// returns a promise which is a empty object initially {data: undefined}, program will go on executing, and later after api is completed the object will be filled with data 

promise.then(function (orderId) {
    proceedToPayment(orderId)
})
// Attaching a callback function to a promise object
// this callback function will be called when the promise object is filled with data
// this then will always call the callback function and will only be called once (guaranteed by javascript)

const GITHUB_API = "https://api.github.com/users/MaverickPallav"
const user = fetch(GITHUB_API) // fetch returns a promise

console.log(user) // promise in pending state
// inside log is in pending state
// But google chrome after some time inside the promise object shows the current state of the promise

// before the data is filled
// user: Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// After the data is filled
// • Promise {<pending>} // when logged showing pending but inisde the object is replace with the data we got from github
// • [[Prototype]]: Promise
// [ [PromiseState]]: "fulfilled"
// • [[PromiseResult]]: Response
// body: (...)
// bodyUsed: false
// > headers: Headers 1
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://api.github.com/users/MaverickPallav"
// • [[Prototype]]: Response

user.then(function(data) {
    console.log(data)
})

// 3 states inside the promise
// pending
// fulfilled 
// rejected

// Promise objects are immutable
// object cannot be edited

// Interviews
// Q. What is a promise ?
// Ans: A promise is an object that represents eventual completion/failure of an asynchronous operation.

// Callback Hell
createOrder(cart, function () {
    proceedToPayment(function () {
        showOrderSummary(function () {
            updateWallet()
        })
    })
})

// Promise Chaining
const promise1 = createOrder(cart)

promise1
.then(function(orderId) {
    return proceedToPayment(orderId) // returning is important if you want to flow the data into the next then
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo)
})
.then(function(walletId){
    return updateWallet(paymentInfo)
})

createOrder(cart)
.then ((orderId) => proceedToPayment (orderId))
.then ((paymentInfo) => showOrderSummary (paymentInfo))
.then ((paymentInfo) => updateWalletBalance (paymentInfo));


// Keypoints

// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

