//物件
let result = document.querySelector("#result");
let prevnum = document.querySelector("#prevnum");
let operate = document.querySelector("#operate");
let currentnum = document.querySelector("#currentnum");

let numbers = document.querySelectorAll(".nums");
let operation = document.querySelectorAll(".opeation");

//變數
let prevNumber = " ";
let currentOp = " ";
let currentNumber = " ";
let storage = []; 


//功能 
function update(){

    currentNumber = arrayToNum(storage);
    if(storage.length === 0) {currentNumber = 0 };

    prevnum.innerHTML = prevNumber;
    operate.innerHTML = currentOp;
    currentnum.innerHTML = currentNumber;
    result.innerHTML = prevNumber;
};

function arrayToNum(arr){
    return parseFloat(arr.join(""))
};



function calculate(prevNum,operand,currentNum){
    console.log(prevNumber, currentNumber);
    prevNum = parseFloat(prevNum);
    currentNum = parseFloat(currentNum);
    switch (operand) {
        case "÷":
            prevNumber = prevNum / currentNum;
            break;
        case "*":
            prevNumber = prevNum * currentNum;
            break;
        case "-":
            prevNumber = prevNum - currentNum;
            break;
        case "+":
            prevNumber = prevNum + currentNum;
            break;            
    }
    storage = [];
};

//監聽
numbers.forEach(item => {
    item.addEventListener('click', ()=>{
        storage.push(item.innerHTML);
        update();
    })
})

operation.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(item.innerHTML);
        switch (item.innerHTML) {
            case "DEL":
                storage.pop(1);
            break;
            case "AC":
                prevNumber = " ";
                currentOp = " ";
                currentNumber = " ";
                storage = []; 
            break;
            
            case "+/-":
                if(storage.length === 0) return
                if(storage[0] === "-") {
                    storage.shift(1);
                }else{
                    storage.unshift("-")
                }
            break

            case "÷" :
                
                if(storage.length === 0) {
                    currentOp = "÷"
                    update();
                    return
                }
                if(prevNumber === " ") {
                prevNumber = currentNumber;
                storage = []; }
                else{
                calculate(prevNumber,currentOp,currentNumber);
                }
                currentOp = "÷"
                
            break
            case "*" :
                
                if(storage.length === 0) {
                    currentOp = "*"
                    update();
                    return
                }
                if(prevNumber === " ") {
                prevNumber = currentNumber;
                storage = []; }
                else{
                calculate(prevNumber,currentOp,currentNumber);
                }
                currentOp = "*"
            break
            case "-" :
                
                if(storage.length === 0) {
                    currentOp = "-"
                    update();
                    return
                }
                if(prevNumber === " ") {
                prevNumber = currentNumber;
                storage = []; }
                else{
                calculate(prevNumber,currentOp,currentNumber);
                }
                currentOp = "-"
            break
            case "+" :
                
                if(storage.length === 0) {
                    currentOp = "+"
                    update();
                    return
                }
                if(prevNumber === " ") {
                prevNumber = currentNumber;
                storage = []; }
                else{
                calculate(prevNumber,currentOp,currentNumber);
                }
                currentOp = "+"
            break

            case "=":
                if(storage.length === 0) {
                    currentOp = "+"
                    update();
                    return
                }
                if(prevNumber === " ") {
                prevNumber = currentNumber;
                storage = []; }
                else{
                calculate(prevNumber,currentOp,currentNumber);
                }

                result.innerHTML = parseFloat(prevNumber).toLocaleString();
                prevnum.innerHTML = " ";
                operate.innerHTML = " ";
                currentnum.innerHTML = " ";

                return

            break
            default:
                break;
        }
        update();
    })
})

//渲染
