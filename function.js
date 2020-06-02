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
  let x = serie.split(',')
  let caja = document.getElementById('sumaDeExtremos')
  console.log(serie.split(','))

  for (let i = 0; i < x.length; i++) {
     let suma = parseInt(x[0]) + parseInt(x[x.length-1])
     caja.innerHTML = `La suma de los extremos es ${suma}`
  } 
}

function determinarPar() {
  let number = document.getElementById('number')
  number = parseInt(number.value)
  let numberBox = document.getElementById('numberBox')
  let operacion = number % 2
  if(operacion === 0){
    numberBox.innerHTML = `El ${number} es un numero par`
  }else{
    numberBox.innerHTML = `El ${number} es un numero impar`
  }
}
function determinarBisiesto() {
  let anio = document.getElementById('anio')
  anio = parseInt(anio.value)
  let anioBox = document.getElementById('anioBox')
  let bi = anio % 4
  let biC = Math.ceil(anio / 100)
  biC = (biC % 4)
  let anotherBi = (anio % 100)
  if (anio <= 1582) {
    if (bi === 0 || anotherBi === 0) {
      anioBox.innerHTML = `${anio} fue un año bisiesto`
    }else{
      anioBox.innerHTML = `${anio} No fue un año bisiesto`
    }
  }else if(bi === 0 && biC === 0){
    anioBox.innerHTML = `${anio} es un año bisiesto`
  }else{
    anioBox.innerHTML = `${anio} No es un año bisiesto`
  }
}

function divisionExacta(){
  let dividendo = document.getElementById('dividendo')
  dividendo = parseInt(dividendo.value)
  let divisor = document.getElementById('divisor')
  divisor = parseInt(divisor.value)
  let divisionBox = document.getElementById('divisionBox')
  let modulo = dividendo % divisor
  let cocienteF = Math.floor(dividendo / divisor)
  if (modulo === 0) {
    divisionBox.innerHTML =`La división es exacta. Cociente ${cocienteF} residuo ${modulo}`
  }else{
    divisionBox.innerHTML =`La división no es exacta. Cociente ${cocienteF} residuo ${modulo}`
  }
}

function diferenciaPalabras(){
  let pWorld = document.getElementById('pWorld')
  let sWorld = document.getElementById('sWorld')
  let dp = document.getElementById('diferenciaPalabras')
  pNWorld = pWorld.textLength
  sNWorld = sWorld.textLength
  let letrasMas = pNWorld - sNWorld
  let letrasMenos = sNWorld - pNWorld
  if (pNWorld > sNWorld) {
    dp.innerHTML = `"${pWorld.value}" es mayor que "${sWorld.value}" tiene ${letrasMas} letras más`
  }if(pNWorld == sNWorld){
    dp.innerHTML = `"${pWorld.value}" es igual que "${sWorld.value}" tiene la misma cantidad de letras.`
  }else{
    dp.innerHTML = `"${sWorld.value}" es menor que "${pWorld.value}" tiene ${Math.abs(letrasMenos)} letras de menos`
  }
}

function muestraRango(){
  let firstN = document.getElementById('firstNumber') 
  firstN = parseInt(firstN.value)
  let secondN = document.getElementById('secondNumber') 
  secondN = parseInt(secondN.value)
  let compara = document.getElementById('comparaNumeros')
  if(secondN < firstN){
    compara.innerHTML = `El numero ${secondN} se encuentra en el rango, Gracias!`
  }else{
    compara.innerHTML = `El numero ${secondN} excede el límite permitido`
  }
}

function mostrarOrden(){
  let n1 = document.getElementById('orderF')
  n1 = parseInt(n1.value)
  let n2 = document.getElementById('orderS')
  n2 = parseInt(n2.value)
  let orden = document.getElementById('ordenados')
  let numbers=[n1, n2]
  
  orden.innerHTML = `El los valores ordenados son: ${numbers.sort()}`
}

function mostrarOrden2(){
  let order2F = document.getElementById('order2F')
  order2F = parseInt(order2F.value)
  let order2S = document.getElementById('order2S')
  order2S = parseInt(order2S.value)
  let order2T = document.getElementById('order2T')
  order2T = parseInt(order2T.value)
  let orden = document.getElementById('ordenados2')
  let numbers=[order2F, order2S, order2T]
  orden.innerHTML = `El los valores ordenados son: ${numbers.sort()}`
}
// Obtener caracter -- Pendiente de Resolver
document.addEventListener('keyup', determinarCaracter)
function determinarCaracter(ev){
  let caracter = document.getElementById('caracter')
  let caracterBox = document.getElementById('determinarCaracter')
  let teclas = {
      CERO: 96,
      CERO2: 48,
      UNO: 97,
      UNO2: 49,
      DOS: 98,
      DOS2: 50,
      TRES: 99, 
      TRES2: 51,
      CUATRO: 100,
      CUATRO2: 52,
      CINCO: 101, 
      CINCO2: 53,
      SEIS: 102,
      SEIS2: 54,
      SIETE: 103,
      SIETE2: 55,
      OCHO: 104,
      OCHO2: 56,
      NUEVE: 105,
      NUEVE2: 57,
  }
  let chartUP = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let chartLOW = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i = 0; i < 27; i++) {
    if (caracter.value === chartUP[i]) {
      debugger
      caracterBox.innerHTML = `Presionaste la letra ${caracter.value} en mayuscula`
    }if (caracter.value === chartLOW[i]) {
      debugger
      caracterBox.innerHTML = `Presionaste la letra ${caracter.value} en miniscula`
    } else {
      switch (ev.keyCode) {
        case teclas.CERO:
        case teclas.CERO2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.UNO:
        case teclas.UNO2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.DOS:
        case teclas.DOS2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.TRES:
        case teclas.TRES2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;  
        case teclas.CUATRO:
        case teclas.CUATRO2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.CINCO:
        case teclas.CINCO2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.SEIS:
        case teclas.SEIS2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.SIETE:
        case teclas.SIETE2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.OCHO:
        case teclas.OCHO2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        case teclas.NUEVE:
        case teclas.NUEVE2:
          caracterBox.innerHTML = `Presionaste el número ${caracter.value}`
          break;
        default:
          caracterBox.innerHTML = `La tecla presionada no es número ni letra`
          break;
      }
    }
  }
}

function suma(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 + cifra2}`
}
function resta(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 - cifra2}`
}
function multiplicacion(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 * cifra2}`
}
function division(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 / cifra2}`
}
function potencia(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 ** cifra2}`
}
function modulo(){
  let cifra1 = document.getElementById('cifra1')
  cifra1 = parseInt(cifra1.value)
  let cifra2 = document.getElementById('cifra2')
  cifra2 = parseInt(cifra2.value)
  let showAnswer = document.getElementById('showAnswer')
  showAnswer.innerHTML = `El resultado de la suma es ${cifra1 % cifra2}`
}
function calcularEdad() {
  let dia = document.getElementById('dateDia')
  dia = parseInt(dia.value)
  let mes = document.getElementById('dateMes')
  mes = parseInt(mes.value)
  let anio = document.getElementById('dateAnio')
  anio = parseInt(anio.value)
  let dateBox = document.getElementById('dateBox')
  let currectDate = new Date()
  dateBox.innerHTML = `Usted tiene: ${currectDate.getFullYear() - anio} años ${Math.abs((currectDate.getMonth()+1) - mes)} meses y ${Math.abs(currectDate.getDay() - dia)} días.`
}