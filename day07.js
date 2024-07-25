// DAY 7: Objects


// ACTIVITY 1: object creation and access

// Task 1- Create an object representing a book with properties like title, author and year.

book = {
    title:"Pride & Prejudice",
    author: "Jane Austen",
    year: 1813
}
console.log(book);

// Task 2
console.log("Title:",book.title);
console.log("Author:",book["author"]);

// ACTIVITY 2: object methods

// Task 3: Add a method to the book object that returns a string with book's title and author.

book.method_1= function(){
    return `Title: ${book.title}, Author: ${book.author} `;
}
console.log(book.method_1());

// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property.

book.method_2 = function(yr){
    book.year = yr;
}
book.method_2(1900);
console.log("updated year:", book.year)

// ACTIVITY 3: nested objects

// Task 5: Create a nested object representing a library with properties like name and books(array of books).

library = {
    name: "public_library",
    books: ['maths','physics','chemistry']
}

// Task 6
console.log("name:",library.name);
console.log(library.books);

// ACTIVITY 4: this keyword

// Task 7

book.method_3 = function(){

    return `Title: ${this.title}, year: ${this.year}`;
}
console.log(book.method_3());

// ACTIVITY 5: object iteration

// Task 8: Use for...in loop to iterate over the properties of the book.

for (let key in book){

    console.log(`${key} => ${book[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const keys = Object.keys(book);
const values= Object.values(book);
console.log(keys);
console.log(values);




