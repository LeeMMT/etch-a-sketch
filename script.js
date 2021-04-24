//Globals

const grid = document.querySelector('#grid');
const gridSizeSelect = document.querySelector('#grid-size-select');

let gss = gridSizeSelector;

//On page load

/*for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item')
    grid.appendChild(gridItem);
}*/

for (let i = 16; i < 101; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    gridSizeSelect.appendChild(option);
}

//Functions

function gridSizeSelector(){
    return(gridSizeSelect.selectedIndex + 16);
}

function gridCellGenerator(gss) {
    alert(gss);
/*    for (let i = 0; i < gss ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        grid.appendChild(gridItem);
}*/
}

