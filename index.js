function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Example usage (optional)
console.log(distanceFromHqInBlocks(43)); // 1 block
console.log(distanceFromHqInBlocks(50)); // 8 blocks
console.log(distanceFromHqInFeet(43)); // 264 feet
console.log(distanceFromHqInFeet(50)); // 2112 feet
console.log(distanceTravelledInFeet(43, 48)); // 1320 feet
console.log(distanceTravelledInFeet(50, 60)); // 2640 feet
console.log(calculatesFarePrice(43, 44)); // 0
console.log(calculatesFarePrice(34, 32)); // 2.56
console.log(calculatesFarePrice(50, 58)); // 25
console.log(calculatesFarePrice(34, 24)); // 'cannot travel that far'
  