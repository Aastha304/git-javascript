// 1. Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

//The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

var compose = function(functions) {
    
    return function(x) {

        return functions.reduceRight((acc,current_fn)=> current_fn(acc),x);
        
    }
};

const fn = compose([x=>x+1,x=>x*x, x=>2*x])
console.log(fn(4) );


// 2. Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let firstcall = true;

    return function(...args){
        if (firstcall){
            firstcall = false;
            return fn(...args);
        }
    }
};

let supfn = (a,b,c) => (a+b+c)
let oncefn = once(supfn);

console.log( oncefn(1,2,3));
console.log( oncefn(4,5,6));