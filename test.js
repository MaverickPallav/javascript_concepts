function outerss5() {
    var c = 20
    function outerss4(b){
        function innerss4(){
            console.log(a, b, c) // no a is defined so the no reference is found its lexical scope even in global so we will have reference error
        }
        // var a = 10 // the console log been defaulted to global variable a
        return innerss4 // if inner4 is present inside the a function so it will again form closure with its lexical scope, so the console log will have access to a, b, c
    }
    return outerss4
}
// var a = 50
var funcsss4 = outerss5()
var funcsss5 = funcsss4("hello world")
funcsss5()