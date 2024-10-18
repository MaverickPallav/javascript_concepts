let arr = ["Pallav", "Sharma"]

let object = {
    name: "Pallav",
    city: "Dehradun",
    getIntro: function() {
        console.log(this.name + "from " + this.city)
    }
}

// whenever you create a object, javascript attaches the hidden properties to the object

// arr.__proto__ == Array.prototype
// arr.__proto__.__proto__ == Object.prototype
// arr.__proto__.__proto__.__proto__ or Object.prototype.__proto__ == null

// object.__proto__ == Object.prototype
// object.__proto__.__proto__ == Null

// fun.__proto__ == Function.prototype
// fun.__proto__.__proto__ == Object.Prototype

let object2 = {
    name: "P"
}

// Never do this
object2.__proto__ = object
// with this we can use object properties also

object2.city

// first it checks whether city is present in object2 or not
// If not it goes into the __proto__ and check whether city is present or not
// If not it goes into __proto__.__proto__ and check whether city is present or not

object2.getIntro()
// Aditya from Dehradun
// this refers to object2 but city will be found from prototype chain

// Example
Function.prototype.mybind = function(){
    console.log("hsags")
}

function fun(){

}

fun.__proto__.mybind()