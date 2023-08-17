
let numb1 = document.getElementsByClassName("inp")[0];
let numb2 = document.getElementsByClassName("inp")[1];
let resultP = document.getElementById("result");
const resultArr = [];

let res = 0;
function calculate(op){
    res = eval(numb1.value + op + numb2.value);
    resultP.innerHTML = res.toString();

    var calc = numb1.value + op + numb2.value;
    addToHistory(calc, res.toString());
    console.log(resultArr);
}

function clearCalc() {
    res = 0;
    numb1.value = "";
    numb2.value = "";
    resultP.innerHTML = res.toString();
}

function addToHistory(calculation, res){
    resultArr.push({calc: calculation, res: res});
    printHistory();
}

function printHistory(){
    let hisCalc = document.getElementById("historyP");
    hisCalc.innerHTML = "";
    for(i = 0; i < resultArr.length; i++){
        hisCalc.innerHTML += resultArr[i].calc + " = "+ resultArr[i].res +"<br>";
    }
}