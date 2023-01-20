// All numbers and all operators buttons
const operations = document.querySelectorAll('.ops');
const numbers = document.querySelectorAll('.number');

// Clear and Equals buttons
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const screen = document.getElementById('screen');
// const posNegBtn = document.querySelector('.pos-neg');
// const percentBtn = document.querySelector('.percent');


// Temporary arrays to store values that will display on the calc screen
let temp1 = [];
let temp2 = [];

// Stores numbers that need to be operated on
let number1;
let number2;

// This stores the result that will be outputed in the screen
let result;

// Temporary stores the current operator
let tempOps = '';

let operatorSelected = false;

// Since numbers is a nodelist, Loop through each and get the numbers id to display each number
numbers.forEach(number => {
    number.addEventListener('click', function(e) {
        switch(e.target.id) {
            case 'zero':
                ScreenDisplay(0);
                break;
            case 'one':
                ScreenDisplay(1);
                break;
            case 'two':
                ScreenDisplay(2);
                break;
            case 'three':
                ScreenDisplay(3);
                break;
            case 'four':
                ScreenDisplay(4);
                break;
            case 'five':
                ScreenDisplay(5);
                break;
            case 'six':
                ScreenDisplay(6);
                break;
            case 'seven':
                ScreenDisplay(7);
                break;
            case 'eight':
                ScreenDisplay(8);
                break;
            case 'nine':
                ScreenDisplay(9);
                break;
        }
    })
});

operations.forEach(operator => {
    operator.addEventListener('click', function(e) {
        switch (e.target.id) {
            case 'add':
                tempOps = '+';
                operatorSelected = true;
                break;
            case 'subtract':
                tempOps = '-';
                operatorSelected = true;
                break;
            case 'multiply':
                tempOps = 'x';
                operatorSelected = true;
                break;
            case 'divide':
                tempOps = '÷';
                operatorSelected = true;
                break;
        }
    })
})


function ScreenDisplay(key) {
    clearBtn.textContent = 'C';

    if(Number.isInteger(key) && operatorSelected === false) {
        temp1.push(key);
        let value1 = temp1.join('');
        screen.textContent = value1;
        number1 = parseInt(value1);
    } else if (Number.isInteger(key) && operatorSelected === true) {
        temp2.push(key);
        let value2 = temp2.join('');
        screen.textContent = value2;
        number2 = parseInt(value2);
    } else if (key === '=') {
        screen.textContent = result;
    }
}



const add = function(num1, num2) {
    result = num1 + num2;
    return result;
}

const subtract = function(num1, num2) {
    result = num1 - num2;
    return result;
}

const multiply = function(num1, num2) {
    result = num1 * num2;
    return result;
}

const divide = function(num1, num2) {
    result = num1 / num2;
    return result;
}

const Operate = function(ops, num1, num2) {
    switch (ops) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case 'x':
            multiply(num1, num2);
            break;
        case '÷':
            divide(num1, num2);
            break;
    }
}


// Result
equalsBtn.addEventListener('click', function() {
    Operate(tempOps, number1, number2);
    operatorSelected = false;
    ScreenDisplay('=');
    temp1 = [];
    temp2 = [];
})


clearBtn.onclick = () => ClearScreen();
function ClearScreen() {
    clearBtn.textContent = 'AC';
    screen.textContent = '';
    screen.style.fontSize = '25px';
    tempOps = '';
    temp1 = [];
    temp2 = [];
}

// window.onload = () => {
//     ClearScreen();
// }