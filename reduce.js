const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function MediaSala(notasDaSala) {
    const somaNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)  // "0" eh o inicio da contagem do loop
    return somaNotas/notasDaSala.length
}

console.log(`Média da sala de Javascript: ${MediaSala(salaJS)}`)
console.log(`Média da sala de Java: ${MediaSala(salaJava)}`)
console.log(`Média da sala de Python: ${MediaSala(salaPython)}`)