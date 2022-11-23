var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input-js");
var elSelect = elForm.querySelector(".select-js");
var elOutput = document.querySelector(".output-js");


elForm.addEventListener("keyup" , (evt)=> {
    evt.preventDefault();

    var elInputValue = elInput.value;
    var elSelectValue = elSelect.value;

    elOutput.textContent = elInputValue * elSelectValue;

});