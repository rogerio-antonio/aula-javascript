const MINHA_DIV = document.querySelector("#minha_div"); // Captura o elemento
const THEME = document.querySelector("#theme"); // Captura o elemento

THEME.addEventListener("click", function (){ //Evento clique
    if(this.innerHTML == "Dark"){ // Comando condicional, this é o próprio botão nesse caso. == é para comparar se são iguais
            this.innerHTML = "Light"; //innerHTML pega o conteúdo da tag (texto, etc, inclusive outra html), = recebe. innerHTML só funciona em tags que têm abertura e fechamento.
    }else{ //senão
        this.innerHTML ="Dark";
    }
      MINHA_DIV.classList.toggle("dark"); //Se tiver a classe dark ele remove, se não tem coloca. Ele faz o add e o remove ao mesmo tempo.
 
});

//MINHA_DIV.classList.toggle("dark")