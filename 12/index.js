const montante=9000;
const capitalInicial=6000;
const numeroDeMeses=24;


const taxaDeJuros = ((montante/capitalInicial)**(1/numeroDeMeses)-1)*100  ;


console.log(`O seu financiamento ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(2)} %, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`);
