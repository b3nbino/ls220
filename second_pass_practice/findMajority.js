// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

/**
 * 1. Iterate through all of the numbers
 *    - Using for loop check if the current element exists in the map
 *      - If it does, add one to the set and check if that elements count amounts to at least half of the array length
 *        -Return the current element
 *      - Else add it to the map
 *
 * # We are using a map here because it uses hashing which gives us a constant time complexity
 */

function findMajority(nums) {
  let counts = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (counts.has(curr)) {
      let currCount = counts.get(curr);

      if (currCount + 1 >= nums.length / 2) {
        return curr;
      } else {
        counts.set(curr, currCount + 1);
      }
    } else {
      counts.set(curr, 1);
    }
  }
}

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true
