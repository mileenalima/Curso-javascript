
const fichaDaMilena = {
    nome : "Milena",
    idade : 24,
    profissao : "programadora",
    temFilhos : false,
};
/*
console.log("Ficha da Milena: ", fichaDaMilena);

console.log("Nome: " + fichaDaMilena.nome);
*/
fichaDaMilena.carro = "Yaris";
/*
console.log("Ficha da Milena", fichaDaMilena); 
*/
delete fichaDaMilena.carro;

console.log("Ficha da Milena", fichaDaMilena); 