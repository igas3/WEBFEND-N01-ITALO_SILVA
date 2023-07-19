const botao1 = document.getElementsByClassName('botao__1');

const disp = document.getElementById('disp')
const resetar = document.getElementById("reset")
let conta
let num;

function adicionarum(num) {
    
    disp.value+=num
    
}
// funçao de adicionar

function reset(resetar) {
    disp.value =""
}

// reset


function calc() {
    disp.value=eval (disp.value)
}
function backspace(lgfgf) {
   disp.value= disp.substring(0, disp.length - 1);
}


// function igual(cont) { 

//      let conta= disp.value.split(' ')
//     ;
//     console.log(conta);



// }











