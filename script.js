const display = document.querySelector('#display-text');

const zeroBtn = document.querySelector('#btn-0');
const oneBtn = document.querySelector('#btn-1');
const twoBtn = document.querySelector('#btn-2');
const threeBtn = document.querySelector('#btn-3');
const fourBtn = document.querySelector('#btn-4');
const fiveBtn = document.querySelector('#btn-5');
const sixBtn = document.querySelector('#btn-6');
const sevenBtn = document.querySelector('#btn-7');
const eightBtn = document.querySelector('#btn-8');
const nineBtn = document.querySelector('#btn-9');

const addBtn = document.querySelector('#btn-add');
const subBtn = document.querySelector('#btn-subtract');
const multBtn = document.querySelector('#btn-multiply');
const divBtn = document.querySelector('#btn-divide');
const equalBtn = document.querySelector('#btn-equals');
const clearBtn = document.querySelector('#btn-clear');
const dotBtn = document.querySelector('#btn-dot');

let displayNum = "";
let firstNum = NaN;
let secondNum = NaN;
let operator = "";
let total = 0;

function add(num1, num2) {
    let total = num1 + num2;
    if (total % 1 !== 0) {
        total = total.toFixed(2);
    }
    return total;
}

function subtract(num1, num2) {
    let total = num1 - num2;
    if (total % 1 !== 0) {
        total = total.toFixed(2);
    }
    return total;
}

function multiply(num1, num2) {
    let total = num1 * num2;
    if (total % 1 !== 0) {
        total = total.toFixed(2);
    }
    return total;
}

function divide(num1, num2) {
    let total = num1 / num2;
    if (total % 1 !== 0) {
        total = total.toFixed(2);
    }
    return total;
}

function operate(op, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (op === "+") {
        total = add(num1, num2);
        firstNum = total;
    } else if (op === "-") {
        total = subtract(num1, num2);
        firstNum = total;
    } else if (op === "x") {
        total = multiply(num1, num2);
        firstNum = total;
    } else if (op === "/") {
        total = divide(num1, num2);
        firstNum = total;
    }
    display.textContent = total;
    displayNum = total;
    operator = "";
    console.log(firstNum);
    return firstNum;
}

zeroBtn.addEventListener('click', function() { 
    displayNum += "0";
    display.textContent = displayNum;
})

oneBtn.addEventListener('click', function() {
    displayNum += "1";
    display.textContent = displayNum;
})

twoBtn.addEventListener('click', function() {
    displayNum += "2";
    display.textContent = displayNum;
})

threeBtn.addEventListener('click', function() {
    displayNum += "3";
    display.textContent = displayNum;
})

fourBtn.addEventListener('click', function() {
    displayNum += "4";
    display.textContent = displayNum;
})

fiveBtn.addEventListener('click', function() {
    displayNum += "5";
    display.textContent = displayNum;
})

sixBtn.addEventListener('click', function() {  
    displayNum += "6";
    display.textContent = displayNum;
})

sevenBtn.addEventListener('click', function() {
    displayNum += "7";
    display.textContent = displayNum;
})

eightBtn.addEventListener('click', function() {
    displayNum += "8";
    display.textContent = displayNum;
})

nineBtn.addEventListener('click', function() {
    displayNum += "9";
    display.textContent = displayNum;
})

addBtn.addEventListener('click', function() {
    console.log(displayNum);
    if (operator !== "") {
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        firstNum = displayNum;
    }
    displayNum = "";
    operator = "+";
});

subBtn.addEventListener('click', function() {
    if (operator !== "") {
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        firstNum = displayNum;
    }
    displayNum = "";
    operator = "-";
});

multBtn.addEventListener('click', function() {
    if (operator !== "") {
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        firstNum = displayNum;
    }
    displayNum = "";
    operator = "x";
});

divBtn.addEventListener('click', function() {
    if (operator !== "") {
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        firstNum = displayNum;
    }
    displayNum = "";
    operator = "/";
});

equalBtn.addEventListener('click', function() {
    console.log(firstNum);
    if (operator !== "" && firstNum !== NaN) {
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    }
    console.log(firstNum);
})

clearBtn.addEventListener('click', function() {
    firstNum = NaN;
    secondNum = NaN;
    displayNum = "";
    operator = "";
    display.textContent = "0.";
})

dotBtn.addEventListener('click', function() {
    if (!displayNum.includes(".")) {
        displayNum += "."
        display.textContent = displayNum;
    }
})