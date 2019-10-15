const contentDOM = document.getElementsByClassName("content")[0];
const gridDOM = document.getElementsByClassName("grid")[0];
let gridSize = 16;
let penColor = "#000000";

function clearGrid()
{
    gridSize = prompt('Specify new grid size: ');
    createGrid(gridSize);
    setPenColor("black");
}

function deleteGrid()
{
    // Clear all existing grid elements
    let childElement = gridDOM.lastChild;

    while(childElement)
    {
        gridDOM.removeChild(childElement);
        childElement = gridDOM.lastChild;
    }
}

function setPenColor(colorIn)
{
    penColor = colorIn;
    console.log("pen color set to: " + penColor);
}

function createGrid(gridSizeIn)
{
    gridSize = gridSizeIn;
    deleteGrid();

    let i=0,currentRow=0,currentColumn=0;
    for(i = 0; i < gridSize*gridSize; i++)
    {
        // Set correct grid position
        if( (i > 0) && (i % gridSize == 0) )
        {
             currentRow++;
             currentColumn = 0;
        }
        
        currentColumn++;
        
        // Create each grid element
        let newGridElement = document.createElement("div");
        newGridElement.classList.add("gridElement");
        
        // Form them into a grid
        newGridElement.style.gridColumnStart = currentColumn;
        newGridElement.style.gridColumnEnd = currentColumn + 1;
        newGridElement.style.gridRowStart = currentRow;
        newGridElement.style.gridRowEnd = currentRow + 1;

        newGridElement.style.height = (480 - gridSize) / gridSize;
        newGridElement.style.width = (480 - gridSize) / gridSize;


        // Set relevant event listeners
        newGridElement.addEventListener("mouseenter", changeGridElementColor);

        // Add it to the page
        gridDOM.appendChild(newGridElement);
        console.log("Grid node " + (i+1) + " created.")

    }

}

function changeGridElementColor(e)
{
    console.log("mouseenter triggered!");
    e.target.style.backgroundColor = penColor;
}

function main()
{
    createGrid(16);
}

main();