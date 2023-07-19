/*Escreva um programa que peça ao usuário um número inteiro e verifique se ele é divisível por 4 e por 6, mas não por 9. Em seguida, imprima na tela uma mensagem indicando o resultado. */
let n = 37

if (n % 4 == 0 && n % 6 == 0 && n % 9 != 0) {
    console.log(`Bom numero`);
}
else { console.log("Pessimo numero"); }