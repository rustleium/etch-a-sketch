function computeSquareSize (squaresPerSide) {
  const canvasSize = 660;
  return canvasSize / squaresPerSide;
}

// let squareSize = computeSquareSize(39);
// console.log(squareSize);

function calculateSquareAmount (squaresPerSide) {
  return squaresPerSide * squaresPerSide;
}

// let totalSquares = calculateSquareAmount(39);
// console.log(totalSquares);

function generateSquares (squareSize, totalSquares) {
  
  let squares = [];

  for(let i = 1; i <= totalSquares; i++) {
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.classList.add('square');
    squares.push(square);
  }
  return squares;
}

// let generatedSquares = generateSquares(squareSize, totalSquares);
// console.log(generatedSquares);

function fillCanvas (squares){
  const canvas = document.querySelector('.container');
  squares.forEach((square) => {
    canvas.appendChild(square);
  });
}

// fillCanvas(generatedSquares);

function startEtching() {

  let squareSize = computeSquareSize(13);
  let totalSquares = calculateSquareAmount(13);
  let generatedSquares = generateSquares(squareSize, totalSquares);
  fillCanvas(generatedSquares);

}

startEtching();