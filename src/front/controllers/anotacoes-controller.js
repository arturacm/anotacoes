class AnotacoesController {
    constructor(){
        this.arr = [];
    }
    addAnotacao(){
        const titulo = $('#titulo').val();
        const nota = $('#descricaoTarefa').val();
        const novaAnotacao = new Anotacoes(titulo,nota)

        this.arr.push(novaAnotacao)

        console.log(this.arr)

        // Opcional: Apaga conteúdo dos inputs da pagina (melhora experiência do user)
        // $('#titulo').val("")
        // $('#descricaoTarefa').val("");
    }
}

const controller = new AnotacoesController();

$('form').submit( (evento)=>{
evento.preventDefault()

controller.addAnotacao()

})