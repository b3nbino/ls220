/**
 * 1. Split string into an array of words
 * 2. For each word
 *    - Using start and end pointers, swap their characters until they meet
 * 3. Return joined array
 */

//Using split
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       let letters = word.split("");
//       let start = 0;
//       let end = word.length - 1;

//       while (start < end) {
//         [letters[start], letters[end]] = [letters[end], letters[start]];
//         start++;
//         end--;
//       }

//       return letters.join("");
//     })
//     .join(" ");
// }

//Using anchor runner
function reverseWords(str) {
  let letters = str.split("");
  let anchor = 0;
  let runner = 0;
  let lastSpace;

  while (runner < letters.length) {
    while (letters[runner] !== " " && runner < letters.length) {
      runner++;
    }

    lastSpace = runner;
    runner -= 1;

    while (anchor < runner) {
      [letters[anchor], letters[runner]] = [letters[runner], letters[anchor]];
      anchor++;
      runner--;
    }

    anchor = lastSpace + 1;
    runner = lastSpace + 1;
  }

  return letters.join("");
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
