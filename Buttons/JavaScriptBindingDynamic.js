var ButtonCounter = 0;
var canEdit = false;
var TextBoxElement;
var DocumentButton;

function SetupDOMElements() {
    TextBoxElement = document.getElementById("txtButtonContext");
}

function AddButton(){
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', "btn" + ButtonCounter.toString());
    button.setAttribute('value', "btnShow" + ButtonCounter.toString());
    button.setAttribute('onclick', "AddedButtonClicked(" + ButtonCounter + ")");
    button.style.backgroundColor = "Blue";
    button.style.color = "White";
    button.style.height = "40px";
    return button;
}

function AddFunctionBtn(text, clickfunc){
    var btn = document.createElement('input');
    btn.setAttribute('value', text);
    btn.setAttribute('onclick', clickfunc);
    btn.setAttribute('type', 'button');
    return btn;
}

function AddNewButtons() {
    //Generates the div thats gonna hold the buttons
    var div = document.createElement('div');
    div.setAttribute('ID', "btn"+ButtonCounter.toString());
    document.getElementsByClassName("ButtonsAdded")[0].appendChild(div);
    
    //Creates buttons through functions and returns them
    var button = AddButton();
    var editButton = AddFunctionBtn("Rediger", "EditButton("+ div.getAttribute("ID") +")");
    var delButton = AddFunctionBtn("Slet", "DeleteButtons("+ div.getAttribute("ID") +")");
    
    //Adds the buttons to the new div
    div.appendChild(button);
    div.appendChild(editButton);
    div.appendChild(delButton);

    TextBoxElement.style.visibility = "hidden";
    ButtonCounter++;
}

function EditButton(div) {
    TextBoxElement.style.visibility = "visible";
    //Selects the button of the same ID
    var btn = div.querySelector("#"+div.id+"");
    AddedButtonClicked(btn);
}

//Deletes the div and the buttons
function DeleteButtons(div){
    div.remove();
    TextBoxElement.style.visibility = "hidden";
}

function AddedButtonClicked(divbtn) {
    console.log(divbtn.id);
    DocumentButton = divbtn;
    TextBoxElement.value = DocumentButton.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    TextBoxElement.style.visibility = "visible";
    console.log(TextBoxElement.style.width);
}

function TextboxValueChanged() {
    DocumentButton.value = TextBoxElement.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    console.log(TextBoxElement.style.width);
}

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.value.length;
    console.log(ControlWidth);
    return (ControlWidth * 9 + 25 + 'px');
}