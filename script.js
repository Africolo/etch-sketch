const grid = document.querySelector(".container");
let size = 15;

for(let i = 0; i <= size; i++){
    for(let j = 0; j <= size; j++){
        const cell = document.createElement("div");
        cell.className = "cell";
cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
});grid.appendChild(cell);
    }
}