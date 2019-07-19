function calcular() {

    let numero1 = document.getElementById('valor1').value;
    numero1 = validacampo(numero1, 'menssagem1', 'Campo 1 deve ser Número');

    let numero2 = document.getElementById('valor2').value;
    numero2 = validacampo(numero2, 'menssagem2', 'Campo 2 deve ser Número');

    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function validacampo(valor, id, menssagem) {
    document.getElementById(id).innerHTML = '';
    if (ehNumero(valor)) {
        return parseInt(valor);
    } else {
        document.getElementById(id).style.color = 'red';
        document.getElementById(id).innerHTML = menssagem;
    }
    return 0;
}