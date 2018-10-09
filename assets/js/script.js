function majeur(){
var ag = document.getElementById('age').value;
if (isNaN(ag) || ag < 1){
  alert('des chiffres !');
}else{
if (ag >= 18) {
  alert('Vous etes majeur');
}else {
  alert('Vous etes mineur');
}
}
}
