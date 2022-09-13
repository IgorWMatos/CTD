// ex1

/*
function loopDePares(n) {
    for (let i = 1; i <= 100; i++) {
        if ( (i + n) % 2 === 0 ) {
            console.log('Esse número ' + i + ' é par.' )
        }
    }
}
loopDePares(0); 
*/

function loopDeImpares(n, str) {
    str = 'é impar.';
    for (let i = 1; i <= 100; i++) {
        if ((i + n) % 2 !== 0) {
            console.log('Esse número ' + i + str)
        }
    }
}
loopDeImpares(0, str); 