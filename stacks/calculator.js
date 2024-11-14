// Create a function `calculator` that evaluates arithmetic
// expressions given as strings. The function should support
// basic arithmetic operations: addition (+), subtraction (-),
// multiplication (*), and division (/).

// The function should:
// 1. Accept a string input representing a valid arithmetic expression.
//    The input will consist of non-negative integers, arithmetic
//    operator(+, -, *, /), and may contain whitespace characters.
// 2. Evaluate the expression following the standard order of operations
//    (multiplication and division before addition and subtraction).
// 3. Return the result as an integer.

// For division operations, the result should be rounded down to
// the nearest integer (floor division).

// You can assume that the input will never contain division by zero.

// Note: Implement the calculation logic yourself without using
// any built-in expression evaluation functions.

// Examples:
//
// 1. Input: "4 + 3 * 2"
//    Output: 10
//    Explanation: 3*2 is evaluated first (6), then added to 4.
//
// 2. Input: "15 / 3 - 2"
//    Output: 3
//    Explanation: 15/3 is 5, then 2 is subtracted.
//
// 3. Input: "10 + 8 / 3"
//    Output: 12
//    Explanation: 8/3 is 2 (rounded down), then added to 10.

function calculator(expression) {
  let nums = expression.match(/[0-9]+/g).map((num) => Number(num));
  let symbols = expression.match(/(\+|\-|\*|\/)/g);
  let stack = [];

  symbols.forEach((symbol) => {
    stack.push(symbol);

    if (stack[stack.length - 1] === "*") {
      let var1 = nums[stack.length - 1];
      let var2 = nums[stack.length];
      let result = var1 * var2;
      nums.splice(stack.length - 1, 2, result);
      stack.pop();
    } else if (stack[stack.length - 1] === "/") {
      let var1 = nums[stack.length - 1];
      let var2 = nums[stack.length];
      let result = Math.floor(var1 / var2);
      nums.splice(stack.length - 1, 2, result);
      stack.pop();
    }
  });

  while (stack.length > 0) {
    if (stack[0] === "+") {
      let var1 = nums[0];
      let var2 = nums[1];
      let result = var1 + var2;
      nums.splice(0, 2, result);
      stack.shift();
    } else if (stack[0] === "-") {
      let var1 = nums[0];
      let var2 = nums[1];
      let result = var1 - var2;
      nums.splice(0, 2, result);
      stack.shift();
    }
  }

  return nums[0];
}

console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true.
