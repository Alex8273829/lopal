function meuswitch() {
    let dia;
    let data = new date().getday();
    
    switch (data) {
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Segunda-feira";  
            break;
        case 2:
            dia = "Terça-feira";
            break;
        case 3:
            dia = "Quarta-feira";
            break;
        case 4:
            dia = "Quinta-feira";
            break;
        case 5:
            dia = "Sexta-feira";
            break;
        case 6:
            dia = "Sábado";
        default:
            dia = "dia de semana"
    }
    document.getElementById("switch").innerHTML = "Hoje é " + dia;
}