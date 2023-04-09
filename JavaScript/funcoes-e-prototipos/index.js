import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Maria', 'm@m.com','2021-01-01')
console.log(novoUser.exibirInfos())

// novoUser.#nome = 'Bela'
// console.log(novoUser.nome)