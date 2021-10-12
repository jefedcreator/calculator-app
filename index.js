const display = document.getElementById('calculator__display')

function addNum(Num) {
    if (display.value === '0' ) {
        display.value = Num
    }
    else{
        display.value = display.value + Num
    }
}

function clearNum() {
    display.value = '0';
}

function addOperator(operator) {
    display.value = display.value + operator 
}

function evalNum() {
    display.value = eval(display.value)
}