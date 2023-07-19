let data = new Date()

// let ano = data.getFullYear

let ano = 2000

if (ano%4===0 && (ano%400===0   || ano%100!==0)) {
    console.log("Bissexto");
} else {
    console.log("não é bissexto");
}