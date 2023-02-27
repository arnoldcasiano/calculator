const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let value = e.target.textContent;
        UserInput(value);
    });
});

let operator = '';
let num1 = '';
let num2 = '';
let storedInputs = [];
let isNegative = false;
let percent = false;
let decimalAdded = false; 

function UserInput(input) {
    if (input === 'AC' || input === 'C') {
        storedInputs = [];
        decimalAdded = false;
        DisplayNums('');
        num1 = '';
        num2 = '';
        document.getElementById('ac').textContent = 'AC';
    } else if (input === '+/-') {
        isNegative = !isNegative; // toggles when clicked
        if (isNegative) {
            DisplayNums('-');
        } else {
            DisplayNums('');
        }
    } else if (input === '%') {
        percent = true;
        if (storedInputs.length > 0 && percent) {
            let percentNum = Operate('x', storedInputs.join(''), .01);
            DisplayNums(percentNum);
        }
    } else if (input === '0' || input === '1' || input === '2' || input ===  '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || input === '.') {
        // Decimal check for more than one
        if (input === '.') {
            if (decimalAdded) {
                return; // exits function if decimal has been added already and '.' is not added to StoredInputs
            } else {
                decimalAdded = true;
            }
        }
        // Checks if the pos/neg button has been clicked to modify number 
        if (isNegative) {
            storedInputs.unshift('-') // Adds neg sign at the beginning 
            isNegative = false; // resets
        }
        // Clear button changes from AC to C
        if (screen.textContent === '') {
            document.getElementById('ac').textContent = 'AC';
        } else {
            document.getElementById('ac').textContent = 'C';
        }
        // Stores number and displays it on screen
        storedInputs.push(input);
        DisplayNums(storedInputs.join(''));
    } else if (input === '+' || input === '-' || input === 'x' || input === '÷') {
        if (num1 === '') {
            num1 = storedInputs.join('') || num1;
        } else {
            num2 = storedInputs.join('');
            if (num2) {
                let currentTotal = Operate(operator, num1, num2);
                num1 = currentTotal;
                storedInputs = [];
            }
            DisplayNums(num1);
        }
        operator = input; 
        storedInputs = [];
        decimalAdded = false; // resets decimal point
    } else if (input === '=') {
        num2 = storedInputs.join('') || num2;
        let result = Operate(operator, num1, num2);
        num1 = result;
        storedInputs = [];
        DisplayNums(num1);
    }
}



function DisplayNums(num) {
    screen.textContent = '';
    screen.textContent = num.toString().substring(0, 8);
}



const Operate = function(op, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;

    switch (op) {
        case '+':
             result = num1 + num2;
             break;
        case '-':
             result = num1 - num2;
             break;
        case 'x':
             result = num1 * num2;
             break;
        case '÷':
            if (num2 === 0) {
                 result = 0;
            } else {
                 result = num1 / num2;
            }
            break;
    }
    // If result contains decimal point display only two decimal points otherwise display w/out decimal point
    if (result % 1 === 0) {
        return result;
    } else {
        let resultStr = result.toString(); 
        if (resultStr.indexOf('.') !== -1) { // if decimal point is found 
            let decimalSplit = resultStr.split('.'); // splits the left side of the decimal pt from the right side of decimal pt
            if (decimalSplit[1].length === 1) {
                return result.toFixed(1);
            } else {
                return result.toFixed(2);
            }
        }
    }
}