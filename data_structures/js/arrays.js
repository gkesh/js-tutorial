/** 
 * Creation
 * 
 * Arrays can be created in two simple ways:
 * 1. Large brackets ([])
 * 2. Using Array class (new Array())
*/
// let arr = [1, 2, 3];
// let arr = new Array(1, 2, 3);
// alert(arr);

/** Indexing
 * 
 * Indexing in JS Arrays starts from 0 and any random
 * index can be assigned to a value
 */
// alert(arr[0]); // 1
// arr[10] = 11;
// alert(arr[10]); // 11
// alert(arr.length); // 11

/**
 * Types
 * 
 * Any type can be stored in a single array
 */
// let tarr = [1, "2", true, {test: "Test 2"}];
// alert(tarr[3].test);

// let oarr = [1, 2, 3];
// oarr[3] = 4;

// alert(oarr);

// oarr.test = 3;
// alert(oarr);

/**
 * Queue & Stacks
 * 
 * Array can act as a queue or stack
 * using unshift/shift & push/pop methods
 */
// let cars = [];

// cars.unshift("hyundai");
// cars.unshift("bmw");
// cars.unshift("tesla");
// alert(cars);

// let car = cars.shift();
// alert(car);

// cars.push("hyundai");
// cars.push("bmw");
// cars.push("tesla");
// alert(cars);

// let car = cars.shift();
// alert(car);

// Queue - push, shift | Stack - push/pop, unshift/shift

/** Multi-Dimensional
 * 
 * Embed array inside an array
 */
// let arr = [["cats", "dogs"], ["cow", "goat", ["chicken", "duck"]]];
// alert(arr[1][2][1]);

// String(arr); // Converts array to string
// JSON.stringify(arr); // Converts array to JSON String

// Length Property
// let arr = [1, 2, 3, 4];
// alert(arr.length);

/** Slice
 * [arr.slice(start, end)]
 * 
 * Returns the sliced array
 */
// let arr = [1, 2, 3, 4, 5, 6];
// alert(arr.slice(3));
// alert(arr.slice(3, 5));
// alert(arr.slice(null, 4));
// alert(arr.slice(-2)); // Negative Indexing; starts from -1

/** Splice 
 * 
 * [arr.splice(start, [count, values])]
 * 
 * returns the deleted value
 */
// alert(arr.splice(4, 2, 7, 8));
// alert(arr);

/**
 * Concat
 */
// let arr2 = [7, 8, 9];
// alert(arr.concat(arr2));

// let arr3 = [10, 11, 12, 13];
// alert(arr.concat(arr2, arr3));

/**
 * indexOf, lastIndexOf, find, findIndex
 */

/**
 * Filter
 * 
 * Go thorugh the array and fetch values that return true
 * under the provided condition
 * 
 * Array.filter(function(a): boolean)
 */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let filteredArray = arr.filter(v => v % 2 == 0); // Filters out odd number
// console.log(filteredArray);

// const isPrime = num => {
//     for(let i = 2; i < num; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }

// let primeArray =  arr.filter(isPrime);
// console.log(primeArray);

/**
 * Map
 * 
 * Goes through the values of an array
 * and returns modified values based on the
 * function passed
 */
// let arr = [-2, -1, 0, 3, 4];

// let square = num => num ** 2;
// let root = num => num ** 1/2;
// let abs = num => num >= 0 ? num : num * -1;

// let squareArray = arr.map(square);
// console.log(squareArray);

// let rootArray = arr.map(root);
// console.log(rootArray);

// let absArray = arr.map(abs);
// console.log(absArray);

/**
 * Reduce (Reduce Right)
 * 
 * Iterates through an array and performs
 * operations that reduce all the values 
 * in an array to a single value
 * 
 * ReduceRight just performs the same operation
 * in reverse order
 */
// let arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let avg = arr.reduce((p, n) => p + n) / arr.length;
// console.log(avg);

/**
 * Reverse
 * 
 * Reverses the current order of an array
 * 
 */
// let arr = [1, 2, 3]
// let reverseArray = arr.reverse();
// console.log(reverseArray);

/**
 * Sort
 * 
 * Arranges the values in a specific way 
 * based on the function provided to sort
 */

// let arr = [1, 2, 10, 20, 11, 21];
// let sortedArray = arr.sort();
// console.log(sortedArray);

// const integerSort = (x, y) => x - y;
// let sortedAsIntegerArray = arr.sort(integerSort);
// console.log(sortedAsIntegerArray);

// let people = [
//     {
//         name: "Garima",
//         age: 20
//     },
//     {
//         name: "Santosh",
//         age: 26
//     },
//     {
//         name: "Anjana",
//         age: 22
//     }
// ];

// let sortByAge = (thisPerson, thatPerson) => thisPerson.age - thatPerson.age;
// let peopleSortedByAge = people.sort(sortByAge);
// console.table(peopleSortedByAge);

/**
 * Split & Join
 * 
 * Split makes an array out of string by seperating
 * the string using a specified delimiter
 * 
 * Join converts an array into a string by patching
 * using the provided delimiter
 */
// let csv = "Garima, Santosh, Anjana, Aswin";
// let array = csv.split(", ");
// console.log(array);

// let str = array.join(", ");
// console.log(str);

// console.log(str === csv);
