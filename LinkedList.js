// Q5. Sorting a linked list using merge sort

class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  // The primary operation in a linked list are insert, remove, and get(find).
  // head indicates the beginning of the list.
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    //The head always contains the 1st node. In this case, we start with an empty list, represented by null.
    //O(1)
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    //Create a new node item
    //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
    //Start at the beginning of the list and move through the list until you reach the end of the list
    //Set the end node's next pointer to the new node
    //The new node's next pointer is null (indicating that the new node now is the last node on the list)
    //O(n)
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
  
    //insertBefore : inserts a new node before a given node containing a key.
    insertBefore(newItem, value) {
      if (this.head === null) {
        this.insertFirst(newItem);
      }
  
      let currentNode = this.head;
      let previousNode = this.head;
  
      while (currentNode !== null && currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
  
      const newNode = new _Node(newItem, previousNode.next);
  
      previousNode.next = newNode;
    }
    // insertAfter : inserts a new node after a node containing the key.
    insertAfter(newItem, value) {
      let currentNode = this.head;
  
      while (currentNode !== null && currentNode.value !== value) {
        currentNode = currentNode.next;
      }
      if (value.next === null) {
        this.insertLast(newItem);
        return;
      }
  
      const newNode = new _Node(newItem, currentNode.next);
      currentNode.next = newNode;
    }
    // insertAt : inserts an item at a specific position in the linked list.
    insertAt(item, position) {
      if (this.head === null) {
        this.insertFirst(item);
      }
  
      let currentNode = this.head;
      let currentPosition = 0;
      while (currentPosition !== position) {
        currentPosition++;
        currentNode = currentNode.next;
      }
  
      const newNode = new _Node(item, currentNode.next);
  
      currentNode.next = newNode;
    }
  
    //get
    find(item) {
      //start at the head
      let currNode = this.head;
      //if the list is empty
      if (!this.head) {
        return null;
      }
      //check for the item
      while (currNode.value !== item) {
        //return null if it's the end of the list and the item is not on the list
        if (currNode.next === null) {
          return null;
        } else {
          //otherwise, keep looking
          currNode = currNode.next;
        }
      }
      //found it
      return currNode;
    }
    //removal
    //delete from the beginning of the list.
    //delete from the end of the list.
    //delete a node between 2 other nodes.
  
    //best-case performance is O(1), and the average and worst cases are O(n) due to finding the node
    remove(item) {
      //if the list is empty
      if (!this.head) {
        return null;
      }
      //if the node to be removed is head, make the next node head
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      //start at the head
      let currNode = this.head;
      //keep track of previous
      let previousNode = this.head;
  
      while (currNode !== null && currNode.value !== item) {
        //save the previous node
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      previousNode.next = currNode.next;
    }
  }



function llMergeSort(head){
    if(head === null || head.next === null){
        return head;
    }
    //break the list from the middle
    let middle = llMiddle(head);
    let middleNext = middle.next;
    middle.next = null;

    //sort the lower bound
    let left = llMergeSort(head);
    //sort the upper bound
    let right = llMergeSort(middleNext);
    //return merged sorted list
    return sortedMerge(left, right);
}

//Merge the sorted list
function sortedMerge(a, b){
    let result = null;

    if(a === null){
        return b;
    }
    if(b === null){
        return a;
    }

    //recursively merge the list by calling the same function with appropriate next value
    if(a.value <= b.value){
        result = a;
        result.next = sortedMerge(a.next, b);
    }else{
        result = b;
        result.next = sortedMerge(a, b.next)
    }
    return result;
}

function llMiddle(head){
    if(head === null){
        return head;
    }

    let slow = head;
    let fast = head;

    while(fast.next !==null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


let ll = new LinkedList();
ll.insertFirst(10);
ll.insertLast(15);
ll.insertLast(1);
ll.insertLast(4);
ll.insertLast(-3);

let sortedLL = llMergeSort(ll.head);
console.log(sortedLL);