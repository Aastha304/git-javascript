// DAY 11: Promises and Async/Await

// ACTIVITY 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2 second timeout and log the message to the console.
let promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(console.log("First promise"));
    },2000);
    
})

// Task 2: Create a promise that rejects with a message after a 2 second timeout and handle the error using .catch()
let promise_err = new Promise((resolve,reject)=>{
    setTimeout(()=> reject(`second promise`),2000);
})

promise_err.catch(()=> console.log('Error in the promise'));


// ACTIVITY 2: Chaining promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
console.log('Fetching from 1...');
    promise.then((message)=>{
    console.log(message);
    console.log('Fetching from 2...');
    return promise_err.catch((message)=>{
        console.log(message);
    })
})

// ACTIVITY 3: Using async/await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function waitForPromise(promise) {
    const resolvedValue = await promise;
    console.log(resolvedValue);
}
  waitForPromise(promise);


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function rejectedPromise(promise) {
    try {
      await promise;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 2000);
});
  
rejectedPromise(myPromise);


// ACTIVITY 4: Fetching data from an API

// Task 6: Use the fetch API to get data from public api and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


// Task 7: Use the fetch API to get data from public api and log the response data to the console using async/await.
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
}
  
fetchData();

// ACTIVITY 5: Concurrent promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then logs the resolved value.
function promiseAll(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        },4000);
    });
};

const a=fetchData();
const b=promise();
Promise.all([a,b]).then((values)=>{
    console.log(values);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([a,b]).then((values)=>{
    console.log(values);
});