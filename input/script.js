var inputNumero = document.getElementById("numero")

function verificaNumero(){
    var numero = parseFloat(inputNumero.value);

    if (numero > 0) {
        document.getElementById("resultado").textContent = "Número positivo";
    } else if (numero < 0) {
        document.getElementById("resultado").textContent = "Número negativo";
    } else {
        document.getElementById("resultado").textContent = "Número é zero";
    }
}