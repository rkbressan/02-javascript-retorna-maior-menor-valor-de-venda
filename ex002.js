//Usei Prettier para formatação
function retornaMenorEMaiorValorDeVendas(vendasPorVendedor) {
  let listaDeTodasAsVendas = [];

  vendasPorVendedor.forEach((vendas) => {
    vendas.forEach((valorVenda) => {
      if ((valorVenda >= 20) & (valorVenda <= 500)) {
        listaDeTodasAsVendas.push(valorVenda);
      }
    });
  });

  const listaVendasOrdenadaAsc = pegarListaOrdenadaAsc(listaDeTodasAsVendas);

  let menorVenda = procurarMenorVenda(listaVendasOrdenadaAsc);
  let maiorVenda = procurarMaiorVenda(listaVendasOrdenadaAsc);

  return [menorVenda, maiorVenda];
}

function pegarListaOrdenadaAsc(lista) {
  return lista.sort((a, b) => (a > b ? -1 : 0));
}

function procurarMenorVenda(vendas) {
  let menorValor = 0;
  for (const venda of vendas) {
    if (!menorValor || menorValor > venda) {
      menorValor = venda;
    }
  }
  return menorValor;
}

function procurarMaiorVenda(vendas) {
  let maiorValor = 0;
  for (const venda of vendas) {
    if (!maiorValor || maiorValor < venda) {
      maiorValor = venda;
    }
  }
  return maiorValor;
}
//maior && menor valor dos produtos vendidos para cada vendedor
//o valor pode variar entre 20 e 500 reais
//estão agrupados por vendedores
//ignorar devoluções, de valor 0
//receber = uma lista de vendas agrupadas por vendedores
//retornar um array onde a primeira posição contém o menor valor e a segunda o maior
//prestar atenção algum vendedor pode não ter realizado vendas
//retornaMenorEMaiorValorDeVendas([[200,100],[300]]), [100,400]);

//Teste unitário (um código que você faz para executar um sistema automaticamente):
let assert = require("chai").assert;
describe("Retorna Menor E Maior Valor De Vendas", function () {
  it("Retorna O Menor E Maior Valor De Vendas", function () {
    assert.deepEqual(
      retornaMenorEMaiorValorDeVendas([[200, 100], [300]]),
      [100, 300]
    );
  });
  it("Retorna O Menor E Maior Valor De Vendas", function () {
    assert.deepEqual(
      retornaMenorEMaiorValorDeVendas([[200, 20], [300], [], [0, 500]]),
      [20, 500]
    );
  });
  it("Retorna O Menor E Maior Valor De Vendas", function () {
    assert.deepEqual(
      retornaMenorEMaiorValorDeVendas([
        [200, 20],
        [300, 10],
        [],
        [600],
        [0, 500],
      ]),
      [20, 500]
    );
  });
});
