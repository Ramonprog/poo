type Produto = {
  descricao: string;
  valor: number;
  quantidade: number;
};

class Fatura {
  private cliente: string;
  private transacoes: Produto[];

  constructor(cliente: string) {
    this.cliente = cliente;
    this.transacoes = [];
  }

  registrarTransacao(produto: Produto) {
    this.transacoes.push(produto);
  }

  fecharFatura(): string {
    let fatura = `Cliente: ${this.cliente}\n\n `;
    let total = 0;

    for (const produto of this.transacoes) {
      total += produto.valor * produto.quantidade;
      fatura += `${produto.quantidade} - ${produto.descricao} (${
        produto.valor
      }) = ${produto.quantidade * produto.valor}\n`;
    }

    fatura += `\n totao: ${total}`;
    return fatura;
  }
}

const faturaRamon = new Fatura("Ramon");

faturaRamon.registrarTransacao({
  descricao: "camisa bonita",
  quantidade: 2,
  valor: 120,
});

faturaRamon.registrarTransacao({
  descricao: "camisa rosa",
  quantidade: 3,
  valor: 100,
});

console.log(faturaRamon.fecharFatura());
