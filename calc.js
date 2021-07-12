// To clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// display values
function display(value) {
    document.getElementById("result").value += value;
}

// Evaluate the expression and return result
function calculate() {
    let m = document.getElementById("result").value;
    document.getElementById("result").value = eval(m);
}

