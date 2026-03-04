const capital = 1000;
const tempo = 5;
const taxa = 0.125; // 12,5% em decimal

const montante = capital * ((1 + taxa) ** tempo);

console.log(montante.toFixed(2));