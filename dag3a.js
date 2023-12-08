
// OBS! under arbeid

function isNumber(x, y) {
    return array => {
        return /[0-9]/.test(array[y][x])
    }
}

function isSymbol(x, y) {
    return array => {
        if (x < 0 || y < 0 || y > array.length-1 || x > array[y].length-1) return false;
        return /[^0-9.]/.test(array[y][x])
    }
}

function getCells(x, y){
    return array => {
        if (!isNumber(x,y)(array)) return [];
        return (isNumber(x+1, y)(array)) ? [{x:x,y:y}, ...getCells(x+1, y)(array)] : [{x:x,y:y}];
    }
}


function getValue$(x, y){
    return array => {
        if (!isNumber(x,y)(array)) return "";
        let cellNumber$ = array[y][x]

        return (isNumber(x+1, y)(array)) ? cellNumber$ + getValue$(x+1, y)(array) : cellNumber$;
    }
}

function hasAdjacentSymbol(cells){
    return array => {
        for (let cell of cells) if (cellHasAdjacentSymbol(cell.x, cell.y)(array)) return true;
        return false
    }
}

function cellHasAdjacentSymbol(x, y){
    return array => {
        let result = false;
        for (let i=-1;i<=1;i++)
            for (let j=-1;j<=1;j++){
                if (isSymbol(x+i, y+j)(array)) result = true;
            }
        return result;
    }
}

function isNumberStart(x,y){
    return array => {
        getCells(x,y)(array)
    }
}

const isANumberWithAdjacentSymbol = (x,y) =>  (table) => isNumberStart(x,y)(table) && hasAdjacentSymbol(getCells(x,y)(table))(table);

function isNumberStart(x,y) {
    return array => isNumber(x,y)(array) && !isNumber(x-1,y)(array);
}

const table =
    ["467..114..",
        "...*......",
        "..35..633.",
        "......#...",
        "617*......",
        ".....+.58.",
        "..592.....",
        "......755.",
        "...$.*....",
        ".664.598.."]
        .map(s => s.split(""));

let sum = 0;
for (let row=0;row<table.length;row++) {
    let s = "";
    for (let col=0;col < table.length; col++) if (isANumberWithAdjacentSymbol(col, row)(table)) sum += parseInt(getValue$(col,row)(table));
    console.log(s)
}
