const alunos = [`João`, `Juliana`, `Caio`, `Ana`]
const media = [10, 7, 9, 6]

let listaDeNotasDeAlunos = [alunos, media]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasDeAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasDeAlunos[0][indice] + `, sua média é: ` + listaDeNotasDeAlunos[1][indice]
    } else {
        return `O aluno não está cadastrado!`
    }
}

console.log(exibeNomeNota(`Caio`))