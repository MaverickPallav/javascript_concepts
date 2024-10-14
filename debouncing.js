//Debouning in Javascript

let counter = 0
const getData = () => {
    //calls an API and gets Data

    console.log("Fetching data..", counter++)
} // here api would be called on every keystroke of getData function

const debouncing = function(fn, delay) {
    let timer
    return function () {
        let context = this
        args = arguments

        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}
//only call getData when the difference of time between keystroke is 300ms
const betterFunction = debouncing(getData, 300)

// this betterFunction will be used instead of getData directly to apply debouncing effect