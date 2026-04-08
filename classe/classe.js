function classe() {
    class Carro {
        constructor(nome, ano){
            this.nome = nome;
            this.ano = ano;
        }
        idade(){
            const data = new Date();
            return data.getFullYear() - this.ano;
        }
    }

    let meuCarro = new Carro("ferrari", 2018);

    let frase = "o meu carro " + meuCarro.nome + " tem " + meuCarro.ano() + " tem" + 
    meuCarro.idade() + " anos.";

    console.log(frase);
    let outrafrase = "meu sonho foi estranho"
}
classe ()