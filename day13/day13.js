// Day 13: Modules


// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

function addition(a,b){   // exported in task 3
    console.log(a+b);
}

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

let person={          // exported in task 3
    name: "Pippa",
    age: 17,
    hello(){
        return `Hello I am ${this.name}`;
    }
}

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

export {
    addition,
    person
}

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

export default function default_fn(){
    console.log("It's a default function");
}
// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function circleArea(radius) {
  return PI * radius * radius;
}

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash ) using npm. Import and use a function from this module in a script.
let fruits = ['apple','mango','peach','grape'] ;
import { chunk } from "lodash";
console.log(chunk(fruits, 2));

// Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

response=axios.get('https://en.wikipedia.org/wiki/Ernest_Hemingway').then(response =>{
    console.log(response.data);
})

// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.