// let q = obj()
// console.log(typeof(p))

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 3
//     if (a == 2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// p.then((message) => {
//     console.log("then " + message)
// })
// p.catch((message) => {
//     console.log("catch" + message)
// })

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 4
//     // return result * 2;
//   }).catch(function(error) {
//     console.log(error)
//   })

// let a = [1, 2, 7, 4, 5]

// function max(arr){
//     let x = 0;
//     for(let i=0; i<arr.length; i++){
        
//         if(arr[i] > x){
//             x = arr[i]
//         }
          
//     }
//     return x 
// }

// console.log(max(a))

// let s = 'jash'
// for(let i=0; i<s.length; i++){
//     for(let j=(s.length-1); j<s.length; j--){
//         if(i != j){
            
//         }
//     }
// }

// let s = 'madam'

// function isPalindrome(str) { 

//   return str === str.split(”).reverse().join(”); 

// }
// isPalindrome(s)

document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.btn');
  let currentInput = '';  // The current input expression

  // Function to calculate the factorial of a number
  function factorial(n) {
      if (n === 0 || n === 1) {
          return 1;
      }
      let result = 1;
      for (let i = 1; i <= n; i++) {
          result *= i;
      }
      return result;
  }

  // Handle button clicks
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = button.textContent.trim();

          if (value === 'n!') {
              // If n! is pressed, check if there's a number to calculate its factorial
              if (currentInput === '' || isNaN(currentInput)) {
                  alert('Please enter a number first.');
              } else {
                  // Calculate the factorial if the input is a valid number
                  const number = parseFloat(currentInput);
                  if (number < 0) {
                      alert('Factorial is not defined for negative numbers.');
                  } else {
                      const result = factorial(number);
                      currentInput = result.toString();  // Update the input with the result
                      display.value = currentInput;  // Show the result in the display
                  }
              }
          } else if (value === 'C') {
              // Clear the input
              currentInput = '';
              display.value = '0';
          } else if (value === '⌫') {
              // Backspace (remove last character)
              currentInput = currentInput.slice(0, -1);
              display.value = currentInput || '0';
          } else if (value === '=') {
              // Handle evaluation logic here, e.g., simple eval or custom logic
              try {
                  currentInput = evaluateExpression(currentInput);
                  display.value = currentInput;
              } catch (error) {
                  display.value = 'Error';
                  currentInput = '';
              }
          } else {
              // For numbers and other buttons, append the value to the input
              currentInput += value;
              display.value = currentInput;
          }
      });
  });

  // A function to evaluate the expression (you can use eval or implement your own logic)
  function evaluateExpression(expression) {
      try {
          // This is a simple eval function, you might want to improve it
          return eval(expression).toString();
      } catch (e) {
          return 'Error';
      }
  }
});



if (value === 'sin') {
  // Handle sin button (convert to radians if needed)
  const angle = parseFloat(currentInput);
  if (isNaN(angle)) {
      alert('Please enter a valid number first.');
  } else {
      const radians = degreesToRadians(angle);  // Convert to radians if it's in degrees
      currentInput = Math.sin(radians).toString();  // Calculate sin of the angle
      display.value = currentInput;  // Update display
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.btn');
  const equalButton = document.querySelector('.equal');
  let currentInput = '';  // Current input string

  // Handle button clicks
  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const value = button.textContent.trim();

          if (value === '=') {
              // Calculate result when '=' button is clicked
              currentInput = evaluateExpression(currentInput);
              display.value = currentInput;  // Update display with the result
          } else {
              currentInput += value;
              display.value = currentInput;  // Update display with the current input
          }
      });
  });

  // Listen for Enter key press
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
          e.preventDefault();  // Prevent the default Enter behavior (e.g., form submission)
          // Trigger the '=' button logic when Enter is pressed
          equalButton.click();
      }
  });

  // Function to evaluate the expression
  function evaluateExpression(expr) {
      try {
          return eval(expr);  // Use eval to calculate the result of the expression (use cautiously)
      } catch (error) {
          return 'Error';  // In case of invalid expression
      }
  }
});

expression = expression.replace(/π/g, Math.PI);
expression = expression.replace(/e/g, Math.E);
expression = expression.replace(/x/g, '*');
expression = expression.replace(/÷/g, '/');
expression = expression.replace(/mod/g, '%');   
expression = expression.replace(/log\(/g, 'Math.log10(')

try {
    const result = Function('return ' + expression)();
    addToHistory(currentInput, result);
    return result.toString();
} catch (error) {
    throw new Error("Invalid Expression");
}

document.getElementById('calculate').addEventListener('click', function() {
    // Get the values of both inputs
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    
    // Ensure both inputs are valid numbers, including decimals
    if (isValidDecimal(input1) && isValidDecimal(input2)) {
        // Combine the two inputs into an expression for calculation
        let expression = `${input1} + ${input2}`;  // Example of addition

        try {
            // Evaluate the expression using Function constructor or eval
            const result = Function('return ' + expression)();
            document.getElementById('result').innerText = 'Result: ' + result;
        } catch (e) {
            document.getElementById('result').innerText = 'Error in calculation';
        }
    } else {
        document.getElementById('result').innerText = 'Please enter valid decimal numbers';
    }
});

// Function to validate if input is a valid decimal number
function isValidDecimal(value) {
    // Check if the value is a valid decimal number (or integer)
    const decimalRegex = /^[+-]?\d+(\.\d+)?$/;
    return decimalRegex.test(value);
}


class Calculator {
    constructor() {
        this.currentInput = '';
        this.operatorUsed = false;
        this.display = document.getElementById('display');  // Assuming you have a display element
    }

    clear() {
        this.currentInput = '';
        this.display.value = '0';
        this.operatorUsed = false;
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.display.value = this.currentInput || '0';
        this.operatorUsed = false;
    }

    toggleSign() {
        let currentNumber = parseFloat(this.currentInput);
        if (!isNaN(currentNumber)) {
            this.currentInput = (currentNumber * -1).toString();
            this.display.value = this.currentInput;
        } else {
            alert('Please enter a valid number first.');
        }
    }

    addDecimal() {
        // Allow decimal if there is no decimal already in the current operand
        const lastOperand = this.currentInput.split(/[\+\-\*\/\%]/).pop();  // Get the last operand
        if (!lastOperand.includes('.')) {
            this.currentInput += '.';
            this.display.value = this.currentInput;
        }
    }

    handleInput(value) {
        switch(value) {
            case 'C':
                this.clear();
                break;
            case '⌫':
                this.backspace();
                break;
            case '=':
                this.evaluateExpression();
                break;
            case 'π':
            case 'e':
                this.addConstant(value);
                break;
            case 'n!':
                this.calculateFactorial();
                break;
            case 'x2':
                this.calculateMathOperation('square');
                break;
            case '√x':
                this.calculateMathOperation('squareroot');
                break;
            case '10x':
                this.calculateMathOperation('powOfTen');
                break;
            case 'log':
                this.calculateMathOperation('log');
                break;
            case 'ln':
                this.calculateMathOperation('ln');
                break;
            case 'exp':
                this.calculateMathOperation('exp');
                break;
            case 'Sin':
            case 'Cos':
            case 'Tan':
                this.calculateTrigonometric(value);
                break;
            case '+/-':
                this.toggleSign();
                break;
            case '.':
                this.addDecimal();
                break;
            default:
                if (/[0-9]/.test(value)) {
                    this.addNumber(value);
                } else if (/[+\-x÷modxy]/.test(value)) {
                    this.addOperator(value);
                } else if (value === '(') {
                    this.addParenthesis('(');
                } else if (value === ')') {
                    this.addParenthesis(')');
                }
        }
    }

    addNumber(value) {
        this.currentInput += value;
        this.display.value = this.currentInput;
        this.operatorUsed = false;
    }

    addOperator(value) {
        if (this.currentInput === '') {
            alert("Enter number first");
            return;
        }
        this.currentInput += value;
        this.display.value = this.currentInput;
        this.operatorUsed = true;
    }

    addParenthesis(value) {
        if (value === '(' && (this.currentInput === '' || /[+\-*/%^]$/.test(this.currentInput) || /\d$/.test(this.currentInput))) {
            this.currentInput += '(';
            this.display.value = this.currentInput;
        } else if (value === ')' && (this.currentInput.match(/\(/g)?.length > (this.currentInput.match(/\)/g)?.length || 0))) {
            this.currentInput += ')';
            this.display.value = this.currentInput;
        }
    }

    addConstant(value) {
        if (this.isValidPlacement(value)) {
            this.currentInput += (value === 'π' ? Math.PI : Math.E).toString();
            this.display.value = this.currentInput;
        } else {
            alert('Invalid (Add operator first)');
        }
    }

    isValidPlacement(value) {
        return !/[+\-*/%^]$/.test(this.currentInput) && this.currentInput !== '';
    }

    calculateFactorial() {
        if (this.currentInput === '') {
            alert('Please enter a number first.');
        } else {
            const result = this.factorial(parseInt(this.currentInput));
            this.currentInput = result.toString();
            this.display.value = this.currentInput;
        }
    }

    factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    calculateMathOperation(operation) {
        if (this.currentInput === '') {
            alert('Please enter a number first.');
            return;
        }
        const input = parseFloat(this.currentInput);
        let result;
        switch (operation) {
            case 'square':
                result = input * input;
                break;
            case 'squareroot':
                result = Math.sqrt(input);
                break;
            case 'powOfTen':
                result = Math.pow(10, input);
                break;
            case 'log':
                result = Math.log10(input);
                break;
            case 'ln':
                result = Math.log(input);
                break;
            case 'exp':
                result = Math.exp(input);
                break;
        }
        this.currentInput = result.toString();
        this.display.value = this.currentInput;
    }

    calculateTrigonometric(value) {
        if (this.currentInput === '') {
            alert('Please enter a number first.');
            return;
        }
        const angle = parseFloat(this.currentInput);
        const radians = this.degreesToRadians(angle);
        let result;
        switch (value) {
            case 'Sin':
                result = Math.sin(radians);
                break;
            case 'Cos':
                result = Math.cos(radians);
                break;
            case 'Tan':
                result = Math.tan(radians);
                break;
        }
        this.currentInput = result.toString();
        this.display.value = this.currentInput;
    }

    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    evaluateExpression() {
        try {
            if (/^\d+(\.\d+)?$/.test(this.currentInput)) {
                alert('Invalid expression! You must enter an operator.');
                return;
            }
            this.currentInput = eval(this.currentInput).toString();
            this.display.value = this.currentInput;
            this.operatorUsed = true;
        } catch (error) {
            this.display.value = 'Error';
            this.currentInput = '';
            this.operatorUsed = false;
        }
    }
}

// Create an instance of the calculator
const calculator = new Calculator();

// Example usage
// Assuming button clicks are handled via the 'handleInput' method
// calculator.handleInput(value);
