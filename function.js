var saludar = () => {
  var nombre = document.getElementById('saludo');
  var saludoContainer = document.getElementById('saludoContainer');
  saludoContainer.innerHTML = "Hola " + nombre.value + " gracias por visitarnos"
}

var areaPerimetro = () => {
  var radio = document.getElementById('radio')
  var areaPerimetroContainer = document.getElementById('areaPerimetroContainer')
  var resultadoArea, resultadoPerimetro, radioP
  radioP = parseInt(radio.value)
  resultadoPerimetro = (2 * (Math.PI) * radioP);
  resultadoArea = Math.PI * (Math.pow(radioP, 2));
  areaPerimetroContainer.innerHTML = "El Area es igual a: " + resultadoArea.toFixed(2) + " y el perimetro es igual a: "+ resultadoPerimetro.toFixed(2)
}

var obtenerPromedio = () => {
  var nota1 = document.getElementById('nota1')
  var nota1P = parseInt(nota1.value)
  var nota2 = document.getElementById('nota2')
  var nota2P = parseInt(nota2.value)
  var nota3 = document.getElementById('nota3')
  var nota3P = parseInt(nota3.value)
  var nota4 = document.getElementById('nota4')
  var nota4P = parseInt(nota4.value)
  var unidades = 4
  var promedioContainer = document.getElementById('promedioContainer')
  var resultadoPromedio = ((nota1P + nota2P + nota3P + nota4P) / unidades)
  promedioContainer.innerHTML = "El promedio de las notas ingresadas es: " + resultadoPromedio
}

var obtenerPulgafas = () => {
  var centimetros = document.getElementById('ingresoCentimetros')
  var cmtsToIn = parseInt(centimetros.value)
  var pulgadas = (cmtsToIn / 2.54)
  pulgadasContainer.innerHTML = "El valor ingresado es igual a " + pulgadas.toFixed(2) + " pulgadas"
}

var obtenerInverso = () => {
  var numberValue = document.getElementById('inversos')
  var numberOne = numberValue.value[0]
  var numberTwo = numberValue.value[1]
  var numberThree = numberValue.value[2]
  var containerInversos = document.getElementById('containerInversos')
  containerInversos.innerHTML = "El inverso del valor ingresado es " +numberThree+numberTwo+numberOne
}

var obtenerHipotenusa = () => {
  var catetoA = document.getElementById('catetoA')
  var CA = parseInt(catetoA.value)
  var catetoB = document.getElementById('catetoB')
  var CB = parseInt(catetoB.value)
  var hipotenusaF = Math.sqrt(Math.pow(CA,2) + Math.pow(CB,2))
  var containerHipotenusa = document.getElementById('containerHipotenusa')
  containerHipotenusa.innerHTML = "El valor de la Hipotenusa es: " + hipotenusaF.toFixed(2)
}