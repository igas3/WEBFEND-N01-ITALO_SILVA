const nome = document.getElementById("nomeh")
const senha = document.getElementById("senhah")
const loginbtn = document.getElementById("loginbtn")
const singbtn = document.getElementById("singin")


const login = [
       {
            user: "italo",
            senha: "2fast4u"
        },
       {

            user: "senna",
            senha: "puntatacco"
        },
        {
            user:"pedro",
            senha:"123"
        }

    
]

loginbtn.addEventListener("click", () => {
    
    for (let i = 0; i < login.length; i++) {
        console.log(login[i]);
        if (nome.value.includes(login[i].user ) && (senha.value.includes(login[i].senha))) {
            console.log(nome.value.includes(login[i].user ));



            const nomeValor = nome.value
            const senhaValor = senha.value

            if (nomeValor !== "" && senhaValor !== "") {
                console.log("okay");
               {
                    

                        window.location.href = "search.html"
                   
                }
            } else {
                alert("seu login não pode estar vazio")
            }

        }
       else{
        setTimeout(() => { alert ("Senha ou login errado") }, 500)
       }
    }

})



