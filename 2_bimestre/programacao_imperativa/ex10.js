const alice = [48, 84, 32];
const bob = [49, 83, 34];

function ganhador(comedian1, comedian2) {
    let pontuacaoAlice = 0;
    let pontuacaoBob = 0;
    for (index = 0; index < comedian1.length; index++) {
        if (comedian1[index] > comedian2[index]) { pontuacaoAlice++ }
        else if (comedian1[index] < comedian2[index]) { pontuacaoBob++ }
        else {
            comedian1 = comedian1;
            comedian2 = comedian2;
        }
    }
    if (comedian1 > comedian2) {
        primeiroColocado = 'Comediante 1 ganhou';
    }
    else if (comedian1 < comedian2) {
        primeiroColocado = 'Comediante 2 ganhou';
    } else {
        primeiroColocado = 'Empate.'
    }
    return console.log('Pontuação da Alice = ' + pontuacaoAlice, 'Pontuação do Bob = '+ pontuacaoBob+' ... '+primeiroColocado);
};

ganhador(alice, bob);