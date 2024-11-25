/**
 * 1. Iterate through linked list starting at head.next while curr is not null
 *    - If curr ever is head then there is a loop
 * 2. Return false
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index == cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

function hasCycle(head) {
  let curr = head;
  let visited = new Set();

  while (curr) {
    if (visited.has(curr)) {
      return true;
    }

    visited.add(curr);
    curr = curr.next;
  }

  return false;
}

console.log(hasCycle(list1)); // true
console.log(hasCycle(list2)); // true
console.log(hasCycle(list3)); // false
console.log(hasCycle(list4)); // true
console.log(hasCycle(list5)); // false
