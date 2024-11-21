/**
 * 1. Use start and end pointers k length apart
 *    - Start is 0
 *    - End is k - 1
 * 2. Iterate while end + i < array length
 *    - Find the average of the current slice from start to end and add it to the result array
 * 3. Return the result array
 */

function findAverages(nums, k) {
  let start = 0;
  let end = k;
  let averages = [];

  for (let i = 0; end + i <= nums.length; i++) {
    let curr = nums.slice(start + i, end + i);
    averages.push(curr.reduce((acc, curr) => acc + curr, 0) / k);
  }

  return averages;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2)); // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1)); // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
