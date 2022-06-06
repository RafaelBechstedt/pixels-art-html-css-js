window.onload

// CRIANDO QUADRO DE PIXELS
let pixelBoard = document.getElementById('pixel-board')
function fillPixelBoard(pixels) {
    for (let index = 0; index < pixels; index += 1) {
        let newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        pixelBoard.appendChild(newDiv)
    }
}
fillPixelBoard(25)

// SELECIONANDO COR
function selectingColor(event) {
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}

let colors = document.getElementsByClassName('color')

for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', selectingColor)
}

// PREENCHIMENTO

for (let index = 0; index < pixelBoard.children.length; index += 1) {
    pixelBoard.children[index].addEventListener("click", fillPixelsWithColors)
}

function fillPixelsWithColors(event) {
    let colorSelected = document.querySelector('.selected').id;
    event.target.style.backgroundColor = colorSelected
}