/* sugar syntaxe usa classes,  para deixar a codificacao orientada a objeto mais confortavel para quem vem da programacao orientada 
a objeto */

class Cliente {  // classe construtora, possui parametros e metodos
    constructor(nome,email,cpf,saldo){
     this.nome = nome  // parametro
     this.email = email  // parametro
     this.cpf = cpf  // parametro
     this.saldo = saldo  // parametro
    }
  
    depositar(valor){  // metodo
        this.saldo += valor
    }
  
    exibirSaldo(){  // metodo
        console.log(this.saldo)
    }
  }
  
  class ClientePoupanca extends Cliente{  // extencao da classe "Cliente", heranca
    constructor(nome,email,cpf,saldo,saldoPoupanca){  // parametros para nova classe
      super(nome,email,cpf,saldo)  // parametros da classe "Cliente"
      this.saldoPoupanca = saldoPoupanca  // parametro adicional para essa classe de heranca
    }
  
    depositarPoupanca(valor){  // metodo adicional para essa classe de heranca
      this.saldoPoupanca += valor
    }
  }
  
  const andre = new ClientePoupanca("Andre","a@email.com","2255887744",100,200)  // criacao do objeto "andre"
  
  console.log(andre)
  
  andre.depositar(50)
  andre.depositarPoupanca(50)
  
  console.log(andre)