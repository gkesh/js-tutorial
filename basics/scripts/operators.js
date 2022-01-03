// const runner = document.getElementById("runner")

const operate = () => {
    const a = Number(document.getElementById("a").value)
    const b = Number(document.getElementById("b").value)
    const result = document.getElementById("result")

    console.log(a, b) // Logging out values

    /** Arithematic Operators 
     * 
     * Operators used to perform basic
     * mathematical operations on values
     * 
    */

    // Add
    let c = a + b

    // Subtract
    const c = a - b

    // Multiply
    const c = a * b

    // Divide
    const c = a / b

    // Modulo
    const c = a % b

    // Power
    const c = a ** b

    // Root
    const c = a ** (1 / b)

    /** Unary 
     * 
     * These are operators that work on single values
     * instead of multiple values
     * 
     * Examples are: +, -, ++, --, !, ~
    */
    const c = -a // Gives negetive

    // const c = +a // No change to numeric value
    let c = (+a) + (+b) // Type casting using unary +

    // Testing put preceeding and succeding increment/decrement 
    result.value = c++
    console.log(c)

    /**
     * Assignment operators
     * 
     * The main assignment operator is "="
     * All other assignment operators are offshoots
     * of the main operator.
     * 
     * Combination of arithematic operators and 
     * the "=" operator.
     * 
     * Operators can also be chained to assign
     * the same value to multiple 
     * operators
     */
    c += 1
    c -= 1
    c *= 2
    c /= 2
    c %= 2
    c **= 2
    let d = e = f = c // Chaining

    /** Desctruction Assignment
     * 
     * Destruction Assignment is a form of assignment
     * that breaks down data structures into 
     * individual units of data.
     * 
     * Examples below show array and 
     * object destruction
     */
    const array = [1, 2]
    let [x, y] = array

    const obj = {
        x: 1,
        y: 2
    }

    let {x: v, y: w} = obj

    result.value = `${v} ${w}`

    /**
     * 
     * Object Desctruction in action
     * 
     * Generally object destruction is used
     * when breaking down responses from API
     * Calls.
     */
    const response = {
        code: 404,
        message: "Failed!"
    }

    const {code: code, message: msg} =  response

    result.value = `Response Status:: ${msg} & Code:: ${code}`


    /**
     * Ternary Operators
     * 
     * Takes a condition and executes a block of code based on
     * the truthiness or falsiness of the condition
     * 
     * It may also be used in a nester manner
     */
    const c = (a === 1)? alert: ((a === 0)? confirm: null)
    
    console.log(c)
    c("Hello")

    /** Logical Operators 
     * 
     * These are operators that work with the truth 
     * values and allow logical operations such as
     * and, or, not or any desired combination of 
     * these logics
    */

    let a = false;
    let b = true;
    let c = true;

    // Logical AND (&&)
    alert(a && b);

    // Logical OR (||)
    alert(a || b);

    // Logical NOT (!)
    alert(!a);
    alert(!b);

    // Combination Logic
    alert(!(a && b));
    alert((a && b) || (b || c));

    /** Comparision Operators
     * 
     * These operators compare any given values
     * and give out a boolean value based on 
     * the comparision
     */

    // Equality (==: no type-check, ===: type-checked)
    result.value = (a === b);

    // Non-Equality (!=, !==)
    result.value = (a !== b);

    // Greater than (>)
    result.value = (a > b);

    // Greater than equal to (>=)
    result.value = (a >= b);

    // (<=, <)

    /** Null Coalasing Operator 
     * 
     * This is a special operator that
    */

    let astr = (a === "")? null: a;


    let cstr = astr ?? b;
    result.value = cstr;
}

// runner.addEventListener("click", () => {
    
// })

