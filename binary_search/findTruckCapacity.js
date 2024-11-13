// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters

function volumeEligible(orderVolumes, maxTrips, potentialVolume) {
  orderVolumes = [...orderVolumes];
  let tripsWithVolume = [];
  let currTrip = [];

  while (orderVolumes.length > 0) {
    let currOrder = orderVolumes.shift();

    if (currOrder > potentialVolume) {
      return false;
    }

    let tripTotal = currTrip.reduce((acc, curr) => acc + curr, 0) + currOrder;

    if (tripTotal <= potentialVolume) {
      currTrip.push(currOrder);
    } else {
      tripsWithVolume.push(currTrip);
      currTrip = [currOrder];
    }

    if (orderVolumes.length === 0) {
      tripsWithVolume.push(currTrip);
    }
  }

  return tripsWithVolume.length <= maxTrips;
}

function findTruckCapacity(orderVolumes, maxTrips) {
  let sum = orderVolumes.reduce((acc, curr) => acc + curr);
  let minVolume = Math.ceil(sum / maxTrips);
  let maxVolume = sum;
  let result = 0;

  while (minVolume <= maxVolume) {
    let midVolume = Math.floor((minVolume + maxVolume) / 2);

    if (volumeEligible(orderVolumes, maxTrips, midVolume)) {
      result = midVolume;
      maxVolume = midVolume - 1;
    } else {
      minVolume = midVolume + 1;
    }
  }

  return result;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
