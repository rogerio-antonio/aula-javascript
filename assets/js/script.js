// Seleciona a div pelo ID
const minhaDiv = document.getElementById("minha_div");

// Adiciona o evento de mouseover
minhaDiv.addEventListener("mouseover", function () {
  minhaDiv.style.backgroundColor = "yellow"; // Muda a cor de fundo quando o mouse passa sobre a div
});

// Adiciona o evento de mouseout para retornar à cor original
minhaDiv.addEventListener("mouseout", function () {
  minhaDiv.style.backgroundColor = "lightblue"; // Retorna à cor original quando o mouse sai da div
});

// Seleciona a div pelo ID
const meuBotao = document.getElementById("meu_botao");
  meuBotao.addEventListener("click", function () {
    console.log("Você clicou");

  });
    