// Day 12: Error Handling


// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
javascript
function throwError() {
  try {
    // Intentionally throw an error
    throw new Error("This is an intentional error!");
  } catch (error) {
    // Catch the error and log a message to the console
    console.log("Error caught: " + error.message);
  }
}

throwError();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
javascript
function divideNumbers(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  } catch (error) {
    console.log("Error: " + error.message);
    return null; // or some other default value
  }
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

javascript
console.log("Starting script...");

try {
  console.log("Entering try block...");
  // Simulate an error
  throw new Error("Something went wrong!");
  console.log("Leaving try block..."); // This line will not be executed
} catch (error) {
  console.log("Entering catch block...");
  console.log("Error caught: " + error.message);
  console.log("Leaving catch block...");
} finally {
  console.log("Entering finally block...");
  console.log("Cleaning up resources...");
  console.log("Leaving finally block...");
}

console.log("Script finished.");

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

// Define a function that throws a CustomError
function doSomethingRisky() {
  throw new CustomError("Something went wrong!");
}

try {
  doSomethingRisky();
} catch (error) {
  console.log(`Caught error: ${error.message}`);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}
function validateInput(input) {
  if (input === "") {
    throw new ValidationError("Input cannot be empty!");
  }
}
try {
  console.log("Validating input...");
  validateInput("");
  console.log("Input is valid!"); // This line will not be executed
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Caught ValidationError: ${error.message}`);
  } else {
    console.log(`Caught unknown error: ${error.message}`);
  }
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
  const randomBoolean = Math.random() < 0.5;
  if (randomBoolean) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});


randomPromise
  .then((message) => {
    console.log(`Promise resolved: ${message}`);
  })
  .catch((error) => {
    console.log(`Promise rejected: ${error}`);
  });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
  try {
    // Create a promise that randomly resolves or rejects
    const randomPromise = new Promise((resolve, reject) => {
      const randomBoolean = Math.random() < 0.5;
      if (randomBoolean) {
        resolve("Promise resolved!");
      } else {
        reject("Promise rejected!");
      }
    });

    const result = await randomPromise;
    console.log(`Promise resolved: ${result}`);
  } catch (error) {
    console.log(`Promise rejected: ${error}`);
  }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

async function fetchData() {
    try {
      const response = await fetch('http://invalid-url.com');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
  
fetchData();

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
      const response = await fetch('http://invalid-url.com');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        console.error('Error: The URL is invalid or does not exist.');
      } else {
        console.error('Error:', error);
      }
    }
}
  
fetchData();