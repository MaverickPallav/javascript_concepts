// let multiply = function(x, y) {
//     console.log(x * y)
// }

let multiply = function(x) {
    return function(y) {
        console.log(x * y)
    }
} 

// let multiplybyTwo = multiply.bind(this, 2)
// multiplybyTwo(3)

// let multiplybyThree = multiply.bind(this, 3)
// multiplybyThree(3)

let mutliplyby2 = multiply(2)
mutliplyby2(10)

