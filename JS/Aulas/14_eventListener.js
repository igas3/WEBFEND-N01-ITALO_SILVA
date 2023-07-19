const valor1Input = document.getElementById("valor1"),
    valor2Input = document.getElementById("valor2"),
    calcula = document.getElementById("btnsSomar"),
    resultado = document.getElementById("resultado");

    // function somar() {
    //     const valor1 = Number(valor1Input.value),
    //         valor2 = Number(valor2Input.value);
    //     resultado.innerHTML= valor1 + valor2;
    // }

    calcula.addEventListener("click" , () => {
        const valor1=Number(valor1Input.value)
        const valor2=Number(valor2Input.value)
        resultado.innerHTML = valor1 + valor2

    })