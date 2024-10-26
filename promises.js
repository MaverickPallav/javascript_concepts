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


// Create Own Promise

const cart1 = ["shoes", "pants", "kurta"]

createOrder(cart1)
.then(function (orderId){
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){ // attaching the failure callback function to the promise object
    console.log(err.message)
})

createOrder(cart1)
.then(function (orderId){
    console.log(orderId)
    return orderId
})
.catch(function(err){ // now this catch will only show errors which happened on the top and the chain will continue
    console.log(err.message)
})
.then(function(orderId){ // this then method will be called after the catch
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})


function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if (!validateCart(cart)){
            const err = new Error('Cart is not valid')
            reject(err)
        }
        
        const orderId = "1234"

        if(orderId){
            setTimeout(() => {
                resolve(orderId)
            },5000)   
        }
    })

    return pr
}

function validateCart(cart){
    return true
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        // const err = new Error('Payment Unsuccessfull')
        // reject(err)

        resolve("Payment Successful")
    })
}


// 1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument. 
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.

// const cart = ['shoes', 'pants', 'kurta'];

// createOrder(cart)
//   .then(function(orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function(orderID) {
//     return proceedToPayment(orderID)
//   })
//   .then(function({ message, amt }) {
//     console.log(message, 'of amount:', amt);
//     return showOrderSummary(message, amt);
//   })
//   .then(function({ message, amt }) {
//     console.log('Your wallet has beed debited by:', amt);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   })
//   .then(function() {
//     console.log('No matter what happens, I will get executed');
//   });



// function createOrder(cart) {
//   const pr = new Promise(function(resolve, reject) {
//     // create order
//     // Validate Cart
//     // orderId
//     if (!validateCart(cart)) {
//       const err = new Error('Cart is not valid!');
//       reject(err);
//     }
//     // logic for createOrder
//     const orderId = '12345';
//     if (orderId) {
//       setTimeout(function() {
//         resolve(orderId);
//       }, 5000)
//     }
//   });

//   return pr;
// }

// function proceedToPayment(orderID) {
//   // Logic for handling payment.
//   // This function returns a promise
//   return new Promise(function(resolve, reject) {
//     // logic
//     resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
//   })
// }

// function showOrderSummary(paymentInfo, amt) {
//   return new Promise(function(resolve, reject) {
//     // console.log(amt);
//     if (amt >= 2000) {
//       resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
//     } else {
//       reject(new Error('Please buy more for discount'));
//     }
//   })
// }

// function validateCart(cart) {
//   // code to validate cart.
//   return true;
//   // return false;
// }

// Promise APIS

// Promise.all()
    // Def: if all pass, the result will be after longest api time and in an array
    // if any one fails it fails at that point

    // used to handle multiple promises together
    // it takes iterable as input

    // promise.all([promise1, promise2, promise3])
    // 3 parallel api calls for 3 promises
    // p1 -> 3s success
    // p2 -> 1s success
    // p3 -> 2s success

    // output -> [output1, output2, output3]
    // the time will take the longest time of an api
    // wait for all of them to finish

    // promise.all([promise1, promise2, promise3])
    // p1 -> 3s success
    // p2 -> 1s reject
    // p3 -> 2s success

    // output -> error of p2, as soon as error happened(after 1s)
    // not waiting for all the promises
    // all or none
    // the p1 and p3 will be keep running

    // Fail Fast
    // as any of the promise gets rejected , promise.all will throw an error

// Promise.allSettled()
    // Def: returns the result of the settled promises in array

    // Promise.allSettled([p1, p2, p3])
    // p1 - 3s
    // p2 - 1s
    // p3 - 2s

    // after 3s -> [out1, out2, out3]

    // if p2 gets rejected
    // still wait for all the promises to get settled
    // wait till 3s after -> [out1, err2, out3]

// Promise.race()
    // Def: return the result of first settled promise

    // Promise.race([p1, p2, p3])

    // the promise which will finish first will be the winner

    // after 1s => val2 , value of the first settled promise

    // if p3 fails after 2s

    // after 2s => error will be thrown, return result of first settled promise
    // it will not wait for the others to finish

    // will give you the first result irrespective of success or failure

// Promise.any()
    //Def: returns the first settled success promise

    // Promise.any([p1, p2, p3])

    // it will wait for the first promise to get resolved
    // wait for the first success

    // p2 successful after 1s

    // after 1s => val2

    // if p2 gets rejected, it will wait for a success of another promise

    // p3 success after 2s

    // after 2s => val3

    // what if everything fails
    // after 3 sec
    // return result will be aggregated error
    // [err1, err2, err3]

// Code Examples of Promise APIs

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P1 success")
        reject("P1 Failure")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 success")
        reject("P2 failure")
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 success")
        reject("P3 Failure")
    }, 2000)
})

// Promise.allSettled([p1, p2, p3])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// Promise.all([p1, p2, p3])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// Promise.race([p1, p2, p3])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
    console.log(err.errors)
})

// Keywords

// Settled -> got the result
// Two States for settled
// 1. Resolve (Success) (Fulfilled)
// 2. Reject (Failure) (Rejected)