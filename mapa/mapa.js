function mapa(){
        const frutas = new Map();
 
        frutas.set("maçã", 1.68)
        frutas.set("uva", 1.67)
        frutas.set("banana", 1.69)
        let Frutas = ["banana", "maçã", "uva"]
        let valor = frutas.get("banana");
        let valor1 = frutas.get("maçã");
        let valor2 = frutas.get("uva");
        console.log(Frutas)
        console.log(valor )
          console.log(valor1 )
            console.log(valor2 )
 
        //size é um a propriedade qe armazena o tamanho do mapa
        console.log(frutas.size);
 
        //o método has() retorna verdadeiramente o falso para uma determinada chave
        console.log(frutas.has('banana'));
        frutas.forEach((valor, chave) => console.log('${chave} = R$${valor},00'));
 
        //O método keys() retorna uma coleção com as chaves do mapa
        //A estrutura for...of é uma forma de iterar sobre os elementos de um objeto iterável, como um array ou um mapa
        for (const x of frutas.keys()){
            console.log(frutas.keys());
        }
        //O método values() retorna uma coleção com os valores do mapa
        for (const x of frutas.values()){
            console.log(frutas.values());
        }
 
}
mapa();