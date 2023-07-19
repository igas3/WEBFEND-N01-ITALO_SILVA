let valori = 10000
let juros = 0.1
let prazo= 10

let valor= valori*Math.pow (1+juros,prazo)
const reso = (valor.toFixed(2));

console.log (`em um investimento em que o valor inicial é de ${valori} e seu juros aplicado é igual a ${juros}/1.0 em um prazo de ${prazo} meses o valor final sera de aproximadamente de ${reso}`)
