function placar(usuario,palavras){
    var linha = $("<tr>");
    var tdUsuario = $("<td>").text(usuario);
    var tdPalavras = $("<td>").text(palavras);
    var tdRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    tdRemover.append(link);

    linha.append(tdUsuario);
    linha.append(tdPalavras);
    linha.append(tdRemover);

    return linha;
}

function inserirPlacar(){
    var tabela = $(".placar").find("tbody");
    let usuario = "Claudio";
    let numPalavras = $("#contador-palavras").text();
    
    var linha = placar(usuario,numPalavras);
    linha.find(".botao-remover").click(remover);
    tabela.prepend(linha);
    
}

function remover(){
        event.preventDefault();
        $(this).parent().parent().remove();
}