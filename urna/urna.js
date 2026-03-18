function urna(){
    let candidato_a = 0;
    let candidato_b = 0;
    let brancos = 0;
    let nulos = 0;
    let total;
    let porcent_cand_a;
    let porcent_cand_b;
    let porcent_brancos;
    let porcent_nulos;
    let voto;
   
    do{
        voto = prompt("Escola seu Candidato ou Tecle Zero para Encerrar\n" +
            "\n" +
            "   1 -> Candidato A\n" +
            "   2 -> Candidato B\n" +
            "   3 -> Branco\n" +
            "\nQualquer Número Diferente de 0, 1, 2, e 3 Anulará seu Voto\n" +
            "Digite seu Voto: ");
        if(voto == "0"){
            alert("Votação Encerrada")
        } else if( voto == "1"){
            //candidato_a = candidato_a + 1;
            //candidato_a++;
            ++candidato_a;
        } else if(voto == "2"){
            ++candidato_b;
        } else if(voto == "3"){
            ++brancos;
        } else{
            ++nulos;    
        }
    } while(voto != 0);

    total = candidato_a + candidato_b + brancos + nulos;

    if (total >0){
        porcent_cand_a = (candidato_a * 100) / total;
        porcent_cand_b = (candidato_b * 100) / total;
        porcent_brancos = (brancos * 100) / total;
        porcent_nulos = (nulos * 100) / total;
    
        
        alert("total de votos:" +total + "\n" +
            "candidato A: " + candidato_a + "voto(s). " + 
            porcent_cand_a + "% do total" + "\n" +
            "candidato B:" + candidato_b + "voto(s). " +
            porcent_cand_b + "% do total" + "\n" +
            "votos em branco:" + brancos + "voto(s). " +
            porcent_brancos + "% do total" + "\n" +
            "votos nulos:" + nulos + "voto(s). " +
            porcent_nulos + "% do total"
        )
    }
}