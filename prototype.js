function Cliente(nome,cpf,email,saldo){  // funcao construtora
    this.nome =nome
    this.cpf=cpf
    this.email =email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
  }
  
  const andre = new Cliente("Andre","55588844477711","ju@email.com",100)  // criando instancia cliente normal
  
  function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)  // funcao para herancas
  {
      Cliente.call(this,nome,cpf,email,saldo)  // aqui esta herdando os atributos do objeto construtor
      this.saldoPoup = saldoPoup  // aqui esta acrescentando o atributo saldo de poupanca (saldoPoup)
  }
  
  const ju = new ClientePoupanca("Ju","55588844477711","ju@email.com",100,200)  // criando instancia conta poupanca
  
  console.log(ju)  // imprimindo a conta poupanca da "Ju"
  
  ClientePoupanca.prototype.depositarPoup = function(valor){  /* atraves do prototype eh possivel criar uma funcao para adicional saldo
    em um atributo que nao existia no contrutor primario (saldoPoup) */
      this.saldoPoup += valor
  }
  
  ju.depositarPoup(30)
  
  console.log(ju.saldoPoup)
  console.log(andre.saldoPoup)  /* nao sera possivel mostrar o saldo da poupanca do Andre, pois nao existe o atributo "saldoPoup"
    em Andre */