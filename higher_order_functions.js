// A first func which takes another func as a argue or returns a func is known as higher order function

// function x() {
//     console.log("Namaste")
// }

// function y(x){
//     x()
// }

// y is the higher order function and x is the callback function

// const radius = [3, 1, 2, 4]

// const calculateArea = function (radius) {
//     const output = []

//     for (let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log(calculateCircumference(radius)); // Example input array for radius

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };

// console.log(calculateDiameter(radius))

// Optimized Version
const radiuses = [3, 1, 2, 4]

const area = function(radius) {
    return Math.PI * radius * radius
}

const circumference = function(radius) {
    return 2 * Math.PI * radius
} 

const diameter = function(radius) {
    return 2 * radius
} 

const calculate = function (arr, logic) { // Own implementation of Map
    const output = []

    for (let i = 0; i < arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}

console.log(calculate(radiuses, area))
console.log(calculate(radiuses, circumference))
console.log(calculate(radiuses, diameter))

console.log(radiuses.map(area))

// Example

Array.prototype.calculate = function (logic) { // Own implementation of Map, this function calculate will be available on all Arrays
    const output = []

    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radiuses.calculate(area))