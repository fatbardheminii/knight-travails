function knightMoves(start, end) {
  // All possible moves a knight can make
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // Check if a position is on the board
  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // Convert position to string for visited set
  function posToString(pos) {
    return pos.join(",");
  }

  let queue = [[start, [start]]];
  let visited = new Set();

  while (queue.length > 0) {
    let [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    for (let move of moves) {
      let nextPos = [current[0] + move[0], current[1] + move[1]];
      let nextPosStr = posToString(nextPos);

      if (isValid(nextPos[0], nextPos[1]) && !visited.has(nextPosStr)) {
        visited.add(nextPosStr);
        queue.push([nextPos, [...path, nextPos]]);
      }
    }
  }

  return null; // If no path is found
}

// Function to print the result
function printResult(start, end) {
  let path = knightMoves(start, end);
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((position) => console.log(position));
  } else {
    console.log("No valid path found.");
  }
}

// Example usage
printResult([1, 3], [7, 7]);
