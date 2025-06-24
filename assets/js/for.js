for (let i = 0; i < 5; i++) {
    console.log(i);
}


let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(function(elemento, indice, array){
    console.log(elemento.innerHTML + " está na posição(indice): " + indice);
});

