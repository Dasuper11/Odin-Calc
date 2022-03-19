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

let numBtns = document.querySelectorAll('.number');
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(btn.id)
    })
});
let opBtns = document.querySelectorAll('.operator');
opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(btn.classList)
    })
});

let firstNum = "";
let secondNum = "";
let operator = "";
    

