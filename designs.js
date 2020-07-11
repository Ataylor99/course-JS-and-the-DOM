// Select color input
const color = document.getElementById('colorPicker');           //get color

// Select size input
const height = document.getElementById('inputHeight');           //get height 
const width = document.getElementById('inputWidth');             //get width
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById('sizePicker');        
sizePicker.addEventListener('submit', function(e) {           //on submit
    e.preventDefault();                                       //prevent refresh
    makeGrid();                                                //call makeGrid function
})

function makeGrid() {                                          //make grid function
    canvas.innerHTML = "";                                     //clear grid

//create grid with nested loops
    for (let i=0; i < height.value; i++) {                     //height loop
        let tr = document.createElement('tr');                 //create rows
        canvas.appendChild(tr);                                
        for (let j = 0; j < width.value; j++) {                //width loop
            let td = document.createElement('td');              //create cells in rows
            tr.appendChild(td);
        }
    }


    canvas.addEventListener('click', function(e) {           // change cell color on click
        e.preventDefault();                                   //prevent refresh
         if (e.target.nodeName === 'TD') {                   //verify node 
            e.target.style.backgroundColor = color.value;     //color value to target
        }
    })
}

