// MAP Function
// Converting each value of the arr and returning the new array

const arr = [5, 1, 3, 2, 6]

// Double - [10, 2, 6, 4, 12]
// Triple - [15, 3, 9, 6, 18]
// Binary - ["101", "1", "11", "10", "110"]

const multiply = function(x) {
    return function(y) {
        return x * y
    }
} 

function double(x) {
    return x * 2
}

function triple(x) {
    return x * 3
}

function binary(x) {
    return x.toString(2)
}

const output = arr.map(double) // it will run the double function on each value of map

console.log(arr.map(multiply(2)))
console.log(arr.map(multiply(3)))
console.log(arr.map(binary))

console.log(arr.map((x) => {
    return x.toString(2)
}))

console.log(arr.map((x) => x.toString(2)))

// FILTER Function
// Filter out the values and return the filtered array

const arr1 = [5, 1, 3, 2, 6]

function isOdd(x) {
    return x % 2 === 1
}

function isEven(x) {
    return x % 2 === 0
}

function greaterThan5(x) {
    return x > 5
}

console.log(arr.filter(isOdd))
console.log(arr.filter(isEven))
console.log(arr.filter(greaterThan5))

console.log(arr.filter((x) => x > 2))

// REDUCE Function

// take all the elements of a array and come up with a single value

// sum or max number in the array

function findSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    return sum
}

// acc = accumulator
// curr = current

// curr represents the value inside the arr function
// acc represents the accumulated value that we have to return

console.log(arr.reduce(function(acc, curr) {
    acc = acc + curr
    return acc
}, 0))

console.log(arr.reduce(function(acc, curr) {
    acc = Math.max(acc, curr)
    return acc
}, 0))
// second argument to pass into reduce function is the initial value of the acc

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

// list of full names

console.log(users.map((user) => {
    return user.firstName + " " + user.lastName
}))

// How many users have a particular age
// { 26: 2, 75: 1, 50: 1 }

console.log(users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}))

// first name of all the people whose age is less than 30

console.log(users.filter(function(user) {
    return user.age < 30
}).map(function(x) {
    return x.firstName + " " + x.lastName
}))

console.log(users.reduce(function(acc, curr) {
    if (curr.age < 30){
        acc.push(curr.firstName)
    }

    return acc
}, []))