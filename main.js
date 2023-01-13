// All numbers and all operators 
const operations = document.querySelectorAll('.ops');
const numbers = document.querySelectorAll('.number');

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
                SelectedOps('+');
                ValueOne(temp);
                break;
            case 'subtract':
                SelectedOps('-');
                break;
            case 'multiply':
                SelectedOps('x');
                break;
            case 'divide':
                SelectedOps('÷');
                break;
        }
    })
})

// Temporary arrays to store values that will display on the calc screen
let temp = [];

const screen = document.getElementById('screen');

function ScreenDisplay(key) {
    clearBtn.textContent = 'C';

    if(Number.isInteger(key)) {
        temp.push(key);
        let value = temp.join('');
        screen.textContent = value;
    }
}

const SelectedOps = function(operator) {
    return operator;
    // console.log(operator);
}

const ValueOne = function(numArr) {
    let value = numArr.join('');
    let number1 = parseInt(value);
    temp = [];
    ValueTwo(temp);
    // return number1;
    // console.log(number1);
}

const ValueTwo = function(numArr) {
    let value = numArr.join('');
    let number2 = parseInt(value);
    // return number2;
    // console.log(number2);
}


// Result/ Equals
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', function() {
})

// operations
const clearBtn = document.querySelector('.clear');
const posNegBtn = document.querySelector('.pos-neg');
const percentBtn = document.querySelector('.percent');
// const addBtn = document.querySelector('.add');
// const subtractBtn = document.querySelector('.subtract');
// const multiplyBtn = document.querySelector('.multiply');
// const divideBtn = document.querySelector('.divide');


// addBtn.addEventListener('click', function() {
//     SelectedOps('+');
//     operatorSelected = true;
// })

// subtractBtn.addEventListener('click', function() {
//     temp = [];
// })

// multiplyBtn.addEventListener('click', function() {
//     temp = [];
// })

// divideBtn.addEventListener('click', function() {
//     temp = [];
// })




// numbers 
// const zeroBtn = document.querySelector('.zero');
// const oneBtn = document.querySelector('.one');
// const twoBtn = document.querySelector('.two');
// const threeBtn = document.querySelector('.three');
// const fourBtn = document.querySelector('.four');
// const fiveBtn = document.querySelector('.five');
// const sixBtn = document.querySelector('.six');
// const sevenBtn = document.querySelector('.seven');
// const eightBtn = document.querySelector('.eight');
// const nineBtn = document.querySelector('.nine');

// Variable counts the amount of #'s in the screen to decrease font size to fit display
// let count = 0;


// screen numbers



// zeroBtn.addEventListener('click', function(){
//     ScreenDisplay(0);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// oneBtn.addEventListener('click', function(){
//     ScreenDisplay(1);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// twoBtn.addEventListener('click', function(){
//     ScreenDisplay(2);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// threeBtn.addEventListener('click', function(){
//     ScreenDisplay(3);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// fourBtn.addEventListener('click', function(){
//     ScreenDisplay(4);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// fiveBtn.addEventListener('click', function(){
//     ScreenDisplay(5);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// sixBtn.addEventListener('click', function(){
//     ScreenDisplay(6);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// sevenBtn.addEventListener('click', function(){
//     ScreenDisplay(7);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// eightBtn.addEventListener('click', function(){
//     ScreenDisplay(8);
//     operatorSelected = false;
//     // StoreValues(temp);
// });
// nineBtn.addEventListener('click', function(){
//     ScreenDisplay(9);
//     operatorSelected = false;
//     // StoreValues(temp);
// });


clearBtn.onclick = () => ClearScreen();



const Operate = function(ops, num1, num2) {
    switch (ops) {
        case '+':
            add(num1, num2);
            break;
    }
}



function ClearScreen() {
    clearBtn.textContent = 'AC';
    screen.textContent = '0';
    screen.style.fontSize = '50px';
    count = 0;
    temp = [];
}

const add = function(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    // return result = num1 + num2;
}

const subtract = function() {

}

const multiply = function() {

}

const divide = function() {

}


window.onload = () => {
    ClearScreen();
}