// Implement a function that reverses a singly linked list in-place.
// You should modify the existing nodes' pointers without creating new nodes.
/**
 * 1. Iterate throught the linked list until curr.next is null
 *    - Use three pointers, prev, curr, and next
 *    - Point curr to prev and move on to next
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let nextNode = curr.next;

    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array for easy checking
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage:
let list = createLinkedList([1, 2, 3, 4, 5]);
let reversed = reverseLinkedList(list);
console.log(linkedListToArray(reversed)); // Should print [5, 4, 3, 2, 1]
