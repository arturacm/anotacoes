class AnotacoesView{
    renderizaAnotacao(anotacao){
        $('#notes').append(`<div>
        <h6>${anotacao.titulos}</h6>
        <p>${anotacao.notas}</p>
        </div>`)
    }
}
