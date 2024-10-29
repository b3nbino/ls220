/**
 * Given the head of a singly linked list containing integers, create a new linked list where each node represents the frequency
 * of a unique element from the original list. The order of nodes in the new list doesn't matter. Return the head of this new
 * frequency list.
 */

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

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function createFrequencyList(head) {
  if (!head) return null;

  let frequencies = new Map();

  while (head) {
    frequencies.set(head.val, (frequencies.get(head.val) || 0) + 1);
    head = head.next;
  }

  let dummy = new ListNode(0);
  let curr = dummy;

  for (let frequency of frequencies.values()) {
    curr.next = new ListNode(frequency);
    curr = curr.next;
  }

  return dummy.next;
}

// Test cases
console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
console.log(testFrequencyList([4, 4, 4, 4], [4]));
console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
console.log(testFrequencyList([], []));
console.log(testFrequencyList([1, 1, 1], [3]));
console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));
// All test cases should log true.
