const prato = [pipoca = 10, macarrao = 8, carne = 15, feijao = 12, brigadeiro = 8, diferente = false]

function microondas(prato, tempo) {
    switch (prato, tempo) {
        case prato = prato: console.log("Prato pronto, bom apetite!!!")
            break;
        case (prato * 2): console.log("A comida queimou. " + " Prato pronto, bom apetite!!!")
            break;
        case (prato * 3): console.log("Kabumm " + " Prato pronto, bom apetite!!!")
            break;
        case (prato = undefined): console.log("Prato inexistente")
            break;
        default: console.log("Tempo insuficiente " + " Prato pronto, bom apetite!!!")
    }
}

microondas(feijao, 12)