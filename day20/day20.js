// Day 20: LocalStorage and SessionStorage

// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const string = document.getElementById('user')
const button = document.getElementById('clickbtn');

button.addEventListener('click',() =>{
    const str = string.value;
    localStorage.setItem("String",str);
})

// // Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const object = {
    name: "Jim",
    age: 24,
    country: "Germany"
};
const jsonStr = JSON.stringify(object);
localStorage.setItem("object", jsonStr);
const val = localStorage.getItem("object");
console.log(JSON.parse(val));

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

let submit = document.getElementById('sub');

console.log(name.value)
console.log(email.value);

submit.addEventListener('submit',() =>{
    let name = document.getElementById("userName");
    let email = document.getElementById("uEmail");
    localStorage.setItem("user",name.value);
    localStorage.setItem("email", email.value);
})

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

const keyToRemove = 'String';
console.log('Before removal:');
console.log(localStorage);

localStorage.removeItem(keyToRemove);

console.log('After removal:');
console.log(localStorage);

// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
const key = 'myKey';
const value = 'Hello, World!';
sessionStorage.setItem(key, value);

const retrievedValue = sessionStorage.getItem(key);
console.log('Retrieved value:', retrievedValue);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const obj = {
    inst: "Nit",
    branch: "IT",
    sec: 8
};
const json = JSON.stringify(obj);
localStorage.setItem("obj", json);
const val1 = sessionStorage.getItem("obj");
console.log(JSON.parse(val1));

// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

submit.addEventListener('submit',() =>{
    let name = document.getElementById("userName");
    let email = document.getElementById("uEmail");
    sessionStorage.setItem("user",name.value);
    sessionStorage.setItem("email", email.value);
})

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

console.log('Before removal:');
console.log(sessionStorage);
sessionStorage.removeItem('email');
console.log('After removal:');
console.log(sessionStorage);

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function storage(key,val){
    localStorage.setItem(key,val);
    sessionStorage.setItem(key,val);
}
storage("method1","localstorage")
console.log("the key: ",localStorage.getItem('method1'))

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorage() {
    
    localStorage.clear();

    sessionStorage.clear();
}

clearStorage();


console.log('Storage contents:');
console.log(`localStorage: ${localStorage.length}`);
console.log(`sessionStorage: ${sessionStorage.length}`);


if (localStorage.length === 0 && sessionStorage.length === 0) {
    console.log('Both storages are empty');
} 
else {
    console.log('One or both storages are not empty');
}