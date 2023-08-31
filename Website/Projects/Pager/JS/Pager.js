
var pageCounter = 0;
var currentPage;

//Adds a new page and automaticly sets it as current page
//This for easy first page when load
function CreatePage() {
    ++pageCounter;
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', "p" + pageCounter.toString());
    button.setAttribute('value', "page" + pageCounter.toString());
    button.setAttribute('onclick', "SetPageAsCurrent("+ button.id +")");
    document.getElementById("pageArea").append(button);

    SetPageAsCurrent(button);
}

//Creates the button for the current page active
function CreateButton() {
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', currentPage);
    button.setAttribute('value', currentPage);
    document.getElementById("buttonArea").append(button);
}

//Sets the current page
function SetPageAsCurrent(b) {
    var page = b;
    currentPage = page.id; //Sets page as current

    var divPages = document.getElementById('pageArea'); //Gets area of pages
    //Goes through all page buttons and removes CurrentPage class
    for(let i = 0; i < divPages.children.length; i++) {
        divPages.children[i].classList.remove('CurrentPage');
    }
    
    var divPageBtns = document.getElementById('buttonArea'); //Gets area of page buttons
    //Goes through all buttons on pages
    for(let i = 0; i < divPageBtns.children.length; i++) {
        var curBtn = divPageBtns.children[i]; //Sets curbtn to button on page
        //If curBtn is not part of CurrentPage make invisible
        //Else make visible
        if (curBtn.id != currentPage) {
            curBtn.classList.add('BtnNotVisible');
        }
        else {
            curBtn.classList.remove('BtnNotVisible');
        }
    }
    //Add page button as Current
    page.classList.add('CurrentPage');
}

// $(document).ready(function(){

//     var pageCounter = 0;

//     $(".btn").on('click', function(){
//         CreateButton("Hellow");
//     });
    
//     // CreateButton("Testing");
    
//     function CreateButton(btnValue){
//         var button = $("<input>", {
//             type: "button",
//             value: btnValue,
//             class: "btnShow",
//             name: "page"+ ++pageCounter
//         });
//         $("#buttonArea").append(button);
//     }

// });