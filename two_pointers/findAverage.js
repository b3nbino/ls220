/**
 * In this provided, you're given an array of numbers nums, and a specific integer k. Your objective is to
 * compute the average value of each contiguous subarray of length k within the given array.
 *
 * Requirements:
 *
 * The input will be an array of numbers and an integer k.
 * You need to find the average of every contiguous subarray of size k in the array.
 * The output should be an array containing these averages.
 */

function findAverages(arr, k) {
  start = 0;
  end = k;
  let averages = [];

  while (end <= arr.length) {
    let subArray = arr.slice(start, end);
    averages.push(subArray.reduce((acc, curr) => acc + curr) / k);

    start++;
    end++;
  }

  return averages;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2)); // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1)); // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
