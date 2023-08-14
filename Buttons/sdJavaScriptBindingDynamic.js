var ButtonCounter = 0;
var TextBoxElement;
var DocumentButton;


function SetupDOMElements() {
    TextBoxElement = document.getElementById("txtButtonContext");
}

function AddNewButton() {
    var pre = document.createElement("pre");
    document.getElementsByClassName("ButtonsAdded")[0].appendChild(pre);

    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', "btn" + ButtonCounter.toString());
    button.setAttribute('value', "btnShow" + ButtonCounter.toString());
    button.setAttribute('onclick', "AddedButtonClicked(" + ButtonCounter + ")");
    button.style.backgroundColor = "Blue";
    button.style.color = "White";
    button.style.height = "40px";
    
    document.getElementsByClassName("ButtonsAdded")[0].appendChild(button);

    ButtonCounter++;
}

function AddedButtonClicked(ButtonCounter) {
    DocumentButton = document.getElementById("btn" + ButtonCounter.toString());
    TextBoxElement.value = DocumentButton.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
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