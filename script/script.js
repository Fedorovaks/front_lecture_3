var activForm = document.querySelector(".registration");
var button = document.querySelector("#button");
var agreement = document.querySelector("#detail1")

button.onclick = function() {
    
    if(agreement.checked) {
        activForm.style.display='flex';
    }

    else {
        alert("Вы не дали согласие на обработку персональных данных, продолжить регистрацию невозможно. ")
    }

};
    