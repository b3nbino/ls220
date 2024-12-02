// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

function makeAdjacencyList(edgeList) {
  let list = new Map();

  edgeList.forEach((pair) => {
    if (list.has(pair[0])) {
      list.get(pair[0]).push(pair[1]);
    } else {
      list.set(pair[0], [pair[1]]);
    }
    if (list.has(pair[1])) {
      list.get(pair[1]).push(pair[0]);
    } else {
      list.set(pair[1], [pair[0]]);
    }
  });

  return list;
}

function hasPath(edgeList, src, dst) {
  let ajdList = makeAdjacencyList(edgeList);
  let stack = [src];
  let visited = new Set();

  while (stack.length > 0) {
    let curr = stack.pop();

    if (visited.has(curr)) {
      continue;
    } else if (curr === dst) {
      return true;
    }

    visited.add(curr);
    ajdList.get(curr).forEach((edge) => stack.push(edge));
  }

  return false;
}

console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    1,
    4
  ) === true
);
console.log(
  hasPath(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  ) === false
);
console.log(
  hasPath(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [3, 5],
      [5, 6],
    ],
    1,
    6
  ) === true
);
console.log(hasPath([], 1, 1) === true);
console.log(
  hasPath(
    [
      [1, 2],
      [1, 3],
      [4, 5],
      [6, 7],
    ],
    2,
    5
  ) === false
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5],
      [2, 6],
      [6, 7],
      [7, 8],
      [8, 5],
    ],
    1,
    8
  ) === true
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
      [2, 7],
      [7, 8],
      [8, 7],
      [7, 9],
      [9, 10],
      [10, 11],
      [11, 12],
      [12, 10],
      [7, 13],
    ],
    1,
    13
  ) === true
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 1],
      [4, 5],
      [5, 6],
      [6, 4],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 7],
      [11, 12],
      [13, 14],
      [14, 15],
      [15, 13],
    ],
    1,
    12
  ) === false
);
// All test cases should log true
