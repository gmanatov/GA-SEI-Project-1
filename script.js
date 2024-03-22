/*---------------------*/
/*----- constants -----*/
/*---------------------*/
const MAX_GUESSES = 3;
const SUDOKU = [
        {//1
        board: [
            [7,	0, 0, 8, 5, 3, 9, 0, 0],
            [1,	4, 8, 0, 9, 0, 3, 5, 0],
            [0,	0, 5, 4, 0, 0, 2, 6, 0],
            [0,	1, 0, 7, 0, 0, 6, 9, 0],
            [0,	0, 0, 0, 3, 5, 0, 0, 0],
            [8,	5, 7, 9, 0, 0, 1, 0, 0],
            [0,	8, 0, 0, 0, 9, 5, 0, 0],
            [5,	7, 9, 0, 0, 6, 0, 1, 3],
            [0,	6, 3, 5, 8, 0, 4, 0, 9]
        ],
        solution: [
            [7,	2, 6, 8, 5,	3, 9, 4, 1],
            [1,	4, 8, 6, 9,	2, 3, 5, 7],
            [9,	3, 5, 4, 1,	7, 2, 6, 8],
            [3,	1, 4, 7, 2,	8, 6, 9, 5],
            [6,	9, 2, 1, 3,	5, 7, 8, 4],
            [8,	5, 7, 9, 6,	4, 1, 3, 2],
            [4,	8, 1, 3, 7,	9, 5, 2, 6],
            [5,	7, 9, 2, 4,	6, 8, 1, 3],
            [2,	6, 3, 5, 8,	1, 4, 7, 9]
            
        ]
        },//2
        {
        board: [
            [6, 9, 7, 0, 0, 5, 4, 3, 8],
            [4, 0, 0, 0, 0, 9, 0, 2, 0],
            [1, 0, 2, 0, 0, 0, 0, 9, 0],
            [0, 6, 0, 4, 2, 0, 0, 0, 0],
            [8, 1, 9, 0, 5, 3, 0, 0, 4],
            [2, 0, 4, 0, 9, 0, 3, 0, 0],
            [0, 0, 0, 8, 3, 6, 9, 0, 2],
            [0, 2, 0, 5, 7, 1, 0, 4, 3],
            [0, 0, 0, 0, 4, 0, 7, 0, 1]
        ],
        solution: [
            [6, 9, 7, 2, 1, 5, 4, 3, 8],
            [4, 3, 5, 7, 8, 9, 1, 2, 6],
            [1, 8, 2, 3, 6, 4, 5, 9, 7],
            [5, 6, 3, 4, 2, 7, 8, 1, 9],
            [8, 1, 9, 6, 5, 3, 2, 7, 4],
            [2, 7, 4, 1, 9, 8, 3, 6, 5],
            [7, 4, 1, 8, 3, 6, 9, 5, 2],
            [9, 2, 8, 5, 7, 1, 6, 4, 3],
            [3, 5, 6, 9, 4, 2, 7, 8, 1]
        ]
        },//3
        {
        board: [
            [1, 7, 2, 6, 4, 3, 0, 5, 0],
            [8, 6, 0, 5, 9, 1, 7, 0, 0],
            [4, 0, 0, 7, 0, 0, 0, 3, 0],
            [0, 0, 0, 3, 0, 0, 0, 7, 4],
            [0, 0, 0, 8, 6, 7, 0, 1, 3],
            [0, 0, 0, 4, 0, 9, 0, 0, 8],
            [5, 8, 0, 9, 0, 4, 1, 0, 0],
            [7, 0, 4, 0, 0, 0, 0, 9, 0],
            [0, 3, 1, 0, 0, 0, 0, 8, 5]
        ],
        solution: [
            [1, 7, 2, 6, 4, 3, 8, 5, 9],
            [8, 6, 3, 5, 9, 1, 7, 4, 2],
            [4, 5, 9, 7, 2, 8, 6, 3, 1],
            [6, 9, 8, 3, 1, 2, 5, 7, 4],
            [2, 4, 5, 8, 6, 7, 9, 1, 3],
            [3, 1, 7, 4, 5, 9, 2, 6, 8],
            [5, 8, 6, 9, 3, 4, 1, 2, 7],
            [7, 2, 4, 1, 8, 5, 3, 9, 6],
            [9, 3, 1, 2, 7, 6, 4, 8, 5]
        ]
    },
]

const buttonCells = document.querySelectorAll('.button-cell'); //DOM grabbing all board cells
const buttonNums = document.querySelectorAll('.button-num'); //DOM grabbing all numpad cells

/*---------------------------*/
/*----- state variables -----*/
/*---------------------------*/

let isGameOver = false;
let isGameWon = false;
let boardChoice = Math.floor(Math.random() * 3); //Randoming puzzle from the SUDOKU object that containts all of them, plus solutions
let attemptsLeft = MAX_GUESSES; //Attempts counter

/*---------------------*/
/*----- functions -----*/
/*---------------------*/

//Function that makes sure to not include any board element that has '0' in it converting it to ' ' since zeroes are how 'unknowns' in puzzles are stored
buttonCells.forEach(function(button) {
    if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] !== 0){
        button.innerHTML = SUDOKU[boardChoice].board[button.id[1]][button.id[2]];
    }
})

//Function we use for a process of loading new puzzle
let cleanBoard = () => {
    buttonCells.forEach(function(button) {
        button.textContent = '';
    })
}

//Function made to demonstrate WIN logic and render WIN message
let winGame = () => {
    buttonCells.forEach(function(button) {
        if (button.id != 'b01'){
            button.textContent = SUDOKU[boardChoice].solution[button.id[1]][button.id[2]];
        }
    })
}

//Check for a Winning state
function checkWinCondition() {
    let correctCount = 0;
    buttonCells.forEach(function(button) {
        const row = parseInt(button.id[1], 10);
        const col = parseInt(button.id[2], 10);
        if (button.textContent == SUDOKU[boardChoice].solution[row][col]) {
            correctCount++;
        }
    });

    if (correctCount === 81) {
        document.querySelector('#result').style.fontSize = '40px';
        document.querySelector('#result').style.color = 'green';
        document.querySelector('#result').innerHTML = `<b>VICTORY!🥳</b>`;
        isGameWon = true;
    }
}

/*---------------------------*/
/*----- event listeners -----*/
/*---------------------------*/

//Making sure that the button-cell we are about to fill is empty
buttonCells.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.textContent == ''){
            markedCellButton = button;}
    });
})

//Main function that inputs numbers into cells
buttonNums.forEach(function(button) {
    button.addEventListener('click', function() {
        if ((markedCellButton)&&(!isGameOver)&&(!isGameWon)) {
            markedCellButton.textContent = button.textContent;
            if (markedCellButton.textContent != SUDOKU[boardChoice].solution[markedCellButton.id[1]][markedCellButton.id[2]]){
                attemptsLeft--;
                document.querySelector('#result').style.fontSize = '25px';
                document.querySelector('#result').style.color = 'yellow';
                document.querySelector('#result').innerHTML = `<b>MISTAKE NUMBER ${(3 - attemptsLeft).toString()}!!! I'D BE CAREFUL!!!</b>`
                if (attemptsLeft == 0){
                    document.querySelector('#result').style.fontSize = '50px';
                    document.querySelector('#result').style.color = 'red';
                    document.querySelector('#result').innerHTML = `<b>GAME OVER!!😭</b>`
                    isGameOver = true;
                }
            }

            markedCellButton = null;
            if (!isGameOver && !isGameWon) {
                checkWinCondition();
            }
        }

    });
})

//Reset button logic, it only reset puzzle that you already had
document.querySelector('#reset').addEventListener('click', function() {
    attemptsLeft = MAX_GUESSES;
    buttonCells.forEach(function(button) {
        if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] !== 0){
            button.innerHTML = SUDOKU[boardChoice].board[button.id[1]][button.id[2]];
        }
        else if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] == 0){
            button.innerHTML = '';
        }
        isGameOver = false;
        isGameWon = false;
        document.querySelector('#result').style.fontSize = '20px';
        document.querySelector('#result').style.color = 'white';
        document.querySelector('#result').innerHTML = '<b>Select cell to fill and press desired number<br> 3 MISTAKES WILL LEAD TO DEATH!!!</b>'
    })
})

//New puzzle, it will replace whole puzzle with a new one
document.querySelector('#new-puzzle').addEventListener('click', function() {
    boardChoice = Math.floor(Math.random() * 3);
    cleanBoard();
    isGameOver = false;
    isGameWon = false;
    attemptsLeft = MAX_GUESSES;
    document.querySelector('#result').style.fontSize = '20px';
    document.querySelector('#result').style.color = 'white';
    document.querySelector('#result').innerHTML = '<b>Select cell to fill and press desired number<br> 3 MISTAKES WILL LEAD TO DEATH!!!</b>'
    buttonCells.forEach(function(button) {
        if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] !== 0){
            button.innerHTML = SUDOKU[boardChoice].board[button.id[1]][button.id[2]];
        }
    })
})