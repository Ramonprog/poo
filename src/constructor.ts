class Pessoa {
  nome: string
  idade: number

  constructor (nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

}

//obs: o metódo construtor auxilia na construção de um obj
// por padrao esse atributo é publico

const ramon = new Pessoa('Ramon',27)
const joao = new Pessoa('joao',17)
const maria = new Pessoa('maria',23)

class Pessoa2 {
  constructor (public nome: string, public idade: number) {

  }
}

//sintaxe reduzida, colocamos o public para dizer que o acesso é publico
//se nao colocar o public fica como privador e não tem como acessar  