// 1. Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

//The fn function takes one or two arguments:
// ~ arr[i] - number from the arr
// ~ i - index of arr[i]

function filterArray(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
}

// 2. Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// 
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  
function reduceArray(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
    return val;
  }
