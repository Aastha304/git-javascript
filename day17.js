// Day 17: Data Structures

// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor(){
        this.head = null;
    }
    
    addNode(head,n){
        if (!this.head)
            this.head = new Node(n);
        else{
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
              lastNode = lastNode.next
            }
        }
        lastNode.next = new Node(n);
    }
    }
    removeNode() {
        if (!this.head)
            return null;
        else if (!this.head.next){
            let delnode = this.head;
            this.head = null;
            return delnode.value;
        }
        else{
            let lastNode = this.head;
            if (lastNode) {
            while (lastNode.next.next) {
              lastNode = lastNode.next
            }
            }
            lastNode.next = null;
            return this.head;
    }
    }

    display() {
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
    
}
// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor(){
        this.stack = [];
        this.top = -1;
    }

    push(value){
        this.top++;
        this.stack[this.top] = value;
    }
    pop(){
        if(this.top=== -1)
            return null;
        else{
            let del = this.stack[this.top];
            this.top--;
            return del;
        }
    }
    peek(){
        if(this.top=== -1)
            return null;
        else
        return this.stack[this.top];
    }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
console.log(s1.peek());  //2
console.log(s1.pop());   //2

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
let s2 = new Stack();
str = "melody";
for (let i = 0; i<str.length;i++){
     s2.push(str[i]);
}
console.log(s2);
let newstr = "";
for (let i = 0; i<str.length;i++){
    newstr = newstr+s2.pop() ;
}

console.log("reversed string: ", newstr);  // ydolem

// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(element) {
      const newNode = new Node(element);
      if (!this.front) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (!this.front) {
        throw new Error("Queue is empty");
      }
      const element = this.front.data;
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
      return element;
    }
  
    front() {
      if (!this.front) {
        throw new Error("Queue is empty");
      }
      return this.front.data;
    }
  
    printer() {
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(5);
console.log(q1.dequeue());  // 1

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.in_recursive(this.root, newNode);
      }
    }
  
    in_recursive(currNode, newNode) {
      if (newNode.value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
        } else {
          this.in_recursive(currNode.left, newNode);
        }
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
        } else {
          this.in_recursive(currNode.right, newNode);
        }
      }
    }
  
    inOrderTraversal() {
      this.recurse_trav(this.root);
    }
  
    recurse_trav(currNode) {
      if (currNode) {
        this.recurse_trav(currNode.left);
        console.log(currNode.value);
        this.recurse_trav(currNode.right);
      }
    }
}
