document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    const equalButton = document.querySelector(".equal");
    const historyButton = document.querySelector('.history-button');
    const historySidebar = document.querySelector('.history-sidebar');
    const closeHistoryButton = document.querySelector('.close-history');
    const historyContent = document.querySelector('.history-content');

    let currentInput = '';
    let lastOperation = '';
    let operatorUsed = false;
    let calculationHistory = [];

    historyButton.addEventListener('click', () => {
        historySidebar.classList.add('active');
    });
    
    closeHistoryButton.addEventListener('click', () => {
        historySidebar.classList.remove('active');
    });

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent.trim();
            handleInput(value);
        });
    });


    document.addEventListener('keydown', function (event) {
        const key = event.key;


        if (key >= '0' && key <= '9') {
            handleInput(key);
        } 

        else if (key === '+' || key === '-' || key === '*' || key === '/') {
            handleInput(key);
        }

        else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace' || key === 'Delete') {
            handleInput('⌫');
        } else if (key === 'Escape') {
            handleInput('C');
        } else if (key === '.') {
            handleInput('.');
        }

        else if (key === 'p') {
            handleInput('π');
        } else if (key === 'e') {
            handleInput('e');
        }
    });


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
                addToHistory(currentInput, result);
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


    function evaluateExpression(expression) {
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


    window.addEventListener("error", function (e) {
        display.value = "Error";
        currentInput = '';
    });


    function updateDisplay(value) {
        if (value.length > 15) {
            display.value = 'Overflow';
            currentInput = '';
        } else {
            display.value = value || '0';
        }
    }

    function addToHistory(expression, result) {
        calculationHistory.unshift({ expression, result });
        if (calculationHistory.length > 10) calculationHistory.pop();
        
        historyContent.innerHTML = calculationHistory
            .map(entry => `
                <div class="history-entry">
                    <div>${entry.expression}</div>
                    <div>= ${entry.result}</div>
                </div>
            `)
            .join('');
    }
});



document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
  });