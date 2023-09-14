"use strict";
var newButton = /** @class */ (function () {
    function newButton(text) {
        this.text = text;
    }
    newButton.prototype.action = function () {
        var _this = this;
        return function () {
            calculation.push(_this.text);
            updateText();
            console.log(_this.text);
        };
    };
    return newButton;
}());
var newFuncButton = /** @class */ (function () {
    function newFuncButton(text, operator) {
        this.text = text;
        this.operator = operator;
    }
    newFuncButton.prototype.action = function () {
        var _this = this;
        return function () {
            if (_this.text == '=') {
                calculate(_this.text);
            }
            else if (_this.text == 'C') {
                clearCalc();
                updateText();
            }
            else {
                calculation.push(_this.text);
                updateText();
            }
        };
    };
    return newFuncButton;
}());
var calculation = [];
var pa = document.getElementById('calculationArea');
function updateText() {
    var temp = "";
    for (var i = 0; i < calculation.length; i++) {
        temp += calculation[i].toString();
    }
    if (pa == null)
        return;
    pa.innerHTML = temp;
    console.log(temp);
}
function clearCalc() {
    if (pa == null)
        return;
    pa.innerHTML = "";
    calculation = [];
}
function getCalcOperator() {
    if (pa == null)
        return;
    for (var i = 0; i < pa.innerHTML.length; i++) {
        for (var j = 0; j < calcOpe.length; j++) {
            if (calcOpe[j] == pa.innerHTML[i]) {
                return calcOpe[j].toString();
            }
        }
    }
    return "NaN";
}
function calculate(ope) {
    var splitCalc = getCalcOperator();
    if (splitCalc == null || pa == null)
        return;
    var paSplit = pa.innerHTML.split(splitCalc);
    var calcRes = eval(paSplit[0] + splitCalc + paSplit[1]);
    pa.innerHTML = calcRes;
    console.log(pa.innerHTML);
    // console.log(pa.innerHTML.split(splitCalc));
}
function createButton(btn) {
    var n = btn.action();
    var b = document.createElement("input");
    b.type = "button";
    b.value = btn.text;
    b.onclick = btn.action();
    return b;
}
function createFuncButton(btn) {
    var n = btn.action();
    var b = document.createElement("input");
    b.type = "button";
    b.value = btn.text;
    b.onclick = btn.action();
    return b;
}
var calcOpe = ['C', '+', '-', '*', '/', '='];
function setUpButtons() {
    var _a, _b;
    for (var i = 0; i <= 9; i++) {
        var nb = new newButton((i).toString());
        (_a = document.getElementById('calcBtnArea')) === null || _a === void 0 ? void 0 : _a.append(createButton(nb));
    }
    for (var j = 0; j < calcOpe.length; j++) {
        var nfb = new newFuncButton(calcOpe[j], calcOpe[j]);
        var te = (_b = document.getElementById('functionBtnArea')) === null || _b === void 0 ? void 0 : _b.append(createFuncButton(nfb));
    }
}
setUpButtons();
// let nb1 = new newButton("1");
// let nb2 = new newButton("2");
// document.getElementById('test')?.append(createButton(nb1));
// document.getElementById('test')?.append(createButton(nb2));
