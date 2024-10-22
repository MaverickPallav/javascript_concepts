// Event Bubbling and capturing are the two ways of event propagation in the DOM tree

// If any event happens on the child it propagates on the parent also

// Event bubbling, it starts and then goes to the upward heirarchy

// onClickChild()
// onClickParent()
// onClickGrandParent()

// Bottom To Up Execution - Event Bubbling , Like Bubble grows and expands
// When we click the child button

// Execution order
    // onClickChild()
    // onClickParent()
    // onClickGrandParent()

// Top to Bottom Execution - Event Capturing - Also known as event trickling

// When we click the child button

// Execution order
    // onClickGrandParent()
    // onClickParent()
    // onClickChild()

// Trickling Down and Bubbling Up

// addEventListener('click', () => {
// }, useCapture)

// useCapture is True or False

// If UseCapture is True, Event Capturing is enabled and event capturing or event trickling happens

// When you dont pass UseCapture or pass False, Event Bubbling Occurs

// When you dont pass the Third Arguement or Pass it as False

    // document.querySelector("#grandparent").addEventListener('click', () => {
    //     console.log("Grandparent Clicked")
    // })

    // document.querySelector("#parent").addEventListener('click', () => {
    //     console.log("Parent Clicked")
    // })

    // document.querySelector("#child").addEventListener('click', () => {
    //     console.log("Child Clicked")
    // })

                                // OR //

    // document.querySelector("#grandparent").addEventListener('click', () => {
    //     console.log("Grandparent Clicked")
    // }, false)

    // document.querySelector("#parent").addEventListener('click', () => {
    //     console.log("Parent Clicked")
    // }, false)

    // document.querySelector("#child").addEventListener('click', () => {
    //     console.log("Child Clicked")
    // }, false)

// When you dont pass the Third Arguement as True

    // document.querySelector("#grandparent").addEventListener('click', () => {
    //     console.log("Grandparent Clicked")
    // }, true)

    // document.querySelector("#parent").addEventListener('click', () => {
    //     console.log("Parent Clicked")
    // }, true)

    // document.querySelector("#child").addEventListener('click', () => {
    //     console.log("Child Clicked")
    // }, true)

// Printing down the heirarchy, Trickles from the top and stops at the clicked div

// When we mix and match the useCapture

// Event Capturing and Bubbling Happens in a cycle

    // document.querySelector("#grandparent").addEventListener('click', () => {
    //     console.log("Grandparent Clicked")
    // }, true) // Capturing

    // document.querySelector("#parent").addEventListener('click', () => {
    //     console.log("Parent Clicked")
    // }, false) // Bubbling

    // document.querySelector("#child").addEventListener('click', () => {
    //     console.log("Child Clicked")
    // }, true) // Capturing

// Whatever div we have clicked, the Capturing goes from top to the div and Bubbling goes from div to top

// During The capturing Cycle
    // grandparent was true so it got printed
    // parent was false so it gets skipped because of it bubbling nature
    // child was true so it got printed

// During The Bubbling Cycle
    // Grandparent was false so it gets skipped because of it capturing nature
    // parent was true so it got printed
    // child was false so it gets skipped because of it capturing nature

// Stop Event Propagation (In Bubbling)

// document.querySelector("#grandparent").addEventListener('click', () => {
//     console.log("Grandparent Clicked")
// }, false)

// document.querySelector("#parent").addEventListener('click', (e) => {
//     console.log("Parent Clicked")
//     e.stopPropagation()
// }, false)

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("Child Clicked")
// }, false)

// If we clicked Child

// all will get skipped during capturing phase
// In bubbling phase
    // child will be printed
    // parent will be printed
    // due to stop propagation in parent, the grandparent will not be printed even though it has false(Bubbling)

// Stop Event Propagation (In Capturing)

document.querySelector("#grandparent").addEventListener('click', (e) => {
    console.log("Grandparent Clicked")
}, true)

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent Clicked")
    e.stopPropagation()
}, true)

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child Clicked")
}, true)

// If we clicked Child

// In capturing phase
    // grandparent will be printed
    // parent will be printed
    // due to stop propagation in parent, the child will not be printed even though it has true(capturing)