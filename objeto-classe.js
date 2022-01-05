// modo simplificado com objeto, sem usar a classe

const Livro1 = function(nome1, editora1, paginas1){
    gNome1 = nome1,
    gEditora1 = editora1,
    gPaginas1 = paginas1

    this.getNome = function(){  // criado metodo para interagir
        return gNome1
    }

    this.getEditora = function(){  // criado metodo para interagir
        return gEditora1
    }

    this.getPaginas = function(){  // criado metodo para interagir
        return gPaginas1
    }
}

const GraphQL = new Livro1("GraphQL", "Casa do Código", 143)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())

// com a classe
// alguns autores se referem para classe em Javascript como "Acucar Sintatico"
// uma das diferencas de classes em Javascript eh que elas nao sao icadas (hoisted)

class Livro2{
    constructor(nome2, editora2, paginas2){
        this.nome2 = nome2
        this.editora2 = editora2
        this.paginas2 = paginas2
    }

    anunciarTitulo(){  // criado metodo para interagir, mas na classe nao precisa de dizer que eh function
        console.log(`Título: ${this.nome2}`)
    }

    descreverTitulo(){  // criado metodo para interagir, mas na classe nao precisa de dizer que eh function
        console.log(`${this.nome2} é um livro da editora ${this.editora2} e tem ${this.paginas2} páginas.`)
    }
}

const NodeJS = new Livro2("Primeiros Passos com NodeJS", "Casa do Código", 145)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Livro2{
    constructor(nome2, nomeColecao){
        super(nome2)
        this.nomeColecao = nomeColecao
    }

    descreveColecao(){
        console.log(`O livro ${this.nome2} faz parte da coleção ${this.nomeColecao}.`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreveColecao()
NodeJS.anunciarTitulo()