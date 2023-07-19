let capturaClasse = document.querySelector(".resultado");
let max = Number(prompt("Quantos numeros voce quer comparar"));
let arrayNovo = [];

for (i = 0; i < max; i++) {
    let nums = Number(prompt("Digite um número"));
    arrayNovo.push(nums);
}

function maio(array) {
    let maior = Math.max(...array);
    return maior;
}

capturaClasse.innerHTML = maio(arrayNovo);

console.log(arrayNovo);