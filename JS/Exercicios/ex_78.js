




// Escreva um programa que verifique se um número fornecido pelo usuário é um número perfeito.

// 24/05 ESSA ESTA ERRADA, APARENTEMENTE NÂO SABEMOS NUMERO PERFEITO. RESOLUÇÂO FEITA COM O ITALO. NENHUM SABE,TUDO BURRO 
// 26/05 APARENTEMENTE È O BRUNO QUE NÂO SABE O QUE È NÙMERO PERFEITO. ESTÁ CERTO

let numero = 496; 
let divisor = [];
let soma = 0;

for (let i = 0; i < numero ; i++) {

    if (numero % i == 0) {

        divisor.push(i)
        console.log(divisor);
       
        soma += i
        
    }

}

console.log(soma);

if (soma == numero) {
    console.log(`O ${numero} é um número perfeito`);
}
else {
    console.log(`O ${numero} é um número imperfeito`);
}
