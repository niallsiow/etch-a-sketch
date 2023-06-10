function getRandomColor(){
    const num = Math.floor(Math.random() * (0xFFFFFF + 1));
    return num.toString(16);
}

const DrawingMode = {
    Standard: 'standard',
    Rainbow: 'rainbow',
    Gradual: 'gradual'
}

let currentDrawingMode = DrawingMode.Standard;

function setDrawingMode(mode){
    currentDrawingMode = mode;
    makeNewGrid(gridWidth);
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

            
            switch(currentDrawingMode){
                case DrawingMode.Standard:
                    gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));
                    break;
                case DrawingMode.Rainbow:
                    gridElement.addEventListener('mouseover', () => gridElement.style.backgroundColor = '#' + getRandomColor().toUpperCase());
                    break;
                case DrawingMode.Gradual:
                    gridElement.addEventListener('mouseover', () => {
                        if(gridElement.style.backgroundColor == ""){
                            gridElement.style.backgroundColor = 'rgb(230, 230, 230)';
                        }
                        else{
                            let rgb = gridElement.style.backgroundColor.replace('rgb', '').replace('(', '').replace(')', '').split(', ');
                            gridElement.style.backgroundColor = `rgb(${parseInt(rgb[0]) - 25}, ${parseInt(rgb[1]) - 25}, ${parseInt(rgb[2]) - 25})`;
                        }
                        
                    });
                    break;
                default:
                    gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));
            }
    
            grid.appendChild(gridElement);
        }
    }
}

let gridWidth = 16;
makeNewGrid(gridWidth);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    gridWidth = prompt('Enter Grid Width:', 16);

    if(gridWidth > 100){
        gridWidth = prompt('Grid Width entered is too big, please enter a grid width less than 100:', 16);
    }

    makeNewGrid(gridWidth);
});

const standardButton = document.querySelector('.standard');
standardButton.addEventListener('click', () => setDrawingMode(DrawingMode.Standard));

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => setDrawingMode(DrawingMode.Rainbow));

const gradualButton = document.querySelector('.gradual');
gradualButton.addEventListener('click', () => setDrawingMode(DrawingMode.Gradual));