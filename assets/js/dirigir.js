const FORMULARIO_CNH= document.querySelector("#formulario_cnh");
const CNH = document.querySelector("#cnh");
const RESULTADO = document.querySelector("#resultado");
const IDADE_MINIMA = 18; //Idade miníma para ter CNH



FORMULARIO_CNH.addEventListener("submit", function(event) {
    event.preventDefault(); //Impede o envio do formulário, pois ainda não temos o php para receber os dados ou AJAX.


let cnh  = CNH.value.toLowerCase(); // Definindo o sinal de trânsito
let idade_minima

if (cnh== "habilitado" && idade_minima >= 18) {
    RESULTADO.innerHTML = "Você pode dirigir"; //Ação para sinal verde   
}else if(sinal == "amarelo") {
    RESULTADO.innerHTML = "ATENÇÃO !!!"; //Ação  para sinal amarelo
}else if(sinal == "vermelho") {
    RESULTADO.innerHTML = "PARE !!!"; //Ação para sinal vermelho
}else{
    alert("Sinal INVÁLIDO.")
}
});