/**
 *
 */

function assignTreats(pets, treats) {
  let petsSatisfied = 0;
  let currTreat = 0;
  let currPet = 0;

  treats.sort((a, b) => a - b);
  pets.sort((a, b) => a - b);

  while (currTreat < treats.length) {
    if (treats[currTreat] >= pets[currPet]) {
      petsSatisfied += 1;
      currTreat++;
      currPet++;
    } else {
      currTreat++;
    }
  }

  return petsSatisfied;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1, 2, 3], [1, 2, 3]) === 3);
console.log(assignTreats([4, 5, 6], [1, 2, 3]) === 0);

// All test cases should log true.
