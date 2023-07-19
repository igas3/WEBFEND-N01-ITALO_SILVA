
// let n1 = 9

// let contador = 0
// let primo = 0

// while (contador <= n1) {

//     if  (n1% contador  == 0){ 
//         primo++ 
//     }

//     contador++



// }



// if (primo ==2) {
//     console.log("Seu numero é primo");
// }
// else  {
//     console.log("Seu numero não é  primo");
// }

// let primo = 0

// for (let i = 0; i <= 100; i++) {
//     for (let j = 0; j <= i; j++) 
//         if (numero % i === 0) {
//             // Incrementa o contador de divisores
//             divisores++;
//           }
//           // Incrementa o valor de i para verificar o próximo número
//           i++;
//         }
        
//         // Verifica se o número possui exatamente dois divisores (1 e ele mesmo)
//         if (divisores === 2) {
//           console.log(numero + " é um número primo.");
//         } else {
//           console.log(numero + " não é um número primo.");
// }

let divisor = 0;

for (let i = 0; i <= 100; i++) {

    
    for (let j = 0; j <= i; j++) {
        
        if (i % j === 0) {
            divisor++
        }
    }
    
    if (divisor === 2) {
        console.log(i);
    }
    divisor = 0
}

