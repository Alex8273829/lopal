function procedimento() {

    function inicio(){
        let resultado = calcular(a = 3, b = 4);
        mensagem(frase = "o resultade de 3² + 4² é: " + resultado'  '   );
    }

    function mensagem(frase){
        let linha = "-";
        let i = 0;
        do{
            linha = linha + "-";
            i++;
        }while(i < 78);

        alert(linha + "\n" + frase + "\n" + linha);
    }

    function calcular(a, b){
        let resultado = a * a + b * b;
        return resultado;
    }

    inicio();
}