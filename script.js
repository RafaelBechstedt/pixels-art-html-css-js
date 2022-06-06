let pixelBoard  = document.getElementById('pixel-board')
function fillPixelBoard (pixels){
    for (let index = 0; index < pixels; index += 1) {
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixelBoard.appendChild(pixel)
    }
}
fillPixelBoard(25)