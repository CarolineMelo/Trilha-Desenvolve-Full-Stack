export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }
}

// const novoUser = new User('Carol', 'carol@gmail.com', '1980-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())