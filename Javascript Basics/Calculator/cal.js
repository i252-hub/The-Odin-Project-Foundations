const div = document.querySelector("#container");
const screen = document.createElement("div");
screen.id = "screen";
div.appendChild(screen);

const result = document.createElement("div");
result.id = "result";
screen.appendChild(result);



const buttons = () => {
    let i=0;
    while (i< 9){
        let btn = document.createElement("button");
        div.appendChild(btn);
        btn.textContent = `${i + 1}`;
        i++;
    }

    const symbol = ['+', '-', '*', '/'];
    while(i <= 12){
        let btn = document.createElement("button");
        div.appendChild(btn);
        i++;
        btn.textContent = symbol[i - 10];
    }

    let equal = document.createElement("button");
    div.appendChild(equal);
    equal.textContent = `${'='}`

    let clear = document.createElement("button");
    div.appendChild(clear);
    clear.textContent = `${'CE'}`


}

buttons();


let num_one = '';
let num_two = '';
let operator = '';

const btns = document.querySelectorAll('button');

btns.forEach(button => {
    button.addEventListener('click', function(e) {
        const text = e.target.textContent;

        // Handle number buttons
        if (text >= '1' && text <= '9') {
            if (!operator) {
                num_one += text;
                result.textContent = num_one;
            } else {
                num_two += text;
                result.textContent = num_two;
            }
        }

        // Handle operators
        if (text === '+' || text === '-' || text === '*' || text === '/') {
            operator = text;
            result.textContent = operator;
        }

        // Handle equals button
        if (text === '=') {
            
            if (num_one && num_two && operator) {
                result.textContent = operate(Number(num_one), operator, Number(num_two));
                // Reset for next calculation
                num_one = '';
                num_two = '';
                operator = '';
            }
        }

        // Handle clear button
        if (text === 'CE') {
            num_one = '';
            num_two = '';
            operator = '';
            result.textContent = '';
        }
    });
});

       
    

let operate = (num_one, operator, num_two) => {
    switch(operator){
        case "+":
            return num_one + num_two;
        case "-":
            return num_one - num_two;
        case "*":
            return num_one * num_two;
        case "/":
            if(num_two != 0){
                return num_one / num_two;
            }
        
        default: 
        return "Invalid Operator"; 
        
    }
}





