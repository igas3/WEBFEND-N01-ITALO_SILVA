let diaSemana = 4;
let mensagem = "";

switch (diaSemana){
    case 1: 
        mensagem = "Domingo";
        break;
    case 2: 
        mensagem = "Segunda-Feira";
        break;
    case 3: 
        mensagem = "Terça-Feira";
        break;
    case 4: 
        mensagem = "Quarta-Feira";
        break;
    case 5: 
        mensagem = "Quinta-Feira";
        break;
    case 6: 
        mensagem = "Sexta-Feira";
        break;
    case 7:
        mensagem = "Sabadasso"
        break;
    default:
        mensagem = "Não é um dia da semana"
        break;
}
console.log(mensagem);
/***/

let operacao = "soma"
let calcullo;
let n1=20
let n2=10

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
        console.log(`${n1} ÷ ${n2} = ${calculo}`);
        break;

    default:
        console.log("Erro");
        break;
}