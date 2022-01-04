// aqui tem varias formas de usar o "destructuring", que eh as reticencias (...)

// essa eh uma forma
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

// essa eh outra forma
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(num1, num2, outrosNumeros)

// essa eh outra forma
const pessoa = {
    nome : `Ju`,
    idade : 25
}
const pessoaComTelefone = {...pessoa, telefone : `(32)92356-5656`}
console.log(pessoaComTelefone)
const {idade} = pessoa
console.log(idade)