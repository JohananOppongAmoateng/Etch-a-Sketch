let container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

function clearPage() {

    container.innerHTML = ""
    let columns = parseInt(prompt("How many columns do you want? Please your answer should be less than or equal to 100. "))
    let rows = parseInt(prompt("How many rows do you want? Please your answer should be less than or equal to 100. "))
    if (rows > 100 || columns > 100) {
        alert("Please enter a number below 100 or equal to 100")
        clearPage()
    } else if (columns < 100 && rows < 100) {
        makeRows(rows, columns)
    }


}
document.getElementById("clear").addEventListener("click", clearPage);