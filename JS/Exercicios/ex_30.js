//Escreva um programa que peça para o usuário digitar o seu salário e calcule o valor do seu aumento, de acordo com a seguinte tabela:
//    - Salários até R$ 1.000,00: aumento de 20%
//  - Salários entre R$ 1.000,00 e R$ 3.000,00: aumento de 15%
//- Salários acima de R$ 3.000,00: aumento de 10% //

let salarior = 4000

if (salarior < 1000) {
    console.log(`Seu salario antigo era ${salarior} e agora é de ${salarior * 0.2 + salarior}`);
}
else if (salarior >= 1000 && salarior < 3000 ) {
    console.log(`Seu salario antigo era ${salarior}, agora é de ${salarior * 0.15 + salarior}`)
}
else  {
    console.log(`Seu salario era ${salarior}, agora é de ${salarior * 0.10 + salarior}`)
}
