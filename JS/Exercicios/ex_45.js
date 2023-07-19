let podio = 1
let mensagem

switch(podio){
case 1:
    mensagem="Brazil"
    break
case 2:
    mensagem="Angola"
    break
case 3:
    mensagem="portugal"
    break
    default:
        mensagem=error
}
console.log(`O País que esta na posiçao ${podio} é o ${mensagem}`);