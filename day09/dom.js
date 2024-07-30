// DAY 09: DOM Manipulation

// ACTIVITY 1: Selecting and manipulating elements

// Task 1: Selecting an HTML element by its ID and change its text content.

const title = document.getElementById('heading');
console.log(title);
title = 'Hello World';
console.log(title);

// Task 2: Selecting an HTML element by its class and change its background colour.

let changebg = document.getElementsByClassName('content');
changebg[0].style.background = "blue";

//ACTIVITY 2: Creating and appending elements

// Task 3: Create a new div element with some text content and append it to the body.

const body = document.getElementsByTagName("body");
const div = document.createElement("div");
div.innerText = "This is the new div";
body.append(div);

// Task 4:  Create a new li element and add it to an existing ul list

const list = document.getElementsByClassName("list");
let newitem = document.createElement("banana");
list.append(newitem);

// ACTIVITY 3: Removing elements

// Task 5: Select an HTML element and remove it from the DOM

const delitem = document.getElementsByClassName("write");
delitem.remove();

// Task 6: Remove the last child of a specific HTML element

list.removeChild(list.lastChild);

// ACTIVITY 4: Modify attributes and classes

// Task 7: Select an HTML element and change one of its attributes.

document.getElementsByClassName("content").style.color= "red";

//Task 8: Add and remove a CSS class to/from an HTML element.

list.classList.remove("banana");

// ACTIVITY 5: Event handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.getElementById("buttn");
btn.addEventListener('click',function(){btn.innerHTML='added'});

// Task 10: Add a mouseover event listener to an element that changes its border color.

const bordr = document.getElementById();

btn.addEventListener('mouseover',()=>{btn.style.border="red"});

