//Exemplo
setTimeout(exibirMensagem, 2000);
//Executa após 2 segundos (2000 milissegundos)

function exibirMensagem() {
    console.log("Olá, mundo!");
}

let contador = 0; //Inicializa o contador

//Função que será chamada a cada intervalo
const atualizarCronometro = () => {
    contador++; //Incrementa o contador
    console.log("Contador: " + contador + " segundos");

    //Para o cronômetro após 10 segundos
    if (contador === 10) {
        clearInterval(intervalo); //Limpa o intervalo
        console.log("Cronômetro finalizado!");
    }
};

//Configura o setInterval para chamar a função a cada 1 segundo (1000 milissegundos)
const intervalo = setInterval(atualizarCronometro, 1000); //Está recebendo a função atualizarCronometro e por isso pode ser chamada fora de ordem (não precisa ser lida de cima para baixo)