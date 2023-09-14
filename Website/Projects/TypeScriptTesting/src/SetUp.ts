interface IcalcBtn {
    text:string;
    action(): () => void;
}

class newButton implements IcalcBtn {
    text: string;

    constructor(text:string){
        this.text = text;
    }

    action() {
        return () => {
            calculation.push(this.text);
            updateText();
            console.log(this.text);
        }
    }
}

class newFuncButton implements IcalcBtn {
    text: string;
    operator:string;

    constructor(text:string, operator:string){
        this.text = text;
        this.operator = operator;
    }

    action() {
        return () => {
            if (this.text == '=') {calculate(this.text);}
            else if(this.text == 'C'){clearCalc(); updateText();}
            else 
            {
                calculation.push(this.text);
                updateText();
            }
        };
    }
}

let calculation : string[] = [];

let pa = document.getElementById('calculationArea');
function updateText(){
    var temp = "";
    for (let i = 0; i < calculation.length; i++) {
        temp += calculation[i].toString()
    }
    if (pa == null) return;
    
    pa.innerHTML = temp;
    console.log(temp);
}
function clearCalc(){
    if (pa == null) return;
    pa.innerHTML = "";
    calculation = [];
}

function getCalcOperator(){
    if (pa == null) return;
    for (let i = 0; i < pa.innerHTML.length; i++){
        for (let j = 0; j<calcOpe.length; j++){
            if (calcOpe[j] == pa.innerHTML[i]){
                return calcOpe[j].toString();
            }
        }
    }
    return "NaN";
}

function calculate(ope:string){
    let splitCalc = getCalcOperator();
    if (splitCalc == null || pa == null) return;
    const paSplit = pa.innerHTML.split(splitCalc);
    let calcRes = eval(paSplit[0] + splitCalc + paSplit[1])

    pa.innerHTML = calcRes;
    console.log(pa.innerHTML);
    // console.log(pa.innerHTML.split(splitCalc));

}

function createButton(btn : newButton){
    const n = btn.action();
    var b = document.createElement("input");
    b.type="button";
    b.value = btn.text;
    b.onclick = btn.action();
    return b;
}
function createFuncButton(btn : newFuncButton){
    const n = btn.action();
    var b = document.createElement("input");
    b.type="button";
    b.value = btn.text;
    b.onclick = btn.action();
    return b;
}

const calcOpe = ['C', '+', '-', '*', '/', '=']

function setUpButtons(){
    for (let i=0; i<=9; i++){
        let nb = new newButton((i).toString());
        document.getElementById('calcBtnArea')?.append(createButton(nb));
    }
    for (let j=0; j<calcOpe.length; j++) {
        let nfb = new newFuncButton(calcOpe[j], calcOpe[j]);
        var te = document.getElementById('functionBtnArea')?.append(createFuncButton(nfb));
    }
}
setUpButtons();

// let nb1 = new newButton("1");
// let nb2 = new newButton("2");
// document.getElementById('test')?.append(createButton(nb1));
// document.getElementById('test')?.append(createButton(nb2));