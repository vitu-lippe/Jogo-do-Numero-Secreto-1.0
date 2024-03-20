alert('Boas vindas ao jogo do número secreto!!!');
let facil = 1
let medio = 2
let dificil = 3
EscolhaDificuldade = prompt('Escolha a dificuldae do jogo. 1 para fácil, 2 para médio e 3 para difícil')
let dificuldade = 1
if (EscolhaDificuldade == 1) {
    dificuldade = 10
} else {
    if ( EscolhaDificuldade == 2) {
        dificuldade = 50
    } else {
        dificuldade = 100
    }
}

let NumeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log(`Número Secreto = ${NumeroSecreto}`);
let chute; 
let tentativas = 1;


// ENQUANO O CHUTE FOR DIFERENTE DO NÚMERO SECRETO
while( chute != NumeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${dificuldade}.`);
    console.log('chute =', chute);

    // NESTA ESTA ESTAMOS DIZENDO AO JOGADOR SE ELE ACERTOU OU NÃO O NÚMERO
    if (chute == NumeroSecreto) {
        break;
    } else {
        if (chute < NumeroSecreto ) {
            alert( `O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    //tentativas = tentativas + 1
    tentativas++;
}

// NESTA ESTA ESTAMOS DIZENDO AO JOGADOR SE ELE ACERTOU OU NÃO O NÚMERO
let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai!! Você acertou o número secreto ${NumeroSecreto} com ${tentativas} ${PalavraTentativa}.`);

//if (tentativas == 1) {
//    alert(`Isso ai!! Você acertou o número secreto ${NumeroSecreto} com ${tentativas} tentativa.`);
//} else {
//    alert(`Isso ai!! Você acertou o número secreto ${NumeroSecreto} com ${tentativas} tentativas.`);
//}
