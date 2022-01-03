// alert("Starting Basics Course!!")

// Hello Worlding
// alert("Hello World!")


// Comments

// Single Line

/*
Hello
This 
is a
Multiline
Comment
*/

/**
 * Docstring
 * @author gkesh
 */


// Showcasing basic function decleration syntax
function alerter(animal) {
    alert(`Animal is ${animal}`)
}

// Variables

/** 
 * let
 * 
 * Let allows you to declare
 * block scoped variables
 * 
 * Variables declared with let can
 * be reassigned with new values
 * 
 * Cannot Redeclare
 */

let mammal = "Cow"
alerter(mammal)
mammal = "Dog"
alerter(mammal)

/** 
 * const
 * 
 * Const allows you to declare variables
 * that cannot be reassigned
 * 
 * But this does not mean its immutable,
 * const variables are mutable just not
 * reassignable
 * 
 * Cannot Redeclare
 */
const bird = "Dove"
alerter(bird)

/**
 * Naming Conventions
 * 
 * Cannot use symbols except $, _
 * Names can only begin with symbols or letters not numbers
 * Function and variable names must be camelCase
 * Class names must be PascalCase
 * Global Constants must be capitalized and SNAKE_CASE
 */
let userName, user_name, $username, _username, user1

// Capitalized snake case used in variables
const PRIMARY_COLOR = "#001100"

// Camel case is used in both variables and functions
let phoneNumber

// Pascal Case used in class names
class AnimalTamer {

}

/**
 * var
 * 
 * It is global scoped in nature unlike let
 * and is generally difficult to predict
 * 
 * It might give unexpected values if
 * used improperly since the value is
 * available globally within the 
 * script or the function
 * 
 * Old method of variable declaration 
 * 
 * Can be redeclared
 */
var user = "Old User"


// Data Types

/** 
 * Number 
 * 
 * Numbers can include regular, negetive or 
 * floating point values
 * 
 * It also includes Infinity
 */

let num
num = 123
alert(num);
alert(typeof num);

num = 12.3;
(num === Infinity)? alert("Infinte"): alert(typeof num);

num = num / 0;
(num === Infinity)? alert("Infinte"): alert(typeof num);

num = "abc" / 2;
alert(typeof num);
(num === NaN)? alert("Not a Number"): alert(typeof num)

/** 
 * Big Int
 * 
 * Big int is used to store massive values
 * 
 * They are declared by appending n to the end of the
 * number
 */

num = 1287n
alert(typeof num)

// String

let name1 = "Aswin"
let name2 = 'Santosh'
let name3 = `Garima and ${name1}`

alert(name1)
alert(name2)
alert(name3)

/** 
 * Boolean 
 * 
 * These are truth values and can be either
 * true or false
 */
let truth = true
if (truth) {
    alert(typeof truth)
}

// null
// Null represents the absence of values
let user = null
alert(typeof user)

// undefined
// Undefined represents an uninitialized variable
let value
alert(typeof value)

/**
 * User Interactions
 * 
 * Scripts can interact with user and get simple 
 * feedback using three functions
 * 
 * alert, confirm or prompt
 */

// Alert
// Just shows a message and returns nothing
const test = () => {
  alert("Testing")  
}

alert(typeof test)
alert(typeof Symbol("test2"))

// Prompt
// Shows a message and returns the string value
// entered by a user
let passwd = prompt("Enter Password")

if (passwd === "123") alert("You are logged in") 

// Confirm
// Returns boolean value based on the button user
// presses
let isAdult = confirm("Are you an adult?")

if (isAdult) {
    alert("You are allowed in")
} else {
    alert("Come back after a few years")
}


