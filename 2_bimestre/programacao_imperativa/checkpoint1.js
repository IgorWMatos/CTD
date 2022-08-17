function Pipoca(tempo) {
    if (tempo >= 10 && tempo <= 19) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo >= 20 && tempo < 30) {
        console.log("A comida queimou...");
    } else if (tempo >= 30) {
        console.log("kabumm");
    } else {
        console.log("Tempo insuficiente.")
    }
}

function Macarrao(tempo) {
    if (tempo >= 8 && tempo <= 15) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo >= 16 && tempo < 23) {
        console.log("A comida queimou...");
    } else if (tempo >= 24) {
        console.log("kabumm");
    } else {
        console.log("Tempo insuficiente.")
    }
}

function Carne(tempo) {
    if (tempo >= 15 && tempo <= 29) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo >= 30 && tempo < 44) {
        console.log("A comida queimou...");
    } else if (tempo >= 45) {
        console.log("kabumm");
    } else {
        console.log("Tempo insuficiente.")
    }
}

function Feijao(tempo) {
    if (tempo >= 12 && tempo <= 23) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo >= 24 && tempo < 35) {
        console.log("A comida queimou...");
    } else if (tempo >= 36) {
        console.log("kabumm");
    } else {
        console.log("Tempo insuficiente.")
    }
}

function Brigadeiro(tempo) {
    if (tempo >= 8 && tempo <= 15) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo >= 16 && tempo < 23) {
        console.log("A comida queimou...");
    } else if (tempo >= 24) {
        console.log("kabumm");
    } else {
        console.log("Tempo insuficiente.")
    }
}

function microondas(name, tempo) {
    switch (name) {
        case Pipoca: Pipoca(tempo)
        break;
        case Macarrao: Macarrao(tempo)
        break;
        case Carne: Carne(tempo)
        break;
        case Feijao: Feijao(tempo)
        break;
        case Brigadeiro: Brigadeiro(tempo)
        break;
        default: console.log("Oops, prato inexistente.")
    }
}

    microondas(Feijao, 12)