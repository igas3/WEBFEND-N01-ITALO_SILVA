let n = 1
let fruta
let cor

switch (n) {
    case 1:
        fruta = "limao"
        cor = "verde"
        break;
    case 2:
        fruta = "laranja"
        cor = "laranja"
        break;
    case 3:
        fruta = "morango"
        cor = "vermelha"
        break;
    case 4:
        fruta = "maracuja"
        cor = "amarela"
        break;
    case 5:
        fruta = "mirtilo"
        cor = "azul"
        break;
    default:
        console.log("erro");
        break;
}
console.log(`Sua fruta é ${fruta} e a cor dela é ${cor}`);