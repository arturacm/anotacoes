class Anotacoes {
    constructor(titulos, notas){
        this.titulos = titulos;
        this.notas = notas;

        if (typeof titulos != 'string' || typeof notas != 'string'){
            throw new Error("Criação de notas - dados invalidos")
        }
    }
}