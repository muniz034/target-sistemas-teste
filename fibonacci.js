import { createInterface } from "readline";
import util from "util";

const readline = createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(readline.question).bind(readline);

const number = parseInt(await question("Insira um número: "));
readline.close();

if(isNaN(number)) {
    console.error(`O valor inserido não é um número, finalizando processo...`);
    process.exit(1);
}

let previous = 0;
let current = 0;

while(number != current && number > current){
    let temp = current;
    current += (current == 0) ? 1 : previous;
    previous = temp;
}

const isEqual = current == number;

console.log(isEqual ? `O número ${number} está contido na sequencia de Fibonacci` : `O número ${number} NÃO está contido na sequencia de Fibonacci`);