// Importando a lista de livros a partir do arquivo listaLivros.js
const livros = require('./listaLivros');

// Inicializando a variável maisBarato com o índice do primeiro livro na lista
let maisBarato = 0;

// Iterando sobre a lista de livros para encontrar o livro mais barato
for (let atual = 0; atual < livros.length; atual++) {
    // Verificando se o preço do livro atual é menor que o preço do livro mais barato até agora
    if (livros[atual].preco < livros[maisBarato].preco) {
        // Se sim, atualizando o índice do livro mais barato
        maisBarato = atual;
    }
}

// Exibindo no console as informações do livro mais barato encontrado
console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);
