class Pessoa {
  private nome: string;
  private idade: number;
  private nomePai: string;
  private nomeMae: string;

  constructor(nome: string, idade: number, nomePai: string, nomeMae: string) {
    this.nome = nome;
    this.idade = idade;
    this.nomePai = nomePai;
    this.nomeMae = nomeMae;
  }

  verificarIrmandade(pessoa: Pessoa): boolean {
    return this.nomePai === pessoa.nomePai || this.nomeMae === pessoa.nomeMae;
  }

  verificarMaisVelho(pessoa: Pessoa): boolean {
    return this.idade > pessoa.idade;
  }
}

const pessoaRamon = new Pessoa("ramon", 27, "josi", "alci");
const pessoaisys = new Pessoa("isys", 25, "natal", "cris");

console.log(pessoaRamon.verificarIrmandade(pessoaisys));
console.log(pessoaRamon.verificarMaisVelho(pessoaisys));
