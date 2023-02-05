// All numbers and all operators buttons
const operations = document.querySelectorAll('.ops');
const numbers = document.querySelectorAll('.number');

// Clear and Equals buttons
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const screen = document.getElementById('screen');
const display = document.getElementById('display');
// const posNegBtn = document.querySelector('.pos-neg');
// const percentBtn = document.querySelector('.percent');


// Temporary arrays to store values that will display on the calc screen
let temp1 = [];
let temp2 = [];

// Stores numbers that need to be operated on
let number1;
let number2;

// This stores the result that will be outputed in the screen
let result = document.getElementById('result');
let total;

// Temporary stores the current operator
let tempOps = '';

let operatorSelected = false;

// Since numbers is a nodelist, Loop through each and get the numbers id to display each number
numbers.forEach(number => {
    number.addEventListener('click', function(e) {
        switch(e.target.id) {
            case 'zero':
                ScreenDisplay(0);
                StoreNums(0);
                break;
            case 'one':
                ScreenDisplay(1);
                StoreNums(1);
                break;
            case 'two':
                ScreenDisplay(2);
                StoreNums(2);
                break;
            case 'three':
                ScreenDisplay(3);
                StoreNums(3);
                break;
            case 'four':
                ScreenDisplay(4);
                StoreNums(4);
                break;
            case 'five':
                ScreenDisplay(5);
                StoreNums(5);
                break;
            case 'six':
                ScreenDisplay(6);
                StoreNums(6);
                break;
            case 'seven':
                ScreenDisplay(7);
                StoreNums(7);
                break;
            case 'eight':
                ScreenDisplay(8);
                StoreNums(8);
                break;
            case 'nine':
                ScreenDisplay(9);
                StoreNums(9);
                break;
        }
    })
});

operations.forEach(operator => {
    operator.addEventListener('click', function(e) {
        switch (e.target.id) {
            case 'add':
                tempOps = '+';
                ScreenDisplay(tempOps);
                operatorSelected = true;
                break;
            case 'subtract':
                tempOps = '-';
                ScreenDisplay(tempOps);
                operatorSelected = true;
                break;
            case 'multiply':
                tempOps = 'x';
                ScreenDisplay(tempOps);
                operatorSelected = true;
                break;
            case 'divide':
                tempOps = '÷';
                ScreenDisplay(tempOps);
                operatorSelected = true;
                break;
        }
    })
})


function ScreenDisplay(key) {
    clearBtn.textContent = 'C';

    display.textContent += key;
}

function StoreNums(num) {
    if(Number.isInteger(num) && operatorSelected === false) {
        temp1.push(num);
        let value1 = temp1.join('');
        number1 = parseInt(value1);
    } else if (Number.isInteger(num) && operatorSelected === true) {
        temp2.push(num);
        let value2 = temp2.join('');
        number2 = parseInt(value2);
    }
}



const add = function(num1, num2) {
    total = num1 + num2;
    result.textContent = total
    return total;
}

const subtract = function(num1, num2) {
    total = num1 - num2;
    result.textContent = total
    return total;
}

const multiply = function(num1, num2) {
    total = num1 * num2;
    result.textContent = total
    return total
}

const divide = function(num1, num2) {
    total = num1 / num2;
    result.textContent = total
    return total;
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
    temp1 = [];
    temp2 = [];
})


clearBtn.onclick = () => ClearScreen();
function ClearScreen() {
    clearBtn.textContent = 'AC';
    display.textContent = '';
    result.textContent = '';
    tempOps = '';
    temp1 = [];
    temp2 = [];
}