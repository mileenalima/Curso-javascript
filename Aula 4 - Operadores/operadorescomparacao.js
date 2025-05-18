console.log("______________________________________");
const idadeBia = 24; 
const idadeMatheus = 25;

console.log("Bia é mais velha que Matheus? ", idadeBia > idadeMatheus);
console.log("Matheus é mais velho que Bia? ", idadeMatheus > idadeBia);


console.log("Bia é mais nova que Matheus? ", idadeBia < idadeMatheus);
console.log("Bia tem idade igual OU menor que a idade de Matheus? ", idadeBia <= idadeMatheus);


const maioridade = 18;

console.log("Bia é maior de idade? ", idadeBia >= maioridade);

const x = 10;
const y = 20;
const z = "10";
console.log("o número " + x + " é igual ao número: " + y, x === y); // operador de igualdade estrita 

console.log("o número " + x + " é igual ao número: " + z, x == z); // operador de igualdade frouxo 


console.log("O número " + x + " é diferente do número " + y, x !== y);

console.log("O número " + x + " é diferente do número " + z, x !== z); // estrito de desigualdade 

console.log("O número " + x + " é diferente do número " + z, x != z); // frouxo de desigualdade 

// sempre optar pelos operadores ESTRITOS ao falar de igualdade e desigualdade 