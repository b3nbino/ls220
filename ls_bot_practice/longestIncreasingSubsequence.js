/**
 * Implement a function that finds the length of the longest increasing subsequence
 * in an array of integers. A subsequence is a sequence that can be derived from
 * another sequence by deleting some or no elements without changing the order of
 * the remaining elements.
 *
 * Problem:
 *  - Input is an array of integers
 *  - Output is the length of the longest increasing subsequence
 *  - A subsequence is a sequence that can be derived from another sequence by deleting
 *    some or no elements without changing the order of the remaining elements
 *  - If the array is empty return 0
 *
 * Algorithm:
 * 1. Get an array of the sorted elements indexes
 * 2. Find each the longest subsequence
 *  a. Iterate through the array creating a new copy for each index
 *    - If the next element is greater than the current element increment
 *    - Else delete the next element
 *  b. Once we reach the end assign the longest to itself or the new length
 * 3. Return the longest subsequence
 */

function lengthOfLIS(nums) {
  let numsAscIndexes = nums
    .slice()
    .sort((a, b) => a - b)
    .map((num) => nums.indexOf(num));
  let longestSubsequence = 0;

  // numsAscIndexes.forEach((_, currIndex) => {
  //   let indexes = [...numsAscIndexes];
  //   let i = currIndex;

  //   while (i < indexes.length) {
  //     if (indexes[i] < indexes[i + 1]) {
  //       i++;
  //     } else {
  //       indexes.splice(i + 1, 1);
  //     }
  //   }

  //   longestSubsequence = Math.max(longestSubsequence, indexes.length);
  // });

  return numsAscIndexes;
}

// Example usage:
console.log(lengthOfLIS([])); // Should return 0
console.log(lengthOfLIS([5])); // Should return 1
console.log(lengthOfLIS([1, 2, 3, 4, 5])); // Should return 5
console.log(lengthOfLIS([1, 2, 0, 5, 10])); // Should return 4
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Should return 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // Should return 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // Should return 1
