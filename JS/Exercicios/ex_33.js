/* Escreva um programa que peça ao usuário sua altura e peso, e calcule o seu índice de massa corporal (IMC). Em seguida, verifique se o IMC indica que o usuário está abaixo do peso, com peso normal, acima do peso ou obeso. Imprima na tela uma mensagem indicando o resultado.*/ 
/* MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE */

var altura= 1.93
var peso=95
const imc= peso/Math.pow(altura,2)

if(imc < 18.5){
    console.log("Magreza")
    ;} 
if(imc >= 18.5 && imc <= 24.9 ) {
    console.log("Normal")
    ;}
if(imc>=  25 && imc < 30) {
    console.log("Sobrepeso")
    ;}
if(imc>= 30 && imc <40 ){
    console.log("Obesidade")
    ;}
if(imc>= 40){
    console.log("Obesidade Grave")
    ;}