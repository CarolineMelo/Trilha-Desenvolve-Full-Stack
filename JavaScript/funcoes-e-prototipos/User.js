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

    get nome () {
        return this.#nome
    }
    get email () {
        return this.#email
    }
    get nascimento () {
        return this.#nascimento
    }
    get role () {
        return this.#role
    }
    get ativo () {
        return this.#ativo
    }
    
    set nome(novoNome) {
        if (novoNome === ''){
            throw new Error('formato não válido')
        }  
        this.#nome = novoNome
    }
    set email(novoEmail) {
        this.#email = novoEmail
    }
    set nascimento(novaDataNascimento) {
        this.#nascimento = novaDataNascimento
    }
  

    exibirInfos(){
        return `${this.nome}, ${this.email},${this.nascimento},${this.role}, ${this.ativo}`
    }
}

// const novoUser = new User('Carol', 'carol@gmail.com', '1980-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())