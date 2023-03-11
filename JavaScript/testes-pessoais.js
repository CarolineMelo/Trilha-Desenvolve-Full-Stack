// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// const inputMinusculo = input.toLowerCase();

// console.log(cidade === inputMinusculo); // true

// const senha = "minhaSenha123"
// console.log(senha.length) // 13 caracteres



// const minhaVar = 1;
// const MinhaVar = "texto";
// const minhavar = "3";
// const MINHAVAR = 2;

// console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log("deu erro");
// console.error(new Error("deu erro"));

// a = []
// b = 20
// c = true 
// d = ''
// if (b === 20 && c != false && d === 0) {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// }

// if (d) {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// }

// if (b === '20') {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// }

// function comParametro(param) {
//     console.log(param)
// }
// comParametro()

// const arrayVazia = [];

// console.log(arrayVazia)
// console.log(arrayVazia.length)

// const nomes = ['Carol','Bia','Leite','Renata']

// const sala1 = nomes.slice(0,nomes.length/2)
// const sala2 = nomes.slice(nomes.length/2)
// console.log(`Alunos da sala 1: ${sala1}`)
// console.log(`Alunos da sala 2: ${sala2}`)

const listaDeChamada = ['Carol','Bia','Leite','Renata']
listaDeChamada.splice(1,0,'Princess','Lari')
console.log(`Lista de chamada: ${listaDeChamada}`)