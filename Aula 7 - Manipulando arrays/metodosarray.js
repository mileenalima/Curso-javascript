const listaDeConvidados = ["Matheus", "Gustavo", "Viviane", "Vitor"];

// Push / Pop / Shift / Unshift / includes




listaDeConvidados.pop(); // remove o último item do array 


listaDeConvidados.push("Leonardo"); // adiciona no final do array 
listaDeConvidados.unshift("Milena");// adiciona como primeiro item do array 

listaDeConvidados.shift();// remover o primeiro item da lista 


console.log(listaDeConvidados);

console.log("Viviane está na lista? ", listaDeConvidados.includes("Viviane"));