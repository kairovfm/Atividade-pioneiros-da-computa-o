var cor = 0

document.getElementById("botao").onclick =  function(){

if (cor == 0) {
document.body.style.backgroundColor = "black";
document.getElementById("botao").textContent = "modo claro";
    cor++

} else if(cor == 1){
document.body.style.backgroundColor = "white";
document.getElementById("botao").textContent = "modo escuro";
    cor --
}

}