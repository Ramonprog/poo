class Lampada {
  private estado: boolean;
  private potencia: number;

  constructor(potencia: number) {
    this.potencia = potencia;
    this.estado = false;
  }

  ligar() {
    this.estado = true;
  }

  desligar() {
    this.estado = false;
  }

  verificarEstado(): boolean {
    return this.estado;
  }

  medirPotencia(): number {
    return this.potencia;
  }
}

const lampada = new Lampada(30);
console.log("verificando estado", lampada.verificarEstado());
console.log("ligando", lampada.ligar());
console.log("verificar potencia", lampada.medirPotencia());
