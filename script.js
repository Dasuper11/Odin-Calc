function cAdd(a,b){
    return a + b;
}
function cSub(a,b){
    return a - b;
}
function cMult(a,b){
    return a * b;
}
function cDiv(a,b){
    return Math.round((a *1000) / b)/1000;
}

function operate(Operator, a, b){
    if (Operator == "add"){
        c = cAdd(a,b);
    }else if(Operator == "subtract"){
        c = cSub(a,b);
    }else if(Operator == "multiply"){
        c = cMult(a,b);
    }else if(Operator == "divide"){
        c = cDiv(a,b)
    }else{
        c = "ERROR"
    }
    return c
}
window.screenText = document.querySelector('#display');

window.firstNum = "";
window.secondNum = "";
window.operator = "";
window.firstTrueSecondFalse = true;
window.selectingOperator = false;
window.finished = false;
window.result = 0;
screenText.textContent = "";


function addDigit(bID){
    if(finished){
        firstNum = ""; secondNum=""; finished=false;
    }
    if((firstTrueSecondFalse) && selectingOperator){
        selectingOperator = false; firstTrueSecondFalse = false;
    }
    firstTrueSecondFalse ? (firstNum += bID):(secondNum += bID)
    firstTrueSecondFalse ? (screenText.textContent = firstNum):(screenText.textContent = secondNum)
}
function sequence(bID){
    firstNum= "" + result; secondNum = ""; selectingOperator = true; finished = false;
         operator= bID; screenText.textContent = bID; firstTrueSecondFalse = false;
}

function selectOperator(bID){
    if(finished){
        sequence(bID)
    }
    if(!(firstTrueSecondFalse)){//shouldnt do anything after second starts
        equals(); sequence(bID); return;
    }
    if(firstTrueSecondFalse){//during first, change to second and to selecting operator
        selectingOperator = true; operator = bID; screenText.textContent = bID;
    }
    if(selectingOperator){//if already selecting operator, replace operator
        operator= bID; screenText.textContent = bID;
    }

}

function clear(){
    firstNum = ""; secondNum = ""; operator = ""; firstTrueSecondFalse = true;
    selectingOperator = false; finished = false;
    screenText.textContent = ""; result = 0;
}

function equals(){
    if(!(firstTrueSecondFalse)){
        result = operate(operator, parseInt(firstNum), parseInt(secondNum))
        screenText.textContent = result;
        finished = true; firstTrueSecondFalse = true;
    }
}

let numBtns = document.querySelectorAll('.number');
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        addDigit(btn.id)
    })
});
let opBtns = document.querySelectorAll('.operator');
opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        selectOperator(btn.id);
    })
});

let eqlBtn = document.querySelector('#equals');
let clrBtn = document.querySelector('#clear');

eqlBtn.addEventListener('click', () =>{equals()})
clrBtn.addEventListener('click', () => {clear()})

    

