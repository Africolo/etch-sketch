const grid = document.querySelector(".container");
function createGrid(size = 16) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "cell";
            gridCell.style.height = `${600 / size - 2}px`;
            gridCell.style.width = `${600 / size - 2}px`;
            // Getting Random RGB COLORS!
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            //Changing colors
            gridCell.addEventListener("mouseover", () => {
                gridCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
            grid.appendChild(gridCell);
        }
    }
}
createGrid();

function resetBoard() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((gridCell) => gridCell.style.backgroundColor = "white");
}

function changeGrid() {
    let gridSize = prompt("Enter in a grid size!");
    if (gridSize > 100 || gridSize < 2) {
        alert("Please enter in a correct size!");
    }
    else {
        const gridCells = document.querySelectorAll(".cell");
        gridCells.forEach((gridCell) => grid.removeChild(gridCell));
        createGrid(gridSize);
    }
}