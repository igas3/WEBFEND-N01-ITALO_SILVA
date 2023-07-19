let lado1 = 1
let lado2 = 6
let lado3 = 9

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log(` o seu triangulo é equilatero`);
}
else if ((lado1 != lado2 && lado1 != lado3 && lado2 != lado3) ) {
    console.log(`o seu triangulo é escaleno `);
}
else{ 
    console.log(` o seu triangulo é isósceles`);
}
