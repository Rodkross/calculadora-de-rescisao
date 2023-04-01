function calcular() {

    
    // declaração das variáveis
    var salarioBase = parseFloat(document.getElementById("salbase").value);
    var diasTrabalhados = parseFloat(document.getElementById("diastrab").value);
    var avosDecimoTerceiro = parseFloat(document.getElementById("avos13").value);
    var avosFerias = parseFloat(document.getElementById("avosferias").value);
    var quantidadeFeriasvencidas = parseFloat(document.getElementById("quantidade-ferias-vencida").value);
    var quantidadeFilhos = parseFloat(document.getElementById("quantidade-de-filhos").value);
    var salarioFamiliaValor = 59.82
    var anosTrabalhados = parseFloat(document.getElementById("quantidade-anos-trabalhados").value);
    var valorAdiantamento = parseFloat(document.getElementById("adiantamento").value);
    var valorErroDeCaixa = parseFloat(document.getElementById("erros-de-caixas").value);
    var valorVale = parseFloat(document.getElementById("vale").value);
    var aliquotaValeTransporte = parseFloat(document.getElementById("aliquotaValeTransporte").value);
    var aliquotaInss = parseFloat(document.getElementById("aliquotaInss").value);
    var aliquotaInss13 = parseFloat(document.getElementById("aliquotaInss13").value);
    var diasRestantesMulta = parseFloat(document.getElementById("quantidade-dias-restantes").value); 

    

    // Vencimentos-------------


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
    //-------------------------------------------------------------------


    // Descontos ------------------


    //ADIANTAMENTOS
    // cálculo
   
    //arredondar o resultado em duas casas decimais
    valorAdiantamento = valorAdiantamento.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("adiantamento").value = parseFloat(valorAdiantamento); 
    //------------------------------------------------------------------------------------



    //ERROS DE CAIXA
    // cálculo
   
    //arredondar o resultado em duas casas decimais
    valorErroDeCaixa = valorErroDeCaixa.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("erros-de-caixas").value = parseFloat(valorErroDeCaixa); 
    //------------------------------------------------------------------------------------



    //VALES 
    // cálculo
   
    //arredondar o resultado em duas casas decimais
    valorVale = valorVale.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("vale").value = parseFloat(valorVale); 
    //------------------------------------------------------------------------------------



    //VALES TRANSPORTE 
    // cálculo
    var resultadoValeTransporte =  (parseFloat(aliquotaValeTransporte) / 100) * parseFloat(resultadiDiasTrabalhados);
    //arredondar o resultado em duas casas decimais
    resultadoValeTransporte = resultadoValeTransporte.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("desconto-vale-transporte").value = parseFloat(resultadoValeTransporte); 
    //------------------------------------------------------------------------------------


    //PREVIDENCIA SOCIAL
    // cálculo
    var resultadoInss =  (parseFloat(aliquotaInss) * parseFloat(resultadiDiasTrabalhados)) /100 ;
    //arredondar o resultado em duas casas decimais
    resultadoInss = resultadoInss.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-inss").value = parseFloat(resultadoInss); 
    //------------------------------------------------------------------------------------



    //INSS 13
    // cálculo
    var resultadoInss13 =  (parseFloat(aliquotaInss13) * parseFloat(resultadoDecimoTerceiro)) /100 ;
    //arredondar o resultado em duas casas decimais
    resultadoInss13 = resultadoInss13.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-inss-13").value = parseFloat(resultadoInss13); 
    //------------------------------------------------------------------------------------


    //MULTA TERMINO DE CONTRATO ANTECIPADO
    // cálculo
    var resultadoMultaTermino = (parseFloat(salarioBase) / 30) * parseFloat(diasRestantesMulta) / 2;
    //arredondar o resultado em duas casas decimais
    resultadoMultaTermino = resultadoMultaTermino.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-dias-restantes").value = parseFloat(resultadoMultaTermino); 
    //------------------------------------------------------------------------------------




    //TOTAL BRUTO
    // cálculo
    var resultadoTotalBruto =  parseFloat(resultadiDiasTrabalhados) + parseFloat(resultadoDecimoTerceiro) + parseFloat(resultadoFerias) + parseFloat(resultadoTercoFerias) + parseFloat(resultadoFeriasVencida) + parseFloat(resultadoSalarioFamilia) + parseFloat(resultado12506) - parseFloat(valorAdiantamento) - parseFloat(valorErroDeCaixa) - parseFloat(valorVale) - parseFloat(resultadoValeTransporte) - parseFloat(resultadoInss) - parseFloat(resultadoInss13);

    //arredondar o resultado em duas casas decimais
    resultadoTotalBruto = resultadoTotalBruto.toFixed(2);

    //atribuir o resultado no campo de saída
    document.getElementById("resultado-total-bruto").value = parseFloat(resultadoTotalBruto); 
    //------------------------------------------------------------------------------------


}




    


