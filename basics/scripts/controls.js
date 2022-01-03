const operate = () => {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const result = document.getElementById("result"); 

    /** If-Else-Ladder
     * 
     * A common control structure which takes conditions
     * and executes specific blocks of code based on those
     * conditions
     * 
     * If the condition on if (expr) is truthy, it executes
     * the if block, if not it executes the else block
     * 
     * Else if blocks can be added in to check multiple 
     * conditions before falling back to else
     */

    if (a === "john" && b === "sarah") {
        result.value = `Hello, ${a} & ${b}`;
    } else if (a === "john") {
        result.value = `Where is Sarah?`;
    } else if (a == "sarah") {
        result.value = `Where is John?`;
    } else {
        result.value = `Guests not expected`;
    }

    /** Loops 
     * 
     * Loops are control structures that
     * execute a certain block of code repeatedly until
     * the condition remains truthy
     */

    /** While loop 
     * 
     * Syntax
     * 
     * while (expression) {  Code Block  }
     * 
     */

    let count = Number(a);
    while (count > 0) {
        alert(b);
        count--;
    }

    /** Do...While 
     * 
     * Syntax
     * 
     * do { Code Block } while(condition)
     */
    let count = Number(a);
    do {
        alert(b);
        count--;
    } while (count > 0);

    /** For
     * 
     * Syntax
     * 
     * for (initialization; condition; inc/dec) { Code Block }
     */
    for (let i = Number(a); i > 0; i -= 2) {
        alert(b);
    }

    // Later on...
    // For..in
    // For..of
    // .forEach(function)

    /** break && continue
     * These are statements that disrupt the normal
     * flow of code
     * 
     * break: exits the structure extirely
     * continue: skips the current iteration
     */
    for (let i = 8; i > 0; i--) {
        if (i % 2 === 0) continue;

        if (i < 5) break;
        alert(i);
    }

    /** Switch..case
     * 
     * If conditions in if..else become too
     * numerous we can use switch case as a more 
     * managable alternative
     */
    switch(a) {
        case "john":
            result.value = b;
            break;
        case "sarah":
            result.value = b + a;
            break;
        default:
            result.value = "Stranger";
    }

}