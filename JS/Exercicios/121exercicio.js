const valor1input = document.getElementById("valor1"),
    valor2input = document.getElementById("valor2"),
    botaoinput = document.getElementById("btn1"),
    resultad = document.getElementById("resultad"),
    operacao = document.getElementById("operacao"),
    resetar = document.getElementById("reset")




botaoinput.addEventListener("click", () => {
    const valor1 = Number(valor1input.value),
        valor2 = Number(valor2input.value)

    if (operacao.value == "soma") {
        resultad.value = valor1 + valor2

    }
    else if (operacao.value == "subt") {
        resultad.value = valor1 - valor2
    }
    else if (operacao.value == "mult") {
        resultad.value = valor1 * valor2

    }
    else if (operacao.value == "divi") {
        resultad.value = valor1 / valor2

    }


    
})
resetar.addEventListener("click", () => {
    valor1input.value =""
    valor2input.value =""
    resultad.value =""
})

console.log(resultad);