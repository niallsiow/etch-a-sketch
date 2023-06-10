function getRandomColor(){
    const num = Math.floor(Math.random() * (0xFFFFFF + 1));
    return num.toString(16);
}

const DrawingMode = {
    Standard: 'standard',
    Rainbow: 'rainbow'
}

let currentDrawingMode = DrawingMode.Standard;

function setDrawingMode(mode){
    currentDrawingMode = mode;
    makeNewGrid(gridWidth);
    console.log(currentDrawingMode);
}


const grid = document.querySelector('.grid');
const gridPixelWidth = grid.clientWidth;

function makeNewGrid(gridWidth){
    // Get rid of old grid first
    grid.replaceChildren();

    let gridElementPixelWidth = gridPixelWidth / gridWidth;
    const borderPixelWidth = 1;
    gridElementPixelWidth = gridElementPixelWidth - (2 * borderPixelWidth);

    for(let i = 0; i < gridWidth; i++){
        for(let j = 0; j < gridWidth; j++){
            const gridElement = document.createElement('div');

            gridElement.style.width = gridElementPixelWidth  + 'px';
            gridElement.style.height = gridElementPixelWidth + 'px';

            
            // change this to a switch statement
            if(currentDrawingMode === DrawingMode.Standard){
                gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));
            }
            else if(currentDrawingMode === DrawingMode.Rainbow){
                gridElement.addEventListener('mouseover', () => {
                    console.log('#' + getRandomColor().toUpperCase());
                    gridElement.style.backgroundColor = '#' + getRandomColor().toUpperCase();
                });
            }
    
            grid.appendChild(gridElement);
        }
    }
}

let gridWidth = 16;
makeNewGrid(gridWidth);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let gridWidth = prompt('Enter Grid Width:', 16);

    if(gridWidth > 100){
        gridWidth = prompt('Grid Width entered is too big, please enter a grid width less than 100:', 16);
    }

    makeNewGrid(gridWidth);
});

const standardButton = document.querySelector('.standard');
standardButton.addEventListener('click', () => setDrawingMode(DrawingMode.Standard));

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => setDrawingMode(DrawingMode.Rainbow));