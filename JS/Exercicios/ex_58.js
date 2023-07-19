let n1 = 5;
let rnumber;

rnumber = (Math.floor(Math.random() * 9 + 1));

while(n1!=rnumber){
    
    console.log("Errou");
    console.log(`Numero escolhido ${n1} , numero sorteado ${rnumber}`);
    rnumber = (Math.floor(Math.random() * 9 + 1));
}

console.log(`Fim, Numero sorteado foi ${rnumber}  `);