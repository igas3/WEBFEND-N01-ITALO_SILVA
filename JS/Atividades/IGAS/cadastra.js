const 
    nomeCadastroinput = document.querySelector("#inputNomeCadastro"),//Pagina Cadastro
    dataNascimentoInput = document.querySelector("#inputDataNascimento"),//Pagina Cadastro
    emailInput = document.querySelector("#inputEmail"),//Pagina Cadastro
    senhaCadastroInput = document.querySelector("#inputSenhaCadastro"),//Pagina Cadastro
    confirmarSenhaInput = document.querySelector("#inputConfirmarSenha"),//Pagina Cadastro
    btnCadastrar = document.querySelector("#buttonCadastrarCadastro"),//Pagina Cadastro
    check=document.querySelector("#check")

const clientes = [
    {
        cliente_1: {
            nome: "italo",
            nascimento: "03032005",
            email: "iasilva1343@gmail.com",
            senha: "2fast4u"
        }
    }
]

btnCadastrar.addEventListener('click', () => {

    if (nomeCadastroinput.value !== ""  || dataNascimentoInput.value !== "" || emailInput.value !== ""  || senhaCadastroInput.value !== "" || confirmarSenhaInput.value !== "") {
     
        if (senhaCadastroInput.value ===  confirmarSenhaInput.value) {
            
            if (check.checked==true) {
                
                    clientes[0].nome = nomeCadastroinput.value;
                    clientes[0].nascimento = dataNascimentoInput.value;
                    clientes[0].email = emailInput.value;
                    clientes[0].senha = senhaCadastroInput.value;
                    console.log(clientes);
               
           }
            
           else{alert("aceite os termos")
        console.log("erro2");
        }}
        else {alert ("Senhas não coincidem")
    console.log("err1");
    }}
    else { alert("Preencha todos os campos")
    console.log("err0");
    }
}

    

)

