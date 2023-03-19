//Spread Operator permite espalhar as informações de um array de objetos em um outro array. 


// const clientes = [
//     {
//       nome: "André",
//       cpf: "12312312312",
//       dependentes: [{
//         nome: "Sara",
//         parentesco: "filha",
//         dataNasc: "20/03/2011"
//        },
//        {
//         nome: "Samia",
//         parentesco: "filha",
//         dataNasc: "04/01/2014"
//        }],
//     },
//     {
//       nome: "Juliana",
//       cpf: "56767867867",
//       dependentes: [{
//         nome: "Sophia",
//         parentesco: "filha",
//         dataNasc: "30/08/2020"
//        }],
//     }
//    ]


// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
// console.table(listaDependentes)










// const catalogo = {
//   "editora": "Casa do Código",
//   "catalogo": [
//   {
//     "id": 50,
//     "titulo": "Primeiros Passos com NodeJS",
//     "autor": "João Rubens",
//     "categoria": "programação",
//     "versoes": ["ebook", "impresso"]
//   }
//  ]}
//  console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

















// this, bind(), apply() e call()
// const pessoa = {
//   nome: "Ana",
//   email: "a@email.com",
//   imprimeNome: function(){
//     console.log(`${pessoa.nome}`)
//   }
//  }
 
//  pessoa.imprimeNome() //Ana

//  const pessoa = {
//   nome: "Ana",
//   email: "a@email.com",
//   imprimeNome: function(){
//     console.log(`${this.nome}`)
//   }
//  }
 
//  pessoa.imprimeNome() //Ana
 

function imprimeNomeEmail(){
  console.log(`nome: ${this.nome}, email ${this.email}`)
}
const pessoa1 = {
  nome: "Ana",
  email: "a@email.com",
  imprimeInfo: imprimeNomeEmail
 }
 
 const pessoa2 = {
  nome: "Paula",
  email: "p@email.com",
  imprimeInfo: imprimeNomeEmail
 }
 
 pessoa1.imprimeInfo()
 //nome: Ana, email a@email.com
 pessoa2.imprimeInfo()
 //nome: Paula, email p@email.com