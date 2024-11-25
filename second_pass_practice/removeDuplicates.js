/**
 * 1. Iterate through the linked list using a curr and prev pointer
 *    - If curr.val === prev.val (they have duplicate values)
 *      - prev.next === curr.next (remove the duplicate)
 *    - Else prev = curr (If they have different values then we have removed all duplicates and can move prev)
 *    - curr = curr.next (curr always moves)
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

function printLinkedList(head) {
  let currentNode = head;
  let listStr = "";
  while (currentNode !== null) {
    listStr += currentNode.val + " -> ";
    currentNode = currentNode.next;
  }
  listStr += "null"; // Indicate the end of the list
  console.log(listStr);
}

function deleteDuplicates(head) {
  let curr = head.next;
  let prev = head;

  while (curr) {
    if (prev.val === curr.val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"
