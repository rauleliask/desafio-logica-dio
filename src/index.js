// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita ao usuário o nome dele e armazena na variável nome
let nome = prompt("Digite o nome do seu herói: ");
let xp = parseInt(prompt("Digite o xp do seu herói: "));

//Estrutura de descisão do nível
let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

//Saída
console.log("O Herói de nome " + nome + " está no nível de " + nivel);