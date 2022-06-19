function Converter() {
  // Variáveis
  var valorTemperatura = parseFloat(
    document.getElementById("temperatura").value
  );
  var temperatura1 = document.getElementById("temperatura1").options[
    document.getElementById("temperatura1").selectedIndex
  ].value;
  var temperatura2 = document.getElementById("temperatura2").options[
    document.getElementById("temperatura2").selectedIndex
  ].value;
  var temperaturaConvertida;

  //Convertendo a temperatura

  switch (temperatura1) {
    case "Celsius":
      if (temperatura2 == "Celsius") {
        temperaturaConvertida = valorTemperatura;
      } else if (temperatura2 == "Fahrenheit") {
        temperaturaConvertida = valorTemperatura * 1.8 + 32;
      } else if (temperatura2 == "Kelvin") {
        temperaturaConvertida = valorTemperatura + 273.15;
      }
      break;
    case "Fahrenheit":
      if (temperatura2 == "Celsius") {
        temperaturaConvertida = (valorTemperatura - 32) / 1.8;
      } else if (temperatura2 == "Fahrenheit") {
        temperaturaConvertida = valorTemperatura;
      } else if (temperatura2 == "Kelvin") {
        temperaturaConvertida = (valorTemperatura + 459.67) / 1.8;
      }
      break;
    case "Kelvin":
      if (temperatura2 == "Celsius") {
        temperaturaConvertida = valorTemperatura - 273.15;
      } else if (temperatura2 == "Fahrenheit") {
        temperaturaConvertida = valorTemperatura * 1.8 - 459.67;
      } else if (temperatura2 == "Kelvin") {
        temperaturaConvertida = valorTemperatura;
      }
      break;
    default:
  }
  var temperaturaConvertidaArredondada = temperaturaConvertida.toFixed(1);

  //Enviando para o HTML
  document.getElementById("valorConvertido").innerHTML =
    temperaturaConvertidaArredondada + " grau " + temperatura2;
}

function Limpar() {
  document.getElementById("temperatura").value = "";
  document.getElementById("temperatura1").value = "unidade";
  document.getElementById("temperatura2").value = "unidade";
  document.getElementById("valorConvertido").innerHTML = "";
}