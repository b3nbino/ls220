// Write a function `rooms` that determines the minimum number of
// rooms required to handle a series of interviews given their
// time intervals.

// Each interval is represented as an array [start, end],
// where `start` is the start time and `end` is the end
// time of the interview.

// The function should return the number of conference rooms
// required to ensure no two interviews overlap in the same room.

// Example I:
// Input: intervals = [[20, 25], [10, 15], [0, 25]]
// Output: 2
// 0------------------------25
//                    20----25
//       10----15
// Explanation: The first interview is scheduled from
//              time 0 to 25. The second interview is
//              from time 10 to 15 and overlaps with
//              the first interview, requiring a second
//              room. The third interview from 20 to 25
//              also overlaps with the first. Thus, a
//              minimum of two rooms are required.

// Example II:
// Input: intervals = [[5, 9], [1, 3]]
// Output: 1
// Explanation: The first interview is scheduled from
//              time 5 to 9. The second interview is
//              from time 1 to 3. These two interviews
//              do not overlap, therefore only one
//              conference room is needed.

//Brute force solution
function createRoom(interview) {
  return new Array(interview[1] + 1)
    .fill("")
    .fill("#", interview[0], interview[1]);
}

function hasOverlap(room, interview) {
  for (let i = interview[0]; i <= interview[1]; i++) {
    if (room[i]) {
      return true;
    }
  }
  return false;
}

function rooms(schedule) {
  let roomsTaken = [];

  for (let i = 0; i < schedule.length; i++) {
    //Check each interview slot
    const interview = schedule[i];

    //If there aren't any rooms taken then take one
    if (roomsTaken.length === 0) {
      roomsTaken.push(createRoom(interview));
    } else {
      //Check if all the rooms have overlap with the current one
      let allOverlaped = roomsTaken.every((room) =>
        hasOverlap(room, interview)
      );

      //If so, take a new room
      if (allOverlaped) {
        roomsTaken.push(createRoom(interview));
      } else {
        //If not, add the current interview to the first open room
        //Find first open room
        let openRoom = roomsTaken.find((room) => !hasOverlap(room, interview));

        //Make sure there is space for interview
        while (openRoom.length < interview[1]) {
          openRoom.push("");
        }

        //Add interview
        openRoom.fill("#", interview[0], interview[1]);
      }
    }
  }

  return roomsTaken.length;
}

//[0, 10, 20]
//[15, 25, 25]

//LS Solution:
// function rooms(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   const numMeetings = intervals.length;
//   if (numMeetings === 0) return 0;

//   let endTimes = [intervals[0][1]];

//   for (let i = 1; i < numMeetings; i++) {
//     let earliestEnd = Math.min(...endTimes);
//     if (intervals[i][0] >= earliestEnd) {
//       endTimes[endTimes.indexOf(earliestEnd)] = intervals[i][1];
//     } else {
//       endTimes.push(intervals[i][1]);
//     }
//   }

//   return endTimes.length;
// }

// Test Cases:
console.log(
  rooms([
    [20, 25],
    [10, 15],
    [0, 25],
  ]) === 2
);
console.log(
  rooms([
    [5, 9],
    [1, 3],
  ]) === 1
);
console.log(
  rooms([
    [1, 2],
    [3, 4],
    [5, 6],
  ]) === 1
);
console.log(
  rooms([
    [1, 4],
    [2, 5],
    [3, 6],
  ]) === 3
);
console.log(
  rooms([
    [1, 3],
    [3, 6],
    [6, 8],
  ]) === 1
);
console.log(rooms([[1, 10]]) === 1);
console.log(
  rooms([
    [1, 3],
    [2, 4],
    [4, 6],
  ]) === 2
);
console.log(
  rooms([
    [1, 5],
    [2, 3],
    [4, 6],
    [5, 7],
  ]) === 2
);
console.log(
  rooms([
    [0, 5],
    [1, 3],
    [2, 6],
    [4, 7],
    [5, 9],
    [8, 10],
  ]) === 3
);
console.log(
  rooms([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]) === 1
);
console.log(
  rooms([
    [1, 20],
    [5, 10],
    [11, 15],
    [16, 18],
  ]) === 2
);
console.log(
  rooms([
    [1, 4],
    [1, 3],
    [1, 2],
    [1, 5],
  ]) === 4
);
// All test cases should log true
