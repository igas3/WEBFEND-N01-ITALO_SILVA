// // Lista de palavra
const marcas = [
  "Toyota",
  "Ford",
  "Honda",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Nissan",
  "Kia",
  "Hyundai",
  "Jaguar",
  "Land-Rover",
  "Porsche",
  "Tesla",
  "Subaru",
  "Mazda",
  "Ferrari",
  "Lamborghini",
  "Aston-Martin",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "Bugatti",
  "Mini",
  "Lexus",
  "GMC",
  "Jeep",
  "Dodge",
  "Chrysler",
  "Alfa-Romeo",
  "Fiat",
  "Peugeot",
  "Renault",
  "Volvo",
  "Skoda",
  "Saab",
  "Acura",
  "Infiniti",
  "Suzuki",
  "Citroën",
];






//Função para escolher uma palavra aleatoria
function palavras(array) {
  const aleat = Math.floor(Math.random() * array.length)
  return array[aleat]
}

//  Tamanho e Palvra
const palavra = palavras(marcas)
console.log(palavra);
let tamanho = palavra.length
if (palavra.includes('-')) {
  tamanho -= 1
}
console.log(tamanho);
document.getElementById("dica-input").value = `Dica: Numero de letras é ${tamanho}`



// fatiar palavra
// const myText = palavra.toUpperCase().replaceAll(/["Á","Â","Ã"]/g, "A")
const myText = palavra.toUpperCase().replaceAll(/["Ë","É" ,"Ê" ,"È" ,"Ð" ,"ð" ,"" ]/g, "E")
  .replaceAll(/["Á", "Â", "À", "Å", "Ã", "Ä", Æ ]/g, "A")
  .replaceAll(/["	Í", "Î", "Ì", "Ï"]/g, "I")
  .replaceAll(/["Ó", "Ô", "Ò","Ø","Õ","Õ"	]/g, "O")
  .replaceAll(/["	Ú", "Û",  "Ù", "Ü",]/g, "U")
const myTextArray = myText.split('')


var respostaArray = []

function showResposta() {
  var inputsHtml = ''
  for (var i = 0; i < myText.length; i++) {
    if (respostaArray[i]) {
      //printa a resposta
      inputsHtml += `${respostaArray[i]}`
    } else if (myText[i] == '-') {
      inputsHtml += `-`
    } else {
      inputsHtml += `_ `
    }
  }

  document.getElementById("resposta-text").innerHTML = inputsHtml

}


showResposta()
// vida
const vidainput = document.getElementById("numerovida")
var maxVida = 5
vidainput.value = maxVida
function calcVida() {
  maxVida -= 1
  vidainput.value = maxVida
}


//letras usadas
let letrasuse = [];
console.log(letrasuse);
let letra = "";



//teclado
function handleKey(letter) {
  console.log(`Tecla pressionada: ${letter}`);
  letrasuse.push(letter);

  if (myText.includes(letter)) {
    for (let i = 0; i < myText.length; i++) {
      const element = myText[i];
      if (element == letter) {
        respostaArray[i] = letter

      }

    }
    // console.log(`tem ${letter} na ${i+1}`);

  }
  else {
    // console.log(`não tem`);
    calcVida()
  }

  document.getElementById(letter).disabled = true;

  showResposta()
  setTimeout(() => { gameOver() }, 500)

}

// function resetaPagina() {
//   setTimeout(function () {

//     location.reload();
//   }, 500);
// }


function gameOver() {
  var gameOver = false
  if (maxVida === 0) {
    gameOver = true
    alert("Game Over")

  }
  else {
    const a = respostaArray.join("").replace("-", "")
    const b = myText.replace("-", "")
    console.log(a, b)
    if (a == b) {
      gameOver = true
      document.getElementById("resposta-text").innerHTML=palavra.toUpperCase()
      alert("Parabuains Você Ganhou")
    }
  }

  if (gameOver) {
    const buttons = document.getElementsByClassName("key")
    for (const button of buttons) {
      document.getElementById("resposta-text").innerHTML=palavra.toUpperCase()
      button.disabled = true;
    }
  }
}

console.log(document.getElementById("resposta-text"))
















