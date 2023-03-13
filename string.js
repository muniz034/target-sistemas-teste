import { createInterface } from "readline";
import util from "util";

const readline = createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(readline.question).bind(readline);

const str = (await question("Insira uma string: ")).split("");

readline.close();

const lastIndex = str.length - 1;

for(let i = 0; i < str.length / 2; i++){
    let temp = str[lastIndex - i];
    str[lastIndex - i] = str[i];
    str[i] = temp;
}

console.log(str.join(""));