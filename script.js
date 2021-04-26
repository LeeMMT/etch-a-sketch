//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
let isDrawing = false;


//let gss = gridSizeSelector;

//On page load

for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.setAttribute('draggable', 'disabled')
    grid.appendChild(gridItem);
}

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

let cells = document.querySelectorAll('.grid-item');

cells.forEach(element => {
    element.addEventListener('mousedown', () => isDrawing = true)
})

cells.forEach(element => {
    element.addEventListener('mouseup', () => isDrawing = false)
})

cells.forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (isDrawing === true) {
            element.style.backgroundColor = 'blue';
        }
    })
})

cells.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
})

//Functions

function gridCellGenerator() {
    let x = gridSizeSelector();
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    

    for (let i = 0; i < x ** 2; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
}
    cells = document.querySelectorAll('.grid-item');
}

function gridSizeSelector() {
    return(gridSizeSelect.selectedIndex + 16);
}