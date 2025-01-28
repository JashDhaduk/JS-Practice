document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    const equalButton = document.querySelector(".equal");

    let currentInput = '';
    let lastOperation = '';
    let operatorUsed = false;

    // Function to handle button clicks
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.textContent.trim();
            handleInput(value);
        });
    });

    // Handle keyboard input
    document.addEventListener('keydown', function (event) {
        const key = event.key;

        // Handle number keys
        if (key >= '0' && key <= '9') {
            handleInput(key);
        } 
        // Handle operator keys
        else if (key === '+' || key === '-' || key === '*' || key === '/') {
            handleInput(key);
        }
        // Handle special keys
        else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace' || key === 'Delete') {
            handleInput('⌫');
        } else if (key === 'Escape') {
            handleInput('C');
        } else if (key === '.') {
            handleInput('.');
        }
        // Handle other custom keys like 'π', 'e', etc.
        else if (key === 'p') {
            handleInput('π');
        } else if (key === 'e') {
            handleInput('e');
        }
    });

    // Function to handle input (from button click or keyboard press)
    function handleInput(value) {
        if (value === 'C') {
            currentInput = '';
            display.value = '0';
            operatorUsed = false;
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || '0';
            operatorUsed = false;
        } else if (value === '=') {
            try {
                // Evaluate the expression and handle errors
                currentInput = evaluateExpression(currentInput);
                display.value = currentInput;
                operatorUsed = true;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
                operatorUsed = false;
            }
        } else if (value === 'π') {
            currentInput += 'π';
            display.value = currentInput;
        } else if (value === 'e') {
            currentInput += 'e';
            display.value = currentInput;
        } else if (value === '.') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                display.value = currentInput;
            }
        } else {
            if (operatorUsed && !['+', '-', '*', '/'].includes(value)) {
                currentInput = '';
            }
            currentInput += value;
            display.value = currentInput;
            operatorUsed = false;
        }
    }

    // Function to handle evaluation of expression
    function evaluateExpression(expression) {
        // Replace symbols for proper calculation
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e/g, Math.E);
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/mod/g, '%');

        try {
            const result = Function('return ' + expression)();
            return result.toString();
        } catch (error) {
            throw new Error("Invalid Expression");
        }
    }

    // Function to calculate factorial (for n!)
    function calculateFactorial(input) {
        const num = parseInt(input);
        if (isNaN(num) || num < 0) {
            throw new Error('Invalid Input');
        }
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial.toString();
    }

    // Handle error cases
    window.addEventListener("error", function (e) {
        display.value = "Error";
        currentInput = '';
    });

    // Handle input value in display
    function updateDisplay(value) {
        if (value.length > 15) {
            display.value = 'Overflow';
            currentInput = '';
        } else {
            display.value = value || '0';
        }
    }
});
