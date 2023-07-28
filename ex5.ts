const salada = require("readline-sync");

let numerosDigitados:number[] = [];
let media:number = 0


for(let i = 1; i < 10;i++) {
  let queijo = parseFloat(salada.question("Digite o numero: " ));
  numerosDigitados.push(queijo);

  media = media + queijo;
  
}

console.log(media/10)
console.log(Math.max(...numerosDigitados))
console.log(Math.min(...numerosDigitados))