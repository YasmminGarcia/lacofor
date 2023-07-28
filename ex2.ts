const abobora = require("readline-sync");
let media = 0;

for(let i = 0; i < 5; i++){
    let valor = parseFloat(abobora.question('Digite a nota: '));
    media = media + valor;
}

console.log(media/5)