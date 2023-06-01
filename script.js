const grid = document.querySelector('.grid');

const gridPixelWidth = grid.clientWidth;

function makeNewGrid(gridWidth){
    let gridElementPixelWidth = gridPixelWidth / gridWidth;
    const borderPixelWidth = 1;
    gridElementPixelWidth = gridElementPixelWidth - (2 * borderPixelWidth);

    for(let i = 0; i < gridWidth; i++){
        for(let j = 0; j < gridWidth; j++){
            const gridElement = document.createElement('div');

            gridElement.style.width = gridElementPixelWidth  + 'px';
            gridElement.style.height = gridElementPixelWidth + 'px';
    
            gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));
    
            grid.appendChild(gridElement);
        }
    }
}

makeNewGrid(64);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let gridWidth = prompt('Enter Grid Width:', 16);

    // need to delete old grid first

    makeNewGrid(gridWidth);
});