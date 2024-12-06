/**
 * Implement a Stack class with push, pop, and peek methods. Then use this
 * stack to determine if a given string of parentheses is balanced.
 *
 * Step 1:
 * Implement a stack:
 *  - Use a class
 *  Stack actions:
 *    - Push (add to top)
 *    - Pop (remove from top)
 *    - Peek (look at top)
 *
 * Step 2:
 * Use our stack class to determine if a string of parenthes is balanced.
 *  - This can be done in a function
 *  - The input will always be a string
 *  - The string may be empty, if it is return undefined
 *  - The string will contian only parentheses
 *  - The parentheses can be (), {}, or []
 *
 * Data Structures:
 *  - Create a stack class
 *    - Use an array
 *  - Use stack to determine balance
 *
 * 1. Create stack class
 * 2. Create parenthes balance method
 *    - Use gaurd clause in case of empty string
 *    - Iterate through the given string
 *      - When we encounter an open parentheses add it to the stack
 *      - When we encounter a closed parentheses pop from the stack and compare with the current char
 *        - If the two do not match return false
 *    - Return true
 */

class Stack {
  constructor() {
    this.elements = [];
  }

  push(elem) {
    this.elements.push(elem);
  }

  pop(elem) {
    return this.elements.pop(elem);
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }
}

let ourStack = new Stack();

//Stack Method Examples
console.log(ourStack);
ourStack.push(1);
console.log(ourStack);
console.log(ourStack.peek());
console.log(ourStack.pop());
console.log(ourStack);

function isBalanced(str) {
  if (str.length === 0) return undefined;
  const matches = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let open = new Stack();

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if ("({[".includes(currChar)) {
      open.push(currChar);
    } else {
      let lastChar = open.pop();
      if (matches[lastChar] !== currChar) {
        return false;
      }
    }
  }

  return true;
}

console.log(isBalanced("") === undefined);
console.log(isBalanced("[{()}]") === true);
console.log(isBalanced("(()){[]}{}") === true);
console.log(isBalanced("()()(){}}{") === false);
console.log(isBalanced("({}{)(()((") === false);
