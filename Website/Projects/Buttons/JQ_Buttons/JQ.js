var ButtonAddedCounter = 0;
var CurrentButton;

var txtButtonContext = $("#txtButtonContext");
var ButtonAddedClass = $(".ButtonsAdded");

$("#btnAddNewButton").click(function () {
    var div = "<div id='btn"+ButtonAddedCounter.toString()+"'></div>";
    var btn = createButton();
    // var btnFunc = CreateFunctionBtn();
    div.append(btn);
    ButtonAddedClass.append(div);
});

function createButton() {
    var btnString = "<input id='btnDynamic" + ++ButtonAddedCounter + "' ";
    btnString += "value='btnDynamic" + ButtonAddedCounter + "' ";
    btnString += "type='button'";
    btnString += " />";
    btnString += "<br>";
    return btnString;
}

function CreateFunctionBtn(text, clickfunc){
    var btnString = "<input value='"+text+"'";
    btnString += "type='button' onclick='"+ clickfunc +"'";
    btnString += "/>";
    return btnString;
}