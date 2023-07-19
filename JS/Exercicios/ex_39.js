/* Escreva um programa que solicita ao usuário três valores numéricos inteiros e, em seguida, imprime esses valores em ordem decrescente (do maior para o menor). O programa deve utilizar a estrutura de controle condicional "if" para comparar os valores e determinar a ordem de impressão. */

let n1 = 5
let n2 = 6
let n3 = 1

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(`${n1} ${n2} ${n3}`);
    }
    else
        {console.log(`${n1} ${n3} ${n2}`);
}
}
if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(`${n2} ${n1} ${n3}`);
    }
    else
        {console.log(`${n2} ${n3} ${n1}`);
}
}
if (n3 > n2 && n3 > n1) {
    if (n2 > n1) {
        console.log(`${n3} ${n2} ${n1}`);
    }
    else
        {console.log(`${n3} ${n1} ${n2}`);
}
}
