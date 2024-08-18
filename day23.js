// Day 23: LeetCode Hard

// Activity 1: Median of Two Sorted Arrays

// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// o Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// o Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;
    const half = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (merged[half - 1] + merged[half]) / 2;
    } else {
      return merged[half];
    }
  }
  
  // Test cases
  console.log(findMedianSortedArrays([1, 3], [2])); // 2
  console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
  console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
  console.log(findMedianSortedArrays([], [1])); // 1
  console.log(findMedianSortedArrays([2], [])); // 2

// Activity 2: Merge k Sorted Lists

// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// o Create a few test cases with linked lists and log the merged list.
class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  function mergeKLists(lists) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    const pq = [];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] !== null) {
        pq.push({ node: lists[i], index: i });
      }
    }
  
    pq.sort((a, b) => a.node.val - b.node.val);
  
    while (pq.length > 0) {
      const smallest = pq.shift();
      current.next = smallest.node;
      current = current.next;
  
      if (smallest.node.next !== null) {
        pq.push({ node: smallest.node.next, index: smallest.index });
      }
  
      pq.sort((a, b) => a.node.val - b.node.val);
    }
  
    return dummy.next;
  }
  
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const list3 = new ListNode(2, new ListNode(6));
  
  const mergedList = mergeKLists([list1, list2, list3]);
  
  let current = mergedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }

// Activity 3: Trapping Rain Water

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// o Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// o Log the amount of trapped water for a few test cases.
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let water = 0;
  
    while (left <= right) {
      if (height[left] < height[right]) {
        if (height[left] >= maxLeft) {
          maxLeft = height[left];
        } else {
          water += maxLeft - height[left];
        }
        left++;
      } else {
        if (height[right] >= maxRight) {
          maxRight = height[right];
        } else {
          water += maxRight - height[right];
        }
        right--;
      }
    }
  
    return water;
  }
  
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  console.log(trap([4, 2, 0, 3, 2, 5])); // 9
  console.log(trap([0, 1, 2, 3, 4, 5])); // 0
  console.log(trap([5, 4, 3, 2, 1, 0])); // 0

// Activity 4: N-Queens

// Task 4: Solve the "N-Queens" problem on LeetCode.
// o Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// o Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  
    function isSafe(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
      return true;
    }
  
    function placeQueens(row) {
      if (row === n) {
        const solution = [];
        for (let i = 0; i < n; i++) {
          solution.push(board[i].join(''));
        }
        solutions.push(solution);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          placeQueens(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    placeQueens(0);
    return solutions;
  }
  
  console.log(solveNQueens(4));
  console.log(solveNQueens(1));
  console.log(solveNQueens(5));

// Activity 5: Word Ladder

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// o Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such
// that only one letter can be changed at a time and each transformed word must exist in the word list.
// o Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
  
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
  
    while (queue.length > 0) {
      const [word, level] = queue.shift();
      if (word === endWord) return level;
  
      for (let i = 0; i < word.length; i++) {
        for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            queue.push([newWord, level + 1]);
            visited.add(newWord);
          }
        }
      }
    }
  
    return 0;
  }

  console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5
  console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // 0
  console.log(ladderLength("a", "c", ["a","b","c"])); // 2