const state = {
    charCell: 0,
    charRow: 9,

}
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

const cornMan = document.getElementById("cornMan")

const main = document.querySelector("main")

const createMaze = () => {
    for (let rowIndex in map) {
        const rowElement = document.createElement("div")
        rowElement.classList.add("row")
        main.appendChild(rowElement)
        for (let cellIndex in map[rowIndex]) {
            const cellElement = document.createElement("div")
            cellElement.classList.add("cell")
            cellElement.dataset.rows = rowIndex
            cellElement.dataset.cells = cellIndex
            rowElement.appendChild(cellElement)
            if (map[rowIndex][cellIndex] === "W") {
                cellElement.classList.add("wall")
            }
        }
    }
    main.querySelector('[data-cells="' + state.charCell + '"][data-rows="' + state.charRow + '"]').appendChild(cornMan)
}


createMaze()



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const cell = map[state.charRow][state.charCell]
    switch (keyName) {
        case "ArrowDown":
            if (map[state.charRow + 1][state.charCell] !== "W") {
                state.charRow += 1
            }
            break;
        case "ArrowUp":
            if (map[state.charRow - 1][state.charCell] !== "W") {
                state.charRow -= 1
            }
            break;
        case "ArrowLeft":
            if (map[state.charRow][state.charCell - 1] !== "W" && state.charCell > 0) {
                state.charCell -= 1
            }
            break;
        case "ArrowRight":
            if (map[state.charRow][state.charCell + 1] !== "W" && state.charCell < 20) {
                state.charCell += 1
            }
            break;
    }
    main.querySelector('[data-cells="' + state.charCell + '"][data-rows="' + state.charRow + '"]').appendChild(cornMan)
    if (cornMan.parentElement.dataset.cells === "20") {
        alert("WIN")
        resetGame();
    }
});


const resetGame = () => {
    main.innerHTML = "";
    createMaze();
    state.charCell = 0;
    state.charRow = 9;
}