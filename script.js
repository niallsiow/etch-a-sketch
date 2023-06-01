const grid = document.querySelector('.grid');

const gridPixelWidth = grid.clientWidth;

function makeNewGrid(gridWidth){
    for(let i = 0; i < gridWidth; i++){
        for(let j = 0; j < gridWidth; j++){
            const gridElement = document.createElement('div');
    
            const list = gridElement.classList;
            list.add('gridElement');
    
            gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));
    
            grid.appendChild(gridElement);
        }
    }
}

makeNewGrid(16);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let gridWidth = prompt('Enter Grid Width:', 16);
    
    // need to delete old grid first

    makeNewGrid(gridWidth);
});