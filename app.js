function diasTrabalhados() {
    // para obter os dados de entrada
    var valor1 = parseFloat(document.getElementById("salbase").value);
    var valor2 = parseFloat(document.getElementById("diastrab").value);

    // para calcular o resultado
    var resultadosal = (valor1 / 30) * valor2;

    //arredondar o resultado em duas casas decimais
    resultadosal = resultadosal.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-dias-trabalhados").value = resultadosal;

}

function dectercproporcional() {
    // para obter os dados de entrada
    var valor1 = parseFloat(document.getElementById("salbase").value);
    var valor2 = parseFloat(document.getElementById("avos13").value);

    // para calcular o resultado
    var resultadodec = (valor1 / 12) * valor2;

    //arredondar o resultado em duas casas decimais
    resultadodec = resultadodec.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-13").value = resultadodec; 

}

function ferias() {
    // para obter os dados de entrada
    var valor1 = parseFloat(document.getElementById("salbase").value);
    var valor2 = parseFloat(document.getElementById("avosferias").value);

    // para calcular o resultado
    var resultadoferias = (valor1 / 12) * valor2;

    //arredondar o resultado em duas casas decimais
    resultadoferias = resultadoferias.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-ferias").value = resultadoferias; 

}

function tercferias() {
    // para obter os dados de entrada
    var valor1 = parseFloat(document.getElementById("resultado-ferias").value);
    

    // para calcular o resultado
    var resultadotercferias = valor1 / 3;

    //arredondar o resultado em duas casas decimais
    resultadotercferias = resultadotercferias.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-terc-ferias").value = resultadotercferias; 

}
