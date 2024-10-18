// javascript Runtime Environment

// JS Engine
// API
// Event Loop
// Callback Queue
// Microtask Queue

//setTimeout of Browser may have a different implementation than setTimeout of NodeJS

//JS engine is not a machine

// Giving CODE to JS Engine

// 1. PARSING
    // a. Broken Down into Token
    // b. Syntax Parser - take the code , convert into ast (abstract syntax tree)

// 2. COMPLILATION
    // a. JIT(Just in Time Compilation) - Can use a intrepreter and a compiler

// Interpretter - takes your code and starts executing the code line by line
    // Code is Fastly executed

// Compiler - whole code is compiled before executing, a new code is formed which is the optimized version of the code and then it is executed
    // Efficiency More

// Javascript can behave as intrepretted and compiled language dependent on JS Engine

// After Parsing AST is generated and the AST goes to the interpreter and than the high level code is converted into Byte code
// and fed into execution step and while doing this compiler is used to optimize the code

// AOT - Ahead of Time Compilation - Compiler takes a piece of code which is to be executed later and optimizes it

// 3. EXECUTION
    // Two major components
        // a. Memory Heap
        // This is the place where every memory is stored and is in sync with the callstack , garbage collector and many other things
        // all the variables and functions are assigned memory
        // b. Call Stack

// Opimization done by compiler (Read More)
// inlining
// copy elision
// inline caching

// Garbage Collector
// Mark and Sweep Algorithm (Read More)

// V8 Engine
// Interpreter - Ignition
// TurboFan - Compiler

// Orinoco (V8`s GC)
// Oilpan (Another V8`s GC)