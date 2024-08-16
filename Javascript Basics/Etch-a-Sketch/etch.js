const title = document.createElement("h1");
        const h1 = document.querySelector("#h_1");
        title.textContent = 'Etch a Sketch';
        h1.appendChild(title);

        const container = document.querySelector("#container");

        let grid = (grid_size) => {
            container.innerHTML = '';
            
            const square_size = container.offsetWidth / grid_size;
            
            for (let i = 0; i < grid_size * grid_size; i++) {
                const square = document.createElement("div");
                square.style.width = `${square_size}px`;
                square.style.height = `${square_size}px`;
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
            if (!isNaN(sketch_size) && sketch_size > 0) {
                grid(sketch_size);
            } else {
                alert("Please enter a valid positive number.");
            }
        });
