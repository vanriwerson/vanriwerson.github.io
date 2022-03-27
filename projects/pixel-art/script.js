const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const clearBoardBtn = document.getElementById('clear-board');

function changeSelectedColor(event) {
  const previousSelected = document.querySelector('.selected');
  previousSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function coloringPixelToSelectedColor(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedPixel = event.target;

  selectedPixel.style.backgroundColor = selectedColor;
}

function populatePixelBoard(boardSize) {
  const totalPixels = Number(boardSize) ** 2;

  for (let i = 0; i < totalPixels; i += 1) {
    const newPixel = document.createElement('div');
    newPixel.setAttribute('class', 'pixel');
    newPixel.setAttribute('style', 'background-color: white;');
    newPixel.addEventListener('click', coloringPixelToSelectedColor);

    pixelBoard.appendChild(newPixel);
  }
}

function clearPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].setAttribute('style', 'background-color: white;');
  }
}

clearBoardBtn.addEventListener('click', clearPixelBoard);

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}

function getRandomColor() {
  const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()});`;
  return randomColor;
}

function generateNewColorsPalette() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].setAttribute('style', `background-color: ${i === 0 ? 'black' : getRandomColor()};`);
    colors[i].addEventListener('click', changeSelectedColor);
  }
}

const generateBoardBtn = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function validateBoardSize() {
  if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }

  return boardSize.value;
}

const pixelSize = 40;

function setBoardArea() {
  if (boardSize.value > 0) {
    const boardWidth = Number(validateBoardSize()) * pixelSize;
    pixelBoard.innerHTML = '';
    pixelBoard.style.width = `${boardWidth}px`;
    populatePixelBoard(Number(validateBoardSize()));
  } else {
    window.alert('Board inválido!');
  }
}

generateBoardBtn.addEventListener('click', setBoardArea);

populatePixelBoard(5);
generateNewColorsPalette();
