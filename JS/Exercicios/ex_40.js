/*Escreva um programa que pergunte ao usuário a temperatura em Celsius e converta para Fahrenheit. A fórmula para converter Celsius em Fahrenheit é: F = (C * 1.8) + 32. Imprima o resultado na tela. Se a temperatura em Celsius for menor do que -273.15, imprima "Isso é impossível", pois essa é a temperatura mais baixa possível na escala Celsius. */

let C= 32
const F= (C * 9/5) + 32 
    if( C < -273.15 ){
        console.log("Isso é impossível");
    }
    else {
        console.log(`${F}`);
    }
