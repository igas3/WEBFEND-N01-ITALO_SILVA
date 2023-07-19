let operacao = "soma";
let calculo;
let n1 = 10;
let n2 = 20;

operacao = operacao.toLocaleLowerCase().trim()

switch (operacao) {
    case "soma":
        calculo = n1 + n2
        console.log(`${n1} + ${n2} = ${calculo}`);
        break;

    case "subtracao":
    case "subtração":
        calculo = n1 - n2
        console.log(`${n1} - ${n2} = ${calculo}`);
        break;

    case "multiplicacao":
    case "multiplicação":
        calculo = n1 * n2
        console.log(`${n1} x ${n2} = ${calculo}`);
        break;

    case "divisao":
    case "divisão":
        calculo = n1 / n2
        console.log(`${n1} ÷ ${n1} = ${calculo}`);
        break;

    default:
        console.log("Erro");
        break;
}