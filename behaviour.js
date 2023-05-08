

const createGrid = () => {

if (document.getElementById('table1') != null)
    {
        const element= document.getElementById('table1');
        element.remove();
    }

   const row = Number(document.getElementById("row-number").value);
   const column = Number(document.getElementById("column-number").value);
    console.log(row, column);
   const grid = document.createElement("table");
   
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
    console.log(grid);
    assignEventHandler();
    
    return grid;
    
};

const assignEventHandler = () => {
let elements = document.getElementsByClassName("squares");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function changeColor(){
        console.log('clicked'); 
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
    let tableInfo = Array.prototype.map.call(document.querySelectorAll('tr'), function(tr){
        return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
            if (td.className == 'highlighted')
            {
                td.value = 1;
            }
            else{
                td.value = 0;
            }
            console.log(td.value);
          return td.value;
          
          });
          
        });
 };
