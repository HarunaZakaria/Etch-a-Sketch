const container = document.getElementById('container');
const resetButton = document.querySelector('button');

function createGrid(size) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', size);
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      const opacity = window
        .getComputedStyle(square)
        .getPropertyValue('opacity');
      if (opacity < 1) {
        square.style.opacity = parseFloat(opacity) + 0.1;
      }
      square.style.backgroundColor = randomColor;
    });
    container.appendChild(square);
  }
}

function resetGrid() {
  let newSize = prompt('Enter number of squares per side (maximum 100):');
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  createGrid(newSize);
}

createGrid(16);
