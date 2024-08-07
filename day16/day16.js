
//                                                *DSA*
// Day 16: Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n){
    if (n>1)
     return n*factorial(n-1);
    else 
     return 1;
}
console.log(factorial(5));    // 120
console.log(factorial(4));    // 24
console.log(factorial(0));    // 1

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
// 0 1 1 2 3 5 8 13...

function fibonacci(n){
    if (n===1)
        return 0;
    else if (n===2)
        return 1;
    else
        return fibonacci(n-1) + fibonacci(n-2);    
}
console.log("4th term:",fibonacci(4));
console.log("5th term:",fibonacci(5));
console.log("6th term:",fibonacci(6));

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function arraySum(arr){
    if (arr.length ===0)
        return 0;
    return arr.pop() + arraySum(arr);

}
let arr = [1,2,3,4,5];
console.log(arraySum(arr));   // 15

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr){
    if (arr.length===1)
        return arr[0];
    else{
        let el1 = arr.pop();
        let el2 =  maxArray(arr);
        return Math.max(el1,el2 );
    }   
}
console.log(maxArray([3,90,4,-1]));      // 90
console.log(maxArray([3,5,2,8.2,8.5]));  // 8.5

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseStr(str) {
    if (str.length === 0) {
      return "";
    } else {
      return reverseStr(str.slice(1)) + str[0];
    }
  }
console.log(reverseStr("inception"));
console.log(reverseStr("tenet"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) 
      return true;
    else if (str[0] === str[str.length - 1]) 
      return isPalindrome(str.slice(1, -1));
    else 
      return false;
}
console.log(isPalindrome("inception"));     // false
console.log(isPalindrome("tenet"));         // true

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binSearch(arr,x,start = 0,end = arr.length-1){
    mid = Math.floor((start+ end)/2);
    if (x === arr[mid])
        return mid;
    else if (x<arr[mid])
        return binSearch(arr,x,start,mid-1);
    else
       return binSearch(arr,x,mid+1,end);
}
console.log(binSearch([1,2,3,4,5],4));    // 3

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function frequency(arr,x, index = 0, count = 0) {
    if (index >= arr.length) {
      return count; 
    }
  
    if (arr[index] === x) {
      count++; 
    }
  
    return frequency(arr, x, index + 1, count);
  }
console.log(frequency([1,1,2,1,3,1],1));    // 4

// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function inOrderTraversal(node) {
    if (node === null) {
      return; 
    }
    inOrderTraversal(node.left); 
    console.log(node.value); 
    inOrderTraversal(node.right); 
}
const tree = {
    value: 1,
    left: {
      value: 2,
      left: { value: 4, left: null, right: null },
      right: { value: 5, left: null, right: null }
    },
    right: {
      value: 3,
      left: { value: 6, left: null, right: null },
      right: { value: 7, left: null, right: null }
    }
};
console.log(inOrderTraversal(tree));

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function treeDepth(node) {
    if (node === null) {
      return 0; 
    }
  
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
}
console.log(treeDepth("depth of tree" ,tree));  // 3