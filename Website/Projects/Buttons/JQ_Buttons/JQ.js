$(document).ready(function(){
    var ButtonAddedCounter = 0;
    var textBoxElement;
    var documentButton;

    // var txtButtonContext = $("#txtButtonContext");
    // var ButtonAddedClass = $(".ButtonsAdded");
    // var btnDelete = $("#btnDeleteDiv");
    
    SetupDOMElements();

    function SetupDOMElements() {
        textBoxElement = $("#txtButtonContextJq");
    
        $("#btnAddNewButton").click(function () {
          createButton();
        });
    
        textBoxElement.on("keyup", function (event) {
          if (event.key === "Enter") {
            TextboxValueChanged();
          }
        });
    
        $("#txtButtonContextJq").on("blur", function () {
          TextboxValueChanged();
        });
      }

    $(".ButtonsAdded input").on("click", function(){
        SelectBtn($(this));
    });

    function createButton() {
        if (ButtonAddedCounter <= 9) {

            var d = $("<div>");
            $(".ButtonsAdded").append(d);
            
            var names = ["Button", "Delete", "Edit"];
            for(var i = 0; i<names.length; i++){
                setUpButton(`Name:JQ - ${names[i]}. Id:${i}. Row:${ButtonAddedCounter}.`)
            }
            ButtonAddedCounter++; //Adds 1 to The counter
        }
    }
    
    function setUpButton(name){
        var nameSplit = name.split(".")[0].split(":")[1];
        var textValue = "Button_"+ButtonAddedCounter;
        
        if (nameSplit == "JQ - Button") {
            var button = $("<input>", {
                type: "button",
                id: name,
                value: textValue
            });    
        }
        else {
            var button = $("<input>", {
                type: "button",
                id: name,
                value: nameSplit
            });
        }

        button.click(function(){
            btnPressed(name);
        });
    
        $(".ButtonsAdded").append(button);
    }

    //Updates the value of the buttons that 
    //include the "Button_" value
    function UpdateButtonValue(){
        var allInputs = $(":input");
        var tempBtnArr = [];

        for(var i = 0; i<allInputs.length; i++){
            var btn = allInputs[i];
            if (btn.value.includes("Button_")) {
                tempBtnArr.push(btn);
            }
        }

        if (tempBtnArr.length != 0) {
            ButtonAddedCounter = 0;
        }

        for (var i = 0; i<tempBtnArr.length; i++) {
            var tempbtn = tempBtnArr[i];
            tempbtn.value = "Button_"+ButtonAddedCounter;
            ButtonAddedCounter++;
        }

    }

    function btnPressed(name){
        var id = name.split(".")[1].split(":")[1];
        var row = name.split(".")[2].split(":")[1];
        
        if (id == 1) {
            DeleteDiv(row);
        } else if (id == 2) {
            editButtonClicked(row);
        }

    }

    function DeleteDiv(row){
        textBoxElement.prop("disabled", true).val("").hide();

        $('[id*="Name:JQ"][id*="Row:' + row + '."]').each(function () {
        $(this).remove();
        });
        ButtonAddedCounter--;
        UpdateButtonValue();
        console.log(ButtonAddedCounter);
    }

    function editButtonClicked(row) {
        var getButton = `Name:JQ - Button. Id:0. Row:${row}.`;
        var escapedId = getButton.replace(/(:|\.|\s)/g, "\\$1");
        documentButton = $(`#${escapedId}`);
        textBoxElement
          .prop("disabled", false)
          .val(documentButton.val())
          .show()
          .focus();
      }

      function TextboxValueChanged() {
        documentButton.val(textBoxElement.val());
        textBoxElement.prop("disabled", true).val("").hide();
      }

});