function saludo(){
  let nombre = document.getElementById('nombre')
  let saludo = document.getElementById('saludo')
  saludo.innerHTML = `Hola ${nombre.value}`
}

function area(){
  let radio = document.getElementById('radio')
  let r = parseInt(radio.value)
  let areayPerimetro = document.getElementById('areayPerimetro')
  let area = (Math.PI * (r**2)).toFixed(2)
  let perimetro = (r * (Math.PI * 2)).toFixed(2)
  areayPerimetro.innerHTML = `El área es: ${area} y el perimetro es ${perimetro}`
}

function promedio(){
  let n1 = document.getElementById('n1')
  n1 = parseInt(n1.value)
  let n2 = document.getElementById('n2')
  n2 = parseInt(n2.value)
  let n3 = document.getElementById('n3')
  n3 = parseInt(n3.value)
  let n4 = document.getElementById('n4')
  n4 = parseInt(n4.value)
  let promedioF = (n1 + n2 + n3 + n4) / 4
  let mostrarPromedio = document.getElementById('mostrarPromedio')
  mostrarPromedio.innerHTML = `El promedio de las cuatro notas es: ${promedioF}`
}

function longitud() {
  let cm = document.getElementById('cm')
  cm = parseInt(cm.value)
  let longitud = document.getElementById('longitud')
  let cmToInch = (cm / 2.54).toFixed(2)
  longitud.innerHTML = `La longitud es ${cmToInch} Pulgadas`
}

function mostrarInverso() {
  let original = document.getElementById('original').value
  let mostrarInverso = document.getElementById('mostrarInverso')
  mostrarInverso.innerHTML = `El inverso del número es: ${original.charAt(2)}${original.charAt(1)}${original.charAt(0)}`
}