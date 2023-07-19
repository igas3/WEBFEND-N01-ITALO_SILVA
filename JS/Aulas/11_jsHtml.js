// let nomes = []
// let nome
// let i =0

// while (i < 3) {
//     nome = prompt("Digite um nome")
//     nomes.push(nome)
//     console.log(nomes[i]);
//     i++

// }
// console.log(nomes);

// let nums = [];
// let num;
// let soma = 0
// let i = 0;

// while (i<5) {
//     num = (Number(prompt("numero para soma")))
//     nums.push(num)
//     soma += nums[i]
//     console.log(soma [i]);
//     i++

// }


// alert(soma)

let nomes = []
let nome;
let qtdNomes =Number(prompt("Digite a quantidade de nomes que deseja"))
let valorNome = document.querySelector("#nomes")

let i = 0;

while(i < qtdNomes) {
    nome = prompt(`Digite o ${i+1}° nome `)
    nomes.push(nome)
    valorNome.innerHTML+= nome + "<br>"
    i++

}
