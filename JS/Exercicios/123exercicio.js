let data =new Date()
let dia =  data.getDate()
let mes = data.getMonth()
console.log(dia, "/" ,mes);

if (dia%2==0) {
    console.log("Par");
} else {
    console.log("Impar");
}