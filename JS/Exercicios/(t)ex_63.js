// Crie um programa que preencha um array com os números pares de 1 a 20 e exiba os valores no console

let numeros = []

let i = 0;

while (i<= 20){ 
if (i % 2===0){
    numeros.push(i)
}
i++
}
console.log(numeros);