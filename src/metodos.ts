class CarroMetodos {
  cor2: string;
  modelo2: string;
  marca2: string;
  ano2: number;
  potencia2: number;
  ligado: boolean = false;
  aceleracao: number = 0;

  constructor(
    cor: string,
    modelo: string,
    marca: string,
    ano: number,
    potencia: number
  ) {
    this.cor2 = cor;
    this.modelo2 = modelo;
    this.ano2 = ano;
    this.marca2 = marca;
    this.potencia2 = potencia;
  }

  ligar() {
    if (!this.ligado) this.ligado = true;
    console.log("vrumm");
  }

  acelerar(rpm: number) {
    if (!this.ligado) return console.log("o carro esta desligado");
    this.aceleracao += rpm;
  }

  frear() {
    this.aceleracao = 0;
  }

  desligar() {
    this.aceleracao = 0;
    this.ligado = false;
  }

  estadoDoCarro(): string {
    if (this.ligado) {
      return "O carro está ligado";
    }
    return `O carro está desligado`;
  }
}

const fusca = new CarroMetodos("preto", "fusca", "volks", 1900, 90);
fusca.ligar();
fusca.acelerar(5000);

console.log(fusca, fusca.estadoDoCarro());
