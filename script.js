//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
let cells;
let isDrawing = false;

//let gss = gridSizeSelector;

//On page load

for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item')
    grid.appendChild(gridItem);
}

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

//Functions

function gridCellGenerator() {
    grid.innerHTML = "";
    let x = gridSizeSelector();

    for (let i = 0; i < x ** 2; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
}
    cells = document.querySelectorAll('.grid-item');
    eventListeners();
}

function gridSizeSelector() {
    return(gridSizeSelect.selectedIndex + 16);
}

function eventListeners() {
    /*cells.forEach(element => {
        addEventListener('mousedown', () => {
             isDrawing = true;
             
        });
    });
    cells.forEach(element => {
        addEventListener('mouseup', () => {
             isDrawing = false;
             
        });
    });*/
    cells.forEach(element => {
        addEventListener('mouseover', () => {
            element.style.backgroundColor = 'red';             
        });
    });
}