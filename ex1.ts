const chocolate = require('readline-sync');

let numero: number = chocolate.question('Digite um numero positivo: ');

for (let i = 0; i <= numero; i = i+2){
    console.log(i);
}