let receberPedidos = (pedidos) => {
  let ordenarPedidosDosVendedores = [];
  for (vendedores in pedidos) {
    let filtrarPedidos = [];
    for (vendedoresPedidos in pedidos[vendedores]) {
      if (pedidos[vendedores][vendedoresPedidos] != 0) {
        filtrarPedidos.push(pedidos[vendedores][vendedoresPedidos]);
      }
    }
    if (filtrarPedidos.lenght != 0) {
      filtrarPedidos.sort(function (a, b) {
        return a - b;
      });
      ordenarPedidosDosVendedores.push(filtrarPedidos);
    }
  }
  return ordenarPedidosDosVendedores;
};

const pedidos = [
  [100, 200],
  [0, 0],
  [500, 150],
];

let resultado = receberPedidos(pedidos);

console.log(resultado);
