let idade = 17;
 if (idade >= 18) { 
    console.log ("Você tem idade para dirigir");
 }
else { console.log("Você nao tem idade");}

let numero = 0
if (numero > 0) {
    console.log(`o numero ${numero} é positivo`);
}
else if (numero < 0 ) { 
    console.log(`o numero ${numero} é negativo`);
}
else  { console.log(`o numero é ${numero}`); 

}

let senha = "senai123"

if (senha == "" || senha == " ") {
    console.log("Erro");
}
else {
    if (senha != "senai123" && senha != "SENAI123" && senha != "Senai123"){
        console.log("Senha incorreta");
    }
    else{
        console.log("Senha correte");
    }

}

let senha1 = "yellow"
let senha2 = "Yellow"

if (senha1 == senha2 ) {
    console.log("As senhas são iguais");
}
else {
    console.log("As senhas estão diferentes");
}

console.log("fim");