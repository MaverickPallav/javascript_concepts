"use strict"
// <----- this keyword in global space ----->

    console.log(this) //globalObject
    // value of global object varies from device to device, GlobalObject in
    // Browser is different from GlobalObject in Nodejs

    // Browser - globalObject = Window
    // Nodejs - globalObject = global

// <----- this keyword inside a function ---->

    // Browser - this Value - Window (but a different window from global) in Non Strict Mode

    function x() {
        //Value of this depends on strict mode and non strict mode
        console.log(this)
    }
    x()

// <---- this keyword inside non strict mode - (this substitution) --->
    // if the value of this is undefined or null, 
    // this keyword will be replaced with global object 
    // only in non strict mode

// <---- this keyword value depends on how the function is called (window) ---->
    //executing the code in strict mode

    //Calling the function without any reference
    x() //In Browser value in undefined

    // window.x() //In Browser value is window

// <---- this inside a object's method ---->

    const student = {
        name: "Pallav",

        // printName is the method of the object student
        printName: function(hometown, state){ 
            console.log(this)
            console.log(this.name) //student.name
            console.log(hometown)
            console.log(state)
        }
    }

    student.printName() // value of this keyword is the object where the this keyword is present

    const student2 = {
        name: "Veena"
    }

// <---- call apply bind methods (sharing methods) ---->

    student.printName.call(student2, "Udaipur1", "Rajasthan1") //this keyword value is student2
    student.printName.apply(student2, ["Udaipur2", "Rajasthan2"])

    const printName2 = student.printName.bind(student2, "Udaipur3", "Rajasthan3")
    printName2()

// <---- this inside arrow function ---->
    // here this keyword value is the of the enclosing lexical context

    const obj = {
        a: 10,
        x: () => {
            console.log(this)
        }
    }

    console.log(this)

    //the above obj arrow function this and below this are same

    obj.x() //here this keyword value will refer to the global as arrow function is present in globalspace

// <---- this inside nested arrow function ---->

    const obj2 = {
        a: 100,
        x: function() {
            const y = () => {
                console.log(this)
            }
            y()
        }
    }

    const obj3= {
        a: 100,
        x: function() {
            console.log(this)
        }
    }

    //the above obj2 arrow function this and below obj3 this are same

    obj2.x() // the value of this keyword will be that of the function context which is pointing to the obj2

// <---- this inside DOM ---->
    // <button onclick="alert(this)"> Click Me </button>

    // this button element is itself the value of this keyword

    // value is reference to the HTML element

// <---- this inside class, constructor --->

    class Person {
        constructor(name) {
            this.name = name; // 'this' refers to the new instance
        }

        introduce() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    const otto = new Person("Otto");
    otto.introduce(); // Output: Hello, my name is Otto