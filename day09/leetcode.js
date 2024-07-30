// 1: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

let createHelloWorld=(...args) =>'hello world';

// 2: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function counter(n){
    return function(){
        return n+1 ;
    }

} 