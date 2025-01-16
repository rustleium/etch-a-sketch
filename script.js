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

function generateSquares (squareSize, totalSquares) {
  
  let squares = [];

  for(let i = 0; i <= totalSquares; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize;
    square.style.height = squareSize;
    squares.push(square);
  }
  return squares;
}

let generatedSquares = generateSquares(squareSize, totalSquares);
console.log(generatedSquares);