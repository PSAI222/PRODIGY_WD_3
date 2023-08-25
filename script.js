let currentPlayer = "X";
let gameActive = true;
const cells = document.querySelectorAll(".cell");

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            gameActive = false;
            cells[a].style.backgroundColor = "lightgreen";
            cells[b].style.backgroundColor = "lightgreen";
            cells[c].style.backgroundColor = "lightgreen";
            return true;
        }
    }
    return false;
}

function handleCellClick(cellIndex) {
    if (!gameActive || cells[cellIndex].innerHTML !== "") return;

    cells[cellIndex].innerHTML = currentPlayer;
    if (checkWinner()) {
        alert("Player " + currentPlayer + " wins!");
    } else if ([...cells].every(cell => cell.innerHTML !== "")) {
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "#fff";
    });
    currentPlayer = "X";
    gameActive = true;
}
