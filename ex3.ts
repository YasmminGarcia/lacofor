const strogonoff= require("readline-sync");

let mult : number = strogonoff.question("Digite um numero: ");

for(let i = 0; i <= 10 ;i++)
{
    console.log( i * mult);
}