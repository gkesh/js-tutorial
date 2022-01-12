/**
 * Arrow Syntax
 * 
 * Arrow syntax is a new syntax for
 * function declaration which uses
 * parantheses, curly brackets and the
 * arrow (=>) notation.
 * 
 * Here we dont really use the 
 * function keyword.
 * 
 * Arrow syntax has a major difference
 * from the traditional approach, where
 * the this keyword now does not signify
 * the function instance but the window
 * instance.
 */
const sayHello = () => {
    console.log("Hello");
};

// sayHello();

const sayHelloWithName = (name = "Stanger") => console.log(`Hello, ${name}`);

const sayHelloToMany = (...names) => names.forEach(name => console.log(`Hello, ${name}`));