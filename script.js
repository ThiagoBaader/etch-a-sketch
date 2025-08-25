let color = randomColor();

function gridSize() {
    let size = 0;
    const gridSizeButton = document.querySelector("#gridSizeButton")

    gridSizeButton.addEventListener("click", function() {
        const input = prompt("Select the grid size:");
        size = parseInt(input);

        if (isNaN(size) || size <= 0 || size > 100) {
            alert("Please enter a number between 1 and 100.")
        } else {
            const divs = document.querySelectorAll("#container div");
            divs.forEach(div => div.remove());
            createGrid(size);
        }
    });
}

function createGrid(size) {
    const cellSizePercent = 100 / size;

    const container = document.querySelector("#container");

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = `${cellSizePercent}%`;
        div.style.height = `${cellSizePercent}vh`;
        container.appendChild(div);
    }

    addHoverEffect();
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function addHoverEffect() {
    let isMouseDown = false;
    let divs = document.querySelectorAll("#container div");

    document.addEventListener("mousedown", () => isMouseDown = true);
    document.addEventListener("mouseup", () => isMouseDown = false);

    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            if (isMouseDown) {
                div.style.backgroundColor = color;
            }
        });

        div.addEventListener("mousedown", function() {
            div.style.backgroundColor = color;
        });

        div.addEventListener("dragstart", (e) => e.preventDefault());
    });
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", reset);

function reset() {
    let divs = document.querySelectorAll("#container div");

    divs.forEach(div => {
        div.style.backgroundColor = "";
    });
};

const changeColorButton = document.querySelector("#changeColorButton");
changeColorButton.addEventListener("click", () => {
    color = randomColor();
});

gridSize();
createGrid(16);
