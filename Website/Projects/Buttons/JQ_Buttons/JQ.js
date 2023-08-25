var ButtonAddedCounter = 0;
var SelectedButton;
var CurrentButton;
var getDiv;

var txtButtonContext = $("#txtButtonContext");
var ButtonAddedClass = $(".ButtonsAdded");
var btnDelete = $("#btnDeleteDiv");

$("#btnAddNewButton").click(function () {
    ++ButtonAddedCounter; //Adds 1 to The counter
    divNew = $("<div></div>").attr("ID", "btnDiv"+ ButtonAddedCounter);
    var btn = createButton();

    ButtonAddedClass.append(divNew);
    ButtonAddedClass.append(btn);
    
    getDiv = $("#btnDiv"+ ButtonAddedCounter);
    var getBtn = $("#btnDynamic"+ ButtonAddedCounter);

    getDiv.append(getBtn);
    // console.log(ButtonAddedClass);
});

$(".ButtonsAdded input").on("click", function(){
    SelectBtn($(this));
});

function SelectBtn(btn) {
    // CurrentButton = btn;
    console.log(btn);
}

function createButton() {
    var btnString = "<input id='btnDynamic" + ButtonAddedCounter + "' ";
    btnString += "value='btnDynamic" + ButtonAddedCounter + "' ";
    btnString += "type='button'";
    // btnString += "click='"+ SelectBtn(btnString.attr("id")) +"'";
    btnString += " />";
    return btnString;
}

function CreateFunctionBtn(text, clickfunc){
    var btnString = "<input value='"+text+"'";
    btnString += "type='button' onclick='"+ clickfunc +"'";
    btnString += "/>";
    return btnString;
}

function DeleteDiv(divID){
    var delBtnDiv = divID;
    // delBtnDiv.remove();
    console.log(divID);
    // $("#"+ div.attr("ID") +"").remove();
}