const nome = document.getElementById("nomeh")
const senha = document.getElementById("senhah")
const loginbtn = document.getElementById("loginbtn")
const singbtn = document.getElementById("singin")


const login = [
    {
        cliente_1: {
            user: "italo",
            senha: "2fast4u"
        },
        cliente_2: {

            user: "senna",
            senha: "puntatacco"
        }

    }
]

loginbtn.addEventListener("click", () => {

    for (let i = 0; i < login.length; i++) {
        console.log(login[i]);
        if (nome.value.includes(login[i])) {




            const nomeValor = nome.value
            const senhaValor = senha.value

            if (nomeValor !== "" && senhaValor !== "") {
                console.log("okay");
                if (login.user === nomeValor

                ) {
                    if (login.senha === senhaValor) {

                        window.location.href = "search.html"
                    }
                    else {
                        alert("Senha errada")
                    }
                }
                else {
                    alert("Senha ou Login Errado")
                }

            } else {
                alert("seu login não pode estar vazio")
            }

        }

    }

})



