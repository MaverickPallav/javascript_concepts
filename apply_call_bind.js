let name1 = {
    first: "Pallav",
    last: "Sharma"
}

let printName = function(hometown, age) {
    console.log(`full name is ${this.first} ${this.last} from ${hometown} and age ${age} `)
}

let printName2 = function(hometown, age) {
    console.log(`from bind full name is ${this.first} ${this.last} from ${hometown} and age ${age}`)
}

let name2 = {
    first: "Veena",
    last: "Sharma"
}

// function borrowing
printName.call(name1, "Udaipur", "24")
printName.apply(name2, ["Udaipur", "24"])


//bind
let printName3 = printName2.bind(name1, "Jaipur", "24")
printName3()