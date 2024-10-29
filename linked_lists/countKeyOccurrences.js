/**
 * Given a singly linked list and a specific value (referred to as the 'key'), your task is to determine how many times
 * this key appears within the linked list. For instance, given a linked list like 1->2->1->2->1->3->1 and a key of 1,
 * the expected result would be 4, as the key 1 appears four times in the list.
 */

function countKeyOccurrences(list, key) {
  let occurrences = 0;

  while (list) {
    if (list.val === key) {
      occurrences++;
    }
    list = list.next;
  }

  return occurrences;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach((val) => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);

// All test cases should log true.
