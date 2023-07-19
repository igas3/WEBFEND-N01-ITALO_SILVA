let select = "3"
let rnumber
let mensage


rnumber = (Math.floor(Math.random() * 5 + 1))

const engine = select - rnumber



switch (engine) {
    case 0:
        mensage = "acertou"
        break;
    case -1: case -2: case -3: case -4:
        mensage = "o numero era maior"
        break;
    case 1: case 2: case 3: case 4:
        mensage = " o numero era menor"
        break;
    default:
        mensage = "erro"
        break;
}
console.log(mensage);
console.log(`o numero era ${rnumber} e você selecionou ${select}`);
