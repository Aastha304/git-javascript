// DAY 5: Functions

//Activity 1: function declaration

// Task 1

function even_odd(num){
    if (num%2==0)
        console.log("Even number");
    else
        console.log("Odd number");
}
// even_odd(6) - output: Even number

// Task 2

function sqr_num(num){
    return num*num;
}
// sqr_num(5) : returns 25

//Activity 2: function expression

// Task 3

const max_of_two= function(n1,n2) {
    if (n1>n2)
        return n1
    else
        return n2  
}

console.log("maximum number:", max_of_two(3,9))
// max_of_two(3,9) - output: maximum number: 9

// Task 4

const concatenate = function(str1 , str2) {

    return str1+str2;
}
console.log( concatenate("wel","come"));
//output: welcome

//Activity 3: arrow functions

// Task 5

const sum=( n1, n2) =>  n1+n2 ;
console.log(sum(2,3));
//output: 5

// Task 6

const check_char = ( char, str) => {

    return str.includes(char,0);
}
console.log(check_char('hello',"helloworld"));
// output: true

// Activity 4: Function parameters and default values

// Task 7

function product( n1, n2=2){

    return n1*n2;
}
console.log(product(4));
// output: 8

// Task 8

function greeting( name, age=18){            

    console.log("Hello",name, "your age is",age)
}
greeting("Aastha");
//output: Hello Aastha, your age is 18

//Activity 5: high-order functions

//Task 9

function call(str){
    console.log("code");
}

function multiple_call(func,num){
    for (let i=1; i<=num; i++){
        func();
    }
}
multiple_call(call,5);

//Task 10

circle = (r)=> console.log("area of circle:",3.14*r*r);

square= (s)=> console.log("area of square:",s*s);

function area(func1, func2, val){
        func1(val);
        func2(val);
}

area(circle,square,5);
//output: area of circle: 78.5
//        area of square: 25