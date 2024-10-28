// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

function minimumCount(array) {
  let positiveCount = countPositive(array);
  let negativeCount = countNegative(array);

  return Math.min(positiveCount, negativeCount);
}

function countPositive(array) {
  let left = 0;
  let right = array.length - 1;
  let leftMostIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] <= 0) {
      left = mid + 1;
    } else {
      leftMostIndex = mid;
      right = mid - 1;
    }
  }

  return leftMostIndex === -1 ? 0 : array.length - leftMostIndex;
}

function countNegative(array) {
  let left = 0;
  let right = array.length - 1;
  let rightMostIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < 0) {
      rightMostIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightMostIndex + 1;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
