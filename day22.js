// Day 22: LeetCode Medium

// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// o Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// o Create a few test cases with linked lists and log the sum as a linked list.
// Definition for singly-linked list.

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
    
}
  function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let current = dummyHead;
    let carry = 0;
  
    while (p !== null || q !== null) {
      const x = p !== null ? p.val : 0;
      const y = q !== null ? q.val : 0;
      const sum = carry + x + y;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  const result = addTwoNumbers(l1, l2);
  console.log(result);

// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// o Write a function that takes a string and returns the length of the longest substring without repeating characters.
// o Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
  
    for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb"));   // 3
  console.log(lengthOfLongestSubstring("bbbbb"));      // 1
  console.log(lengthOfLongestSubstring("pwwkew"));     // 3
  console.log(lengthOfLongestSubstring(""));           // 0
  console.log(lengthOfLongestSubstring("a"));          // 1

// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// o Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// o Log the maximum amount of water for a few test cases.
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
  
    while (left < right) {
      const area = Math.min(height[left], height[right]) * (right - left);
      maxArea = Math.max(maxArea, area);
  
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  }
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
  console.log(maxArea([1, 1]));     // 1
  console.log(maxArea([4, 3, 2, 1, 4]));   // 16
  console.log(maxArea([1, 2, 1]));   // 2

// Activity 4: 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
// o Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// o Log the triplets for a few test cases, including edge cases.
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          result.push([nums[i], nums[left], nums[right]]);
  
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
  
          left++;
          right--;
        }
      }
    }
  
    return result;
  }
  
  console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
  console.log(threeSum([0, 1, 1])); // []
  console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
  console.log(threeSum([-2, 0, 0, 2, 2])); // [[-2, 0, 2]]

// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// o Write a function that takes an array of strings and groups anagrams together.
// o Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
    }
  
    return Array.from(map.values());
  }
  
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  console.log(groupAnagrams([""]));
  // [[""]]
  console.log(groupAnagrams(["a"]));
  // [["a"]]
  console.log(groupAnagrams(["hi", "ih", "ho", "oh"]));
  // [["hi", "ih"], ["ho", "oh"]]