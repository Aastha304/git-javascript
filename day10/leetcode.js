// 1. Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) =>{
    let val= init;
    let obj1 ={
        increment(){
            return init+1;
        },
        decrement(){
            return init-1;
        },
        reset(){
            init = val;
            return init;
        }
    }

    return obj1;

}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

// output : 6 4 5

// 2. Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i)

const transform = (arr, fn) =>{
    returnarr= [];
    for (let i=0;i<arr.length; i++){
        returnarr[i] = fn(arr[i],i);
    }

    return returnarr;
}

arr = [1,2,3];
test_fn =(n) => n*2;

console.log( transform(arr, test_fn));

// output : [2,4,6]

