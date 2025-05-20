

const listaDeConvidados = ["Matheus", "Amanda", "Paula", "Ster"]; 

console.log("Bia fez aniversário e convidou: ",listaDeConvidados);
console.log("Quantos convidados? ", listaDeConvidados.length);


// 1. Matheus 
// 2. Amanda
// 3. Paula
// 4. Ster

console.log("Convidado número 1: ", listaDeConvidados[0]);
console.log("Convidado número 4: ", listaDeConvidados[3]);
console.log("Convidado número 4: ", listaDeConvidados[listaDeConvidados.length - 1]);
console.log("Convidado número 3:", listaDeConvidados[2]);


console.log("Amanda está em qual índice do nosso array? ", listaDeConvidados.indexOf("Amanda"));

console.log("Amanda está em qual número da lista? ", listaDeConvidados.indexOf("Amanda") + 1 );