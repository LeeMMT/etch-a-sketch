//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#select-btn');
const buttons = document.querySelectorAll('#effects button');
let isDrawing = false;
let cells;
const warm = ['780116', 'f7b538', 'db7c26', 'd8572a', 'c32f27'];
const cold = ['133c55', '386fa4', '59a5d8', '84d2f6', '91e5f6'];
const rainbow = ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '577590'];
let color;

//On page load

gridGenerator(x = 40);

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

buttons.forEach(element => {
    element.addEventListener('click', () => {
        buttons.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.toggle('active');
            }
        })
        element.classList.toggle('active');
    })
    element.addEventListener('click', e => {
        color = e.target.innerText.toLowerCase();
    });
})



document.querySelector('#effects button').classList.toggle('active');

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
        element.addEventListener('mousedown', () => {
            isDrawing = true;
            switch (color) {
                case undefined:
                case 'black':
                    element.style.backgroundColor = 'black'
                    break;
                case 'warm':
                    element.style.backgroundColor = `#${warm[Math.floor(Math.random() * 5)]}`;
                    break;
                case 'cold':
                    element.style.backgroundColor = `#${cold[Math.floor(Math.random() * 5)]}`;
                    break;
                case 'rainbow':
                    element.style.backgroundColor = `#${rainbow[Math.floor(Math.random() * 5)]}`;
                    break;
            }
        })
        
        element.addEventListener('mouseup', () => isDrawing = false)
        element.addEventListener('dragstart', e => e.preventDefault());
        
        element.addEventListener('mouseenter', () => {
            if (isDrawing === true) {
                switch (color) {
                    case undefined:
                    case 'black':
                        element.style.backgroundColor = 'black'
                        break;
                    case 'warm':
                        element.style.backgroundColor = `#${warm[Math.floor(Math.random() * 5)]}`;
                        break;
                    case 'cold':
                        element.style.backgroundColor = `#${cold[Math.floor(Math.random() * 5)]}`;
                        break;
                    case 'rainbow':
                        element.style.backgroundColor = `#${rainbow[Math.floor(Math.random() * 5)]}`;
                        break;
                }
            }
        })
    })  
}

function colorChanger(x) {
    let color = x;
}