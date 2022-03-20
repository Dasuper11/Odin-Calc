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
window.firstNum = "";
window.secondNum = "";
window.operator = "";
window.firstTrueSecondFalse = true;
window.selectingOperator = false;
window.finished = false;
window.result = 0;

//------FOR TOMORROW: FIGURE OUT SCOPE---------;
function addDigit(bID){
    if(finished){
        firstNum = ""; secondNum=""; finished=false;
    }
    if(!(firstTrueSecondFalse) && selectingOperator){
        selectingOperator = false;
    }
    firstTrueSecondFalse ? (firstNum += bID):(secondNum += bID)
}


function selectOperator(bID){
    if(finished){
        firstNum=result; firstTrueSecondFalse = false; selectingOperator = true;
    }
    if(){

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
        alert(btn.classList)
    })
});


    

