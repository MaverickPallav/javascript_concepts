let name1 = {
    first: "Pallav",
    last: "Sharma"
}

let printName = function(hometown, state) {
    console.log(`full name is ${this.first} ${this.last} from ${hometown} in ${state}`)
}

// creating own bind method
Function.prototype.mybind = function(context, ...args) {
    // this -> printName

    let func = this
    return function(...args2) {
        func.call(context, ...args, ...args2)
    }
}

Function.prototype.mybind2 = function (...args) {
    let obj = this; // Reference to the original function
    let params = args.slice(1); // Extract parameters after the first argument (context)

    return function (...args2) {
        // Call the original function with the specified context and combined arguments
        obj.apply(args[0], [...params, ...args2]);
    };
};

let printName2 = printName.mybind(name1, "mumbai")
printName2("maharashtra")

let printName3 = printName.mybind2(name1, "mumbai")
printName3("maharashtra")