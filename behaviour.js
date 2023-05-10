//TODO: allArrays to be used to deleteLastArray

let row;
let column;
let grid = [];
let arrayInfo = '';
let arrayNumber = 0;
let nextArray =[];
const result = document.getElementById("result");
let allArrays = [[]];

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
            //console.log(newSquare);
            newSquare.className = "squares";
            newRow.appendChild(newSquare);
        }
        grid.appendChild(newRow);
    }
    document.getElementById("main1").appendChild(grid);
    grid.id = "table1";
    document.getElementById("button-generate").removeAttribute("hidden");
    document.getElementById("result").style.display="flex";
    //console.log(grid);
    assignEventHandler();
    return grid;
    
};

const assignEventHandler = () => {
    let elements = document.getElementsByClassName("squares");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function changeColor(){
            if(this.className == 'highlighted') {
                this.className = '';
                //console.log('uncolored');
            } else {
                this.className = 'highlighted';
                //console.log('colored');
            }
        });
    }
};

const arrayGenerator = () => {
    //console.log(nextArray.length);
    if( nextArray.length != 0)
    {
        arrayNumber++;
        console.log(`There are ${arrayNumber} arrays!`);
        nextArray = arrayAdd();
        //console.log(`array next: ${nextArray}`);
        arrayInfo += `, \n[${nextArray}]`;
        console.log(`arrays inf:`);
        console.log(arrayInfo);
        result.value = `${arrayInfo}`;
    } else {
        console.log('First array!');
        arrayNumber++;
        nextArray = arrayAdd();
        arrayInfo = `[${nextArray}]`;
        console.log(arrayInfo);
        result.value = `${arrayInfo}`+"\n";
        document.getElementById("button-delete").removeAttribute("hidden");
    }
    return nextArray;
};

const deleteLastArray = () => {
    arrayInfo = arrayInfo.replace(`, \n[${nextArray}]`, "");
    console.log(arrayInfo);
    result.value = `${arrayInfo}`;
    arrayNumber--;
}

const arrayAdd = () => {
    let table = document.getElementById('table1');
    let arrayTemp = [];
    let newArray = [];
    //console.log(table);
    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, column; column = row.cells[j]; j++) {
            if(row.cells[j].className == 'highlighted')
            {
                arrayTemp.push(`[${j}, ${i}]`);
                //console.log(arrayTemp);
            }
        }
    }
    newArray = [arrayTemp.sort()];
    allArrays += newArray;
    //console.log(allArrays);
    return newArray;
};
