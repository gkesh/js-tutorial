/**
 * Basic Function
 * 
 * Javascript has multiple ways to define a function, the most
 * simple approach being the use of the function keyword
 * 
 * Functions have three major components
 * 1. Function Name
 * 2. Function Parameters
 * 3. Function Return
 */
function sayHello() {
    console.log("Hello");
}

/**
 * Passing parameters
 * 
 * Values can be passed to functions in 
 * form of parameters
 */
function sayHelloWithName(name) {
    console.log(`Hello, ${name}`);
}

/**
 * Returning values from functions
 * 
 * Functions can return values after calling 
 * using the return keyword
 */
function getHelloWithName(name) {
    return `Hello, ${name}`;
}

/**
 * Function Scopes
 * 
 * Lexical Scoping: Research
 * Scope refers to containment of variables
 * 
 * When you define a variable inside the function
 * using limited scoping (let, const), the
 * variable remains undefined everywhere outside
 * the function.
 * 
 * But you can use variables with limited scoping
 * from outside the function to do operations 
 * inside.
 */
let language = "spanish";
let greetingByLanguages;

function sayHelloByLanguage(name) {
    greetingByLanguages = {
        spanish: "Hola",
        japanese: "Hajimemashite",
        swedish: "Halo",
        english: "Hello"
    };

    console.log(greetingByLanguages[language] + `, ${name}`);
}

// sayHelloByLanguage("Luffy");

// console.log(greetingByLanguages[language]);

/**
 * Pure Functions
 * Funcitonal Programming Paradigm
 * 
 * Functions must remain pure, i.e. all the references
 * and variables used inside a function must be
 * declared within its scope.
 * 
 * Hence creating a pure unit of expressions to do
 * jobs without dependencies
 */
function pureSayHelloByName(name, language) {
    let greetingByLanguages = {
        spanish: "Hola",
        japanese: "Hajimemashite",
        swedish: "Halo",
        english: "Hello"
    };

    console.log(greetingByLanguages[language] + `, ${name}`);
}

// pureSayHelloByName("Barry", "japanese");

/** Spread Synatx
 *
 * Spread syntax can be used ina variety of different ways
 * such as appending values to arrays, combining arrays and
 * all form of array based operation.
 */
 let names = ["Garima", "Santosh"];
//  sayHelloToMany(...names);

/**
 * Advanced parameter syntax
 * 
 * Parameters can be defined in a vriety of different ways
 * 
 * This includes different special syntax such as:
 * 1. Defualt Parameters
 * 2. Rest Parameters
 */

// Multiple Parameter
function sayHelloToMany(name1, name2, name3) {
    console.log(`Hello, ${name1}`);
    console.log(`Hello, ${name2}`);
    console.log(`Hello, ${name3}`);
}

// Default Parameter
function defaultSayHelloToMany(name1, name2 = "Stranger") {
    console.log(`Name 1, ${name1}`);
    console.log(`Name 2, ${name2}`);
}

// Rest Paramters
function restSayHelloToMany(...names) {
    names.forEach(name => console.log(`Hello, ${name}`));
}

// restSayHelloToMany("Eren", "Misaka", "Rainer", "Historia", "Sasha", "Howser");

/**
 * Named Parameters
 * 
 * JS by default doesnot provide support for
 * named parameters but we can leverage the
 * object destruction feature to implement
 * this ability.
 */
function sayGreeting({greet, name}) {
    console.log(`${greet}, ${name}`);
}

// sayGreeting({name: "Garima", greet: "Hello"});

/**
 * Object return and destruction via
 * funcitonal call
 */
function getIntrduction () {
    return {
        name: "Garima",
        gender: "Female"
    }
}

// const {name: person, gender} = getIntrduction();
// console.log(`Name: ${person}, Gender ${gender}`);

/**
 * Array return and destruction via
 * funcitonal call
 */
function getCoordiantes () {
    return [10, 15];
}

// const [x, y] = getCoordiantes();
// console.log(`X: ${x}, Y: ${y}`);

function getAlertGreeter(name) {
    return function() {
        alert(`Hello, ${name}`);
    }
}

let alertGreeter = getAlertGreeter("Garima");