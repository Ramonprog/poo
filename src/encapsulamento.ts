class Pessoa3 {
  private nome: string;
  private idade: number;
  private velocidade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  andar() {
    this.velocidade++;
  }

  public get getIdade(): number {
    return this.idade;
  }

  public set setIdade(idade: number) {
    this.idade += idade;
  }
}

//nem tudo dentro da classe tem que ser público, por isso privamos
// usamos o private em vez de public
//só quem tem acesso ao atributo privado é a própria class

//metodos set e get, get pega e set altera algo dentro da classe

//obs: nao posso passar isys.setIdade(40) como um método, apenas atribuo um
//valor isys.setIdade = 40

//caso não passe o get em vez de acessar como propriedade isys.get idade, tem que acessar como método, isys.getIdade()

const isys = new Pessoa3("isys", 25);
isys.getIdade;
