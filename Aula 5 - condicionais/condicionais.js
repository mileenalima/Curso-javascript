
const idadeMaria = 16;
const maiorIdade = 18;

if (idadeMaria >= 18){
    console.log("Maria pode dirigir? ");
}else{
    const anosFaltantes = maiorIdade - idadeMaria;
    console.log("Maria Não pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir`);
}

// operadores ternários 

idadeMaria >= maiorIdade ? console.log("Maria pode dirigir") : console.log("Maria não pode dirigir");

console.log("___________________________________");

const idadePessoa = 28;

// 0 a 12 anos -> infância 
// 13 a 17 anos -> adolescência 
// 18 a 25 anos -> jovem adulto 
// 26 a 60 anos -> adulto 
// mais que 60 anos -> idoso 

if (idadePessoa >= 0 && idadePessoa <= 12){
    console.log("Infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17){
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25){
    console.log("Jovem adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 60){
    console.log("Adulto");
} else {
    console.log("Idoso");
}

const x = 20;

if(x % 2 === 0){
    console.log(`O número ${x} é par`);
}
if(x % 5 === 0){
    console.log(`O número ${x} é múltiplo de 5`);
}

console.log("_________________________________________");

const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana){
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1:
        nomeDoDia = "Segunda-feira";
    break;
    case 2:
        nomeDoDia = "Terça-feira";
    break;
    case 3:
        nomeDoDia = "Quarta-feira";
    break;
    case 4:
        nomeDoDia = "Quinta-feira";
    break;
    case 5:
        nomeDoDia = "Sexta-feira";
    break;
    case 6:
        nomeDoDia = "Sábado";
    break;
}

console.log("Dia da semana " + nomeDoDia);