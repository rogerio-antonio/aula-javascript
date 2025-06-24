function miniCalculadora(numero1, numero2, operador) {

    let resultado;

    if (operador === '+') {
        resultado = numero1 + numero2; //Soma
    }else if (operador === '-') {
        resultado = numero1 - numero2; //Subtração
    }else if (operador === '*') {
        resultado = numero1 * numero2; //Multiplicação
    }else if (operador === '/') {
        if (numero2 !== 0) {
            resultado = numero1 / numero2; //Divisão
        }else {
            return "Erro: Divisão por zero!";
        }
    }else {
        return "Erro: Operador inválido!";
    }
    
    return resultado;
}