// Constants
const grid = document.querySelector('#grid')
const numbers = document.querySelector('#numbers')

// Variables
let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
let selectedNumber

// Create grid cells
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        if (i == 3 || i == 6) {
            cell.classList.add('border-top')
        }
        if (j == 3 || j == 6) {
            cell.classList.add('border-left')
        }
        cell.id = `${i}-${j}`
        if (board[i][j] != '-') {
            cell.textContent = board[i][j]
        }
        cell.addEventListener('click', fillNumber)
        grid.appendChild(cell)
    }
}

// Create numbers cells
for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.textContent = i
    cell.addEventListener('click', selectNumber)
    numbers.appendChild(cell)
}

// Helper functions
function selectNumber() {
    if (selectedNumber != null) {
        selectedNumber.classList.remove('selected')
    }
    selectedNumber = this
    selectedNumber.classList.add('selected')
}

function fillNumber() {
    if (selectedNumber) {
        if (this.textContent != '') {
            return
        }
        let [x, y] = this.id.split('-')
        if (selectedNumber.textContent == solution[x][y]) {
            this.textContent = selectedNumber.textContent
        }
    }
}
