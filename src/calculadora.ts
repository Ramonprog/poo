class Calculadora {
  private numeroA: number;
  private numeroB: number;

  constructor(numeroA: number, numeroB: number) {
    this.numeroA = numeroA;
    this.numeroB = numeroB;
  }

  somar(): number {
    return this.numeroA + this.numeroB;
  }

  subtrair(): number {
    return this.numeroA - this.numeroB;
  }

  multiplicar(): number {
    return this.numeroA * this.numeroB;
  }

  dividir(): number {
    return this.numeroA / this.numeroB;
  }
}

const calculadora = new Calculadora(3, 4);
console.log("soma ", calculadora.somar());
console.log("subitração ", calculadora.subtrair());
console.log("muiplicação ", calculadora.multiplicar());
console.log("divisão ", calculadora.dividir());
