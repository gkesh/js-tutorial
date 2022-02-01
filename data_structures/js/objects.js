const person = {
    name: "Santosh Poudel",
    gender: "Male",
    alive: true,
    age: 26,
    skills: ["Spanish", "Rock Climbing", "MMA"],
    education: {
        lower: 0.9,
        higher: 0.9
    }
}

console.table(person);

console.log(typeof person.alive);
console.log(person.alive);

console.log(person.education.lower);

// Square Brackets
person["last login"] = new Date();
console.log(person["last login"]);

// Objects are mutable in nature
person.name = "Garima";
person.gender = "Female";
console.log(person.name);

// Property Shorthand
const { name, gender } = person;
// console.log(name, gender);

const createPet = (animal, name, speak) => ({
    animal,
    name,
    speak
})

const cat = createPet("Cat", "Polly", function() {
    return `Meow!, I am ${this.name} the ${this.animal}.`;
});

const dog = createPet("Dog", "Ramen", function() {
    return `Bhaow!, This is ${this.name} the ${this.animal}`;
});

console.log(cat);
console.log(cat.speak());

console.log(dog.speak());

// Anything can be an object property
const anything = {
    let: 1,
    const: 2,
    for: 3,
    return: "Returned",
    0: 'hello',
    false: false
}

for (key in anything) console.log(key, anything[key]);
// for (key of Object.entries(anything)) console.log(key, anything[key]); // Faster

console.log("const" in anything);

delete anything[false];
console.log(anything);