let dia = 3 ;

let mensagem
switch(dia){
    case 1:
    case 7:
    mensagem="Fim de Semana B)"
    break;

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        mensagem= "Dia util"
    break;
    default: 
    mensagem="Error"
    break
}

console.log(mensagem);