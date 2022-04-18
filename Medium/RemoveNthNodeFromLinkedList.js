// O(n) time / O(1) space
function removeNthNodeFromLinkedList(head, n){
    // initialize two pointers and set counter to 1
    let first = head;
    let second = head;
    let counter = 1;

    // we move the second pointer 4 nodes ahead of the first pointer
    while (counter <= n) {
        second = second.next;
        counter++;
    }

    // if our second pointer is equals to null that means our first pointer is the value we wanna remove
    if (second === null) {
        head.value = head.next.value;   // update the value of the head to the next value
        head.next = head.next.next;     // update the next value of the head to next of the next value
        return;
    }

    // this means it will only loop as long as second.next is not null, if the second.next is going to be null it will stop at the last node of the list
    while (second.next !== null) {
        second = second.next;       // we increase the second value
        first = first.next;         // we increase the first value both at the same time   
    }

    // if first is pointing to the node right before the node we want to remove
    first.next = first.next.next;;
}