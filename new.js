export function handleInput(value) {
    const operations = {
        'C': () => clearInput(),
        '⌫': () => backspaceInput(),
        '=': () => evaluateExpression(),
        'π': () => insertConstant('π'),
        'e': () => insertConstant('e'),
        'n!': () => calculateFactorial(),
        'x2': () => calculateMathOperation('square'),
        '√x': () => calculateMathOperation('squareroot'),
        '10x': () => calculateMathOperation('powOfTen'),
        'log': () => calculateMathOperation('log'),
        'ln': () => calculateMathOperation('ln'),
        'exp': () => calculateMathOperation('exp'),
        'Sin': () => calculateTrigonometric(Math.sin),
        'Cos': () => calculateTrigonometric(Math.cos),
        'Tan': () => calculateTrigonometric(Math.tan),
        '+/-': () => toggleSign(),
        '.': () => addDecimalPoint(),
        '(': () => addBracket('('),
        ')': () => addBracket(')'),
        // Handle digits and operators
        ...Object.fromEntries([...Array(10).keys()].map(n => [n.toString(), () => appendNumber(n.toString())])),
        '+': () => appendOperator('+'),
        '-': () => appendOperator('-'),
        'x': () => appendOperator('*'),
        '÷': () => appendOperator('/'),
        'mod': () => appendOperator('%')
    };

    // Execute corresponding function or handle unrecognized input
    if (operations[value]) {
        operations[value]();
    } else {
        alert('Invalid input');
    }
}

// Helper functions to replace the if-else ladder

function clearInput() {
    currentInput = '';
    display.value = '0';
    operatorUsed = false;
}

function backspaceInput() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
    operatorUsed = false;
}

function evaluateExpression() {
    if (/^\d+(\.\d+)?$/.test(currentInput)) {
        alert('Invalid expression! You must enter an operator.');
        return;
    }
    console.log(currentInput);
    currentInput = calc.evaluateExpression(currentInput);
    console.log(currentInput);
    display.value = currentInput;
    operatorUsed = true;
}

function insertConstant(constant) {
    if (calc.isValidPlacement(currentInput, constant)) {
        currentInput += constant;
        display.value = currentInput;
    } else {
        alert('Invalid (Add operator first)');
    }
}

function calculateFactorial() {
    if (currentInput === '' || isNaN(currentInput)) {
        alert('Please enter a valid number first.');
    } else {
        const result = calc.calculateFactorial(parseInt(currentInput));
        addToHistory(currentInput, result);
        currentInput = result;
        display.value = currentInput;
    }
}

function calculateMathOperation(operation) {
    if (currentInput === '') {
        alert('Please enter a number first.');
    } else {
        calc.calculateMathOperation(currentInput, operation);
    }
}

function calculateTrigonometric(func) {
    if (currentInput === '') {
        alert('Please enter a number first.');
    } else {
        calc.calculateTrigonometric(currentInput, func);
    }
}

function toggleSign() {
    let currentNumber = parseFloat(currentInput);
    if (!isNaN(currentNumber)) {
        currentInput = (currentNumber * -1).toString();
        display.value = currentInput;
    } else {
        alert('Please enter a valid number first.');
    }
}

function addDecimalPoint() {
    const lastOperand = currentInput.split(/[\+\-\*\/\%]/).pop();
    if (!lastOperand.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function addBracket(bracket) {
    if (bracket === '(') {
        if (currentInput === '' || /[+\-*/%^]$/.test(currentInput) || /\d$/.test(currentInput)) {
            currentInput += '(';
            display.value = currentInput;
        }
    } else if (bracket === ')') {
        if (currentInput.match(/\(/g) && (currentInput.match(/\(/g).length > (currentInput.match(/\)/g) ? currentInput.match(/\)/g).length : 0))) {
            currentInput += ')';
            display.value = currentInput;
        }
    }
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
    operatorUsed = false;
}

function appendOperator(operator) {
    if (currentInput === '') {
        alert("Enter number first");
        return;
    }
    currentInput += operator;
    display.value = currentInput;
    operatorUsed = true;
}


function calculatePower() {
    // This assumes the format 'x^y' (e.g., '2^3') in currentInput
    const [base, exponent] = currentInput.split('^').map(Number);
    if (isNaN(base) || isNaN(exponent)) {
        alert('Invalid input for x^y. Please enter a valid number for both x and y.');
        return;
    }
    const result = Math.pow(base, exponent);
    addToHistory(currentInput, result);
    currentInput = result.toString();
    display.value = currentInput;
}