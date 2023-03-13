import { readFileSync } from "fs";

let faturamento;

try {
    faturamento = JSON.parse(readFileSync("./dados.json"));
} catch(error) {
    console.error(error.message);
    process.exit(1);
}

// Levei em consideração apenas os dias COM FATURAMENTO para o cálculo de MENOR FATURAMENTO
// Levei em consideração apenas os dias COM FATURAMENTO para o cálculo de MAIOR FATURAMENTO
// Levando em consideração que os exemplos dados de dia SEM FATURAMENTO são finais de semana e feriados
const diasComFaturamento = faturamento.filter((a) => a.valor > 0).sort((a, b) => a.valor - b.valor);

const lastIndex = diasComFaturamento.length - 1;
const maiorFaturamento = diasComFaturamento[lastIndex];
const menorFaturamento = diasComFaturamento[0];
const mediaFaturamento = diasComFaturamento.reduce((a, b) => a += (b.valor / diasComFaturamento.length), 0);
const maiorQueMediaFaturamento = diasComFaturamento.filter((a) => a.valor > mediaFaturamento).length;

console.log({
    maiorFaturamento,
    menorFaturamento,
    maiorQueMediaFaturamento
});