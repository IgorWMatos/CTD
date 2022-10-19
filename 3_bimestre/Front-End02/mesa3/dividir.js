let dividir = (a, b) => { 
    if (a && b !== 0) {
        return a / b;
    } else {
        return 'Não se pode dividir por zero.';
    }
 };

 console.log(dividir(20, 0));

module.exports = dividir;