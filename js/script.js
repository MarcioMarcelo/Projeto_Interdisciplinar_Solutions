function calcular() {
  // Obtendo os valores dos inputs e convertendo-os para números decimais
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);
  var c = parseFloat(document.getElementById("input-c").value);

  // Verificando se a é igual a zero, indicando uma equação de primeiro grau
  if (a === 0) {
    document.getElementById("result").innerHTML = "Esta é uma equação de primeiro grau";
  }
  // Verificando se b é igual a zero, indicando uma equação de segundo grau incompleta
  else if (b === 0) {
    document.getElementById("result").innerHTML = "Equação de segundo grau incompleta";
  }
  // Verificando se c é igual a zero, indicando uma equação de segundo grau incompleta
  else if (c === 0) {
    document.getElementById("result").innerHTML = "Equação de segundo grau incompleta";
  }
  else {
    // Calculando o valor de delta (delt)
    var delt = b * b - 4 * a * c;

    var x1, x2;

    // Verificando se delta (delt) é menor que zero, indicando que não há raízes reais
    if (delt < 0) {
      document.getElementById("result").innerHTML = "Ɇ 𝑅𝑎𝑖𝑧 𝑅𝑒𝑎𝑙";
    }
    // Verificando se delta (delt) é maior que zero, indicando duas raízes reais
    else if (delt > 0) {
      // Calculando as raízes usando a fórmula de Bhaskara
      x1 = (-b + Math.sqrt(delt)) / (2 * a);
      x2 = (-b - Math.sqrt(delt)) / (2 * a);
      // Exibindo as raízes com duas casas decimais
      document.getElementById("result").innerHTML = "As raízes são: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    }
    // Caso contrário, delta (delt) é igual a zero, indicando uma raiz real dupla
    else {
      // Calculando a raiz usando a fórmula de Bhaskara para delta igual a zero
      x1 = -b / (2 * a);
      // Exibindo a raiz com duas casas decimais
      document.getElementById("result").innerHTML = "A equação possui uma raiz dupla: x = " + x1.toFixed(2);
    }
  }
}