// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

function findMajority(arr) {
  let numCount = new Map();
  let halfOfArray = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (numCount.has(arr[i])) {
      let currNumCount = numCount.get(arr[i]);
      numCount.set(arr[i], currNumCount + 1);
      if (numCount.get(arr[i]) >= halfOfArray) {
        return arr[i];
      }
    } else {
      numCount.set(arr[i], 1);
    }
  }
  return undefined;
}

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true
