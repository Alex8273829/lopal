function calculadora(){
        while (true) {
            let resultado = 0.0;
            let operando1;
            let operando2;
            let operador;
            let continuar;
            let operador_valido = true;

            operando1 = parseFloat(prompt("digite o primeiro numero"));
            operando2 = parseFloat(prompt("digite o segundo numero"));
            operador = prompt("digite uma das operações: +, -, *, /");

            if (operador == "+") {
                resultado = operando1 + operando2;
            } else if (operador === "-") {
                resultado = operando1 - operando2;
            } else if (operador === "*") {
                resultado = operando1 * operando2;
            } else if (operador === "/") {
                resultado = operando1 / operando2
                if (operando2 === 0) {
                    alert("divisão por zero não é permitida");
                    continuar = prompt("digite 'sim' para continuar ou 'não' para sair");
                    if(continuar === "não"){
                        return
                    }
                }  else{
                resultado = operando1 / operando2;
                }
            } else {
                alert("operador inválido");
                operador_valido = false;
                continua = prompt("digite 'sim' para continuar ou 'não' para sair");
                if( continua === "não"){
                return;
            }
            if ((operador != "/" || operando2 != 0) && operador_valido != false) {
                alert("resultado: " + operando1 + " " + operador + " " + operando2 + " = " + resultado);
            }
        }
    }
}      