// Lista de palavra
const marcas = ["Toyota", "Ford", "BMW", "Honda", "Chevrolet", "Audi", "Mercedes-Benz"
  , "Volkswagen", "Nissan", "Tesla", "Subaru", "Jaguar", "Land Rover", "Volvo", "Porsche", "Hyundai", "Kia", "Mazda", "Fiat", "Jeep"]


//Função para escolher uma palavra aleatoria
function palavras(array) {
  const aleat = Math.floor(Math.random() * array.length)
  return array[aleat]
}
const palavra=palavras(marcas)
console.log(palavra);
const tamanho=palavra.length

console.log(tamanho);
document.getElementById("conta") = tamanho

const vida = document.getElementById("numerovida")













let letrasuse = [];
let letranova = "";

//teclado
function handleKey(letter) {
  let letra = letter
  console.log(`Tecla pressionada: ${letra}`);
  letrasuse.push(letra);
  letranova += letra;
}

console.log(letranova);
console.log(letrasuse);

