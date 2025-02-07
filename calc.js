const historyButton = document.querySelector('.history-button');
const historyPanel = document.querySelector('.history-panel');
const closeHistoryButton = document.querySelector('.close-history');
const historyContent = document.querySelector('.history-content');

let calculationHistory = [];

// Load history from localStorage if available
function loadHistory() {
    const storedHistory = JSON.parse(localStorage.getItem('calculationHistory'));
    if (storedHistory && Array.isArray(storedHistory)) {
        calculationHistory = storedHistory;
        renderHistory();
    }
}

// Save history to localStorage
function saveHistory() {
    localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory));
}

// Render history to the DOM
function renderHistory() {
    historyContent.innerHTML = calculationHistory
        .map(entry => `
            <div class="history-entry">
                <div class="history-expression">${entry.expression}</div>
                <div class="history-result">= ${entry.result}</div>
            </div>
        `)
        .join('');
}

// Open history panel
historyButton.addEventListener('click', () => {
    historyPanel.classList.add('active');
});

// Close history panel
closeHistoryButton.addEventListener('click', () => {
    historyPanel.classList.remove('active');
});

// Function to add calculation to history
export function addToHistory(expression, result) {
    calculationHistory.unshift({ expression, result });
    if (calculationHistory.length > 10) calculationHistory.pop();  // Keep only the last 10 entries
    
    renderHistory();  // Update the history in the DOM
    saveHistory();  // Persist the history in localStorage
}

// Call loadHistory on page load to retrieve any stored history
window.addEventListener('DOMContentLoaded', loadHistory);



export function addToHistory(expression, result) {
    calculationHistory.unshift({ expression, result });
    if (calculationHistory.length > 10) calculationHistory.pop();

    historyContent.innerHTML = calculationHistory
        .map(entry => `
                <div class="history-entry">
                    <div class="history-expression">${entry.expression}</div>
                    <div class="history-result">= ${entry.result}</div>
                </div>
            `)
        .join('');
}