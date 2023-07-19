let num = (Math.floor(Math.random() * 20));
let par = 0
let impar = 0
while (num != 0) {
    if (num % 2 == 0) {
        par++
    }
    else {
        impar++
    }
    num = (Math.floor(Math.random() * 20));

}




console.log(par +"são numeros pares");
console.log(impar);