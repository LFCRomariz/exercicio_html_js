function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (campoB > campoA) {
        alert("Formulário válido! Número B é maior que o número A.");
        return true;
    } else {
        alert("Formulário inválido! Número B deve ser maior que o número A.");
        return false;
    }
}