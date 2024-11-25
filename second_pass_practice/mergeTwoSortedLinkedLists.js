/**
 * Move through both given lists, one node at a time
 *  - Whichever one is greater
 *    - Set next to that value and move to the next node
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
  let current = head;
  let listStr = "";
  while (current !== null) {
    listStr += current.val + " -> ";
    current = current.next;
  }
  listStr += "null";
  console.log(listStr);
}

function mergeSortedLists(list1, list2) {
  if (!list1 || !list2) {
    return list1 || list2;
  }
  let head1 = list1;
  let head2 = list2;
  let resultHead = list1.val < list2.val ? list1 : list2;
  let curr = resultHead;

  while (head1 || head2) {
    let val1 = head1 ? head1.val : Infinity;
    let val2 = head2 ? head2.val : Infinity;

    if (val1 < val2) {
      let nextLowest = head1;
      head1 = head1.next;
      curr.next = nextLowest;
    } else {
      let nextLowest = head2;
      head2 = head2.next;
      curr.next = nextLowest;
    }

    curr = curr.next;
  }

  return resultHead;
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
