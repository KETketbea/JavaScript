let avaliacao = "e"
// A - ÓTIMO
// B - BOM 
// C - REGULAR
// D - RUIM
// E - PÉSSIMO

switch (avaliacao.toUpperCase()) {
    case "A":
        console.log("avaliação ótima!");
        break;

    case "B":
        console.log("Avaliação Boa!");
        break;

    case "C":
        console.log("Avaliação Regular!");
        break;

    case "D":
        console.log("Avaliação Ruim!");
        break;

    case "E":
        console.log("Avaliação Péssima!");
        break;

    default: console.log("Não Avaliado.");

}

