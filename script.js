function computeSquareSize (squaresPerSide) {
  const canvasSize = 660;
  return canvasSize / squaresPerSide;
}

let squareSize = computeSquareSize(39);
console.log(squareSize);

function calculateSquareAmount (squaresPerSide) {
  return squaresPerSide * squaresPerSide;
}

let totalSquares = calculateSquareAmount(39);
console.log(totalSquares);