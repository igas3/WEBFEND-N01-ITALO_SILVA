// Lista de palavra
const marcas = ["Toyota", "Ford", "BMW", "Honda", "Chevrolet", "Audi", "Mercedes-Benz"
  , "Volkswagen", "Nissan", "Tesla", "Subaru", "Jaguar", "Land Rover", "Volvo", "Porsche", "Hyundai", "Kia", "Mazda", "Fiat", "Jeep"]


//Função para escolher uma palavra aleatoria
function palavras(array) {
  const aleat = Math.floor(Math.random() * array.length)
  return array[aleat]
}

//  Tamanho e Palvra
const palavra=palavras(marcas)
console.log(palavra);
const tamanho=palavra.length
console.log(tamanho); 

// fatiar palavra
const myText = palavra.toUpperCase()

for (var i = 0; i < myText.length; i++) {
  console.log(myText[i]);
}






// vida
const vida = document.getElementById("numerovida")


//letras usadas
let letrasuse = [];
console.log(letrasuse);
let letra ="";



//teclado
function handleKey(letter) {
  console.log(`Tecla pressionada: ${letter}`);
  letrasuse.push(letter);
  
  if (myText.includes(letter)) {
    console.log(`tem ${letter} na ${i+1}`);
    
  }
  else {
    console.log(`não tem`);
    vida=vida-1
  }
}


 















