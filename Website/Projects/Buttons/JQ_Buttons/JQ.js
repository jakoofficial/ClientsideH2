var ButtonAddedCounter = 0;
var CurrentButton;

var txtButtonContext = $("#txtButtonContext");
var ButtonAddedClass = $(".ButtonsAdded");

$("#btnAddNewButton").click(function () {
    ++ButtonAddedCounter; //Adds 1 to The counter
    var divNew = $("<div></div>").attr("ID", "btnDiv"+ ButtonAddedCounter);
    var btn = createButton();
    ButtonAddedClass.append(divNew);
    ButtonAddedClass.append(createButton());
    
    var getDiv = $("#btnDiv"+ ButtonAddedCounter);
    var getBtn = $("#btnDynamic"+ ButtonAddedCounter);


    getDiv.append(getBtn);
    console.log(ButtonAddedClass);
});

function createButton() {
    var btnString = "<input id='btnDynamic" + ButtonAddedCounter + "' ";
    btnString += "value='btnDynamic" + ButtonAddedCounter + "' ";
    btnString += "type='button'";
    btnString += " />";
    return btnString;
}

function CreateFunctionBtn(text, clickfunc){
    var btnString = "<input value='"+text+"'";
    btnString += "type='button' onclick='"+ clickfunc +"'";
    btnString += "/>";
    return btnString;
}