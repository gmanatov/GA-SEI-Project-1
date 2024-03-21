'use strict';

let arrLottery = (arr) => {//This function takes array and gets random element out of it
    let winEl = Math.floor(Math.random() * arr.length)
    return arr[winEl]
}

let cells = []


for (let i = 0; i < 9; i++){
    cells[i] = [];
    let arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9]//Array for checking row repetitions
    for (let j = 0; j < 9; j++){
        cells[i][j] = arrLottery(arrX);
        
        let k = 0;
        if (i > 0){
            let arrY = arrX.slice();
            while (k < i){
                if (cells[k][j] == cells[i][j]){
                    arrY.splice((arrY.indexOf(cells[i][j])), 1);
                    cells[i][j] = arrLottery(arrY);
                    k = 0;
                }
                else {
                    k++;
                }
            }
        }
        
        arrX.splice((arrX.indexOf(cells[i][j])), 1);
    }
    
}

//Outputting generated array in console
for (let i = 0; i < 9; i++){
    let row = '';
    for (let j = 0; j < 9; j++){
        row += cells[i][j] + ' ';
    }
    console.log(row);
}