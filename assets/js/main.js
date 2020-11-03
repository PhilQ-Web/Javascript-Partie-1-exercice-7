
document.getElementById('clickButton').onclick=showAlert;
function showAlert(){
    var birth = document.getElementById('birth').value;
    if(birth >= 18){
        alert("Vous êtes majeur");
    }
    else{
        alert("Vous êtes mineur");
    }
}
