const grid = document.querySelector('.grid');


for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const gridElement = document.createElement('div');

        const list = gridElement.classList;
        list.add('gridElement');

        gridElement.addEventListener('mouseover', () => gridElement.classList.add('hovered'));

        grid.appendChild(gridElement);
    }
}

console.log(grid)