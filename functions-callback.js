const nomes = [`Ana`, `Ju`, `Leo`, `Paula`]

const idades = [20, 10, 11, 23]

const notas = [10, 9, 8, 7, 6]


nomes.forEach(ImprimeNomes)  // uma maneira eh posicionar a funcao em outro lugar do codigo, nesse caso usando o metodo foreach

function ImprimeNomes(nome) {
    console.log(nome)
}

idades.forEach(idade => {console.log(idade)})  // outra maneira eh usar arrows function, nesse caso usando o metodo foreach

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)  /* usando o metodo "map", arrows function, e if ternario pois
no exemplo proposto a nota nao pode passar de 10, usado primeiro "++" (incrementa) e depois retorna a "nota" */
console.log(notasAtualizadas)

// diferenca entre o "metodo foreach" para o "metodo map" eh de que nao tem retorno