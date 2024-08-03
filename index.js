let result = document.querySelector("#result");
let process = document.querySelector("#process");
let numbers = document.querySelectorAll(".nums");
let operation = document.querySelectorAll(".opeation");

//functions

let processData = [0]
let currentOperand;
let currentAns = 0;


function clearProcess(){
    return processData = [0];
}

function inputDate(input){
    processData.push(input);
    return processData;
}
function updateProcess(){
    process.innerHTML = parseFloat(processData.join("")).toLocaleString();
}

function updateResult(){
    result.innerHTML = currentAns;
    clearProcess();
}



numbers.forEach(item => {
    item.addEventListener('click',() => {
        if(item.innerHTML === "." && processData.includes(".")) return;
        if(processData.length > 12) return
        else{
        inputDate(item.innerHTML);
        updateProcess();
        console.log(item.innerHTML + "clicked");
        console.log(processData);
        }
    })
});

operation.forEach(item => {
    item.addEventListener('click', ()=>{
        switch (item.innerHTML){
            case "DEL" :
                processData.pop();
                updateProcess();
            break

            case "AC" :
                processData=[0];
                updateProcess();
            break
            
            case "+/-" :
                if(processData[0] === "-"){
                    processData.shift()
                    updateProcess();
                }else{
                    processData.unshift("-")
                    updateProcess();
                }
            break
           
        }
    })
});