// Given an array of integers nums, find sum of all of its elements using recursion.
// Base Case: We have reached the end of the array

function sum(arr) {
  function sumHelper(index) {
    if (index === arr.length) {
      return 0;
    }
    return arr[index] + sumHelper(index + 1);
  }

  return sumHelper(0);
}

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.
