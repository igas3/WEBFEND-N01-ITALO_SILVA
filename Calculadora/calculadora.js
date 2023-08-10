const botao1 = document.getElementsByClassName('botao__1');
const checkbox = document.querySelector('.theme')
const disp = document.getElementById('disp')
const resetar = document.getElementById("reset")
const htmlTema = document.getElementById('tema'),
theme2 = document.querySelector('.theme__2')

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
function backspace(lg) {
   disp.value= disp.value.substring(0, disp.value.length - 1);
}


checkbox.addEventListener('change', function(){

    if(this.checked==true) {
        htmlTema.classList.add('theme__2')
        htmlTema.classList.remove('theme__1')
    }

    if(this.checked == false) {
        htmlTema.classList.add('theme__1')
        htmlTema.classList.remove('theme__2')
    }

})











