function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function operate(operator, x, y) {
    switch(operator) {
        default:
            return "Invalid operator input"
        case "+": 
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y)
        case "/":
            return divide(x, y);
    }
}