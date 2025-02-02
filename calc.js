// Add this input handler module at the top of basic.js
const inputHandler = (() => {
    let isDecimalNumber = false;
    const operatorsForDecimal = ['-', '+', '^', '*', '/', '(', ')', '%'];
    const operators = ['-', '+', '^', '*', '/', '%'];
    let parenthesis = 0;

    const resetParenthesis = () => parenthesis = 0;

    const updateDecimalNumber = (input) => {
        if (input.length <= 0) {
            isDecimalNumber = false;
            return;
        }

        const lastChar = input[input.length - 1];
        isDecimalNumber = lastChar === '.' || 
            (!operatorsForDecimal.includes(lastChar) && isDecimalNumber);
    };

    const checkOperator = (input) => {
        if (input.length < 2) return input;
        
        const lastChar = input[input.length - 1];
        const prevChar = input[input.length - 2];

        if (operators.includes(lastChar) && operators.includes(prevChar)) {
            return input.slice(0, -1);
        }
        return input;
    };

    const processInput = (input) => {
        const lastChar = input[input.length - 1];
        
        // Handle parentheses counting
        if (lastChar === '(') parenthesis++;
        if (lastChar === ')' && parenthesis > 0) parenthesis--;
        
        // Update decimal state
        updateDecimalNumber(input);
        
        // Clean operator sequences
        return checkOperator(input);
    };

    return {
        processInput,
        checkForDecimal: () => isDecimalNumber,
        checkForParenthesis: () => parenthesis > 0,
        resetParenthesis
    };
})();

// Modify the existing handleInput function
function handleInput(value) {
    let newInput = currentInput;

    if (value === 'C') {
        currentInput = '';
        inputHandler.resetParenthesis();
        operatorUsed = false;
        display.value = '0';
        return;
    }

    if (value === '⌫') {
        newInput = newInput.slice(0, -1);
        currentInput = inputHandler.processInput(newInput);
        display.value = currentInput || '0';
        operatorUsed = false;
        return;
    }

    if (value === '.') {
        if (!inputHandler.checkForDecimal()) {
            newInput += value;
        }
    } 
    else if (['(', ')'].includes(value)) {
        if (value === '(' || (value === ')' && inputHandler.checkForParenthesis())) {
            newInput += value;
        }
    }
    else if (operators.includes(value)) {
        newInput += value;
    }
    else {
        newInput += value;
    }

    // Process and validate the new input
    currentInput = inputHandler.processInput(newInput);
    display.value = currentInput || '0';
    operatorUsed = false;

    // Special cases for operations needing processing
    if (value === '=') {
        try {
            const result = evaluateExpression(currentInput);
            addToHistory(currentInput, result);
            currentInput = result.toString();
            display.value = currentInput;
            operatorUsed = true;
            inputHandler.resetParenthesis();
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
            operatorUsed = false;
        }
    }
}

// Update the existing evaluateExpression function to handle cleaned input
function evaluateExpression(expression) {
    // Add existing replacements and evaluations
    // ... (keep previous replacements and evaluation logic)
    
    // Add validation for decimal points
    const decimalRegex = /(\d*\.\d*)\./g;
    if (decimalRegex.test(expression)) {
        throw new Error("Multiple decimals");
    }

    // Rest of your existing evaluation logic
}

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        const value = button.textContent.trim();
        
        // Handle special cases
        if (value === 'x²') handleInput('^2');
        else if (value === '√x') handleInput('√');
        else if (value === 'x^y') handleInput('^');
        else if (value === '10^x') handleInput('10^');
        else handleInput(value);
    });
});