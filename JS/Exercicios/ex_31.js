//** Faça um programa que pergunte a idade de um nadador e classifique-o de acordo com a idade. Se ele tiver menos de 8 anos, imprima na tela "Categoria Infantil A". Se tiver entre 8 e 10 anos, imprima "Categoria Infantil B". Se tiver entre 11 e 13 anos, imprima "Categoria Juvenil A". Se tiver entre 14 e 17 anos, imprima "Categoria Juvenil B". Se tiver 18 anos ou mais, imprima "Categoria Adulto". */

let idade = 18

if (idade < 8 ){
    console.log("Categoria Infantil A")
    ;}
if (idade < 11 && idade > 7){
    console.log("Categoria Infantil B"); 
}  
if (idade >= 11 && idade < 14) {
    console.log("Categoria Juvenil A")
    ;}
if (idade >= 14 && idade < 18) {
    console.log("Categoria Juvenil B")
    ;}
else {
    console.log("Categoria Adulto")
    ;}