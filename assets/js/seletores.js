const BTN_ENVIAR = document.querySelector("#enviar");//id

const DIV_CONTAINER = document.querySelector(".container");//class só a primeira (Selector)

const DIV_CONTAINER_ALL = document.querySelectorAll(".container");//class Todas as divs (SelectorAll)


BTN_ENVIAR.addEventListener("click", function() {
    //console.log("Você clicou")
    DIV_CONTAINER_ALL.forEach(function(div) {
        div.style.backgroundColor = "red";
    });

    DIV_CONTAINER_ALL[0].style.color = "blue";//1º elemento
    DIV_CONTAINER_ALL[1].style.color = "white";//2º elemento

    Object.assign(DIV_CONTAINER_ALL[0].style, {
        backgroundColor: "blue",
        color: "green",
        borderRadius: "6px"

    })


});