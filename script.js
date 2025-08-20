function gridSize() {
    let size = 0;
    const button = document.querySelector("#gridSizeButton")

    button.addEventListener("click", function() {
        const input = prompt("Select the grid size:");
        size = parseInt(input);

        if (isNaN(size) || size <= 0 || size > 100) {
            alert("Please enter a number between 1 and 100.")
        } else{
            const div = document.querySelectorAll("#container div");
        div.forEach(div => {
            div.remove();
        });

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

function addHoverEffect() {
   let div = document.querySelectorAll("#container div");

    div.forEach(div => {
        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = "black";
        });
    });
}

gridSize();
createGrid(16);
