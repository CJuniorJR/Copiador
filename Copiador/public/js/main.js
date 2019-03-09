var tempoInicial = $("#tempo").text();

$(function(){
    fraseAleatoria();
    tamanhoFrase();
    contadores();
    cronometro();
    comparar(); 
    $("#reiniciar").click(reiniciar);
});

function atualizaTempo(tempo){
    tempoInicial = tempo;
    $("#tempo").text(tempo);
}


function tamanhoFrase(){ 
    var frase = $(".frase").text();
    var qntPalavras = frase.split(" ").length;
    var numPalavras = $("#quantidade-palavras");
    $("#quantidade-caracteres").text(frase.length)
    numPalavras.text(qntPalavras);
}

var campo = $('.campo-digitacao');
function contadores(){
    campo.on('input', function(){
    $("#contador-caracteres").text(campo.val().length);
    $("#contador-palavras").text(campo.val().split(/\S+/).length-1);
});
}


function cronometro(){
    $("#reiniciar").attr("disabled",true);
    campo.one("input",function(){
        var tempoInicial = $("#tempo").text();
        let id = setInterval(function(){
            tempoInicial--;
            $("#tempo").text(tempoInicial);
            if(tempoInicial == 0){
                clearInterval(id);
                fimJogo();
            }        
        },1000);
    });
}

function fimJogo(){
    campo.attr("disabled",true);
    $("#reiniciar").attr("disabled",false);
    campo.addClass("campo-desativado");
    inserirPlacar();
}

function comparar(){
    var frase = $(".frase").text();
    campo.on("input",function(){
        var digitado = campo.val();
        var comparado = frase.substr(0,digitado.length);
        if(digitado == comparado){
            campo.removeClass("borda-vermelha");
            campo.addClass("borda-verde");
        }else{
            campo.removeClass("borda-verde");
            campo.addClass("borda-vermelha");
        }
    });
}

function reiniciar(){
    campo.val("");
    campo.attr("disabled",false);
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo").text(tempoInicial);
    cronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}
    