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

let displayNum = "";
let firstNum = NaN;
let secondNum = NaN;
let operator = "";

function add(num1, num2) {
    let total = num1 + num2;
    return total;
}

function subtract(num1, num2) {
    let total = num1 + num2;
    return total;
}

function multiply(num1, num2) {
    let total = num1 + num2;
    return total;
}

function divide(num1, num2) {
    let total = num1 / num2;
    return total;
}

function operate(op, num1, num2) {
    if (op === "+") {
        add(num1, num2);
        displayNum.textContent = total;
        firstNum = total;
    } else if (op === "-") {
        subtract(num1, num2);
        displayNum.textContent = total;
        firstNum = total;
    } else if (op === "x") {
        multiply(num1, num2);
        displayNum.textContent = total;
        firstNum = total;
    } else if (op === "/") {
        divide(num1, num2);
        displayNum.textContent = total;
        firstNum = total;
    }
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
    if (operator !== "") {
        Number(displayNum);
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        Number(displayNum);
        firstNum = displayNum;
    }
    operator = "+";
});

subBtn.addEventListener('click', function() {
    if (operator !== "") {
        Number(displayNum);
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        Number(displayNum);
        firstNum = displayNum;
    }
    operator = "-";
});

multBtn.addEventListener('click', function() {
    if (operator !== "") {
        Number(displayNum);
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        Number(displayNum);
        firstNum = displayNum;
    }
    operator = "x";
});

divBtn.addEventListener('click', function() {
    if (operator !== "") {
        Number(displayNum);
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    } else {
        Number(displayNum);
        firstNum = displayNum;
    }
    operator = "/";
});

equalBtn.addEventListener('click', function() {
    if (operator !== "" && firstNum !== NaN) {
        Number(displayNum);
        secondNum = displayNum;
        operate(operator, firstNum, secondNum);
    }
})