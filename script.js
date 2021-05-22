//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
const buttons = document.querySelectorAll('#effects button');
const resizebtn = document.querySelector('button');
let isDrawing = false;
let cells;
const warm = ['780116', 'f7b538', 'db7c26', 'd8572a', 'c32f27'];
const cold = ['133c55', '386fa4', '59a5d8', '84d2f6', '91e5f6'];
const rainbow = ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '577590'];
let color = 'black';
const gridSizeSelector = function() {
    const x = gridSizeSelect.selectedIndex + 16;

    gridGenerator(x);
}

//On page load

const draw = function(e) {
    if (e.type === 'touchstart' || e.type === 'touchmove') {
        e.preventDefault();
    }
    if (e.type === 'mousedown' || e.type === 'touchstart') {
        isDrawing = true;
    }
    if (isDrawing === true) {
        switch (color) {
            case 'black':
                e.target.style.backgroundColor = 'black';
                break;
            case 'warm':
                e.target.style.backgroundColor = `#${warm[Math.floor(Math.random() * 5)]}`;
                break;
            case 'cold':
                e.target.style.backgroundColor = `#${cold[Math.floor(Math.random() * 5)]}`;
                break;
            case 'rainbow':
                e.target.style.backgroundColor = `#${rainbow[Math.floor(Math.random() * 7)]}`;
            break;
        }
    }
}

gridGenerator(x = 40);

resizebtn.addEventListener('click', gridSizeSelector);

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        buttons.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.toggle('active');
            }
        })
        element.classList.toggle('active');
        color = e.target.innerText.toLowerCase();
    })
})
document.querySelector('#effects button').classList.toggle('active');

//Functions

function gridGenerator(x) {
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    for (let i = 0; i < x ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem); 
}
    cells = document.querySelectorAll('.grid-item');

    grid.addEventListener('dragstart', e => e.preventDefault());
    grid.addEventListener('mouseup', () => isDrawing = false);
    grid.addEventListener('touchend', () => isDrawing = false);

    grid.addEventListener('mousedown', draw);
    grid.addEventListener('mouseover', draw);

    grid.addEventListener('touchstart', draw);
    grid.addEventListener('touchmove', draw);

    for (let i = 16; i < 101; i++) {
        let option = document.createElement('option');
        option.innerText = i;
        gridSizeSelect.appendChild(option);
    }
    gridSizeSelect.selectedIndex = x - 16;
}