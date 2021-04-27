//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
let isDrawing = false;
let cells;
const warm = ['780116', 'f7b538', 'db7c26', 'd8572a', 'c32f27'];
const cold = ['133c55', '386fa4', '59a5d8', '84d2f6', '91e5f6'];
const rainbow = ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '577590'];

//colourStyle function references

const blackStyle = function(i) {
    cells[i].style.backgroundColor = 'black';
}

//On page load

gridGenerator(x = 40);

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

//Functions

function gridGenerator(x) {
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
    let x = gridSizeSelect.selectedIndex + 16;
    gridGenerator(x);
}

function listenerGenerator() {
    cells.forEach(element => {
        element.addEventListener('mousedown', () => isDrawing = true)
    })
    
    cells.forEach(element => {
        element.addEventListener('mouseup', () => isDrawing = false)
    })
    
    cells.forEach(element => {
        element.addEventListener('dragstart', (e) => {
            e.preventDefault();
        })
    })
    
    colorStyle();   
}

function colorStyle(x) {
    if (x === undefined || x === 'black') {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseenter', blackStyle(i))
    }
}
}