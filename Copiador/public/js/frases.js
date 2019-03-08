$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases",trocarFrase);
    console.log("A");
}

function trocarFrase(data){
    var numAleatorio = Math.floor(Math.random() * data.length);
    console.log(numAleatorio);
    $(".frase").text(data[numAleatorio].texto);
    tamanhoFrase();
    atualizaTempo(data[numAleatorio].tempo);
    reiniciar();
    comparar();
}