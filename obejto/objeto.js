const pessoa = {
    nome: "Henrique",
    sobrenome: "Goés",
    idade: 16,
    time: "CORINTHIANS",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function () { return this } //retorna o próprio objeto, ou seja, a variável pessoa   
};

console.log( pessoa.nomeCompleto() + " tem " + pessoa.idade + 
    " anos e torce para o " + pessoa.time
);
