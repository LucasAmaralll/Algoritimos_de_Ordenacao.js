const livros = require('./listaLivros2')

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = 0; atual < livros.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;