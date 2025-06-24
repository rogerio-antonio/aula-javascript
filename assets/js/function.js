function exibirValue() {
    //Código a ser executado
    let cidade = document.querySelector("#cidade");
    console.log(cidade.value);
}

const FORM_CIDADE = document.querySelector("#meu_formulario");
    FORM_CIDADE.addEventListener("submit", function(event) {
        event.preventDefault();
        exibirValue();
    }) 

    