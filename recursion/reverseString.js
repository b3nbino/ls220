/**
 * Implement a recursive function that reverses a given string. The function should take a string as input and
 * return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the
 * problem using recursion.
 *
 * Base Case:
 * String with a length of 1 or less.
 */

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + reverseString(str.slice(1, -1)) + str[0];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.
