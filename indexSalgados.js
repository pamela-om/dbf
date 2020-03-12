const produtos = [
    {nome: 'Coxinha', preco: 4.0},
    {nome: 'Pastel', preco: 3.0},
    {nome: 'Suco', preco: 2.0}

];

let exibirProduto = (p,i) => {
    console.log(i + '. ' + p.nome + ' R$ ' + p.preco.toFixed(2));

};

console.log('Todos os produtos: ');
produtos.forEach(exibirProduto);

console.log('\nProdutos de menos de R$3,00: ');
produtos.filter(p => p.preco <= 3).forEach(exibirProduto);

console.log('\nAumento de 20% em todos os produtos: ');
produtos.map(p => {
    return {
        nome: p.nome,
        preco: p.preco *= 1.2
    }

}).forEach(exibirProduto);