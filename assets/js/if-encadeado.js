const FORMULARIO_SINAL = document.querySelector("#formulario_sinal");
const SINAL = document.querySelector("#sinal");
const RESULTADO = document.querySelector("#resultado");

FORMULARIO_SINAL.addEventListener("submit", function(event) {
    event.preventDefault(); //Impede o envio do formulário, pois ainda não temos o php para receber os dados ou AJAX.


let sinal  = SINAL.value.toLowerCase(); // Definindo o sinal de trânsito

if (sinal== "verde") {
    RESULTADO.innerHTML = "SIGA !!!"; //Ação para sinal verde   
}else if(sinal == "amarelo") {
    RESULTADO.innerHTML = "ATENÇÃO !!!"; //Ação  para sinal amarelo
}else if(sinal == "vermelho") {
    RESULTADO.innerHTML = "PARE !!!"; //Ação para sinal vermelho
}else{
    alert("Sinal INVÁLIDO.")
}
});

// if ternário, muito usado no php (tem a mesma sintaxe)
// Aceita várias condições, mas os resultados são só dois: sim ou não, verdadeiro ou falso
let idade = 18;

//Usando o if ternário para verificar a idade
let status = (idade>=18) ? "Maior de idade" : "Menor de idade";

//Exibe o resultado
console.log(status); //Saída: Maior de idade


