let resultado = document.querySelector(".resultado")
let num = Number(prompt("Digite um número"));

function srcpar(num) { if (num%2==0) {
   let resposta ="Par"
   return resposta
} 
else{
    let resposta ="impar"
    return resposta
}
    
}
console.log(srcpar(5));
resultado.innerHTML= srcpar(num)