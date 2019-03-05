$(function(){
    tamanhoFrase();
    contadores();
    cronometro();
    comparar();
    $("#reiniciar").click(reiniciar);
});

var frase = $(".frase").text();
function tamanhoFrase(){ 
    let qntPalavras = frase.split(" ").length;
    let numPalavras = $("#quantidade-palavras");
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
    var tempo = $("#tempo").text();
    campo.one("input",function(){
        let id = setInterval(function(){
            tempo--;
            $("#tempo").text(tempo);
            if(tempo < 1){
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
    $("#tempo").text("5");
    cronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}
    