let frase=prompt("Digite uma frase").toLowerCase().replace(" ","")

vogal=0;

for (let i = 0; i < frase.length; i++) {if (
    frase[i]=="a"||frase[i]=="e"||frase[i]=="i"||frase[i]=="o"||frase[i]=="u"){
        vogal++
    }
   
   
}
// avalorNome.innerHTML+= nome + "<br>"
// i++
alert(vogal)