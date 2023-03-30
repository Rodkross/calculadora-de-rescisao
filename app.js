function calcular() {

    
    // declaração das variáveis
    var salarioBase = parseFloat(document.getElementById("salbase").value);
    var diasTrabalhados = parseFloat(document.getElementById("diastrab").value);
    var avosDecimoTerceiro = parseFloat(document.getElementById("avos13").value);
    var avosFerias = parseFloat(document.getElementById("avosferias").value);
    var resultadoFerias = parseFloat(document.getElementById("resultado-ferias").value);
    var quantidadeFeriasvencidas = parseFloat(document.getElementById("quantidade-ferias-vencida").value);
    var resultadoFeriasVencida = parseFloat(document.getElementById("resultado-ferias-vencida").value);
    


    //DIAS TRABALHADOS
    // cálculo
    var resultadiDiasTrabalhados = (salarioBase / 30) * diasTrabalhados;

    //arredondar o resultado em duas casas decimais
    resultadiDiasTrabalhados = resultadiDiasTrabalhados.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-dias-trabalhados").value = resultadiDiasTrabalhados;
    //------------------------------------------------------------------------------------


    //DECIMO TERCEIRO
    // cálculo
    var resultadoDecimoTerceiro = (salarioBase / 12) * avosDecimoTerceiro;
    
    //arredondar o resultado em duas casas decimais
    resultadoDecimoTerceiro = resultadoDecimoTerceiro.toFixed(2);
    
    //atribuir o resultado no campo de saída
    document.getElementById("resultado-13").value = resultadoDecimoTerceiro; 
    //------------------------------------------------------------------------------------


    // FÉRIAS
    // cálculo
    var resultadoFerias = (salarioBase / 12) * avosFerias;

    //arredondar o resultado em duas casas decimais
    resultadoFerias = resultadoFerias.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-ferias").value = resultadoFerias; 
    //------------------------------------------------------------------------------------


    //FÉRIAS VENCIDAS  
    // cálculo
    var resultadoFeriasVencida = salarioBase * quantidadeFeriasvencidas;

    //arredondar o resultado em duas casas decimais
    resultadoFeriasVencida = resultadoFeriasVencida.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-ferias-vencida").value = resultadoFeriasVencida; 



    // TERÇO FÉRIAS
    // cálculo
    var resultadoTercoFerias = (resultadoFerias + resultadoFeriasVencida) / 3;

    //arredondar o resultado em duas casas decimais
    resultadoTercoFerias = resultadoTercoFerias.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-terc-ferias").value = resultadoTercoFerias;
    //------------------------------------------------------------------------------------




}




    


