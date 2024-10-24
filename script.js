// Append value to the calculator's result
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Clear the result field
function clearResult() {
    document.getElementById('result').value = '';
}

// Delete the last character from the result field
function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    let result = document.getElementById('result').value;
    if (result) {
        try {
            document.getElementById('result').value = eval(result);
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
}
