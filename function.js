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

function obtenerHipotenusa() {
  let a = document.getElementById('catA')
  a = parseInt(a.value)
  let b = document.getElementById('catB')
  b = parseInt(b.value)
  let c = Math.sqrt((a**2)+(b**2)).toFixed(2)
  let hipotenusa = document.getElementById('hipotenusa')
  hipotenusa.innerHTML = `El valor de la hipitenusa es ${c}`
}

function horaFutura() {
  let boxHoraActual = document.getElementById('horaActual')
  let hActual = new Date()
  boxHoraActual.innerHTML = `Actualmente son las: ${(hActual.getHours())}Hrs.`
  let cantidadH = document.getElementById('cantidadHoras')
  cantidadH = parseInt(cantidadH.value)
  let horaFutura = document.getElementById('horaFutura')
  if (cantidadH <= 23) {
    horaFutura.innerHTML = `En ${cantidadH} horas serán las: ${(hActual.getHours()) + cantidadH}`
  }else{
    let operacion = (cantidadH % 12) + (hActual.getHours())
    horaFutura.innerHTML = `En ${cantidadH} horas serán las: ${operacion}Hrs.`
  }
}

function Decimal() {
  let mostrarDecimal = document.getElementById('mostrarDecimal')
  let valorADecimal = document.getElementById('valorADecimal')
  valorADecimal = Number(valorADecimal.value)
  let entero = Math.trunc(valorADecimal)
  let decimal = Number((valorADecimal - entero).toFixed(2))
  mostrarDecimal.innerHTML = `El valor decimal es: ${decimal}`
}

function obtenerC3() {
  let c1 = document.getElementById('c1')
  c1 = Number(c1.value)
  let c2 = document.getElementById('c2')
  c2 = Number(c2.value)
  let l1 = document.getElementById('l1')
  l1 = Number(l1.value)
  let c3 = document.getElementById('c3')
  let r1 = ((c1 + c2 ) * 70) / 300
  let r2 = r1 + ((l1 * 30) / 100)
  let need = Math.ceil((r2 * 100) / 60)

  if (r2 >= 60) {
    c3.innerHTML = `Puedes estar tranquilo cualquier resultado te permite aprobar`
  }else{
    c3.innerHTML = `Necesitas una nota minima de ${need} para aprobar con el mínimo`
  }
}

function sumaDeExtremos() {
  let serie = document.getElementById('serie')
  serie = serie.value
  let caja = document.getElementById('sumaDeExtremos')
  for (let i = 0; i < serie.length; i++) {
     let suma = (serie[0]) + (serie[serie.length - 1])
     caja.innerHTML = `La suma de los extremos es ${suma}`
  }
}