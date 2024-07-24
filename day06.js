//  DAY 6: Array

// Activity 1: array creation and access

// Task 1
arr= [1,2,3,4,5];
console.log(arr);       //output: [ 1, 2, 3, 4, 5 ]

// Task 2
console.log("fitst element:",arr[0]);
console.log("last element:",arr[arr.length-1]);    // output: fitst element: 1
                                                   //         last element: 5

// Activity 2: array methods (basic)

// Task 3
arr.push(6);
console.log("updated array after pushing 6:",arr);
//output: updated array after pushing 6: [ 1, 2, 3, 4, 5, 6 ]

// Task 4
arr.pop();
console.log("popped list:",arr);
// output: popped list:[1,2,3,4,5]

// Task 5

arr.shift();
console.log("shifted array:",arr);
// output- shifted array: [ 2, 3, 4, 5 ]

// Task 6
arr.unshift(1);
console.log("unshifted array", arr);
//output- unshifted array: [ 1, 2, 3, 4, 5 ]

// Activity 3: array methods (intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log th new array

num=[1,2,3];

double = (n)=> n*2;
new_arr = num.map(double);

console.log(new_arr);

// Task 8: Use filter method to create a new array with only even numbers.

// arr= [1,2,3,4,5]
function even(n){
    if (n%2==0)
        return n;
}
res = arr.filter(even);
console.log("even numbers in array:",res);   //output: [2,4]

// Task 9: Use reduce method to calculate the sum of all numbers in the array.

function add(sum,n){

    return sum+n;
}
result = arr.reduce(add);
console.log("sum of elements:",result); //output: 15

// Activity 4: array iteration

// arr= [1,2,3,4,5]

// Task 10
for (i in arr)
    console.log(arr[i]);  // output: 1 2 3 4 5

// Task 11- foreach method
call = (str)=> console.log(str);
arr.forEach(call);  // output: 1 2 3 4 5

// Activity 5: multi-dimensional arrays

// Task 12
let room = [
    ['Ram','Sim','Joe'],
    [  1  ,  2  , 3  ]
]
console.log(room);

// Task 13
console.log(room[0][1]);  // output: Sim
