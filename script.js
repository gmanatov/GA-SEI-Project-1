arrLottery = (arr) => {//This function takes array and gets random element out of it
    let winEl = Math.floor((Math.random() * (arr.length - 1)) + 0)
    return arr[winEl]
}

let cells = []

for (i = 0; i < 9; i++){
    cells[i] = [];
    for (j = 0; j < 9; j++){
        cells[i][j] = j+1;
    }
}

for (i = 0; i < 9; i++){
    let row = '';
    for (j = 0; j < 9; j++){
        row += cells[i][j] + ' ';
    }
    console.log(row);
}