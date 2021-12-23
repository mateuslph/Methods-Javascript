const cliente = {
    nome : `Andre`,
    idade : 36,
    cpf : `123.456.789-01`,
    email : `email.email@email.com`,
    fones : [`+55(55)91212-1212`, `+55(55)92525-2525`], /* para esse caso de telefone, nao eh cabivel acrescentar as chaves
    no objeto "fone1", "fone2", porque nao se sabe quantos telefones a pessoa pode ter */
    dependentes : [{
        nome : `Samia`,
        parentesco : `filha`,
        dataNasc : `20/01/2010`
    }],
    saldo : 100,
    depositar : function(valor) {
        this.saldo += valor
    }
}

console.log(`Meu nome é: ${cliente.nome}, e minha idade é: ${cliente.idade} anos.`)
console.log(`Meu CPF é, ${cliente.cpf.substring(0,3)}.xxx.xxx-xx`)  // exibe a partir da casa "0", "3" caracteres

const chave = [`nome`, `idade`, `cpf`, `email`]  // eh atribuido uma posicao em array para cada chave do objeto
console.log(`O nome é: ` + cliente[chave[0]] + `.`)  // localisado determinada chave pela atribuicao anterior

chave.forEach(info => console.log(cliente[info]))  // percorre o objeto de linha a linha, e exibe na tela

cliente.fones.forEach(fone => console.log(fone))  // percorre a chave fone, e exibe na tela

// o comando a seguir adiciona objetos a outro
cliente.dependentes.push({
    nome : `Vitória`,
    parentesco : `filha`,
    dataNasc : `20/01/2010`
})

cliente.dependentes.push({
    nome : `Ademar`,
    parentesco : `filho`,
    dataNasc : `10/07/2000`
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === `20/01/2010`)  /* filtra os dependentes
incluindo em um array chamado "filhaMaisNova" todos os resultados obtidos separados em indices, lembrando que filter eh um metodo
de array */
console.log(filhaMaisNova[0].nome)  /* no array "filhaMaisNova" sendo o "[0]" o numero com a restricao de ser o "nome" a ser 
mostrado na tela */

console.log(`Saldo inicial:  ${cliente.saldo}`)
cliente.depositar(30)
console.log(`Saldo atual: ${cliente.saldo}`)