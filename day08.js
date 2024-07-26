// DAY 8: ES6 + Features

// ACTIVTY 1: template literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age.

let name = "Jack";
let age = 20;

let string1 = `Hello ${name}, your age is ${age}`;
console.log(string1);

// Task 2: Create a multi-line string using template literals.

string2 = `this is line 1
this is line 2`;
console.log(string2);

// ACTIVITY 2: destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers.

let [a,b,c] = [1,2,3];

console.log(`1st element:${a}, 2nd element:${b}`);

// Task 4: Use object destructuring  to extract the title and author from a book object.

const book = {
    title:"Pride & Prejudice",
    author: "Jane Austen",
    year: 1813
}
const {title: bookname, author: authorname} = book;

console.log("Title:",bookname);
console.log("Author:",authorname);

// ACTIVITY 3: spread and rest operators

// Task 5: Use the spread operator to create a new array that includes all elements of an exisiting array plus additional elements.

const arr1 = [1,2,3];
const arr2 = [4,5];

const addarr = [...arr1, ...arr2];
console.log(addarr);

// Task 6: Use the rest operator in a function  to accept an arbitrary number of arguments, sum them, and return the result.

function add(...args){
    let sum = 0;
    for (i of args){
        sum = sum + i;
    }
    return sum;
}

console.log("sum of 1,2,3 =",add(1,2,3));
console.log("sum of 1,5 =",add(1,5));

// ACTIVITY 4: default parameters

//Task 7: Write a function that takes two parameters and return their products, with second parameter having default value 1.

const product = (a, b=1) => a*b;

console.log("5 x default(1) =",product(5));
console.log("5 x 2 =",product(5,2));

// ACTIVITY 5: Enhanced object literals

// Task 8: Use enhanced object literals to create an object with methods and properties.

const myObject = {
    name:"Joanna",
    country: "Spain",
    hello(){
        console.log(`Hello ${this.name} of ${this.country}`);
    }
}
console.log(myObject);

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const day_key ="3rd-day";
const year_key = "year";

const obj = {
    [day_key] : "wednesday",
    [year_key] : "2024"
}

console.log(obj);

