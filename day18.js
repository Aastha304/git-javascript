// Day 18: Algorithms

// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr,n){
    for (let i= n-1; i>=0; i--){
        for (let j=0; j<i; j++){
            if (arr[j]> arr[j+1])
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        }
    }
    return arr;
}
arr1 = [3,2,5,1,4];
console.log(bubbleSort(arr1,5));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr){
    for (let i = 0; i < arr.length-1; i++)
    {
        let min_index = i;
        for (let j = i+1; j < arr.length; j++)
        {
            if (arr[j] < arr[min_index])
                min_index = j;
        }
        
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    return arr;
}

let arr2 = [7,2,-1,4,0,1];
console.log(selectionSort(arr2));   //  [ -1, 0, 1, 2, 4, 7 ]

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(arr, start, end){
    if (start >= end)
         return;

    let pivot = start;
    let i = start+1, j = end;
    do
    {
        while (i <= end && arr[i] <= arr[pivot])
            i++;
            
        while (arr[j] > arr[pivot])
            j--;

        if (i < j)
            [arr[i], arr[j]] = [arr[j], arr[i]];
    }while (i <= j)

    [arr[j], arr[start]] = [arr[start], arr[j]];

    quicksort(arr, start, j-1);
    quicksort(arr, j+1, end);
    
    return arr;
}
arr2 = [1,5,3,4,2];
console.log(quicksort(arr2,0,4));  // [1,2,3,4,5]

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr,x){
    for (let i =0 ; i<arr.length ; i++){
        if (arr[i]== x)
            return i;
    }
    return `Value not found`;
}

arr3 = [1,2,3,4,5];
console.log(linearSearch(arr3,9));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binSearch(arr,x,start = 0,end = arr.length-1){
    mid = Math.floor((start+ end)/2);
    if (x === arr[mid])
        return mid;
    else if (x<arr[mid])
        return binSearch(arr,x,start,mid-1);
    else
       return binSearch(arr,x,mid+1,end);
}
console.log(binSearch([1,2,3,4,5],4)); // 3

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacter(str) {
    const count = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    return count;
}
  
const str = "something";
const charCount = countCharacter(str);
console.log(charCount);
// { h: 1, e: 1, l: 3, o: 2,  : 1, w: 1, r: 1, d: 1 }

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function uniqueSubsting(str) {
    let longestSubstr = '';
    let currentSubstr = '';
    let charSet = new Set();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!charSet.has(char)) {
        charSet.add(char);
        currentSubstr += char;
        if (currentSubstr.length > longestSubstr.length) {
          longestSubstr = currentSubstr;
        }
      } else {
        charSet.clear();
        currentSubstr = char;
        charSet.add(char);
      }
    }
  
    return longestSubstr;
  }
  
  const string = "abcabcbb";
  const longestSubstr = uniqueSubsting(string);
  console.log(longestSubstr); // "abc"

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length; // handle cases where k is greater than arr.length
    const rotatedArr = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
    console.log(rotatedArr);
    return rotatedArr;
}
  
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(arr, k);    // [5, 6, 7, 1, 2, 3, 4]

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeArray(arr1,arr2){
    let arr3 = [];
    let i = 0 ,j=0,k=0;
    while(arr1[i] && arr2[j]){
        if (arr1[i]<arr2[j]){
            arr3[k]= arr1[i]
            i++;k++;
        }
        else{
            arr3[k]= arr2[j]
            j++;k++;
        }
    }
    while (arr1[i]){
        arr3[k] = arr1[i];
        i++; k++
    }
    while(arr2[j]){
        arr3[k] = arr1[j];
        j++; k++
    }

    return arr3;
}
let merge = mergeArray([1,3,5],[2,4]);
console.log("[1,3,5] + [2,4] =",merge);  // [1,2,3,4,5]

// Activity 5: Dynamic Programming (Optional)

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n){
    const arr = [0,1];
    if (n==1)
        return [0];
    for (let i = 2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log(fibonacci(6));  // [0, 1, 1, 2, 3, 5]

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = new Array(capacity + 1).fill(0);
  
    for (let i = 0; i < n; i++) {
      for (let w = capacity; w >= weights[i]; w--) {
        dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
      }
    }
  
    console.log(`The maximum value that can be obtained is: ${dp[capacity]}`);
    return dp[capacity];
  }
  
  const weights = [2, 3, 5, 7];
  const values = [10, 20, 30, 40];
  const capacity = 10;
  
  knapsack(weights, values, capacity);   // The maximum value that can be obtained is: 60