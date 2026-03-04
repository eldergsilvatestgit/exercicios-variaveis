 
const populacaoInicial = 1000;
const quantidadeTransmita = 4;
const tempoEmDias = 100;
const Infectados = (populacaoInicial * (quantidadeTransmita**(tempoEmDias/7) ));

console.log(Infectados);
