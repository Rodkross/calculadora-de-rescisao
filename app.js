function calcular() {

    
    // declaração das variáveis
    var salarioBase = parseFloat(document.getElementById("salbase").value);
    var diasTrabalhados = parseFloat(document.getElementById("diastrab").value);
    var avosDecimoTerceiro = parseFloat(document.getElementById("avos13").value);
    var avosFerias = parseFloat(document.getElementById("avosferias").value);
    var resultadoFerias = parseFloat(document.getElementById("resultado-ferias").value);
    var quantidadeFeriasvencidas = parseFloat(document.getElementById("quantidade-ferias-vencida").value);
    var resultadoFeriasVencida = parseFloat(document.getElementById("resultado-ferias-vencida").value);
    var resultadoSalarioFamilia = parseFloat(document.getElementById("resultado-salario-familia").value);
    var quantidadeFilhos = parseFloat(document.getElementById("quantidade-de-filhos").value);
    var salarioFamiliaValor = 59.82
    var anosTrabalhados = parseFloat(document.getElementById("quantidade-anos-trabalhados").value);
    var resultado12506 = parseFloat(document.getElementById("resultado-12506").value);
    var resultadoTotalBruto = parseFloat(document.getElementById("resultado-total-bruto").value);


    //DIAS TRABALHADOS
    // cálculo
    var resultadiDiasTrabalhados = (salarioBase / 30) * diasTrabalhados;

    //arredondar o resultado em duas casas decimais
    resultadiDiasTrabalhados = resultadiDiasTrabalhados.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-dias-trabalhados").value = parseFloat(resultadiDiasTrabalhados);
    //------------------------------------------------------------------------------------


    //DECIMO TERCEIRO
    // cálculo
    var resultadoDecimoTerceiro = (salarioBase / 12) * avosDecimoTerceiro;
    
    //arredondar o resultado em duas casas decimais
    resultadoDecimoTerceiro = resultadoDecimoTerceiro.toFixed(2);
    
    //atribuir o resultado no campo de saída
    document.getElementById("resultado-13").value = parseFloat(resultadoDecimoTerceiro); 
    //------------------------------------------------------------------------------------


    // FÉRIAS
    // cálculo
    var resultadoFerias = (salarioBase / 12) * avosFerias;

    //arredondar o resultado em duas casas decimais
    resultadoFerias = resultadoFerias.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-ferias").value = parseFloat(resultadoFerias); 
    //------------------------------------------------------------------------------------


    //FÉRIAS VENCIDAS  
    // cálculo
    var resultadoFeriasVencida = salarioBase * quantidadeFeriasvencidas;

    //arredondar o resultado em duas casas decimais
    resultadoFeriasVencida = resultadoFeriasVencida.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-ferias-vencida").value = parseFloat(resultadoFeriasVencida); 
    //------------------------------------------------------------------------------------



    // TERÇO FÉRIAS
    // cálculo
    var resultadoTercoFerias = (parseFloat(resultadoFerias) + parseFloat(resultadoFeriasVencida)) / 3;

    //arredondar o resultado em duas casas decimais
    resultadoTercoFerias = parseFloat(resultadoTercoFerias.toFixed(2));

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-terc-ferias").value = parseFloat(resultadoTercoFerias);
    //------------------------------------------------------------------------------------


    //SALÁRIO FAMÍLIA  
    // cálculo
    var resultadoSalarioFamilia = ((parseFloat(salarioFamiliaValor) / 30) * parseFloat(diasTrabalhados)) * parseFloat(quantidadeFilhos);

    //arredondar o resultado em duas casas decimais
    resultadoSalarioFamilia = resultadoSalarioFamilia.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-salario-familia").value = parseFloat(resultadoSalarioFamilia); 
    //------------------------------------------------------------------------------------


    //LEI 12.506 
    // cálculo
    var resultado12506 =  (parseFloat(salarioBase) / 30) * (parseFloat(anosTrabalhados) * 3);

    //arredondar o resultado em duas casas decimais
    resultado12506 = resultado12506.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-12506").value = parseFloat(resultado12506); 
    //------------------------------------------------------------------------------------


    //TOTAL BRUTO
    // cálculo
    var resultadoTotalBruto =  parseFloat(resultadiDiasTrabalhados) + parseFloat(resultadoDecimoTerceiro) + parseFloat(resultadoFerias) + parseFloat(resultadoTercoFerias) + parseFloat(resultadoFeriasVencida) + parseFloat(resultadoSalarioFamilia) + parseFloat(resultado12506);

    //arredondar o resultado em duas casas decimais
    resultadoTotalBruto = resultadoTotalBruto.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-total-bruto").value = parseFloat(resultadoTotalBruto); 
    //------------------------------------------------------------------------------------


}




    


