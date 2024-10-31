/**
 * Create a function that computes the power of a number using recursion. The function should take two parameters:
 * the base x and the exponent n, and return the result of x raised to the power of n (x^n). For example, if x is
 * 2 and n is 3, the function should return 8, since 2^3 is 8. The exponent will always be a positive number.
 *
 * Any number to the power of 0 is 1
 * Any number to the power of 1 is the number itself
 *
 * Base Case: The number is raised to 0
 */

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
}

console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.
