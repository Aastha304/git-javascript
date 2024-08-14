// Day 21: LeetCode Easy

// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on LeetCode.

// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function findSum(arr,x){
    let pair = [];
    for (let i=0 ; i< arr.length ;i++){
        for (let j=i+1 ; j<arr.length ; j++){
            if (arr[i] + arr[j] === x)
                pair.push([i,j]);

        }
    }
    return pair
}

let arr = [1,2,3,4,5] ;
console.log(findSum(arr,4));   // [ [ 0, 2 ] ]
console.log(findSum(arr,5));   // [ [ 0, 3 ], [ 1, 2 ] ]

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.

// o Write a function that takes an integer and returns it with its digits reversed.
// o Handle edge cases like negative numbers and numbers ending in zero.
// o Log the reversed integers for a few test cases.
function reverseDigits(n){
    let sign = 1
    if(n<0){sign =(-1)}
    n= Math.abs(n);
    let sum =0;
    while (n>0){
        sum = sum*10 + n%10;
        
        n = Math.floor(n/10);
    }
    return sign*sum;
}

console.log(reverseDigits(123))
console.log(reverseDigits(-476));


// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.

// o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// o Log the result for a few test cases, including edge cases like negative numbers.
function numberPalindrome(n){
    if (n ===reverseDigits(n))
        return true;
    else
        return false;
}

console.log("135 is palindrome:",numberPalindrome(135));  // false
console.log("121 is palindrome:",numberPalindrome(121));  // true

// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
function mergeList(l1,l2){
    let temp = new Node(0);
    let current = temp;
    while (l1 && l2) {
        if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
        } 
        else {
          current.next = l2;
          l2 = l2.next;
        }
        current = current.next;
      }
    
      current.next = l1 || l2;
      return temp.next;

}

// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', )', {, ]', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
function ValidParanthesis(str){
    const stack = [];
    const brackets = {')':'(' , '}':'{', ']':'['}
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
        } 
        else if (char === ')' || char === '}' || char === ']') {
          if (stack.length === 0 || stack.pop() !== brackets[char]) {
            return false;
          }
        }
}
    return true;
}
console.log(ValidParanthesis('([])'))    // true
console.log(ValidParanthesis('([])}'))   // false