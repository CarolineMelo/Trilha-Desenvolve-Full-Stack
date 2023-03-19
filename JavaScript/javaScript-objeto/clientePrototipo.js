function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
   }
   const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
}
const carol = new ClientePoupanca("Caroline", "12345678945", "caroline@gmail.com",100,200)

ClientePoupanca.prototype.depositarPoupanca = function(valor){
    this.saldoPoupanca +=valor
}

console.log(andre.hasOwnProperty("saldoPoupanca"))
console.log(carol.hasOwnProperty("saldoPoupanca"))
console.log(andre instanceof Cliente)
console.log(carol instanceof ClientePoupanca)

console.log(typeof andre)
console.log(typeof carol)


console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)













