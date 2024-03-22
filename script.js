
/*----- constants -----*/
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

//console.log(SUDOKU[0].board[0][3]);


let boardChoice = Math.floor(Math.random() * 3);
//console.log(boardChoice);

// const buttonCells = document.querySelector('#b11');
// buttonCells.innerHTML = '11';

const buttonCells = document.querySelectorAll('.button-cell');

buttonCells.forEach(function(button) {
    if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] !== 0){
        button.innerHTML = SUDOKU[boardChoice].board[button.id[1]][button.id[2]];
    }
})

buttonCells.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.textContent == ''){
            markedCellButton = button;}
    });
})

const buttonNums = document.querySelectorAll('.button-num');

buttonNums.forEach(function(button) {
    button.addEventListener('click', function() {

        if (markedCellButton) {
            markedCellButton.textContent = button.textContent;
            markedCellButton = null;
        }

    });
})

document.querySelector('#reset').addEventListener('click', function() {
    buttonCells.forEach(function(button) {
        if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] !== 0){
            button.innerHTML = SUDOKU[boardChoice].board[button.id[1]][button.id[2]];
        }
        else if (SUDOKU[boardChoice].board[button.id[1]][button.id[2]] == 0){
            button.innerHTML = '';
        }
    })
})