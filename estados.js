const estados = [
    { uf: "SP", valor: 67836.43 },
    { uf: "RJ", valor: 36678.66 },
    { uf: "MG", valor: 29229.88 },
    { uf: "ES", valor: 27165.48 },
    { uf: "OUTROS", valor: 19849.53 }
];

const valorTotal = estados.reduce((a, b) => a += b.valor, 0);

estados.forEach((a, index, array) => array[index].representacao = a.valor / valorTotal);

console.log(estados);