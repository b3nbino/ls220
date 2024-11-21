// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/**
 * Use a stack to keep track of the brackets
 * 1. Iterate through the string
 *    - If the current char is an opening bracket, add it to the stack
 *    - Else if it is closing
 *      - Pop the last bracket from the stack and check if they match
 *        - If so, continue
 *        - Else return false
 * 2. Return true
 */

const matches = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function areMatched(str) {
  const opening = "([{";
  let brackets = [];

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    if (opening.includes(curr)) {
      brackets.push(curr);
    } else {
      let lastOpening = brackets.pop();

      if (matches[lastOpening] !== curr) {
        return false;
      }
    }
  }

  return true;
}

console.log(areMatched("()")); // Output: true
console.log(areMatched("([()]{})")); // Output: true
console.log(areMatched("([((}]({}))")); // Output: false
console.log(areMatched("{{[[(())]]}}")); // Output: true
console.log(areMatched("")); // Output: true
console.log(areMatched("([)]")); // Output: false
