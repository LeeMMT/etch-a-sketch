//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
let isDrawing = false;
let cells;

//let gss = gridSizeSelector;

//On page load

gridGenerator();

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

//Functions

function gridGenerator() {
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
    listenerGenerator();
}

function gridSizeSelector() {
    return(gridSizeSelect.selectedIndex + 16);
}

function listenerGenerator() {
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
}