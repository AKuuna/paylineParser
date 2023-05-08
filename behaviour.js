

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
            newSquare.onclick = changeColor;
            newRow.appendChild(newSquare);
        }
        grid.appendChild(newRow);
    }
    document.getElementById("main1").appendChild(grid);
    grid.id = "table1";
    document.getElementById("button-generate").removeAttribute("hidden");
    console.log(grid);
    return grid;
};

const changeColor = () => {
    console.log('clicked'); 
    // if (this.style.backgroundColor == 'green') {
    //     this.style.backgroundColor = 'white';
    // } else {
    //     this.style.backgroundColor = 'green';
    // }
    if(this.className == 'highlighted') {
        this.className = '';
        console.log('uncolored');
    }
    else {
        this.className = 'highlighted';
        console.log('colored');
    }

};


const arrayGenerator = (grid) => {
    let result  = [].reduce.call(grid.row, function (result, row) {
        result.push([].reduce.call(row.column, function(res, cell) {
            res.push(cell.textContent);
            return res;
        }, []));
        return result;
    }, []);
    return result;
 };
