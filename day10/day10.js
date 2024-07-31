if (typeof window!=="undefined"){

// DAY 10 : Event handling

// ACTIVITY 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let pargph = document.querySelector('#par');
let btn = document.querySelector('#btn');

btn.addEventListener('click',() =>{
    pargph.innerText="hello javascript world!!!"
});

// Task 2: Add a double click event listener to an image that toggles its visibility.

let img = document.querySelector('#image');
img.style.visibility = img.style.visibility ==='hidden'? "visible":"hidden";

//ACTIVITY 2: Mouse events

// Task 3:  Add a mouseover event listener to an element that changes its background color.

let im1 = document.getElementById('task3');
im1.addEventListener('mouseover',function(){im1.style.backgroundColor = 'green'})

// Task 4: Add a mouseout event listener to an element that resets its background color . 

im1.addEventListener('mouseout',()=> {im1.style.background= "white"});

// ACTIVTY 3: Keyboard events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let inpt = getElementById('task5');
inpt.addEventListener("keydown",()=>{console.log("pressed",event.key)});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

inpt.addEventListener('keyup',()=>inpt.innerText = this.value);

// ACTIVITY 4: Form events

// Task 7: Add a submit event listener that prevents the default submission and logs the form data to the console.

let data = document.getElementById("task7");
data.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(data.value);
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

pargph.addEventListener("change",()=>{
    pargph.innerText= 'selected value: ${pargph.value}';
})

// ACTIVITY 5: Event delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let list = document.getElementById("task9");
list.addEventListener("click",(event)=>{
    if(event.target.tagname=="LI"){
        console.log("item text:",event.target.textContent);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let btnx= document.getElementById("task10");
btnx.addEventListener("click",()=>{
    let li=document.createElement("LI");
    li.innerText = inpt.value;
    list.append(li);
    list.addEventListener("click",(event)=>{
        console.log(event.target.innerText);
    })
})
}