const container = document.querySelector("#container");

const grid = (grid_size) => {
    container.innerHTML = '';

    const containerStyle = getComputedStyle(container);
    const containerWidth = parseFloat(containerStyle.width);

    const borderWidth = 1; 
    const totalBorderWidth = grid_size * borderWidth;
    
    const squareSize = (containerWidth - totalBorderWidth) / grid_size;
    
   

    // Create grid items
    for (let i = 0; i < grid_size * grid_size; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add("grid-item");
        container.appendChild(square);

        square.addEventListener('mouseover', (e) => {
            const colors = ['#ADD8E6', '#FFB6C1', '#F5F5DC', '#FFDAB9', '#EEE8AA', '#6B8E23'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.backgroundColor = randomColor;
        });
    }
}

grid(16);

const btn = document.querySelector(".button");
btn.addEventListener('click', () => {
    const sketch = prompt("Enter grid size:");
    const sketch_size = parseInt(sketch);
    if (!isNaN(sketch_size) && sketch_size <= 100 && sketch_size > 0) {
        grid(sketch_size);
    } else {
        alert("Please enter up to 100 only & Enter a positive number.");
    }
});
