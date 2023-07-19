let n=5
let filme 
let classi

switch (n) {
    case 1 :
        filme="Toy Story"
        classi="Livre"
        
        break;
    case 2:
        filme="Harry Potter e a Pedra Filosofal"
        classi="10"
        break;
    case 3:
        filme="Piratas do Caribe: A Maldição do Pérola Negra"
        classi="12"
        break;
    case 4:
        filme="Jurassic Park"
        classi="14"
        break;
    case 5:
        filme="O Lobo de Wall Street"
        classi="18"
        break;   
     default:
        console.log("Erro");
        break;
}
console.log(`O seu filme é ${filme} e sua classificação é ${classi}`);