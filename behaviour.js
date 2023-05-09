let row;
let column;
let grid = [];
let arrayInfo = ' ';
let arrayNumber = 0;
let nextArray =[];
const createGrid = () => {

if (document.getElementById('table1') != null)
    {
        const element= document.getElementById('table1');
        element.remove();
    }

    row = Number(document.getElementById("row-number").value);
    column = Number(document.getElementById("column-number").value);
    console.log(row, column);
    grid = document.createElement("table");
   
    for(let i = 1; i <= row; i++) {
        const newRow = document.createElement("tr");
        for(let j = 1; j <= column; j++) {
            const newSquare = document.createElement("td");
            console.log(newSquare);
            newSquare.className = "squares";
            newRow.appendChild(newSquare);
        }
        grid.appendChild(newRow);
    }
    document.getElementById("main1").appendChild(grid);
    grid.id = "table1";
    document.getElementById("button-generate").removeAttribute("hidden");
    document.getElementById("result").removeAttribute("hidden");
    console.log(grid);
    assignEventHandler();
    return grid;
    
};

const assignEventHandler = () => {
    let elements = document.getElementsByClassName("squares");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function changeColor(){
            if(this.className == 'highlighted') {
                this.className = '';
                console.log('uncolored');
            }
            else {
                this.className = 'highlighted';
                console.log('colored');
            }
        });
    }
};

const arrayGenerator = () => {
    arrayInfo = document.getElementById("result").value;
    console.log(nextArray.length);
    if( nextArray.length != 0)
    {
        arrayNumber++;
        console.log(`${arrayNumber} array!`);
        nextArray = arrayAdd();
        console.log(`array next: ${nextArray}`);
        arrayInfo = `${arrayInfo} ,\r\n [${nextArray}]`;
        console.log(`array inf:`);
        console.log(arrayInfo);
        document.getElementById("result").value = `${arrayInfo}`;
    } else {
        console.log('First array!');
        nextArray = arrayAdd();
        arrayInfo = `[${nextArray}]`;
        document.getElementById("result").value = `${arrayInfo}`;
    }
    return nextArray;
};


const arrayAdd = () => {
    let table = document.getElementById('table1');
    let arrayTemp = [];
    let newArray = [];
    //console.log(table);
    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, column; column = row.cells[j]; j++) {
            if(row.cells[j].className == 'highlighted')
            {
                arrayTemp.push(`[${j}, ${i}] `);
                console.log(arrayTemp);
            }
        }
    }
    newArray = arrayTemp.sort();
    console.log(newArray);
    return newArray;
};
