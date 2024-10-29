console.log(a) // undefined

var a = 7 // a is hoisted and is allocated memory and assigned undefined to it

console.log(a) // 7

// undefined is not empty, it is a special keyword it takes up its own memory, it is a placeholder for the variable till it is not initialised

if (a === undefined){
    console.log("a is undefined")
}else{
    console.log("a is not undefined")
}

// javascript is losely type language (weakly typed language)

var t = 1
console.log(t)
var t = 'hello'
console.log(t)

a = undefined // bad thing to do this