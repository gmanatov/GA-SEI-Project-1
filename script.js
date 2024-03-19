'use strict';

let arrLottery = (arr) => {//This function takes array and gets random element out of it
    let winEl = Math.floor(Math.random() * arr.length)
    return arr[winEl]
}

let cells = []


for (let i = 0; i < 9; i++){
    cells[i] = [];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let j = 0; j < 9; j++){
        cells[i][j] = arrLottery(arr);
        arr.splice((arr.indexOf(cells[i][j])), 1);
    }
}

for (let i = 0; i < 9; i++){
    let row = '';
    for (let j = 0; j < 9; j++){
        row += cells[i][j] + ' ';
    }
    console.log(row);
}