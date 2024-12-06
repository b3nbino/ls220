/**
 * Implement a function that takes a sorted array of integers and a target sum.
 * The function should find two numbers in the array that add up to the target sum. If
 * no such pair exists, return null.
 *
 * Problem:
 * - Implement a function
 * - Input is always an array of integers and a target sum
 * - Input may contain negative integers
 * - Output is a pair of numbers that add up the the target sum
 * - If no pairs add up to the sum return null
 * - Return the first pair found
 *
 * Data Structures:
 *  Input: an array of integers
 *  Output: an array of a pair of integers
 *  In-Between: Two pointers start-end technique
 *
 * Algorithm:
 *  1. Iterate through the array using the start-end technique
 *     - Start increments if the current sum is too low
 *     - End decrements if the current sum is too high
 *     - If the current sum equals the target return the current pair
 *  2. Return null
 */

function findPairWithSum(arr, targetSum) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currSum = arr[start] + arr[end];

    if (currSum === targetSum) {
      return [arr[start], arr[end]];
    } else if (currSum < targetSum) {
      start++;
    } else {
      end--;
    }
  }

  return null;
}

// Example usage:
console.log(findPairWithSum([0, 2, 3, 4, 5], 2)); // Should return [0, 2]
console.log(findPairWithSum([1, 2, 3, 4, 5], 7)); // Should return [2, 5]
console.log(findPairWithSum([-6, -1, 0, 3, 5], -1)); // Should return [-6, 5]
console.log(findPairWithSum([-7, -5, -3, 2, 5], -10)); // Should return [-7, -3]
console.log(findPairWithSum([1, 2, 3, 4, 5], 10)); // Should return null
console.log(findPairWithSum([1, 10, 13, 17, 50], 21)); // Should return null
