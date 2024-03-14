let numbers = [1, 2, 3];
let numbers2 = [4, 5, 6];

function sum(a, b, c) {
    return a + b +c;
}

console.log("Task 1: [", ...numbers , "] " , sum(...numbers), "\n");

let mergedArray = [...numbers, ...numbers2];
console.log("Task 2: ", mergedArray, '\n');

// Combining 2 string arrays
let colors = ['red', 'green', 'blue'];
let extendedColors = ['yellow', ...colors, 'purple'];
console.log('Task 3: ', extendedColors, '\n');

//Cloning and Modifying an Object
const person = { name: 'John', age: 30};
//copy over first object but with a new name and added gender
const newPerson = {...person, name: 'Jane', gender: 'female'} 

console.log('Task 6: ');
console.log(person);
console.log(newPerson, '\n');

// Combining 2 objects
const object1 = { a: 1, b: 2};
const object2 = { b: 3, c: 4};
const combinedObject = {
    ...object1,
    ...object2
    //whichever object is placed second will always over write elements from the first object
};

console.log('Task 5: ', combinedObject, '\n');
