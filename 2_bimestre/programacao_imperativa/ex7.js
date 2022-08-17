// function podeSubir(altura, acompanhada) {

//     if(altura >= 1.40 && altura < 2) {
//         return true
//     } else if (altura > 1.2 && altura < 1.4 && acompanhada == true) { 
//         return true
//     } else {
//         return false
//     }
// }

// PARTE 2 //

function podeSubir(altura, acompanhada) {


    if (altura >= 1.40 && altura < 2) {
        return console.log("Pode subir sem acompanhante")
    } else if (altura > 1.2 && altura < 1.4 && acompanhada == true) {
        return console.log("Pode subir com acompanhante")
    } else if (altura > 1.2 && altura < 1.4 && acompanhada == false) {
        return console.log("Deve estar acompanhada")
    } else {
        return console.log("Não pode subir mesmo acompanhada")
    }
}

podeSubir(1.16, false)