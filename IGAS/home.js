const nome = document.getElementById("nomeh")
const senha = document.getElementById("senhah")
const loginbtn = document.getElementById("loginbtn")


const login = {
    user: "italo",
    senha: "2fast4u"
}

loginbtn.addEventListener("click", () => {
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


})



