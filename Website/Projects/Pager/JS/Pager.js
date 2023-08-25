
$(document).ready(function(){
    $(".btn").on('click', function(){
        CreateButton("Hellow");
        
    });
    
    // CreateButton("Testing");
    
    function CreateButton(btnValue){
        var button = $("<input>", {
            type: "button",
            value: btnValue,
            class: "btnShow"
        });
        $("#buttonArea").append(button);
    }

});