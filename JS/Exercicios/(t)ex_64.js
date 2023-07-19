// Crie um programa que preencha um array com os quadrados dos números de 1 a 10 e exiba os valores no console.

let nums = []
let i = 1

 while (i<11) {
    
   nums.push(Math.pow(i,2))

    i++
   
    
 }

console.log(nums);