// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time / O(1) space
function removeDuplicatesFromLinkedList(linkedlist) {
    let currenNode = linkedlist;  // keeps track of our currentNode in the linkedlist

    while (currenNode !== null) {   // while the currentNode is null that means we still have values on the linkedlist to loop through
        let nextNode = currenNode.next;  // we then define the nextNode variable
        while (nextNode !== null && nextNode.value === currenNode.value) {  // check if the nextNode has the same value with the currentNode
            nextNode = nextNode.next;   // if yes , set the nextNode to the nextNode.next i.e node after the nextNode
        }

        currenNode.next = nextNode;   // set currentNode.next to the nextNode 
        currenNode = nextNode;      // set currentNode to nextNode
    }

    return linkedlist;
}  

// linkedlist = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6